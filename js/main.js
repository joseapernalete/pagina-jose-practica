let ubicacion_principal= window.pageYOffset;


window.addEventListener("scroll",function(){
let ubicacion_actual= window.pageYOffset;
if(ubicacion_principal<ubicacion_actual){
    document.getElementsByTagName("nav")[0].style.top="-100px";
}
else{
    document.getElementsByTagName("nav")[0].style.top="0px";
}

})
/*menu*/
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.getElementById("ey").addEventListener("click", function(){
    if(semaforo){
        document.getElementById("ey").style.color ="#fff";
        semaforo= false;
    }else{
        document.getElementById("ey").style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos");
})

AOS.init();


