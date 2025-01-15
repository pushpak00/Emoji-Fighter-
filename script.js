let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    function randomEmoji() {
    let emojiRandom = Math.floor(Math.random() * (fighters.length))
    return fighters[emojiRandom]
    }
    stageEl.textContent = `${randomEmoji()} vs ${randomEmoji()}`
    //console.log(emojiRandom)

})