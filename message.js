
let chat = document.querySelector(".paramChat");
const sound = new Audio('discord-notification.mp3');
const song = new Audio('jiwa-yg-bersedih.mp3');
let outro = document.querySelector(".bg");

song.play()

fetch("./data.json")
    .then(res => res.json())
    .then(data => {

        let index = 0;

        function show() {
            if (index < data.length) {

                const item = data[index];

                let divChat = document.createElement("div")
                let divTop = document.createElement("div")
                let createParam = document.createElement("p")
                let createName = document.createElement("p")
                let createNumber = document.createElement("p")

                createParam.innerText = item.text.replaceAll("name", localStorage.getItem("nama"))
                createNumber.innerText = item.number
                createName.innerText = item.tags

                chat.append(divChat)
                divChat.append(divTop)
                divChat.append(createParam)

                divTop.append(createName)
                divTop.append(createNumber)

                divChat.setAttribute("class", "chat")
                divTop.setAttribute("class", "nameAndnumber")
                createParam.setAttribute("class", "chatting")

                sound.currentTime = 0;
                sound.play();

                index++
                setTimeout(show, 5000);
            }

            else {
                setTimeout(() => {
                    outro.style.visibility = "visible"
                    outro.style.opacity = "1"

                    setTimeout(() => {
                        document.querySelector(".center-element-target").style.left = "0%"

                        setTimeout(() => {
                            document.body.style.opacity = 0;
                            outro.style.opacity = 0;
                        }, 10000)
                    }, 500)
                }, 5000)
            }
        }

        show()

    })