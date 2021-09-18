function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax);

// Links
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlider = document.querySelector('.main-slide');
const container = document.querySelector('.link__container');
const SlidesCount = mainSlider.querySelectorAll('div').length;

sidebar.style.top = `-${(SlidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
});

function changeSlide(deriction) {
    if (deriction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === SlidesCount) {
            activeSlideIndex = 0;
        }
    } else if (deriction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = SlidesCount - 1;
        }
    }
    const height = container.clientHeight;

    mainSlider.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

}

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
    }

    function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    }
}

slidesPlugin()