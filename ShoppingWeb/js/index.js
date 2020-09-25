$(document).ready(() => {
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
    })
    // hidden-menu
})