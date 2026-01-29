# Full Audit Script for StudyFrontier (PowerShell)
# Runs all quality checks: typecheck, lint, crawl tests, and a11y tests

$ErrorActionPreference = "Continue"

Write-Host "🔍 Starting Full Audit..." -ForegroundColor Cyan
Write-Host ""

# Track results
$typecheckPass = $false
$lintPass = $false
$crawlPass = $false
$a11yPass = $false

# 1. TypeScript Check
Write-Host "📘 Running TypeScript type check..." -ForegroundColor Yellow
npm run typecheck
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ TypeScript check passed" -ForegroundColor Green
    $typecheckPass = $true
} else {
    Write-Host "✗ TypeScript check failed" -ForegroundColor Red
}
Write-Host ""

# 2. ESLint Check
Write-Host "🔧 Running ESLint..." -ForegroundColor Yellow
npm run lint
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Lint check passed" -ForegroundColor Green
    $lintPass = $true
} else {
    Write-Host "✗ Lint check failed" -ForegroundColor Red
}
Write-Host ""

# 3. Link Crawler Tests
Write-Host "🕷️  Running link crawler tests..." -ForegroundColor Yellow
npm run test:crawl
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Crawl tests passed" -ForegroundColor Green
    $crawlPass = $true
} else {
    Write-Host "✗ Crawl tests failed" -ForegroundColor Red
}
Write-Host ""

# 4. Accessibility Tests
Write-Host "♿ Running accessibility tests..." -ForegroundColor Yellow
npm run test:a11y
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Accessibility tests passed" -ForegroundColor Green
    $a11yPass = $true
} else {
    Write-Host "✗ Accessibility tests failed" -ForegroundColor Red
}
Write-Host ""

# Summary
Write-Host "═══════════════════════════════════" -ForegroundColor Cyan
Write-Host "📊 Audit Summary" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════" -ForegroundColor Cyan

$typecheckStatus = if ($typecheckPass) { "PASS" } else { "FAIL" }
$lintStatus = if ($lintPass) { "PASS" } else { "FAIL" }
$crawlStatus = if ($crawlPass) { "PASS" } else { "FAIL" }
$a11yStatus = if ($a11yPass) { "PASS" } else { "FAIL" }

Write-Host "TypeScript: $typecheckStatus" -ForegroundColor $(if ($typecheckPass) { "Green" } else { "Red" })
Write-Host "ESLint:     $lintStatus" -ForegroundColor $(if ($lintPass) { "Green" } else { "Red" })
Write-Host "Crawl:      $crawlStatus" -ForegroundColor $(if ($crawlPass) { "Green" } else { "Red" })
Write-Host "A11y:       $a11yStatus" -ForegroundColor $(if ($a11yPass) { "Green" } else { "Red" })
Write-Host "═══════════════════════════════════" -ForegroundColor Cyan

$totalPassed = @($typecheckPass, $lintPass, $crawlPass, $a11yPass | Where-Object { $_ }).Count

if ($totalPassed -eq 4) {
    Write-Host "🎉 All checks passed! (4/4)" -ForegroundColor Green
    exit 0
} else {
    Write-Host "⚠️  Some checks failed ($totalPassed/4 passed)" -ForegroundColor Yellow
    exit 1
}
