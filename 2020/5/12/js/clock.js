const clockContainer = document.querySelector(".clock"),
    clock = clockContainer.querySelector(".clock_text");


function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerHTML = hours + " : " + minutes + " : " + seconds;
    clock.innerHTML = `${hours<10 ? `0${hours}` : hours} : ${minutes<10 ? `0${minutes}` : `${minutes}`} : ${seconds<10 ? `0${seconds}` : `${seconds}`}`;
}

(function () {
    console.log('start');
    setInterval(() => {
        getTime();
    }, 1000);
})();