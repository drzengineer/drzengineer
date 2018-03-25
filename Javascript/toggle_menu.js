var navButton = document.getElementById('nav_button');

navButton.addEventListener('click', toggleMenu, false);

function toggleMenu() {
    let x = document.getElementById("myNavMenu");
    if (x.className === "nav_menu") {
        x.className += " expand";
        document.getElementById('nav_button').innerHTML = "&#10005";
    } else {
        x.className = "nav_menu";
        document.getElementById('nav_button').innerHTML = "&#9776";
    }
}

function resetMenu() {
  let x = document.getElementById("myNavMenu");
  x.className = "nav_menu";
  document.getElementById('nav_button').innerHTML = "&#9776";
}
