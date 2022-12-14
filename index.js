const input = document.getElementById("button");

function addingEventListener(e) {
    alert("I was clicked!");
};

input.addEventListener("click", addingEventListener);
