---
title: Code Block Language Badge Examples"
date: "2025-01-01"
author: "Your Name"
excerpt: "Exploring how to display code blocks in posts."
---

This file demonstrates how to use language badges with code blocks in your Markdown files.

## JavaScript Example

```javascript
// This is a JavaScript code block
function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting('World'));
```

## CSS Example

```css
/* This is a CSS code block */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.button {
  background-color: #0000ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
}
```

## HTML Example

```html
<!-- This is an HTML code block -->
<div class="container">
  <h1>Hello World</h1>
  <p>This is a paragraph of text.</p>
  <button class="button">Click me</button>
</div>
```

## TypeScript Example

```typescript
// This is a TypeScript code block
interface User {
  name: string;
  age: number;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

const user: User = {
  name: 'John',
  age: 30
};

console.log(greetUser(user));
```

## Liquid Example

```liquid
{% if product.metafields.custom.member_price %}
  {% assign market_handle = localization.market.handle %}
  {% assign member_price = product.metafields.custom.member_price %}
  
  {% if market_handle == 'north-america' %}
    {% assign converted_price = member_price | times: 1.3 %}
  {% elsif market_handle == 'europe' %}
    {% assign converted_price = member_price | times: 1.5 %}
  {% else %}
    {% assign converted_price = member_price %}
  {% endif %}
  
  <p><b>Member Price:</b></br>{{ converted_price | money_with_currency }}</p>
{% endif %}
```

## No Language Specified

```
This code block doesn't have a language specified.
It will show a generic "Code" badge.
