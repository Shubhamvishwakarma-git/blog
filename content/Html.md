---
title: HTML Tutorial in Hindi
slug: Html
author: Shubham Vishwakarma
date: 2025-05-19
description: This is a complete HTML tutorial in Hindi to help you start your web development journey.
image: /html.jpg
excerpt: HTML is the backbone of every webpage. Learn the basic structure, tags, and how to build webpages from scratch...
---

# Introduction

HTML (HyperText Markup Language) web development ka basic building block hai. Yeh ek markup language hai jo webpages ka structure banane ke liye use hoti hai. Agar aap web development seekhna chahte hain, toh sabse pehla step hai HTML sikhna.

Is tutorial me hum HTML ke basic concepts, commonly used tags, aur examples ko Hindi me samjhenge.

---

## HTML Kya Hai?

HTML ek **markup language** hai jisme aap text ko structure dete ho — jaise headings, paragraphs, lists, images, links, etc.

Browser HTML code ko padhta hai aur uske hisaab se webpage render karta hai. HTML me tags ka use hota hai, jaise `<p>`, `<h1>`, `<a>`, etc.

---

## HTML Ka History

HTML ko 1991 me **Tim Berners-Lee** ne invent kiya tha. Tab se leke ab tak HTML kaafi evolve ho chuka hai.

- **HTML4**: 1997
- **XHTML**: 2000s
- **HTML5**: 2014 – Ab widely accepted version hai.

HTML5 me naye semantic tags, multimedia support (video/audio), aur form enhancements diye gaye hain.

---

## HTML Syntax

HTML ka structure kaafi simple hota hai. Har element ya toh self-closing hota hai, ya opening aur closing tag ke beech me likha jata hai.

### Example:
````c showLineNumbers


``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Mera Pehla Page</title>
  </head>
  <body>
    <h1>Namaste Duniya</h1>
    <p>Yeh mera pehla webpage hai.</p>
  </body>
</html>
````

## Commonly Used HTML Tags

### 1. Headings

````c showLineNumbers
`````html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
`````

### 2. Paragraph

````c showLineNumbers
`````html
<p>Yeh ek paragraph hai.</p>
`````

### Links

````c showLineNumbers 
`````html
<a href="https://google.com">Google</a>
`````

### Images

````c showLineNumbers 
`````html
<img src="image.jpg" alt="Image description" />
`````

### 5. Lists

````c showLineNumbers
`````html

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
`````

### Forms in HTML

````c showLineNumbers
`````html
<form>
  <label>Name:</label>
  <input type="text" name="name" />
  <br />
  <label>Email:</label>
  <input type="email" name="email" />
  <br />
  <input type="submit" value="Submit" />
</form>
`````

### HTML5 Semantic Tags

HTML5 me naye semantic tags aaye jo page structure ko meaningful banate hain:

<header>

<footer>

<article>

<section>

<nav>

<main>

````c showLineNumbers
`````html
<main>
  <section>
    <h2>Yeh Section Hai</h2>
    <p>Section ka content yahaan hai.</p>
  </section>
</main>
`````

### Multimedia Elements

### Video Embed:

````c showLineNumbers
`````html
<video controls width="400">
  <source src="video.mp4" type="video/mp4" />
  Aapka browser video support nahi karta.
</video>
`````

### Audio Embed:

````c showLineNumbers
`````html
<audio controls>
  <source src="audio.mp3" type="audio/mp3" />
  Aapka browser audio support nahi karta.
</audio>
`````

### Tables in HTML

````c showLineNumbers
`````html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Shubham</td>
    <td>25</td>
  </tr>
</table>
`````

### HTML with CSS

````c showLineNumbers
`````html
<p style="color: red; font-size: 20px;">Yeh red color me paragraph hai.</p>
`````

### Best Practices

Use semantic tags for better SEO.

Use alt attributes with images.

Use lowercase for tag names.

Validate HTML using W3C Validator

## Conclusion

HTML seekhna web development ki journey ka pehla aur sabse important step hai. Is tutorial me humne basic HTML structure, tags, forms, multimedia, aur semantic elements ke baare me seekha.

Agar aap serious hain web developer banne ke liye, toh HTML ke saath CSS aur JavaScript bhi zaroor seekhna chahiye.
