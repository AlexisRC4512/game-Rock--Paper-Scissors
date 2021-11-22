export default function game(paper,rock,scissors){
    const d=document;
    const res=d.getElementById("res");
  let  p=0;
   let s=1;
   let r=2;
    let cpu;
   d.addEventListener('click',(e)=>{
 
    if (e.target.matches(paper)) {
        cpu=Math.floor(Math.random()*3)
        if (cpu==s) {
            res.innerHTML=`
                <button  class="bn col-3"  ><i class="far fa-hand-paper fa-2x" ></i></button>
                <p >You Lose</p>
                <button  class="bn col-3" ><i class="far fa-hand-scissors fa-2x"></i></button>
            `
        }
        if(cpu==r){
            res.innerHTML=`
            <button  class="bn col-3"  ><i class="far fa-hand-paper fa-2x" ></i></button>
            <p >You Win</p>
            <button  class="bn col-3"  ><i class="far fa-hand-rock fa-2x" ></i></button>
        `  
        }
        if(cpu==p){
            res.innerHTML=`
            <button  class="bn col-3"  ><i class="far fa-hand-paper fa-2x" ></i></button>
            <p>Draw</p>
            <button  class="bn col-3"  ><i class="far fa-hand-paper fa-2x" ></i></button>
        `   
        }
    }
    if (e.target.matches(rock)) {
        cpu=Math.floor(Math.random()*3)
        if (cpu==p) {
            res.innerHTML=`
            <button  class="bn col-3"  ><i class="far fa-hand-rock fa-2x" ></i></button>
          
                <p>You Lose</p>
              
                <button  class="bn col-3"  ><i class="far fa-hand-paper fa-2x" ></i></button>
            `
        }else if(cpu==s){
            res.innerHTML=`
            <button  class="bn col-3"  ><i class="far fa-hand-rock fa-2x" ></i></button>

            <p>You Win</p>
           
            <button  class="bn col-3" ><i class="far fa-hand-scissors fa-2x"></i></button>
        `
        }else{
            res.innerHTML=`
            <button  class="bn col-3"  ><i class="far fa-hand-rock fa-2x" ></i></button>
         
            <p>Draw</p>
      
            <button  class="bn col-3"  ><i class="far fa-hand-rock fa-2x" ></i></button>
        `
        }
    }
    if (e.target.matches(scissors)) {
        cpu=Math.floor(Math.random()*3)
        if (cpu==p) {
            res.innerHTML=`
            <button  class="bn col-3" ><i class="far fa-hand-scissors fa-2x"></i></button>
             
                <p>You Lose</p>
              
                <button  class="bn col-3"  ><i class="far fa-hand-rock fa-2x" ></i></button>
            `
        }else if(cpu==s){
            res.innerHTML=`
            <button  class="bn col-3" ><i class="far fa-hand-scissors fa-2x"></i></button>
       
            <p>You Win</p>
       
            <button  class="bn col-3"  ><i class="far fa-hand-paper fa-2x" ></i></button>
        `
        }else{
            res.innerHTML=`
            <button  class="bn col-3" ><i class="far fa-hand-scissors fa-2x"></i></button>
        
            <p>Draw</p>
        
            <button  class="bn col-3" ><i class="far fa-hand-scissors fa-2x"></i></button>
        `
        }
    }  
    e.preventDefault()
   })
}