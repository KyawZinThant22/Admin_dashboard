$(".sidebar-btn").click(function() {
    $(".sidebar").animate({ marginLeft: 0 })
})

$(".hide-btn").click(function() {
    $(".sidebar").animate({ marginLeft: "-100%" })
})