
function buildPage() {
    var container = document.getElementById("container");
    container.appendChild(myHeader());
  }
function myHeader() {
    var header = document.createElement("header");
    header.appendChild(buildLogo());
    header.appendChild(buildNav());
    return header;

}
function myNav(){
    var navigation = document.createElement("nav")
    var myList = document.createElement("ul")

    return navigation;
}

function myLogo(){
    var logo = document.createElement("High on Coding");
    return logo;
}