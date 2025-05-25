---
title: CSS Tutorial in Hindi
slug: css
author: Shubham Vishwakarma
date: 2025-05-19
description: Complete CSS tutorial in Hindi to learn how to style your webpages and create beautiful, responsive designs.
image: /css.webp
excerpt: CSS se aap apne webpages ko stunning look de sakte ho. Yeh tutorial aapko CSS ke basic se lekar advanced concepts tak le jaayega...
---

# Introduction

CSS (Cascading Style Sheets) ek stylesheet language hai jiska use HTML elements ko style karne ke liye hota hai. Agar HTML structure deta hai, toh CSS us structure ko design aur layout deta hai.

Is tutorial me hum CSS ke important concepts — selectors, properties, colors, box model, flexbox, positioning, aur responsive design ko Hindi me samjhenge.

---

## CSS Kya Hai?

CSS ek rule-based language hai jisme aap define karte hain ki HTML elements browser me kaise dikhne chahiyein.

Aap font, color, spacing, layout, animation — sab CSS se control kar sakte ho.

---

## CSS Syntax

CSS syntax kuch is tarah hota hai:

````c showLineNumbers
```css
selector {
  property: value;
}
````

### Example:

````c showLineNumbers
```css
p {
  color: blue;
  font-size: 18px;
}

````

### 1. Inline CSS

````c showLineNumbers
```css
<p style="color: red;">Yeh red paragraph hai</p>


````

### 2. Internal CSS

````c showLineNumbers
```css
<style>
  p {
    color: green;
  }
</style>


````

### 3. External CSS

````c showLineNumbers
```css
<link rel="stylesheet" href="style.css" />

````

## CSS Selectors

### 1. Element Selector

````c showLineNumbers
```css
h1 {
  color: blue;
}


````

### 2. Class Selector

````c showLineNumbers
```css
.myclass {
  font-weight: bold;
}


````

### 3. ID Selector

````c showLineNumbers
```css
#main {
  text-align: center;
}


````

### 4. Grouping Selector

````c showLineNumbers
```css
h1, h2, p {
  margin: 0;
}

````

### Colors in CSS

````c showLineNumbers
```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);


````

Aap HEX, RGB, aur color names ka use kar sakte ho.

## Box Model

### Content

### Padding

### Border

### Margin

````c showLineNumbers
```css
div {
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}


````

### Fonts and Text Styling

````c showLineNumbers
```css
h1 {
  font-family: Arial;
  font-size: 24px;
  color: navy;
  text-align: center;
  text-transform: uppercase;
}


````

### Backgrounds

````c showLineNumbers
```css
body {
  background-color: #f0f0f0;
  background-image: url('bg.jpg');
  background-size: cover;
}


````

## Layout Techniques

### 1. Display Property

````c showLineNumbers
```css
div {
  display: flex;
}


````

### 2. Flexbox

````c showLineNumbers
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

````

### 3. Grid

````c showLineNumbers
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

````

### Positioning

````c showLineNumbers
```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}

````

- **static**
- **relative**
- **absolute**
- **fixed**
- **sticky**

### Media Queries (Responsive Design)

Responsive design ka matlab hai ki website har screen size pe acchi lage.

````c showLineNumbers
```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}

````

### CSS Transitions and Hover

````c showLineNumbers
```css
button {
  background: green;
  color: white;
  transition: background 0.3s ease;
}

button:hover {
  background: darkgreen;
}


````

### CSS Best Practices

- **CSS ko external file me likho.**
- **Classes ka reusable naming use karo.**
- **DRY (Don't Repeat Yourself) rule follow karo.**
- **Comments likho:**

### Conclusion

CSS ek powerful tool hai jo HTML elements ko visually attractive banata hai. Is tutorial me aapne styling se lekar layout aur responsiveness tak sab kuch seekha.

Agar aap CSS me master banna chahte hain, toh practice ke sath aapko Flexbox, Grid, animations, aur pre-processors jaise SCSS/SASS bhi seekhna chahiye.
