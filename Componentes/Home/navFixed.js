var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const larguraBody = screen.width
  var currentScrollPos = window.pageYOffset;

    if (prevScrollpos < 100) {
        document.getElementById("navbar").style.backgroundColor = ` transparent `
    } else{
      document.getElementById("navbar").style.backgroundColor = ` #000000 `
    }
    if (prevScrollpos >= currentScrollPos) {
      document.getElementById("navbar").style.position = ` fixed `
      document.getElementById("navbar").style.top = "0";
  
    } else {
      document.getElementById("navbar").style.position = ` fixed `
      document.getElementById("navbar").style.top = "-8.5rem";
    }
    prevScrollpos = currentScrollPos;

}