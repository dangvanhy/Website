function  slideButton1(){
    document.getElementById("S1").style.marginLeft = "0";
    document.getElementById("Bar1").style.backgroundColor = "Black";
    document.getElementById("Bar2").style.backgroundColor = "White";
    document.getElementById("Bar3").style.backgroundColor = "White";
    document.getElementById("Bar4").style.backgroundColor = "White";
}

function  slideButton2(){
    document.getElementById("S1").style.marginLeft = "-25%";
    document.getElementById("Bar1").style.backgroundColor = "White";
    document.getElementById("Bar2").style.backgroundColor = "Black";
    document.getElementById("Bar3").style.backgroundColor = "White";
    document.getElementById("Bar4").style.backgroundColor = "White";
}

function  slideButton3(){
    document.getElementById("S1").style.marginLeft = "-50%";
    document.getElementById("Bar1").style.backgroundColor = "White";
    document.getElementById("Bar2").style.backgroundColor = "White";
    document.getElementById("Bar3").style.backgroundColor = "Black";
    document.getElementById("Bar4").style.backgroundColor = "White";
}

function  slideButton4(){
    document.getElementById("S1").style.marginLeft = "-75%";
    document.getElementById("Bar1").style.backgroundColor = "White";
    document.getElementById("Bar2").style.backgroundColor = "White";
    document.getElementById("Bar3").style.backgroundColor = "White";
    document.getElementById("Bar4").style.backgroundColor = "Black";
}

window.addEventListener("load", function(){
    const sliderMain = document.getElementById("SMain1");
    const nextButton = document.querySelector(".NextButton");
    const preButton = document.querySelector(".PreButton");
    const slideWidth = document.getElementById("CS1").offsetWidth;
    let position = 0;
    let index = 1;

    nextButton.addEventListener("click", function(){
        handleChangeSlide(1);
    });

    preButton.addEventListener("click", function(){
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction){
        if(direction === 1){
            if(index < 3)
            {
                index = index + 1;
                position = position + slideWidth
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
            else{
                index = 0;
                position = 0;
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
        }
        else{
            if(index > 1){
                index = index - 1;
                position = position - slideWidth;
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
            else{
                index = 3;
                position = 2 * slideWidth;
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
        }
    }
});

window.addEventListener("load", function(){
    const sliderMain = document.getElementById("SMain2");
    const nextButton = document.getElementById("NButton");
    const preButton = document.getElementById("PButton");
    const slideWidth = document.querySelector(".SliderItem").offsetWidth;
    let position = 0;
    let index = 1;

    nextButton.addEventListener("click", function(){
        handleChangeSlide(1);
    });

    preButton.addEventListener("click", function(){
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction){
        if(direction === 1){
            if(index < 3)
            {
                index = index + 1;
                position = position + slideWidth
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
            else{
                index = 0;
                position = 0;
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
        }
        else{
            if(index > 1){
                index = index - 1;
                position = position - slideWidth;
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
            else{
                index = 3;
                position = 2 * slideWidth;
                sliderMain.style.transform = "translateX(" + (-position) + "px)";
            }
        }
    }
});

function AutumnWinterClothes(){
    const AWCSlider = document.getElementById("Slider1");
    const SSlider = document.getElementById("Slider2");
    const LabelA = document.getElementById("LabelAWCS");
    const LabelS = document.getElementById("LabelSS");

    AWCSlider.style.display = "block";
    SSlider.style.display = "none";

    LabelA.style.color = "black";
    LabelA.style.borderBottomColor = "black";
    LabelS.style.color = "#8e8e8e";
    LabelS.style.borderBottomColor = "#c0bfbf";
}

function Sportwear(){
    const AWCSlider = document.getElementById("Slider1");
    const SSlider = document.getElementById("Slider2");
    const LabelA = document.getElementById("LabelAWCS");
    const LabelS = document.getElementById("LabelSS");

    AWCSlider.style.display = "none";
    SSlider.style.display = "block";

    LabelS.style.color = "black";
    LabelS.style.borderBottomColor = "black";
    LabelA.style.color = "#8e8e8e";
    LabelA.style.borderBottomColor = "#c0bfbf";
}
