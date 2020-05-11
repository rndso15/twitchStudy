window.document.querySelectorAll('div').forEach(function (e) {
    e.style.border = "1px solid red";
})

const nameContainer = document.querySelector('.name');

function drawName(name) {
    nameContainer.innerHTML = "";

    const drawName = document.createElement('span');
    drawName.className = "name_text";
    drawName.innerHTML = `HELLO  ${localStorage.getItem('username')}`;
    console.dir(drawName);
    nameContainer.appendChild(drawName);
}

function handleSubmit(event) {
    event.preventDefault(); // 버블링 제거
    const form = event.target;
    const input = form.querySelector('input');
    const value = input.value;

    localStorage.setItem("username", value);
    // 입력받은 이름을 출력해주면됨.
}

function drawInput() {
    const input = document.createElement('input');
    input.placeholder = "이름을 입력해주세요";
    input.type = "text";
    input.className = "name_input";

    const form = document.createElement('form');
    form.addEventListener("submit", handleSubmit);

    form.appendChild(input);
    nameContainer.appendChild(form);
}

function getName() {
    const name = localStorage.getItem('username');
    if (name === null) {
        drawInput();
    } else {
        drawName(name);
    }
}

(function () {
    getName()
})();