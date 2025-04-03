
//#region: collapsible from w3schools
// https://www.w3schools.com/howto/howto_js_collapsible.asp

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = '0em 1.25em';
    } else {
      content.style.maxHeight = (content.scrollHeight + 10) + "px";
      content.style.padding = '1em 1.25em';

    }
  });
}

//#endregion

