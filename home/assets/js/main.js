const leanne_img = document.getElementById("leanne_img");
const div1 = document.getElementsByClassName("leanne_img1");

const words = document.getElementById("words");

function myScript(){
    words.style.color= "red";
}

function myScript2(){
    words.style.color= "black";
}

words.addEventListener("mouseover", myScript);
words.addEventListener("mouseout", myScript2);



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