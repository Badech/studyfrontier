# Logo Replacement Instructions

## Current Status

The logo file at `/public/logo.png` is currently a placeholder. You need to replace it with your actual StudyFrontier logo.

## Steps to Replace

1. **Prepare Your Logo File:**
   - Format: PNG (with transparency recommended)
   - Recommended size: 512x512 pixels
   - Aspect ratio: Square or horizontal (max 2:1)
   - File size: < 100KB for optimal performance

2. **Save the Logo:**
   - Place your logo file at: `public/logo.png`
   - Overwrite the existing placeholder file

3. **Extract Colors (if needed):**
   
   Once you have the real logo, verify/update colors in `tailwind.config.ts`:
   
   ```typescript
   colors: {
     navy: {
       // Update these hex codes based on your logo
       500: '#1e3a8a',  // Main navy color
       700: '#1d4ed8',  // Darker shade
       900: '#172554',  // Darkest shade
     },
     gold: {
       // Update these hex codes based on your logo
       400: '#fbbf24',  // Light gold
       500: '#f59e0b',  // Main gold
       600: '#d97706',  // Dark gold
     }
   }
   ```

4. **Update Favicon (Optional but Recommended):**
   
   Create a favicon from your logo:
   - Use an online tool like [favicon.io](https://favicon.io)
   - Generate favicon files
   - Replace `public/favicon.ico`

## Logo Usage in the Site

The logo is used in:

1. **Header** (`components/Header.tsx`):
   - Currently shows "SF" text placeholder
   - Update to use actual logo image

2. **Footer** (`components/Footer.tsx`):
   - Currently shows "SF" text placeholder
   - Update to use actual logo image

## Updating Logo Display

After adding the real logo, update these components:

### Header.tsx

Replace this:
```tsx
<div className="relative w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
  <span className="text-gold-400 font-bold text-xl">SF</span>
</div>
```

With this:
```tsx
<Image
  src="/logo.png"
  alt="StudyFrontier Logo"
  width={40}
  height={40}
  className="object-contain"
/>
```

### Footer.tsx

Replace this:
```tsx
<div className="relative w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
  <span className="text-navy-900 font-bold text-xl">SF</span>
</div>
```

With this:
```tsx
<Image
  src="/logo.png"
  alt="StudyFrontier Logo"
  width={40}
  height={40}
  className="object-contain"
/>
```

Don't forget to import Image component:
```tsx
import Image from 'next/image';
```

## Design Considerations

### Logo Style Should Be:
- ✅ Professional
- ✅ Clean and simple
- ✅ Recognizable at small sizes
- ✅ Works on both light and dark backgrounds
- ✅ Modern and trustworthy

### Colors Should Convey:
- 🔵 Navy/Blue: Trust, professionalism, education
- 🟡 Gold: Premium, excellence, achievement
- ⚪ White: Clarity, cleanliness, simplicity

## Testing After Replacement

1. Clear browser cache
2. Restart dev server: `npm run dev`
3. Check logo appears correctly in:
   - Header (desktop & mobile)
   - Footer
   - Browser tab (favicon)
4. Verify logo scales properly at different screen sizes
5. Test on both light and dark backgrounds

## Optimization

After adding the logo:

```bash
# If logo is large, optimize it
npm install -g sharp-cli
sharp -i public/logo.png -o public/logo.png --webp
```

This reduces file size without quality loss.

---

**Note:** Until you replace the placeholder, the site will show "SF" text badges as temporary logo replacements.
