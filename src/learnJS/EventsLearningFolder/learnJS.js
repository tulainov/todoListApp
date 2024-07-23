// document.addEventListener("DOMContentLoaded", function () {
//
//     const button = document.querySelector("button");
//
//     button.addEventListener("click", newText);
//
//     function newText() {
//         const name = prompt("Enter button name");
//         button.textContent = `New button's name: ${name}`;
//     }
// });

function newText() {
    const button = document.getElementById('butt');

    const name = prompt("Enter button name");
    button.textContent = `New button's name: ${name}`;

    button.addEventListener("click", newText)
}

// document.addEventListener("DOMContentLoaded", () => {
//
//    function createParagraph() {
//        const para = document.createElement('p');
//        para.textContent = "you've clicked the button!";
//        document.body.appendChild(para);
//    }
//
//    const buttons = document.querySelector("button");
//
//    buttons.addEventListener("click", createParagraph);
// });

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}
