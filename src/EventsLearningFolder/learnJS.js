document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", newText);

    function newText() {
        const name = prompt("Enter button name");
        button.textContent = `New button's name: ${name}`;
    }
});
