// Todo
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("Add Task");
  } else {
    let newElem = document.createElement("ul");
    newElem.innerHTML = `${inputs.value}<i class="ri-delete-bin-fill"></i>`;
    text.appendChild(newElem);
    inputs.value = "";
    newElem.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElem.remove();
    }
  }
}

// TIME

(function () {
  setInterval(() => {
    var t = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = t;
  }, 1000);
})();
