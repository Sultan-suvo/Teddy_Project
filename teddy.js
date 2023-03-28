document.getElementById("review-btn").addEventListener("click", function () {
    const myElement = document.getElementById("floatingTextArea2");
    const myValue = myElement.value;
    const P = document.createElement("P");
    P.innerText = myValue;
    const parent = document.querySelector("#commet-contaier");
    parent.appendChild(P);
    myElement.value = '';
})

document.getElementById("floatingTextArea2").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const myElement = document.getElementById("floatingTextArea2");
        const myValue = myElement.value;
        const P = document.createElement("P");
        P.innerText = myValue;
        const parent = document.querySelector("#commet-contaier");
        parent.appendChild(P);
        myElement.value = '';
    }
})
