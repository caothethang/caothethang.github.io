$(document).ready(() => {
    document.getElementById("search-input-hidden").setAttribute("style", "display:none");
    // hidden-menu
    $("#btn-show-menu").click(function () {
        $(".menu-hidden").animate({ left: "0%" }, "slow");
        $(".cover").animate({ left: "30%" }, "slow");
        document.getElementById("hidden-cover").setAttribute("style", "display:block !important;")
        var heightOfPage = $("html").outerHeight();
        $(".cover").css("height", heightOfPage);
        
    })
    $("#btn-hide-menu").click(function () {
        $(".menu-hidden").animate({ left: "-60%" }, "slow");
        $(".cover").animate({ left: "100%" }, "slow");
        document.getElementById("hidden-cover").setAttribute("style", "display:none !important;")
    })
    $(".cover").click(() => {
        $(".menu-hidden").animate({ left: "-60%" }, "slow");
        $(".cover").animate({ left: "100%" }, "slow");
        document.getElementById("hidden-cover").setAttribute("style", "display:none !important;")
        $("#search-input-hidden").css("display", "none");
        $("#search-input-text-hidden").val("");
    })
    // hidden-menu
    // show-search-input
    $("#show-search-input").click(function () {
        $(".cover").animate({ left: "0%" }, "slow");
        document.getElementById("hidden-cover").setAttribute("style", "display:block !important;")
        var heightOfPage = $("html").outerHeight();
        $(".cover").css("height", heightOfPage);
        $(".cover").css("z-index", "1");
        $("#search-input-hidden").css("display", "block");
    })
    // show-search-input
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
    stagePadding: 50,
    responsiveClass: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 3,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})
