const pianokeys=document.querySelectorAll('.piano-keys .key'),
volumeslider= document.querySelector('.volume-slider input'),
keycheckbox= document.querySelector('.keys-checkbox input');
console.log(keycheckbox)


let allkeys=[]
let audio= new Audio("tunes/a.wav");
const playtune=(key)=>{
    audio.src=`tunes/a.wav`;
    audio.play();
    console.log(allkeys)

    const clickedkey= document.querySelector(`[data-key="${key}"]`)
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active")
    }, 300);
}


pianokeys.forEach((key)=>{
        allkeys.push(key.dataset.key)
         key.addEventListener("click", ()=>{
            playtune(key.dataset.key)
         })    
})




const handerVolume= (e)=>{
    audio.volume = e.target.value;
}

const showHideKeys=()=>{
    pianokeys.forEach(key=> key.classList.toggle("hide"))
}


const pressedkey = (e)=>{
    if(allkeys.includes(e.key))
    playtune(e.key);
}

keycheckbox.addEventListener("click", showHideKeys);
volumeslider.addEventListener("input", handerVolume);
document.addEventListener("keydown",pressedkey);