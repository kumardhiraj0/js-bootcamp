let count = 0;

function updateCounter() {
  count++;
  document.getElementById("count").textContent = count;
}

const button = document.getElementById("counterButton");
// button.ondblclick = updateCounter; or
button.addEventListener("click",updateCounter);
