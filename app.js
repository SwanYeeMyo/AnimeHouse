const btnTag=document.getElementById("blackBtn");
const cardBody=document.querySelectorAll(".card-body");
const bodyTag=document.body;

console.log(bodyTag);
btnTag.addEventListener('click',()=>{
    if(btnTag.classList.contains("active")){
        bodyTag.style.backgroundColor="#0b0c2a";
        btnTag.classList.remove("active");
        btnTag.style.backgroundColor="white";
        btnTag.style.color="black";
    }else{
        bodyTag.style.backgroundColor="black";
        btnTag.style.backgroundColor="black";
        btnTag.classList.add("active");
        btnTag.style.color="white";
    }
    cardBody.forEach(card=> {
        if(card.classList.contains("active")){
            card.style.backgroundColor="#0b0c2a";
            card.classList.remove("active");
        }else{
             card.style.backgroundColor="black";
             card.classList.add("active");
        }
        
    });
   
});