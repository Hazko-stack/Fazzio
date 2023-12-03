$('#color-white').on('click', function () {
    $("#image-hero").hide();
    setTimeout(function () {
        $("#image-hero").show(1000);
        $("#image-hero").attr('src', "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023020308195019595T39833.png")
    }, 100);
});

$('#color-silver').on('click', function () {
    $("#image-hero").hide();
    setTimeout(function () {
        $("#image-hero").show(1000);
        $("#image-hero").attr('src', "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023012716395819515R4052.png")
    }, 100);
});
$('#color-black').on('click', function () {
    $("#image-hero").hide();
    setTimeout(function () {
        $("#image-hero").show(1000);
        $("#image-hero").attr('src', "https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023012716400023253U85661.png")
    }, 100);
});

$('.button__color button').on('click', function () {
    $('.button__color').find('button.active').removeClass('active');
    $(this).addClass('active');
});

$('#darkmode').on('change', function () {
    let darkmode = $('#darkmode').val();
    if (darkmode == 'dark') {
        $('#darkmode').val('light');
        $("body").attr('class', "dark__mode__bg")
        $('.hero__lead').find('span').addClass('dark__mode__text');
        $('.hero__lead').find('h1').addClass('dark__mode__text');
        $('.hero__lead').find('p').addClass('dark__mode__text');
    } else {
        $('#darkmode').val('dark');
        $("body").removeClass('dark__mode__bg');
        $('.hero__lead').find('span').removeClass('dark__mode__text');
        $('.hero__lead').find('h1').removeClass('dark__mode__text');
        $('.hero__lead').find('p').removeClass('dark__mode__text');
    }
});