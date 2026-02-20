# 🧪 QA Test Guide - WhatsApp CTAs

## Quick Test Checklist

### ✅ Desktop Testing (Chrome/Edge/Firefox/Safari)

#### Test 1: Hero CTA
1. Go to: `http://localhost:3000/en`
2. Click the large WhatsApp button in hero section
3. **Expected:** Opens `https://wa.me/15716904684?text=...` in new tab
4. **Message should contain:** `Source: hero-cta`

#### Test 2: Contact Section
1. Scroll to "Get in Touch" section
2. Click WhatsApp button in the WhatsApp card
3. **Expected:** Opens WhatsApp with message
4. **Message should contain:** `Source: contact-section`

#### Test 3: Final CTA
1. Scroll to bottom "Not sure where to start?" section
2. Click the large WhatsApp button
3. **Expected:** Opens WhatsApp with message
4. **Message should contain:** `Source: final-cta`

#### Test 4: Footer Link
1. Scroll to footer
2. Click on the phone number `+1 571-690-4684`
3. **Expected:** Opens WhatsApp with message
4. **Message should contain:** `Source: footer`

#### Test 5: Floating Button
1. Look for green floating button (bottom right)
2. Click the floating WhatsApp button
3. **Expected:** Opens WhatsApp with message
4. **Message should contain:** `Source: floating-button`

#### Test 6: About Page
1. Go to: `http://localhost:3000/en/about`
2. Scroll to bottom CTA section
3. Click WhatsApp button
4. **Expected:** Opens WhatsApp with message
5. **Message should contain:** `Source: about-page-cta`

---

### ✅ Popup Blocker Test

#### Test 7: Fallback Modal
1. Enable popup blocker in browser settings
2. Click any WhatsApp CTA
3. **Expected:** Fallback modal appears with:
   - "Open WhatsApp" button (green)
   - "Copy Link" button
   - Full wa.me URL displayed
4. Click "Copy Link"
5. **Expected:** Button changes to "Link Copied!" with checkmark
6. Paste in notepad
7. **Expected:** Valid wa.me link with encoded message

---

### ✅ Mobile Testing (iOS Safari / Android Chrome)

#### Test 8: Mobile - Hero CTA
1. Open on mobile: `https://studyfrontier.com/en`
2. Tap large WhatsApp button in hero
3. **Expected:** 
   - Opens WhatsApp app (if installed)
   - OR Opens App Store/Play Store (if not installed)
4. **Verify:** Message pre-filled with source tracking

#### Test 9: Mobile - Floating Button
1. On mobile homepage
2. Tap green floating button (bottom right)
3. **Expected:** Opens WhatsApp app
4. **Message should contain:** `Source: floating-button`

#### Test 10: Mobile - Footer
1. Scroll to footer on mobile
2. Tap phone number
3. **Expected:** Opens WhatsApp app
4. **Message should contain:** `Source: footer`

---

### ✅ Locale Testing

#### Test 11: French (/fr)
1. Go to: `http://localhost:3000/fr`
2. Click any WhatsApp button
3. **Expected:** 
   - Link still uses `15716904684`
   - Source tracking still works
   - Opens WhatsApp correctly

#### Test 12: Arabic (/ar)
1. Go to: `http://localhost:3000/ar`
2. Click any WhatsApp button
3. **Expected:**
   - Link still uses `15716904684`
   - Source tracking still works
   - Opens WhatsApp correctly

---

### ✅ URL Encoding Verification

#### Test 13: Check Message Format
1. Click any WhatsApp CTA
2. Look at the URL in browser/new tab
3. **Should see:** `wa.me/15716904684?text=Salam%2C%20Kmlt...`
4. **Verify encoding:**
   - Space → `%20`
   - Comma → `%2C`
   - Slash → `%2F`
   - Colon → `%3A`

#### Test 14: Decoded Message
1. Copy the wa.me URL
2. Use URL decoder (or open in WhatsApp)
3. **Expected message format:**
   ```
   Salam, Kmlt eligibility/form. Source: [source-name].
   ```

---

### ✅ Number Verification

#### Test 15: No Placeholders
1. Open browser dev tools (F12)
2. Go to Network tab
3. Click any WhatsApp CTA
4. Check the request URL
5. **Must NOT contain:**
   - `212600000000` ❌
   - `XXXXXXXXX` ❌
6. **Must contain:**
   - `15716904684` ✅

#### Test 16: Console Errors
1. Open browser console (F12)
2. Click all 6 WhatsApp CTAs
3. **Expected:** NO console errors
4. **Expected:** NO warnings about missing props

---

### ✅ Accessibility Testing

#### Test 17: Keyboard Navigation
1. Use `Tab` key to navigate page
2. **Expected:** Can focus on WhatsApp buttons
3. Press `Enter` on focused button
4. **Expected:** Opens WhatsApp

#### Test 18: Screen Reader
1. Enable screen reader (NVDA/JAWS/VoiceOver)
2. Navigate to WhatsApp button
3. **Expected:** Announces button purpose
4. **Example:** "Start Free Consultation on WhatsApp, button"

---

## 🚨 Critical Failures

Stop deployment if you see:

❌ **Placeholder number in link** (`212600000000` or `XXXXXXXXX`)
❌ **Console errors** when clicking CTA
❌ **WhatsApp doesn't open** on mobile
❌ **No fallback modal** when popup blocked
❌ **Wrong number** (not `15716904684`)
❌ **Missing source tag** in message

---

## ✅ Success Criteria

All tests pass if:

✅ All 6 CTAs open WhatsApp correctly
✅ All messages include source tracking
✅ Fallback modal works when popup blocked
✅ Works on desktop (all browsers)
✅ Works on mobile (iOS + Android)
✅ Works on all 3 locales (/en, /fr, /ar)
✅ No placeholder numbers anywhere
✅ No console errors
✅ URL encoding is correct

---

## 📊 Test Results Template

```
Date: ___________
Tester: ___________

Desktop Tests:
[ ] Test 1: Hero CTA
[ ] Test 2: Contact Section
[ ] Test 3: Final CTA
[ ] Test 4: Footer Link
[ ] Test 5: Floating Button
[ ] Test 6: About Page
[ ] Test 7: Fallback Modal

Mobile Tests:
[ ] Test 8: Mobile Hero CTA
[ ] Test 9: Mobile Floating Button
[ ] Test 10: Mobile Footer

Locale Tests:
[ ] Test 11: French (/fr)
[ ] Test 12: Arabic (/ar)

Verification:
[ ] Test 13: URL Encoding
[ ] Test 14: Decoded Message
[ ] Test 15: No Placeholders
[ ] Test 16: No Console Errors
[ ] Test 17: Keyboard Navigation
[ ] Test 18: Screen Reader

Result: [ ] PASS / [ ] FAIL
```

---

## 🐛 Common Issues & Fixes

### Issue: Popup blocked on desktop
**Fix:** This is expected! Fallback modal should appear.

### Issue: WhatsApp doesn't open on mobile
**Check:** Is WhatsApp installed? Should open App Store if not.

### Issue: Message is garbled
**Check:** URL encoding - special characters should be encoded.

### Issue: Wrong phone number
**Check:** `lib/config/brand.ts` - verify `numberDigits: "15716904684"`

### Issue: No source tag in message
**Check:** Component has `source="..."` prop

---

**Last Updated:** 2026-02-18
**Status:** Ready for QA Testing
