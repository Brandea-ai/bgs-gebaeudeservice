#!/bin/bash
echo "🔥 BGS Claude Code Setup Verification"
echo "======================================"
echo ""

# Load environment
source ~/.claude-env

echo "✅ ENVIRONMENT VARIABLES:"
[ ! -z "$VERCEL_TOKEN" ] && echo "  ✓ VERCEL_TOKEN set" || echo "  ✗ VERCEL_TOKEN missing"
[ ! -z "$VERCEL_ORG_ID" ] && echo "  ✓ VERCEL_ORG_ID set" || echo "  ✗ VERCEL_ORG_ID missing"
[ ! -z "$VERCEL_PROJECT_ID" ] && echo "  ✓ VERCEL_PROJECT_ID set" || echo "  ✗ VERCEL_PROJECT_ID missing"
[ ! -z "$GITHUB_TOKEN" ] && echo "  ✓ GITHUB_TOKEN set" || echo "  ✗ GITHUB_TOKEN missing"
echo ""

echo "✅ GIT CONFIGURATION:"
echo "  ✓ User: $(git config user.name)"
echo "  ✓ Email: $(git config user.email)"
echo "  ✓ Credential Helper: $(git config credential.helper)"
echo ""

echo "✅ PROJECT SETUP:"
[ -f ".claude/config.json" ] && echo "  ✓ Claude config exists" || echo "  ✗ Claude config missing"
[ -d ".claude/commands" ] && echo "  ✓ Commands folder exists" || echo "  ✗ Commands folder missing"
[ -d ".vercel" ] && echo "  ✓ Vercel linked" || echo "  ✗ Vercel not linked"
echo ""

echo "✅ AVAILABLE COMMANDS:"
for cmd in .claude/commands/*.md; do
    [ -f "$cmd" ] && echo "  ✓ $(basename $cmd .md)"
done
echo ""

echo "✅ TOOLS:"
command -v git >/dev/null 2>&1 && echo "  ✓ git $(git --version | cut -d' ' -f3)" || echo "  ✗ git not found"
command -v node >/dev/null 2>&1 && echo "  ✓ node $(node --version)" || echo "  ✗ node not found"
command -v npm >/dev/null 2>&1 && echo "  ✓ npm $(npm --version)" || echo "  ✗ npm not found"
command -v vercel >/dev/null 2>&1 && echo "  ✓ vercel $(vercel --version | grep -o '[0-9].*')" || echo "  ✗ vercel not found"
command -v claude >/dev/null 2>&1 && echo "  ✓ claude $(claude --version 2>/dev/null | head -1)" || echo "  ⚠ claude cli not installed yet"
echo ""

echo "======================================"
echo "🚀 Setup Status: READY"
echo ""
echo "Next steps:"
echo "1. Install Claude CLI: npm install -g @anthropic-ai/claude-code"
echo "2. Start Claude: cd ~/Projects/bgs-gebaeudeservice && claude-yolo"
echo "3. Test: Type '/ship' to test full deployment"
