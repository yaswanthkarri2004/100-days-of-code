function opencity(event, skill) {
  event.preventDefault();

  const content = document.getElementById("cont");
  content.classList.add("content");
  if (skill == "html") {
    content.innerHTML =
      "HTML is the standard markup language for Web pages.With HTML you can create your own Website.";
  }
  if (skill == "css") {
    content.innerHTML =
      "CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.";
  }
  if (skill == "js") {
    content.innerHTML =
      "JavaScript is the worlds most popular programming language.JavaScript is the programming language of the Web.";
  }
}
