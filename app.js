var head = document.getElementById("textCycle");
const roles = ["Software Developer", "Web Developer", "IT Technician", "Game Developer"];
head.innerHTML = roles[0];
i=0;
setInterval(function(){
    head.style.opacity = 0;
    setTimeout(function(){
        i++;
        if(i >= roles.length){
            i = 0;
        }
        head.innerHTML = roles[i];
        head.style.opacity = 1;
    }, 500);
},4000);


