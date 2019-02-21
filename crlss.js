function musicTabFunction(){
    x=document.getElementById("musicContent");
    if(x.style.display==="none"){
        x.style.display="inline-block";
        
        document.getElementById("musicTab").innerHTML="-&nbsp;&nbsp;M&nbsp;&nbsp;U&nbsp;&nbsp;S&nbsp;&nbsp;I&nbsp;&nbsp;C";
        
        document.getElementById("musicTab").style.color="black";
        document.getElementById("musicTab").style.backgroundColor="rgba(95, 94, 94, 0.53)";
    }
    else{
        x.style.display="none";
        document.getElementById("musicTab").innerHTML="+&nbsp;&nbsp;M&nbsp;&nbsp;U&nbsp;&nbsp;S&nbsp;&nbsp;I&nbsp;&nbsp;C";
        
        document.getElementById("musicTab").style.color="black";
        document.getElementById("musicTab").style.backgroundColor="rgba(172, 172, 172, 0.50)";
    }
}