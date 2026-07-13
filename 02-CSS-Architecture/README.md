# 02 CSS Architecture 🎨

CSS looks incredibly simple syntax-wise, but it is notoriously difficult to master. During my early days, I would just randomly add `float`, `position: absolute`, or `display: inline-block` until things looked somewhat correct. 

This section contains my deep dive into how CSS *actually* calculates layouts, sizes, and layering. Understanding these foundational rules stopped me from "guessing" CSS and allowed me to actually architect it.

## 📝 A-Z Theoretical Notes

### 1. The Box Model & Box-Sizing
Every single element on a web page is a rectangular box. The CSS Box Model dictates how the size of that box is calculated.
- **Content**: The actual text or image.
- **Padding**: Transparent space *inside* the box, around the content. (Background color applies here).
- **Border**: A line that goes around the padding.
- **Margin**: Transparent space *outside* the box. (Pushes other elements away).

**The `box-sizing` trap:**
By default, CSS uses `box-sizing: content-box`. If you set a `div` to `width: 100%` and then add `padding: 20px`, the actual width becomes `100% + 40px` (left and right padding), causing it to overflow the screen and create an ugly horizontal scrollbar!
> *Solution*: I now ALWAYS use a global reset: `* { box-sizing: border-box; }`. This forces CSS to include padding and border *inside* the width you specify.

### 2. Specificity (The 0,0,0,0 Rule)
Why is my CSS not applying? The answer is almost always **Specificity**. CSS applies a weight to selectors.
- `!important` = 1,0,0,0,0 (Avoid using this unless absolutely necessary!)
- Inline Styles (`<div style="...">`) = 1,0,0,0
- IDs (`#header`) = 0,1,0,0
- Classes, pseudo-classes, attributes (`.btn`, `:hover`) = 0,0,1,0
- Elements, pseudo-elements (`div`, `::before`) = 0,0,0,1

If you have a class `.button { color: blue; }` but also an ID `#submit { color: red; }` on the same element, the ID wins because `0,1,0,0` > `0,0,1,0`.

### 3. Layouts: Flexbox vs Grid
I used to rely on `float: left` and "clearfix" hacks. Modern CSS makes this obsolete.
- **Flexbox (1-Dimensional)**: Perfect for aligning items in a single row OR a single column. I use this for navbars, centering divs vertically (`align-items: center; justify-content: center;`), and button groups.
- **CSS Grid (2-Dimensional)**: Perfect for overall page layouts where you need precise control over BOTH rows and columns simultaneously. Grid allows you to define "template areas" which is incredibly powerful for responsive design.

### 4. Position & Stacking Contexts (`z-index`)
The `z-index` property ONLY works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`).
- `static` (default): Follows normal document flow.
- `relative`: Follows normal flow, but can be nudged using top/left/right/bottom. Crucially, it creates an anchor point for `absolute` children.
- `absolute`: Removed from normal flow. Positions itself relative to its *closest positioned ancestor*.

**The Stacking Context Mystery:**
I once had a modal with `z-index: 9999` that kept appearing *behind* a navbar with `z-index: 10`. Why? Because `z-index` is not global. If a parent element forms a new "Stacking Context" (e.g., by having `position: relative` and `z-index: 1`), its children are trapped inside that context. Even if a child is `z-index: 9999`, it can never overlap an element in a sibling stacking context with `z-index: 2`. 

### 5. Media Queries & Mobile-First Design
Instead of styling for desktop and then using `max-width` to fix it for mobile (Desktop-First), I learned to write base CSS for mobile phones, and use `min-width` media queries to expand the layout for tablets and desktops. This is much faster and loads less CSS on weak mobile connections.

## 🔗 Free Resources I Used
- **[Kevin Powell's YouTube Channel](https://www.youtube.com/kepowob)** - Nobody explains CSS better than Kevin. His Flexbox and Grid tutorials are legendary.
- **[CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)** - The ultimate cheat sheet.
- **[Josh W. Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)** - The exact CSS reset I use in all my modern projects.

## 🛠️ Practice Files inside this folder
- `flexbox-vs-grid.html` / `layout.css`: A side-by-side comparison of building a card gallery using both Flexbox and Grid.
- `modern-animations.html`: Fun with `@keyframes`, hover states, and understanding cubic-bezier curves for buttery smooth animations.
