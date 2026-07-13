# 02 CSS Architecture 🎨

CSS is easy to write but incredibly hard to maintain. This section contains my deep dive into how CSS actually works under the hood (the Box Model, Stacking Contexts) and modern layout techniques like Flexbox and Grid.

## 📝 Key Learnings

1. **The Box Model**: ox-sizing: border-box; is a lifesaver. Without it, padding and borders expand the element's width, breaking layouts.
2. **Flexbox vs Grid**: 
   - *Flexbox* is for 1-dimensional layouts (a single row OR a single column). Good for navbars or aligning items.
   - *CSS Grid* is for 2-dimensional layouts (rows AND columns simultaneously). Good for overall page structure or complex image galleries.
3. **z-index & Stacking Contexts**: A child element with z-index: 9999 can never appear above a sibling's parent if the parent has a lower z-index and a new stacking context. This blew my mind!

## 🛠️ Practice Files
- lexbox-vs-grid.html / layout.css: A side-by-side comparison of the same layout built using both Flexbox and Grid.
- modern-animations.html: Fun with @keyframes, hover effects, and bezier curves.

> *Note: Initially I used a lot of float-based layouts. Never going back to loat: left after discovering Flexbox!*
