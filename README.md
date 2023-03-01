Tutorial on Assign vs Replace values for page redirects
HTML, CSS & JavaScript

1) Create files (html, css & JS)
2) Start with HTML, include doctype and meta information in <head>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Josh Gable">
  <meta name="description" content="My third web page">
  <title>Object Models | JavaScript Basics</title>
  <link rel="stylesheet" href="./assets/style/index.css">
  <script src="./assets/script/assignment-03.js" defer></script>
</head>
```

3) Create the foundation for your page. This should include to buttons, a box
to input the desired URL you would like to redirect/replace and a title at the top. 
I suggest containing all of these elements within a section. I also suggest using a 
form to encompass the button and input.

```html
  <div class="container">
    <section>
      <h2>Redirecting with JavaScript || Demo Page</h2>
      <form name="url-form">
        <input type="text" name="url" class="url" placeholder="https://">
        <input type="button" class="assign" value="assign">
        <input type="button" class="replace" value="replace">
      </form>
    </section>
  </div>
```

4) Begin editing your CSS file. This part is largely up to personal preference.
That said however, please be mindful of the spacing/padding between your elements
and the CARP principles. You may also simply reference my demo for a simple
design you may take inspriation from.

5) Upon completing your HTML and CSS to your satisfaction, we can move on to the 
JavaScript powering the project. This example uses BOM to connect to the browser
and perform our desired functions

```javascript
const url = document.querySelector('.url'); //input box for URL

const assignBtn = document.querySelector('.assign'); //assign button
const replaceBtn = document.querySelector('.replace'); //replace button
```

6) Now that you have selected the HTML elements we need to add the functionally,
we can begin working on the functionality itself! The goal is to either replace 
or assign (dependant on what button user selects) to the URL entered into the 
input box. We must use event listeners to check when the user clicks the button

```javascript
assignBtn.addEventListener('click', () => { //when user clicks assign
  let val = url.value.trim(); //removes empty space before/after input
  if(val.length > 15) { //checks if input is greater than 15
    window.location.assign(val); //opens new window with new url
  }
});

replaceBtn.addEventListener('click', () => {
  let val = url.value.trim();
  if(val.length > 15) {
    window.location.replace(val); //replaces current window with new url
  }
});
```
