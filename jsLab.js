// html elements
let tile1 = document.querySelector('.tile-1')
let tile2 = document.querySelector('.tile-2')
let tile3 = document.querySelector('.tile-3')
let tile4 = document.querySelector('.tile-4')
let tile5 = document.querySelector('.tile-5')
let tile6 = document.querySelector('.tile-6')
let tile7 = document.querySelector('.tile-7')
let tile8 = document.querySelector('.tile-8')
let tile9 = document.querySelector('.tile-9')


/********* NOTE: unsure which tile is which? Be sure to reference the HTML when you need to double-check! ************/


// 1. Tile 1 feels a little sad. 
// - Update the inner HTML to show an encouraging message! 
// - Something like "YOU GOT THIS!" or even a "You're a beautiful person!" 

tile1.innerHTML = "YOU GOT THIS!";

// 2. Tile 2 has a button. 
// - Create a click event and have the background color of tile 2 change to a shade of green.
// - BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.
// - Can you see if there's a way to toggle it???
let tile2Button = document.querySelector(".tile-2-button");
tile2Button.addEventListener("click", function(){
  tile2.style.backgroundColor = "green";
});

// 3. What's this? A totoro? Where's his friends? 
// - Using createElement, create a friend (an image element).
// - Once created, set the src of it to the image address.
// - Append the element to tile 3. 
// - Need some inspiration? Go to giphy.com, search a character and choose the "stickers".
let friend = document.createElement("img");
friend.src = "https://media4.giphy.com/media/39GAXpLVKvYRO/200w.webp?cid=ecf05e476dndye8h7x6ra4kvuwpgw5tuxnysu2v5iyzclgx0&ep=v1_gifs_search&rid=200w.webp&ct=g";
tile3.appendChild(friend);

// 4. Oh no! A broken image! We need to fix this.
// - Set the src for tile 4 to have an image of your favorite TV show.

tile4.src = "https://i.insider.com/650b0f2212dc4f001a1747b7?width=1000&format=jpeg&auto=webp";


// These following tasks may require a little bit of digging. 
// Unsure how to complete the task? Use your resources! Code Nation reference table might help. 
// Can't find it there? Google search the keywords of what you're trying to do and use web dev documentation! 
// W3schools, MDN Web Docs, and Stack Overflow all super reliable 😊


// 5. Hmm. Looks like the font is too small. 
// - Update the font-size of tile 5 to 35 pixels.
tile5.style.fontSize = "35px";

// 6. Another sad box! 
// - Let make this tile 6 feel special and add a gradient background! 
// - What kind of gradient? What color? YOU CHOOSE!
tile6.style.background = "linear-gradient(to left, blue, red)";

// 7. Too many squares. 
// - Let's change tile 7 to have rounded edges - be sure to search for which CSS property does this :)
tile7.style.borderRadius = "100px";

// 8. Replace the image with your favorite emoji. 
// - Try going to this site to search: https://emojipedia.org/


// 9. Display a random number in the tile when the button is clicked.
// - BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.



