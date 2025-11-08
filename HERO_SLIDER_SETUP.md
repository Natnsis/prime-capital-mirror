# Hero Slider Setup Guide

## Overview
The new hero slider component has been successfully implemented with the following features:
- ✅ Full-screen background image slider
- ✅ Smooth automatic transitions (5-second intervals)
- ✅ Manual navigation with left/right arrows
- ✅ Directional text animations (left, right, center)
- ✅ Responsive design for all devices
- ✅ Interactive slide indicators
- ✅ Auto-pause on manual navigation (resumes after 10 seconds)

## Required Images

You need to add **3 hero images** to the `public` folder with the following names:

1. **hero-slide-1.jpg** - For the center-aligned slide
2. **hero-slide-2.jpg** - For the left-aligned slide
3. **hero-slide-3.jpg** - For the right-aligned slide

### Image Specifications
- **Recommended Size**: 1920x1080px (Full HD) or higher
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 16:9 (landscape)
- **File Size**: Optimize for web (< 500KB per image recommended)
- **Content**: Choose images that work well with text overlay (avoid busy backgrounds in text areas)

### Image Placement
Place your images in: `c:\Users\user\Desktop\prime-capital\public\`

Example:
```
public/
  ├── hero-slide-1.jpg  ← Center-aligned slide
  ├── hero-slide-2.jpg  ← Left-aligned slide
  └── hero-slide-3.jpg  ← Right-aligned slide
```

## Customization

### Editing Slide Content
To customize the slides, edit the `slides` array in `components/HeroSlider.tsx`:

```typescript
const slides: Slide[] = [
  {
    id: 1,
    image: "/hero-slide-1.jpg",
    title: "Your Title Here",
    description: "Your description here",
    alignment: "center", // Options: "left", "center", "right"
    buttons: [
      { text: "Button Text", href: "/your-link", variant: "primary" },
      { text: "Button 2", href: "/link-2", variant: "secondary" },
    ],
  },
  // Add more slides...
];
```

### Adjusting Timing
- **Auto-play interval**: Change the `5000` value (in milliseconds) in line 66
- **Resume delay**: Change the `10000` value in line 75

### Styling
All styles use Tailwind CSS and can be customized directly in the component:
- Button colors: Uses `primary` and `secondary` colors from `tailwind.config.ts`
- Text colors: White with opacity variations for contrast
- Overlay: Gradient overlay for text readability

## Features Breakdown

### 1. Image Slider
- Smooth fade transitions between slides
- Scale animation for depth effect
- Automatic looping

### 2. Text Animations
- **Left-aligned text**: Slides in from the left
- **Right-aligned text**: Slides in from the right
- **Center-aligned text**: Slides up from the bottom
- Staggered animation timing for title, description, and buttons

### 3. Navigation Controls
- **Arrow buttons**: Left and right navigation
- **Slide indicators**: Dots at the bottom (click to jump to any slide)
- **Auto-pause**: Manual navigation pauses auto-play temporarily

### 4. Responsive Design
- Mobile-first approach
- Adaptive text sizes (4xl → 5xl → 7xl)
- Touch-friendly button sizes
- Optimized spacing for all screen sizes

## Testing Checklist

- [ ] Add 3 hero images to the public folder
- [ ] Test on desktop (1920px+)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on mobile (320px - 767px)
- [ ] Verify auto-play functionality
- [ ] Test manual navigation (arrows and indicators)
- [ ] Check text readability on all slides
- [ ] Verify button links work correctly

## Temporary Placeholder Images

If you don't have images ready yet, you can use these temporary placeholder services:

1. **Unsplash** (free, high-quality images):
   - https://source.unsplash.com/1920x1080/?business,finance
   - https://source.unsplash.com/1920x1080/?office,corporate
   - https://source.unsplash.com/1920x1080/?city,skyline

2. **Placeholder.com**:
   - https://via.placeholder.com/1920x1080/01016F/FFFFFF?text=Hero+Slide+1
   - https://via.placeholder.com/1920x1080/141CFF/FFFFFF?text=Hero+Slide+2
   - https://via.placeholder.com/1920x1080/0E0066/FFFFFF?text=Hero+Slide+3

## Browser Compatibility

The hero slider uses modern web technologies:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The component is optimized for performance:
- Uses `framer-motion` for GPU-accelerated animations
- Lazy loading ready (can be enhanced with Next.js Image component)
- Minimal re-renders with React hooks
- Efficient auto-play with cleanup

## Need Help?

If you need to modify the component further, the main file is located at:
`components/HeroSlider.tsx`

Key sections:
- **Lines 13-56**: Slide data configuration
- **Lines 66-72**: Auto-play logic
- **Lines 97-107**: Animation variants
- **Lines 120-140**: Background image rendering
- **Lines 143-195**: Content and text animations
