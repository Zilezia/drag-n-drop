let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        selected = e.target;
    });
}

rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

rightBox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
});

leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

leftBox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selected) {
        leftBox.appendChild(selected);
        selected = null;
    }
});
