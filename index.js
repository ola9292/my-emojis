
const myEmojis = ["👨‍💻", "🎶", "🍲", "🛒"]
const emojiContainer = document.getElementById("emoji-container")
let emojiInput = document.getElementById('emoji-input')
const pushBtn = document.getElementById('push-btn');
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn');
const shiftBtn = document.getElementById('shift-btn')

function renderEmoji(){
    let emojis = ''
    for (let i = 0; i < myEmojis.length; i++) {
   emojis += myEmojis[i]
    }
    emojiContainer.innerHTML = emojis;
}
renderEmoji()

pushBtn.addEventListener('click',function(){
 
    if(emojiInput.value){
        myEmojis.push(emojiInput.value);
        console.log(myEmojis)
        emojiInput.value = ''
        renderEmoji()
    }
})

popBtn.addEventListener('click',function(){
    myEmojis.pop()
    console.log(myEmojis)
    renderEmoji()
})


unshiftBtn.addEventListener('click',function(){

    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value);
        console.log(myEmojis)
        emojiInput.value = ''
        renderEmoji()
    }
})

shiftBtn.addEventListener('click',function(){
    myEmojis.shift()
    console.log(myEmojis)
    renderEmoji()
})