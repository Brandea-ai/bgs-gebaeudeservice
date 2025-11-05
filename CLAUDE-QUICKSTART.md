# 🚀 Claude Code Quick Start

## Start Claude (Full Autonomy Mode)
\`\`\`bash
cd ~/Projects/bgs-gebaeudeservice
claude --dangerously-skip-permissions

# Oder mit Alias:
claude-yolo
\`\`\`

## Sofort loslegen - Beispiel Commands

### Test Git Push:
\`\`\`
Create a test file called test-claude.txt with 'Claude was here', commit it to a new branch test/claude-setup, and push it
\`\`\`

### Full Production Deployment:
\`\`\`
/ship
\`\`\`

### Quick Preview Deploy:
\`\`\`
/quick-deploy
\`\`\`

### Emergency Hotfix:
\`\`\`
/hotfix
\`\`\`

### Custom Tasks:
\`\`\`
Fix all TypeScript errors in the src folder, commit with message 'fix: typescript errors', push to main, and deploy to production
\`\`\`

\`\`\`
Add a new contact form component with email validation, create tests, commit to feature/contact-form, push, and deploy preview
\`\`\`

\`\`\`
Analyze the entire codebase and create a comprehensive report about code quality, potential bugs, and optimization opportunities
\`\`\`

## Was Claude jetzt kann (ALLES AUTOMATISCH):

✅ **Git Operations:**
- Create/edit files
- Commit with semantic messages
- Push to any branch
- Create PRs
- Resolve merge conflicts

✅ **Vercel Deployments:**
- Deploy to production
- Deploy to preview
- Manage environment variables
- Check deployment status

✅ **Development:**
- Fix bugs
- Write tests
- Refactor code
- Add features
- Code reviews

## Environment

Alle Tokens sind gesetzt:
- ✅ GitHub Token (git push/pull)
- ✅ Vercel Token (deployments)
- ✅ Project IDs (auto-linked)

## Troubleshooting

Falls etwas nicht funktioniert:
\`\`\`bash
cd ~/Projects/bgs-gebaeudeservice
./verify-setup.sh
\`\`\`

## Pro-Tips

1. **Multi-Agent Setup:** Öffne mehrere Terminal-Tabs für parallele Tasks
2. **Background Commands:** Claude kann long-running tasks im Hintergrund machen
3. **Git Worktrees:** Für mega paralleles Arbeiten an features
4. **Custom Commands:** Erweitere .claude/commands/ für wiederkehrende Tasks

---

**Setup erstellt von:** Claude (Ilir) für Brandea  
**Zeit:** ~10 Minuten  
**Status:** ✅ PRODUCTION READY
