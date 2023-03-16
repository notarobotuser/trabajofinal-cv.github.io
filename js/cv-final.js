/**BARRA DE IDIOMA INGLES */
                var i = 0;
                function move1() {
                  if (i == 0) {
                    i = 1;
                    var elem = document.getElementById("myBar1");
                    var width = 10;
                    var id = setInterval(frame, 10);
                    function frame() {
                      if (width >= 90) {
                        clearInterval(id);
                        i = 0;
                      } else {
                        width++;
                        elem.style.width = width + "%";
                        elem.innerHTML = width  + "%";
                      }
                    }
                  }
                }

                var i = 0;
                function move2() {
                  if (i == 0) {
                    i = 1;
                    var elem = document.getElementById("myBar2");
                    var width = 10;
                    var id = setInterval(frame, 10);
                    function frame() {
                      if (width >= 65) {
                        clearInterval(id);
                        i = 0;
                      } else {
                        width++;
                        elem.style.width = width + "%";
                        elem.innerHTML = width  + "%";
                      }
                    }
                  }
                }

                var i = 0;
                function move3() {
                  if (i == 0) {
                    i = 1;
                    var elem = document.getElementById("myBar3");
                    var width = 10;
                    var id = setInterval(frame, 10);
                    function frame() {
                      if (width >= 100) {
                        clearInterval(id);
                        i = 0;
                      } else {
                        width++;
                        elem.style.width = width + "%";
                        elem.innerHTML = width  + "%";
                      }
                    }
                  }
                }

//BOTÓN "COLAPSABLE"
function myFunction() {
  var x = document.getElementById("conozca");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}