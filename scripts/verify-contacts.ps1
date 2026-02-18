Write-Host "Verifying No Hardcoded Contact Details..." -ForegroundColor Cyan
Write-Host ""

$errors = 0

# Check for placeholder numbers
Write-Host "1. Checking for placeholder phone numbers..." -ForegroundColor Yellow
$found = Get-ChildItem -Recurse -Include *.ts,*.tsx,*.js,*.jsx | 
    Where-Object { $_.FullName -notmatch 'node_modules|\.next|brand\.ts|\.json' } |
    Select-String -Pattern '212600000000' -SimpleMatch
if ($found) {
    Write-Host "  FAIL: Found placeholder numbers" -ForegroundColor Red
    $found | ForEach-Object { Write-Host "     $($_.Path):$($_.LineNumber)" -ForegroundColor Red }
    $errors++
} else {
    Write-Host "  PASS: No placeholder numbers" -ForegroundColor Green
}

# Check for hardcoded emails (outside brand config)
Write-Host "2. Checking for hardcoded emails..." -ForegroundColor Yellow
$found = Get-ChildItem -Recurse -Include *.ts,*.tsx,*.js,*.jsx | 
    Where-Object { $_.FullName -notmatch 'node_modules|\.next|brand\.ts|\.json' } |
    Select-String -Pattern 'contact@studyfrontier.com' -SimpleMatch |
    Where-Object { $_.Line -notmatch 'primary:|mailtoLink:' }
if ($found) {
    Write-Host "  FAIL: Found hardcoded emails" -ForegroundColor Red
    $found | ForEach-Object { Write-Host "     $($_.Path):$($_.LineNumber)" -ForegroundColor Red }
    $errors++
} else {
    Write-Host "  PASS: No hardcoded emails" -ForegroundColor Green
}

Write-Host ""
if ($errors -eq 0) {
    Write-Host "SUCCESS: All contact info centralized!" -ForegroundColor Green
    Write-Host "Source: lib/config/brand.ts" -ForegroundColor Cyan
    exit 0
} else {
    Write-Host "FAILED: Found $errors issues" -ForegroundColor Red
    exit 1
}
