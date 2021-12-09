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