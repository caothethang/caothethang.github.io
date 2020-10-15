//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    try {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    catch (err) {
        window.scrollTo(0, 0);
    }
}


// đây này
var btnDes = document.getElementsByClassName("w3-bar-item")
btnDes[0].addEventListener("click", function () {
    btnDes[1].style.borderBottom = "none";
    btnDes[0].style.borderBottom = "2px solid black";
    btnDes[1].style.color = "#f68e2e";
    btnDes[0].style.color = "black";
})
btnDes[1].addEventListener("click", function () {
    btnDes[0].style.borderBottom = "none";
    btnDes[1].style.borderBottom = "2px solid black";
    btnDes[0].style.color = "#f68e2e";
    btnDes[1].style.color = "black";
})
function openDes(desName) {
    var i;
    var x = document.getElementsByClassName("description-product");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(desName).style.display = "block";
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 30,
    responsiveClass: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})