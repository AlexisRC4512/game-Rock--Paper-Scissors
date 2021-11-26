import game from "./game.js";

const d=document;

d.addEventListener('DOMcontentLoaded',(e)=>{
    game("#paper","#rock","#scissors")
    e.preventDefault();
})