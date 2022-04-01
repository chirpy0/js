// let num = 0;
// // slider(num);
// let rightbtn = document.getElementById("next");
// let leftbtn = document.getElementById("prev");

// function inc(x) {
//     num = num + x;
//     slider(num);
// }

// function currentSlide(n) {
//     num = n;
//     slider(n);
// }
// slider(num);

// function slider(x) {
//     let slides = document.getElementsByClassName("slide");
//     let dot = document.getElementsByClassName("dots");

//     if (num < 0) {
//         num = slides.length - 1;
//         x = slides.length - 1;
//     }
//     if (num > slides.length - 1) {
//         num = 0;
//         x = 0;
//     }
// for (let y of slides) {
//     y.style.display = "none";
// }
// for (let z of dot) {
//     // z.style.backgroundColor = "#bbb";
//     z.className = z.className.replace(" active", "");
// }
//     dot[x].className += " active";
//     // dot[x].style.backgroundColor = "#717171";
//     slides[x].style.display = "block";
//     // setTimeout(slider, 2000);

// }


//Autoslider
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     let slides = document.getElementsByClassName("slide");
//     let dot = document.getElementsByClassName("dots");
//     for (let y of slides) {
//         y.style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
// for (let z of dot) {
//     z.className = z.className.replace(" active", "");
// }
//     slides[slideIndex - 1].style.display = "block";
//     dot[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


//Multiple slideshows 

var slideIndex = [1, 1];

var id = ['slide1', 'slide2'];
var dots = ['dots1', 'dots2'];
showSlides(1, 0);
showSlides(1, 1);

function inc(x, y) {
    showSlides(slideIndex[y] += x, y);
}

function currentSlide(a, b) {
    showSlides(slideIndex[b] = a, b);
}

function showSlides(n1, n2) {

    let slides = document.getElementsByClassName(id[n2]);
    let dot = document.getElementsByClassName(dots[n2]);
    if (n1 > slides.length) { slideIndex[n2] = 1; }
    if (n1 < 1) { slideIndex[n2] = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (let j = 0; j < dot.length; j++) {
        dot[j].className = dot[j].className.replace(" active", "");
    }
    slides[slideIndex[n2] - 1].style.display = "block";
    dot[slideIndex[n2] - 1].className += " active";
}