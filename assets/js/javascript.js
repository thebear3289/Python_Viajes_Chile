
      $(document).ready(function(){
        $("#idIbutton").click(function(){
          $("#carouselExamplelidesOnly").fadeOut();
        });
      });

      //oculta texto cuan se da un click en la imagen
      $("#image1").on( "click", function(){
        $("#texto1").toggle();
      });
      $("#image2").on( "click", function(){
        $("#texto2").toggle();
      });
      $("#image3").on( "click", function(){
        $("#texto3").toggle();
      });
      $("#image4").on( "click", function(){
        $("#texto4").toggle();
      });