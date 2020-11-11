/*SELECT2*/
function custom_template(obj){
    var data = $(obj.element).data();
    if(data && data['img_src']){
        img_src = data['img_src'];
        template = $("<div><img src=\"" + img_src + "\" style=\"width:30px;height:30px;\"//></div>");
        return template;
    }
}
var options = {
'templateSelection': custom_template,
'templateResult': custom_template,
}
$('.select_img').select2(options);
$(document.body).offset();
$('b[role="presentation"]').hide();
$('.select2-selection').css('border','0px');
$('.select2-container').children().css('border','0px');

/*CARROSSEL*/
$('.owl-carousel').owlCarousel({
    dots:false,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2,
            margin:5
        },
        600:{
            items:3,
            margin:5
        },
        1000:{
            items:5
        }
    }
})