$(".sidebar-btn").click(function() {
    $(".sidebar").animate({ marginLeft: 0 })
})

$(".hide-btn").click(function() {
    $(".sidebar").animate({ marginLeft: "-100%" })
})


function jumpToSmt(url) {
    setTimeout(function() {
        location.href = `${url}`;
    }, 500)

}

$(function() {
    $('[data-toggle="popover"]').popover()
})

$(".maximize-btn").click(function() {
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    if (current.hasClass("full-screen-card")) {
        $(this).html(`<i class="feather-minimize-2"></i>`)
    } else {
        $(this).html(`<i class="feather-maximize-2"></i>`)

    }
})

let currentHeight = $(window).height();
let currentMenuHeight = $(".nav-menu .active").offset().top;

if (currentMenuHeight > currentHeight * 0.8) {
    $(".sidebar").animate({
        scrollTop: currentMenuHeight - 100
    }, 1000)
}