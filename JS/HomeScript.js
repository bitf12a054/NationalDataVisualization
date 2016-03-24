$(document).ready(function () {
   
    

    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
});

$('#post1').on('click', function () {
    $('#uper').load('CellPhone.html');
})

$('#post2').on('click', function () {
    $('#uper').load('Laptop.html');
})

$('#post3').on('click', function () {
    $('#uper').load('Vehicle.html');
})

function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

$('.accordion-section-title').click(function () {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');

    $('.accordion .accordion-section-title').removeClass('active');
    // $('.accordion .accordion-section-content').slideUp(300).removeClass('open');

    $(this).addClass('active');
    $('.accordion ' + currentAttrValue).slideToggle(300).addClass('open');
});

$('.accordion-section-title').click(function () {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');

    // Open and close here
});

function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}