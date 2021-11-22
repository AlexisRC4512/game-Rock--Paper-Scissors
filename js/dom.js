import game from "./game.js";

const d=document;

d.addEventListener('click',(e)=>{
    game("#paper","#rock","#scissors")
    e.preventDefault();
})