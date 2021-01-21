function newElement() {
  const inputVal = document.getElementById("content").value;

  const heading = document.getElementById("text");
  heading.textContent = "My to-do list";
  // Creating a list
  const list = document.createElement("li");
  const text = document.createTextNode(inputVal);
  list.appendChild(text);
  const myList = document.getElementById("myList");

  //Check if input value is given
  if (inputVal === "") {
    alert("You must write some to-do");
  } else {
    myList.appendChild(list);
    myList.classList.add("list");
  }

  // Adding close button at the end

  const span = document.createElement("SPAN");
  const closeBtn = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(closeBtn);
  list.appendChild(span);

  // adding onclick function to button
  const close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }

  // adding checked option for list

  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        const spanBox = document.createElement("SPAN");
        const tickBtn = document.createTextNode("\u2713");
        spanBox.classList.add("checkBox");
        spanBox.appendChild(tickBtn);
        list.appendChild(spanBox);
      }
    },
    false
  );
}
