

function fcToggle(){
   
    document.querySelector(".indicador").classList.toggle("active")
   document.querySelector("body").classList.toggle("active")
   bandera=document.querySelector(".indicador").classList.contains("active")
   console.log(bandera)
    if(bandera){
        document.querySelector("#icono").classList.add("bi-sun")
        console.log(1)
    }
    else{
        document.querySelector("#icono").classList.remove("bi-sun")
        document.querySelector("#icono").classList.add("bi-moon")
        console.log(2)
    }
}
