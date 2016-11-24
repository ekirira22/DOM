$(document).ready(function() {
        $("button#hello").click(function() {
          $("ul#user").prepend("<li>Hello!</li>");
          $("ul#webpage").prepend("<li>Why Hello There!!</li>");
          $("li").css("background-color", "green");
          $("ul#user").children("li").first().click(function(){
            alert("Heeeeey!!!");
          });
          $("ul#webpage").children("li").first().click(function(){
            alert("aaaawww..lawdddd!!!!!!!");
          });
          $("ul#user").children("li").first().click(function(){
          $(this).remove();
          });
          $("ul#webpage").children("li").first().click(function(){
            $(this).remove();
          });
        });

        $("button#goodbye").click(function() {
          $("ul#user").prepend("<li>Goodbye!</li>");
          $("ul#webpage").prepend("<li>Goodbye dear user!!</li>");
          $("ul#user").children("li").first().click(function(){
            alert("Heeeeey!!!");
          });
          $("ul#webpage").children("li").first().click(function(){
            alert("aaaawww..lawdddd!!!!!!!");
          });
          $("ul#user").children("li").first().click(function(){
          $(this).remove();
          });
          $("ul#webpage").children("li").first().click(function(){
            $(this).remove();
          });
        });

        $("button#stop").click(function() {
          $("ul#user").prepend("<li>Stop copying me!</li>");
          $("ul#webpage").prepend("<li>Pardon me, i meant no offence!</li>");
          $("ul#user").children("li").first().click(function(){
            alert("Heeeeey!!!");
          });
          $("ul#webpage").children("li").first().click(function(){
            alert("aaaawww..lawdddd!!!!!!!");
          });
          $("ul#user").children("li").first().click(function(){
          $(this).remove();
          });
          $("ul#webpage").children("li").first().click(function(){
            $(this).remove();
          });
        });

      });
