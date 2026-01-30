# Audit Commands - Quick Reference

## 🚀 Run Full Audit

```bash
pnpm audit:full
```

**What it does**: Runs all quality checks and generates reports in `/reports/`

**Time**: ~2-3 minutes

**Reports**: 7 detailed reports + summary

---

## 📊 Tests Included

1. ✅ **TypeScript** - Type checking (critical)
2. ✅ **ESLint** - Code quality (critical)
3. 🕷️ **Crawl** - Link checking (warning)
4. ♿ **A11y** - Accessibility (warning)
5. 🎨 **Contrast** - Color contrast (warning)
6. 📱 **Mobile UX** - Mobile optimization (warning)
7. 🌍 **i18n** - Translation completeness (warning)

---

## 📁 Where Reports Go

```
reports/
├── latest/              # → Points to newest run
└── 2026-01-30T.../     # Timestamped directories
    ├── 00-SUMMARY.txt   # Start here!
    ├── 01-typecheck.txt
    ├── 02-lint.txt
    ├── 03-crawl.txt
    ├── 04-a11y.txt
    ├── 05-contrast.txt
    ├── 06-mobile-ux.txt
    └── 07-i18n-audit.txt
```

---

## 🎯 Quick Commands

```bash
# Full audit (2-3 min)
pnpm audit:full

# Quick check (10-20 sec)
pnpm audit:quick

# Individual tests
pnpm typecheck        # TypeScript only
pnpm lint            # ESLint only
pnpm test:crawl      # Crawl only
pnpm test:a11y       # A11y only
pnpm test:contrast   # Contrast only
pnpm test:mobile-ux  # Mobile UX only
pnpm i18n:audit      # i18n only
```

---

## 🔍 View Reports

```bash
# View summary
cat reports/latest/00-SUMMARY.txt

# View specific report
cat reports/latest/01-typecheck.txt

# List all runs
ls -la reports/
```

---

## ✅ Before Deploy

Always run:
```bash
pnpm audit:full && pnpm build
```

---

For full documentation, see: [AUDIT_COMMAND.md](./AUDIT_COMMAND.md)
