# Basic drawing

There are not too many tags within an SVG, from a quick look on [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element) there are about 63 tags, I am not going to show you all of them, just some basics

line - quite straight-forward, 1st xy coordinate and 2nd xy coordinate. I have added stroke and stroke-width just to colour the line green and make it easier to see

rect - also simple, coordinates of the top left corner and then the width and height. Here I added fill=transparent, otherwise it would have been solid green and I have done it for the rest of the drawings

circle - coordinates of the center and then the radius

polygon - coordinates x comma y and separated by whitespaces

polyline - the same as polygon, except that the stroke from the last point to the first point is excluded

path - this is a super powerful tag. Far too complicated to be covered in this presentation. There are instructions to move the cursor, draw a line horizontally and vertically, curve to, quadratic Bezier curves and more

basically you can use path to draw all the previous shapes, it is just a lot more difficult
