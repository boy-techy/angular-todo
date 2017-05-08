$(".Collapsable").click(function () {

    $(this).parent().children().toggle();
    $(this).toggle();

});

$(".Collapsable").each(function(){

    $(this).parent().children().toggle();
    $(this).toggle();
});