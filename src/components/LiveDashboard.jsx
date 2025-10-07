import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Users, DollarSign, Clock, Activity } from 'lucide-react'

const LiveDashboard = () => {
  const [liveData, setLiveData] = useState({
    activeProjects: 12,
    efficiency: 85.9,
    costSavings: 62677,
    uptime: 97.5
  })

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        activeProjects: prev.activeProjects + Math.floor(Math.random() * 3) - 1,
        efficiency: Math.min(100, Math.max(80, prev.efficiency + (Math.random() - 0.5) * 2)),
        costSavings: prev.costSavings + Math.floor(Math.random() * 1000),
        uptime: Math.min(100, Math.max(95, prev.uptime + (Math.random() - 0.5) * 0.5))
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const efficiencyData = [
    { month: 'Jan', actual: 75, target: 80 },
    { month: 'Feb', actual: 78, target: 80 },
    { month: 'Mar', actual: 82, target: 85 },
    { month: 'Apr', actual: 85, target: 85 },
    { month: 'Mai', actual: 87, target: 90 },
    { month: 'Jun', actual: 90, target: 90 }
  ]

  const maintenanceData = [
    { name: 'Preventiv', value: 65, color: '#10B981' },
    { name: 'Korrektiv', value: 25, color: '#F59E0B' },
    { name: 'Notfall', value: 10, color: '#EF4444' }
  ]

  const costSavingsData = [
    { month: 'Jan', savings: 12500 },
    { month: 'Feb', savings: 18200 },
    { month: 'Mar', savings: 25800 },
    { month: 'Apr', savings: 34500 },
    { month: 'Mai', savings: 45200 },
    { month: 'Jun', savings: 62677 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#0A2540]">KI Analytics Dashboard</h2>
          <p className="text-gray-600">Echtzeit-Metriken für Facility Management</p>
        </div>
        <Badge className="bg-[#10B981] text-white">
          <Activity className="w-3 h-3 mr-1 animate-pulse" />
          Live
        </Badge>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktive Projekte</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{liveData.activeProjects}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-[#10B981]">+12%</span> vom letzten Monat
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Effizienzrate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{liveData.efficiency.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-[#10B981]">+8%</span> von Baseline
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Kosteneinsparung</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">CHF {liveData.costSavings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-[#10B981]">+24%</span> YTD
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{liveData.uptime.toFixed(1)}%</div>
            <Badge className="mt-1 bg-[#10B981] text-white text-xs">Exzellent</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Efficiency Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Effizienz-Trend</CardTitle>
            <CardDescription>Monatliche Performance vs Ziel</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" domain={[70, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#00D4FF" strokeWidth={2} name="Ist-Wert" />
                <Line type="monotone" dataKey="target" stroke="#0A2540" strokeWidth={2} strokeDasharray="5 5" name="Ziel" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Maintenance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Wartungsverteilung</CardTitle>
            <CardDescription>Aufschlüsselung der Arbeitsaufträge</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={maintenanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {maintenanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cost Savings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Kumulative Kosteneinsparung</CardTitle>
            <CardDescription>KI-gestützte Optimierungsergebnisse</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={costSavingsData}>
                <defs>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip formatter={(value) => `CHF ${value.toLocaleString()}`} />
                <Area type="monotone" dataKey="savings" stroke="#00D4FF" fillOpacity={1} fill="url(#colorSavings)" name="Einsparung" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        <Activity className="inline-block w-4 h-4 mr-2 animate-pulse text-[#10B981]" />
        Live-Daten werden alle 3 Sekunden aktualisiert
      </div>
    </div>
  )
}

export default LiveDashboard
