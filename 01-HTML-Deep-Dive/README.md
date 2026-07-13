# 01 HTML Deep Dive 🧱

When I first started, I thought HTML was just about wrapping text in <div> tags. But building this section taught me that **Semantic HTML** is crucial for SEO and screen readers (Accessibility / a11y).

## 📝 Key Learnings

1. **Semantic Tags**: Using <header>, <main>, <article>, <section>, and <aside> instead of a million divs. It tells the browser *what* the content is, not just how it looks.
2. **Accessibility (a11y)**: 
   - Always use lt attributes on images.
   - Use <label for="..."> linked to <input id="..."> in forms. I used to wrap inputs in labels, but explicit linking is better for screen readers.
3. **Forms and Validation**: HTML5 has built-in validation (equired, 	ype="email", pattern). We don't always need JS for basic validation!

## 🔗 Important Links
- [MDN: Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)

## 🛠️ Practice Files
- practice-forms.html: A detailed registration form using all native input types.
- semantic-layout.html: A blog layout built entirely with semantic tags.
