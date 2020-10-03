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