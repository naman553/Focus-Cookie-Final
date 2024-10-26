let cookie = document.getElementById("cookie");
        let cookie2 = document.getElementById("cookie2");
        let cookie3 = document.getElementById("cookie3");
        let text = document.getElementById("text");

        let text2 = document.getElementById("cont1");

        let foc = document.getElementById("focus");
        // COOKIE FLOATS AWAY EFFECT 
        window.addEventListener("scroll",
            function () {
                var value = window.scrollY;

                cookie.style.marginLeft = -value * 1.5 + 'px';
                cookie.style.marginTop = -value * 1 + 'px';
                cookie2.style.marginRight = -value * 1.5 + 'px';
                cookie2.style.marginTop = -value * 1 + 'px';
                cookie3.style.marginTop = -value * 1 + 'px';

                text.style.top = 243 + value * 1 + 'px';
            }
        )
        // SCROLL EFECT
        let scroll = function scroll() {
            document.getElementById('cont1').scrollIntoView({
                behavior: 'smooth' // Ensures smooth scrolling
            });
        }

        cookie.addEventListener("click", scroll)

        // TEXT FADE IN EFFECT
        window.addEventListener("scroll", function () {
            text2.classList.add('fadein');
            foc.classList.add('changecolor');
        })