$(document).ready(function() {
    $('.menu-hamburguer').click(function() {
        $('.menu').slideToggle()
    })
    
    $('input[required]').each(function() {
        var label = $('label[for="' + $(this).attr('id') + '"]');
        label.append('<span style="color: red">*</span>');
    });

    $('textarea[required]').each(function() {
        var label = $('label[for="' + $(this).attr('id') + '"]');
        label.append('<span style="color: red">*</span>');
    });

    $('#telefone').mask('(00) 00000-0000')
})