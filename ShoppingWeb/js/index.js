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
        $("#hidden-cover").css("display", "none !important;")
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
