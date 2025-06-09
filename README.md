# Project: Etch-a-Sketch

A project to build a browser version of something between a sketchpad and an Etch-A-Sketch.

Completed as part of the **JavaScript Basics** section of the **Foundation Course** at
[TheOdinProject](https://www.theodinproject.com).

---

## Assignment

Full details [available here &rArr;]([./Initial.md](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)).

Key points from the text:

- Create a grid of 'pixel' divs using JavaScript; not by hand
- 'pixel' divs should change color on mouse hover
- User should be able to set 'resolution' up to 100 'pixels' per side
- Total area for 'pixel' divs should remain constant (960px by 960px is suggested)

### Extra Credit

> 1. Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
> 2. Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely coloured) square in only ten interactions.

## Result

Check out the live interactive demo [here &rArr;](https://odinprojectassignmentsbypw80.github.io/javascript-basics_project-etch-a-sketch/)

>[!NOTE]
> The page does not work properly in Mozilla FireFox (at least not version 139.01 (64-bit), which was up to date at time
> of writing); although everything seems fine on Google Chrome. This is also respectively true for LibreWolf (using
> Mozilla's Gecko engine) and Edge (using Google's Blink Engine).
>
> As best as I can tell it is something to do with the way the height and width of the .pixel divs are being calculated.
> They report correctly in the console and inspector rules, but they are wrong on screen and in the layout information.
>
> I will bare this in mind for the future. But, I am not prepared to do a workaround at this point.

## Review

Once again fell foul to improper planning, although some aspects were down to a lack of understanding on my part.

I'm not sure why, but I thought one could edit css directly with JavaScript. In retrospect this is obviously not the
case - JavaScript interacts with the DOM not the css. It can add classes and styles to elements in the DOM, but this
does not modify the css directly.

The code feels, for want of a better word, 'janky'. The `html` and `css` I let slide as I focused on JavaScript. This is
going to be a problem for me going forward. I find it difficult to properly focus on all 3 elements one at a time;
instead either emphasising one to the detriment of the other two or simultaneously editing all three in a somewhat
chaotic manner.

I should also probably go back to have another look at the different types of functions; focusing on the benefits and
limitations for each.
