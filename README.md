# Instructions
Fork and clone this repository down to your computer. Enter your answers into the README.md file where appropriate, or modify the necessary files where appropriate. When you are finished commit your changes and push them back to your GitHub account. Email aaron@theironyard.com with a link to your forked GitHub repo.


## Question 1
What is the difference between elements that have a CSS property of `display: block` and elements that have a property of `display: inline`?

Display block means that elements will be displayed as a block, sort of like a paragraph. Usually elements will be stacked on top of one another unless a float is involved.
Display inline means that elements will be displayed on the same line inside the current block. They will generally appear next to one another.


## Question 2
Order the following CSS selectors from most specific to least specific. If two selectors are tied, then the one that appears lower should be considered more specific. Explain why you ordered them the way that you did.

```css

5. button {
	color: blue;
}

3. body > nav button.navbar-toggle {
	color: red;
}

2. .navbar-header > .collapsed {
	color: green;
}

4. nav div.container div button {
	color: red;
}

1. #logo {
	color: pink;
}

```



## Question 3
Link together the index.html file with the main.css and main.js files.

## Question 4
Commit and push your changes to GitHub

**For the following questions you should not have to modify the index.html file at all.**

## Question 5
Add a background color of green to the section element. The background should show behind the three horizontally aligned boxes and should automatically adjust its height properly as the window width changes. You should not have to modify the HTML.

## Question 6
Add the panda dog image (in the images directory) as the background image of the section element. It's okay if it overrides the green background. You should not have to modify the HTML.

## Question 7
Use jQuery to make the "read more" link at the bottom of the page function as follows:

When the link is clicked the "more" paragraph should be shown and the link should change its text to "read less". If the link is clicked again it should change back to its original text and the "more" paragraph should be hidden.

## Question 8
Using jQuery and the `thumbnails` array inside of main.js, display all of the images and captions inside of the thumbnails section. When you click on a thumbnail image it should take you to the associated url. This should work regardless of the number of elements inside of the thumbnails array. I will test it with different data in the same format. Hint: you will need to use a loop.