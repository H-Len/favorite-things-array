// $(document).ready(function() {
//   $(".form").submit(function(event){
//     event.preventDefault();
    // var favorites = [];
    // var favoriteFood = $("#add1").val();
    // var favoriteMovie = $("#add2").val();
    // var favoriteBook = $("#add3").val();
//
//     console.log(favoriteFood);
//     favorites.push(favoriteFood, favoriteMovie, favoriteBook);
//     console.log(favorites);
//
//     document.getElementById("add1").innerHTML = favorites[0];
//
//     $("favorites").show();

    // <ul>
    //   <li>"add1"</li>
    //   <li>"add2"</li>
    //   <li>"add3"</li>
    // </ul>


  //   console.log(favorite);
  //   favorite = add1.append("#add2");
  // alert("Why is this not working");
  //  favorite = add1.append("#add3");
  //  favorite.show();
//  });
// });
//
// $(document).ready(function() {
//   $(".form").submit(function(event) {
//     var favoritesInput = ["add1", "add2", "add3"];


$(document).ready(function() {
  $(".form").submit(function(event){
    var favorites = ["add1", "add2", "add3"];
    favorites.forEach(function(favorite) {
      var userInput = $("input" + favorites).val();

      console.log("try one");
      $("." + favorite).text(userInput);
      // $(".favoriteList").append("<li>"+ userInput +"</li>");
      $("#favoritesInput").show();
      console.log("woohoo");
      event.preventDefault();
    });


  });
});
