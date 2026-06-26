# Shiv Premium Portfolio

Professional React + Vite portfolio inspired by the uploaded reference design.

## Run

```bash
npm install
npm run dev
```

## Edit Your Details

Open:

```text
src/data/portfolioData.js
```

Change email, phone, GitHub, LinkedIn, project links, certificates and experience.

## Add Resume

Put your file here:

```text
public/resume.pdf
```

## Add Real Photo

Currently the hero uses an SP avatar. To use your photo:

1. Add your image in `public/profile.jpg`
2. Replace the avatar inside `Hero` in `src/App.jsx` with:

```jsx
<img src="/profile.jpg" alt="Shivam Pal" />
```

Then add this CSS:

```css
.photo-frame img{width:100%;height:100%;object-fit:cover;object-position:top center;}
```
