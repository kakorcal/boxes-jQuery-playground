$(document).ready(function() {
  // PART 1
  console.log( "ready for DOM manipulation" );

  // PART 2
  // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  $("#secretBox").css("backgroundColor", "white").append("<h1>secret box!</h1>");
  // Find all child divs of the first row. Set the class for each div to boxType3.
  $("#row1 > div").attr("class", "box boxType3");
  // Make the last box in the last row disappear. (Hint, look into the dispaly style. 
  //Also, you should only get back one element from your selector.).
  $(".row > div:last-child").hide();
  // Change all red boxes to white.
  $(".boxType1").css("backgroundColor", "white");
  // Get the first two divs in the second row. Take away all styling from the divs.
  $("#row2 > div:lt(2)").removeAttr("class");
  // Get all divs inside the container that are not row divs and are not the secret box div.
  // Set the width of the divs to 2 pixels.
  $("div").not(".row, #secretBox").css("width", "2px");


  // PART 3
  // Add an on click handler to the container div. Console log the x and y position of the click.
  $("#container").click(function(e){
    console.log("x:" + e.clientX + "\n" + "y:" + e.clientY);
  });

  // Add links inside all red box divs that take the user to galvanize. 
  //Then add an on click handler that alerts the user that you can never leave the page.
  // Make sure the user won't leave the page after the alert!
  $(".boxType1").append("<a href='http://www.galvanize.com/'>g</a>");
  $(".boxType1 > a").click(function(e){
    e.preventDefault();
    alert("You can't leave!");
  });

  // For all box divs, add a click handler that adds an image of a cute puppy to the box. 
  //If the image is clicked again, remove the cute puppy.
  var $puppy = $("<img src='http://my10online.com/wp-content/uploads/2011/09/4480604.jpg'>");
  $(".box").append($puppy);
  $(".box > img").hide();
  $(".box").click(function(){
    $(this).find('img').toggle();
  }); 

  // Write a click handler on the container div. The click handler should turn the container
  // background to black and the background of the original div that was clicked to white.
  // If the user original div that was clicked happened to be the container div, 
  // change the background of the container div to lime green.
  // You should not use any selectors for this exercise. 
  //You can do it completely with what is given to you in the event callback.
  $("#container").click(function(e){
    if($(e.target).is($(this))){
      $(this).css("backgroundColor", "lime");
    }else{
      $(this).css("backgroundColor", "black");
      $(e.target).css("backgroundColor", "white");
    }
  });

});
