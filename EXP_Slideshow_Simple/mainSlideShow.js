/*
    Há 4 (quatro funções no programa de SlideShow):
    - ShowSlides(startFromX) - Realiza a primeira manipulação dos elementos HTML que são componentes do SLIDES;
    - autoplaySlides(StartFromX) - A partir de um slide especificado, a função recursiva realiza o tratamento para realizar a troca de slides;
    - user_selectSlide() - São definidos os botões para direcioanar a um slide específico, o qual pode ser usuado pelo usuário;
    - changeSlide() - É realizado o tratamento em todos os slides, e põe visível o slide selecionado;
    
    Existe apenas uma variável global neste programa que é "timeSlideshow", que controla a velocidade e se o slideshow roda automático.
    É possível utilizar o programa sem a variável global, no entanto como o programa está construindo, haverá o pontêncial erro quando o usuário escolhe um slideshow específico.

    No decorrer do código há "console.logs" o qual demonstra o funcionamento das funções via console. Elas podem ser deletas caso deseje.
*/

let timerSlideshow;

function showSlides(startFromX){
    var i = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log("[DEV] [FUNCTION] [showSlide] [INICIO] slides: " + slides.length);
    console.log("[DEV] [FUNCTION] [showSlide] [INICIO] SlideIndex: " + startFromX);
    for (i = 0; i < slides.length; i++) {                                           //Todos os "slides" e "indicadores" são preparados;
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[startFromX].style.display = "block";                                     //O "slide" definido como o inicio é tratado para aparecer;
    dots[startFromX].className += " active";                                        //O "indicador" definido como o inicio é tratado para aparecer;
    console.log("[DEV] [FUNCTION] [showSlide] [FIM] SlideIndex: " + startFromX);
    autoplaySlides(startFromX);
}


function autoplaySlides(startFromX){
    var slideIndex = startFromX, cnt = -1;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log("[DEV] [FUNCTION] [autoplaySlides] [INICIO] StartfromX: " + startFromX + " Slide Index: " + slideIndex);
    if (slideIndex >= slides.length) {                                                             //Caso o "slideIndex" chegue no fim da matriz, realiza o devido tratamento dos slides e retorna a '0' (zero);
        slides[(slideIndex-1)].style.display = "none";
        dots[(slideIndex-1)].className = dots[(slideIndex-1)].className.replace(" active", "");
        slideIndex = 0;
    }
    for (cnt = -1; cnt < 2; cnt++){                     //A partir do "slideIndex" é realizado um tratamento no elemento anterior a ele, nele, depois dele. Esse tratamento é de fazer eles não serem 'mostrados'. 
        console.log("[DEV] [FUNCTION] [autoplaySlides] [FOR] [INICIO]" + " Slide Index: " + slideIndex + " cnt: " + cnt + " SlideIndex+cnt: " + (slideIndex+cnt));
        if((slideIndex+cnt) >= 0 && (slideIndex+cnt) < slides.length){                                                  //Checado se nas rendodezas do elemento "slideIndex" existem elementos definidos ao redor dele.
            console.log("[DEV] [FUNCTION] [autoplaySlides] [FOR] [IF]" + " Slide: " +  slides[(slideIndex+cnt)]);
            slides[(slideIndex+cnt)].style.display = "none";
            dots[(slideIndex+cnt)].className = dots[(slideIndex+cnt)].className.replace(" active", "");
        }
        else{
            console.log("[DEV] [FUNCTION] [autoplaySlides] [FOR] [ELSE]" + " Slide: " +  slides[(slideIndex+cnt)]);
        }
    }
    slides[slideIndex].style.display = "block";         //Feito o tratamento nos elementos em escopo, mostra-se o slide do "slideIndex" atual;  
    dots[slideIndex].className += " active";            //Feito o tratamento nos elementos em escopo, mostra-se o indicador do "slideIndex" atual;  
    slideIndex++;                                       //Passa para o próximo "slideIndex"; 
    console.log("[DEV] [FUNCTION] [autoplaySlides] [FIM] StartfromX: " + startFromX + " Slide Index: " + slideIndex);
    //debugger;
    return timerSlideshow = setTimeout(autoplaySlides, 2000, slideIndex);       //Recursividade da função, passando o próximo "slide" (slideIndex) a ser mostrado.
}


function user_selectSlide(){
    var dotButton = document.getElementsByClassName("dot");
    let i = 0;
    console.log("[DEV] [FUNCTION] [user_selectSlide] [INICIO] Button:" + i );
    do{
        console.log("[DEV] [FUNCTION] [user_selectSlide] [DO-WhILE] Button:" + i );
        dotButton[i].addEventListener('click', changeSlide.bind(null, i));
        i++;
    }while(i < dotButton.length);                                               //Enquanto haverem elementos da classe, são desiginados funções distintas a cada um deles.
    console.log("[DEV] [FUNCTION] [user_selectSlide] [FIM] Button:" + i );
}


function changeSlide(n){
    /*
        Por não saber quando um usuário irá realizar uma mudança voluntária no slideshow, e feito o seguinte tratamento:
        - Todos os slides deixam de ficar a mostra;
        - Apenas o slide selecionado fica amostra;
        [ALERTA] Isso não interrompe
    */
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex = n;
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += (" active");
    return clearTimeout(timerSlideshow);
}
/*
    Desenvolvedor: Roan Nunes.
*/