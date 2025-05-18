
let Alert = document.querySelector(".alert");
let chat = document.querySelector(".someonechatting");
let inputTecerName = document.getElementById("input-text");
const sound = new Audio('ipnot.mp3');
const sound2 = new Audio('winerr.mp3');

document.getElementById("btn").addEventListener("click", () => {

    localStorage.setItem("nama", inputTecerName.value)

    setTimeout(() => {
        Alert.style.display = "flex";
        sound.currentTime = 0;
        sound2.play()

        setTimeout(() => {
            chat.style.transform = "translate(-50%, 10%)"
            sound.currentTime = 0;
            sound.play()
        }, 7000)
    }, 2000)
})

chat.addEventListener("click", () => {
    window.location.href = "messager.html"
})
