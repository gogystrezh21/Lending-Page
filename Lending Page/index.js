let nav = document.querySelector('.nav');
let btn = document.querySelector('.hamburger-menu');

btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('close');
});

nav.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.classList.contains('navlink')) {
        nav.classList.remove('open');
        btn.classList.remove('close')
    }
})

console.log('Вёрстка соответствует макету. Ширина экрана 768px +48\nблок <header> +6секция hero +6\nсекция skills +6\nсекция portfolio +6\nсекция video +4 (в этом пункте есть искажения по пикселям довольно болшие)\nсекция price +5 (в этом пункте есть искажения по пикселям до 10px.Можно и не снимать балл)\nсекция contacts +5 (в этом пункте есть искажения по пикселям до 10px. Можно и не снимать балл)\nблок <footer> +5 (в этом пункте есть искажения по пикселям до 10px. Можно и не снимать балл)\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nнет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\nнет полосы прокрутки при ширине страницы от 768рх до 480рх +5\nнет полосы прокрутки при ширине страницы от 480рх до 320рх +5\На ширине экрана 768рх и меньше реализовано адаптивное меню +22\nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\nвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\nСвою работу оцениваю на 75 баллов. Максимальный 85. Учитывая неболшие недочеты по пикселям, считаю, что оценка должна быть не ниже 75. Пишите в дискород, если есть вопросы) Удачи! Portfolio-part3 оцениваю также на 75 баллов. Дополнительных функций (смена стилей кнопок и сохранение языка с темой не использовалось)');

const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImage = document.querySelectorAll('.portfolio-img');
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/summer/${i}.jpg`;
    }
}
preloadSummerImages();

function preloadSpringImages() {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/spring/${i}.jpg`;
    }
}

preloadSpringImages();

function preloadWinterImages() {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/winter/${i}.jpg`;
    }
}

preloadWinterImages();

function preloadAutumnImages() {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/autumn/${i}.jpg`;
    }
}
preloadAutumnImages()

function changeImage(event) {
    let seasons = event.target.dataset.season;
    if (event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${seasons}/${index + 1}.jpg`);
        portfolioBtn.forEach((btn) => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
};
portfolioBtns.addEventListener('click', changeImage);


import i18Obj from './translate.js'
const lngswitch = document.querySelector('.lngswitch')
const langRu = document.querySelector('.lng-link');
const langEn = document.querySelector('.lng-linken');


function getTranslate(ru) {
    const list = document.querySelectorAll('[data-i18n]');
    list.forEach((el) => {
        el.textContent = i18Obj[ru][el.dataset.i18n]
        // console.log(i18Obj[ru][el.dataset.i18n])
        if (el.placeholder) {
            el.placeholder = i18Obj[ru][el.dataset.i18n]
            el.textContent = ''
        }
    })
};


langRu.addEventListener('click', () => getTranslate('ru'));
langEn.addEventListener('click', () => getTranslate('en'));


lngswitch.addEventListener('click', function (e) {
    if (e.target === langRu) {
        e.target.classList.add('active')
        langEn.classList.remove('active');
    } else if (e.target === langEn) {
        e.target.classList.add('active');
        langRu.classList.remove('active');
    }
});

const themeswitch = document.querySelector('.themeswitch')
const spvp = [ 'skills', 'portfolio', 'video', 'price']

function whiteTheme () {
    document.querySelector('body').classList.toggle('theme-light');
    document.querySelector('footer').classList.toggle('theme-footer')
    document.querySelector('.portfolio-btns').classList.toggle('theme-btns')
    spvp.forEach( (item) => {
        document.querySelector(`.${item}`).classList.toggle('theme-lightcolor');
    })
}

themeswitch.addEventListener('click', whiteTheme)



