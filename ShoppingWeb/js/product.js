$(document).ready(function () {
    $(".filter-btn").click(function () {
        var id = $(".filter-btn").attr("id");
        if (id == "close-btn") {
            $(".filter-hidden-row").animate({ right: "-40%" });
            $(".filter-btn").animate({ right: "0%" });
            $(".filter-btn i").removeClass("fas fa-times");
            $(".filter-btn i").addClass("fa fa-filter");
            $(".filter-btn").attr("id", "");
        }
        else {
            $(".filter-hidden-row").animate({ right: "0%" });
            $(".filter-btn").animate({ right: "40%" });
            $(".filter-btn i").removeClass("fa fa-filter");
            $(".filter-btn i").addClass("fas fa-times");
            $(".filter-btn").attr("id", "close-btn");
        }
    })
})