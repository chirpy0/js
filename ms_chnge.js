let cont = document.querySelectorAll('.slider');
for (let i = 0; i < cont.length; i++) {

    function slider() {
        let x = 0;
        let slide = cont[i].querySelectorAll('.slide');
        let prev = cont[i].querySelector('.prev');
        let next = cont[i].querySelector('.next');
        let dots = cont[i].querySelector('.dot');
        let totalSlide = slide.length;
        for (let j = 0; j < slide.length; j++) {
            dots.insertAdjacentHTML('beforeend', `<span class="dot_dot" data-target="${j}"></span>`);
        }
        let dot = cont[i].querySelectorAll('.dot_dot')
        var prevSlide = function() {
            if (x == 0) {
                x = totalSlide - 1;
            } else {
                x--;
            }
            changeSlides(x);
        }
        var nextSlide = function() {
            if (x == totalSlide - 1) {
                x = 0;
            } else {
                x++;
            }
            console.log(x);
            changeSlides(x);
        }
        var changeSlides = function(slides) {
            z = totalSlide;
            console.log(z);
            while (z--) {
                slide[z].style.display = "none";
                dot[z].style.backgroundColor = "#bbb"
            }
            slide[slides].style.display = "block";
            dot[slides].style.backgroundColor = "#717171"
        }
        prev.addEventListener('click', prevSlide);
        next.addEventListener('click', nextSlide);
        dots.addEventListener('click', function(e) {
            if (e.target.classList.contains('dot_dot')) {
                let target = e.target.getAttribute('data-target');
                changeSlides(target);
            }
            console.log(e.target.getAttribute('data-target'));
        });
        dot[x].style.backgroundColor = "#717171"
        slide[x].style.display = "block";
    }
    slider();
}