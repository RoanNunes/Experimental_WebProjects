function make_BlocosAdapt_Hover(){
    var element = document.getElementsByClassName("bloco-Identidade");
    var i = 0;
    do{
        element[i].addEventListener("mouseover",  AdaptBloco_Hover.bind(this, i));
        element[i].addEventListener("mouseout",  AdaptBloco_Reset);
        //console.log("Elemento: " + element[i] + " Contador: " + i);
        i++;
    }while(element[i] != undefined && element[i] != null && i > 0 && i < element.length);
    return true;
}

function AdaptBloco_Hover(elementIndex){
    var element = document.getElementsByClassName("bloco-Identidade");
    var monitor = window.innerWidth;
    var i = 0;
    console.log("Elemento: " + element[elementIndex] + " Contador: " + elementIndex + " Screen width: " + monitor);
    if(monitor <= 900){
        return console.log("Monitor Under 900px!");
    }
    while(element[i] != undefined && element[i] != null && i >= 0 && i < element.length){
        element[i].style.gridColumn = "span 1";
        i++;
    }
    return element[elementIndex].style.gridColumn = "span 4";
}

function AdaptBloco_Reset(){
    var element = document.getElementsByClassName("bloco-Identidade");
    var i = 0;
    console.log("Elemento: " + element[i] + " Contador: " + i);
    while(element[i] != undefined && element[i] != null && i >= 0 && i < element.length){
        element[i].style.gridColumn = "span 2";
        i++;
    }
}

/*
function AdaptBloco_Hover(elementIndex){
    var element = document.getElementsByClassName("bloco-Identidade");
    var i = 0;
    console.log("Elemento: " + element[elementIndex] + " Contador: " + elementIndex);
    while(element[i] != undefined && element[i] != null && i >= 0 && i < element.length){
        element[i].style.color = "red";
        i++;
    }
    return element[elementIndex].style.color = "green";
}
*/
export {make_BlocosAdapt_Hover}
export default make_BlocosAdapt_Hover;