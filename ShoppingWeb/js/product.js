$(document).ready(function () {
    $(".filter-btn").click(function () {
        var id = $(".filter-btn").attr("id");
        var width = $(".filter-hidden-row").outerWidth();
        if (id == "close-btn") {
            // $(".filter-hidden-row").animate({ right: "-40%" });
            $(".filter-hidden-row").hide();
            $(".filter-btn").animate({ right: "0%" });
            $(".filter-btn i").removeClass("fas fa-times");
            $(".filter-btn i").addClass("fa fa-filter");
            $(".filter-btn").attr("id", "");
        }
        else {
            $(".filter-hidden-row").show();
            $(".filter-hidden-row").animate({ right: "0%" });
            $(".filter-btn").animate({ right: width });
            $(".filter-btn i").removeClass("fa fa-filter");
            $(".filter-btn i").addClass("fas fa-times");
            $(".filter-btn").attr("id", "close-btn");
        }
        console.log(width)
    })
})

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

// 
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
            items: 5,
            nav: true,
            loop: true
        }
    }
})