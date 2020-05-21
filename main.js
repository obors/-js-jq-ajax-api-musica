$(document).ready(function (){

  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/array/music",
    method : "GET",
    success : function (data) {
      // $("#risultati").html(data);
      // console.log(data.response);
    var source = document.getElementById("music-template").innerHTML;
    var template = Handlebars.compile(source);

    var contenuto = data.response;

    for (var i = 0; i < contenuto.length; i++) {
      var album = contenuto[i];
      var context = {
        immagine : album.poster,
        nome : album.author,
        anno : album.year,
        titolo : album.title,
      }
      console.log(context);
      var html = template(context);
      $(".cds-container").append(html);
    }

    },
    error : function (richiesta,stato,errori) {
      alert("E' avvenuto un errore. "+errore);
    }
  });

//   var source = document.getElementById("entry-template").innerHTML;
//   var template = Handlebars.compile(source);
//   var context = { title: "My New Post", body: "This is my first post!" };
// var html = template(context);
});
