



$(document).ready(function () {
    var putOnShirt = function () {
        $('div.print').html(($.base64Decode($.URLDecode($.query.get('slogan')))));
    }

    $('#put_on_shirt').click(function () {
        window.location = 'OnAShirt.htm?slogan=' + $.URLEncode($.base64Encode($('.slogan').val()));
    });

    putOnShirt();
});