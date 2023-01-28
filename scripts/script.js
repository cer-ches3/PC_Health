document.getElementById("button-to-price").onclick=function(){
    document.getElementById("zag_vopros").scrollIntoView({behavior: "smooth"});
}

document.getElementById("o_nas").onclick=function(){
    document.getElementById("info").scrollIntoView({behavior: "smooth"});
}
document.getElementById("price").onclick=function(){
    document.getElementById("zag_vopros").scrollIntoView({behavior: "smooth"});
}

document.getElementById("slideUp").onclick=function(){
    document.getElementById("header").scrollIntoView({behavior: "smooth"});
}

document.getElementById("next1").onclick = function () {
    document.getElementById("vopros1").style.display="none"
    document.getElementById("vopros2").style.display="flex"
    }
document.getElementById("next2").onclick=function(){
    document.getElementById("vopros2").style.display="none"
    document.getElementById("vopros3").style.display="flex"
}
document.getElementById("next3").onclick=function(){
    document.getElementById("vopros3").style.display="none"
    document.getElementById("vopros4").style.display="flex"
}
document.getElementById("next4").onclick=function(){
    document.getElementById("vopros4").style.display="none"
    document.getElementById("vopros5").style.display="flex"
}
document.getElementById("submit").onclick=function(){
    if (document.getElementById("name").value===""){
        alert("Заполните поле имя")
    } else if (document.getElementById("phone").value===""){
        alert("Заполните поле телефон")
    } else {
        alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время")
        document.getElementById("vopros5").style.display = "none"
        document.getElementById("vopros6").style.display = "flex"
    }
}
