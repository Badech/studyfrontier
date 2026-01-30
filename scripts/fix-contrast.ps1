# PowerShell script to find and report all contrast issues
# Reports files that need manual review for text-gray-200 and text-white/ usage

Write-Host "🔍 Scanning for contrast issues in hero sections..." -ForegroundColor Cyan
Write-Host ""

$files = Get-ChildItem -Recurse -Path "app/[locale]" -Filter "*.tsx"
$issuesFound = 0
$filesWithIssues = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $hasIssue = $false
    
    # Check for problematic patterns
    if ($content -match "text-gray-200" -or $content -match "text-white/\d+") {
        $hasIssue = $true
        $issuesFound++
        $filesWithIssues += $file.FullName
        
        Write-Host "❌ $($file.Name)" -ForegroundColor Red
        
        # Find specific instances
        $lines = Get-Content $file.FullName
        for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i] -match "text-gray-200") {
                Write-Host "   Line $($i+1): text-gray-200 found" -ForegroundColor Yellow
            }
            if ($lines[$i] -match "text-white/\d+") {
                Write-Host "   Line $($i+1): text-white opacity found" -ForegroundColor Yellow
            }
        }
        Write-Host ""
    }
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "   Files scanned: $($files.Count)"
Write-Host "   Files with issues: $issuesFound"
Write-Host ""

if ($issuesFound -eq 0) {
    Write-Host "✅ No contrast issues found!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Please review and fix the files listed above" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Recommended fixes:" -ForegroundColor Cyan
    Write-Host "  • Replace 'text-gray-200' with style={{ color: 'hsl(var(--hero-text-secondary))' }}"
    Write-Host "  • Replace 'text-white/90' with 'hero-subheadline' class (auto-applies correct color)"
    Write-Host "  • Replace 'text-white/70' with style={{ color: 'hsl(var(--hero-text-muted))' }}"
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
