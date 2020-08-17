// NAVBAR

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1.5s ease forwards ${index / 7 + 0.3}s`
            }
            
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });


}


    
const app = () => {
    navSlide();
}

app();


// DIAMOND FUNCTION



$(document).ready(function(){

    // Change images on hover

    $("#pic1").hover(function(){
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/1.jpg")', "background-size": 'cover', "background-position": 'center'});
    }, function() {
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/1.jpg")', "background-size": 'cover', "background-position": 'center'});
    });

    $("#pic2").hover(function(){
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/2.jpg")', "background-size": 'cover', "background-position": 'center'});
    }, function() {
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/1.jpg")', "background-size": 'cover', "background-position": 'center'});
    });

    $("#pic3").hover(function(){
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/3.jpg")', "background-size": 'cover', "background-position": 'center'});
    }, function() {
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/1.jpg")', "background-size": 'cover', "background-position": 'center'});
    });

    $("#pic4").hover(function(){
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/4.jpg")', "background-size": 'cover', "background-position": 'center'});
    }, function() {
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/1.jpg")', "background-size": 'cover', "background-position": 'center'});
    });

    $("#pic5").hover(function(){
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/5.jpg")', "background-size": 'cover', "background-position": 'center'});
    }, function() {
        $(".diamond_imgs").css({"background": 'url("assets/imgs/about_me/diamond/1.jpg")', "background-size": 'cover', "background-position": 'center'});
    });



});

