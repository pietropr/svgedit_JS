$(document).ready(function() {

    var select   = $('select');
    var circulo1 = $('.circulo-1');
    var circulo2 = $('.circulo-2');
    var circulo3 = $('.circulo-3');
    var circulo4 = $('.circulo-4');
    var limite_1 = $('.limite');
    var limite_2 = $('.limite-2');
    var furo     = $('.furo');
    var body = $('body');



    circulo1.attr('r', '78');
    limite_1.attr('value', '78');


    furo.attr('r', '24.2');
    limite_2.attr('value', '24.2');


    var limite = limite_1.attr('value');
    var limite2 = limite_2.attr('value');


    $('.escolha-aros input').click(function() {

        $('.cores .aros').css('display', 'none');

        var id = $(this).attr('id');
        console.log(id);

        if($(this).attr('id') == 'aro1') {
            $('.cores .aro1').css('display', 'block');
        }

        if($(this).attr('id') == 'aro2') {
            $('.cores .aro1').css('display', 'block');
            $('.cores .aro2').css('display', 'block');
        }

        if($(this).attr('id') == 'aro3') {
            $('.cores .aro1').css('display', 'block');
            $('.cores .aro2').css('display', 'block');
            $('.cores .aro3').css('display', 'block');
        }

        if($(this).attr('id') == 'aro4') {
            $('.cores .aro1').css('display', 'block');
            $('.cores .aro2').css('display', 'block');
            $('.cores .aro3').css('display', 'block');
            $('.cores .aro4').css('display', 'block');
        }

    });


    //hibilita sleect materialize
    select.material_select();


    //escolha de cores selects
    select.on('change', function() {
        var id = $(this).attr('id');
        var cor = $('option:selected',this);
        var corFim = $(cor).attr('class');
        console.log(id);
        console.log(cor);

        $('circle.'+id).css('fill', corFim);
    });

    //Tamanho da bolacha
    $('#tamanho-bolacha').on('mouseup', function () {
        var isso = $(this).attr('id');
        var classe = $('.tamanho-bolacha .value').text();

        $('#'+isso).attr('value' , classe);
        $('.limite').attr('value', parseInt(classe)+30);
        limite = $('.limite').attr('value');

        // $('circle').attr('r', '00');

        $('.circulo-1').attr('r', limite);


        if($('.circulo-2').attr('r') != '00') {

            $('.circulo-2').attr('r', limite - 10);

        }

        if($('.circulo-3').attr('r') != '00') {

            $('.circulo-3').attr('r', limite - 20);

        }

        if($('.circulo-4').attr('r') != '00') {

            $('.circulo-4').attr('r', limite - 30);
        }


        delimita();


    });

    //Tamanho furo
    $('#tamanho-furo').on('mouseup', function () {
        var isso2 = $(this).attr('id');
        var classe2 = $('.tamanho-furo .value').text();

        $('#'+isso2).attr('value' , classe2);
        $('.limite-2').attr('value', parseInt(classe2)+5.2);
        limite2 = $('.limite-2').attr('value');
        $('.furo').attr('r', limite2);
        // $('circle').attr('r', '00');

        reduzFuro();

        if(circulo4.attr('r') !== '00') {
            var diferente = parseInt($('.circulo-4').attr('r')) - limite2;

            if(diferente <= 9) {
                $('.furo').attr('r', limite2 - diferente );
                $('.limite-2').attr('value', 25.2);
                limite2 = limite_2.attr('value');
            }

            $('.furo').attr('r', limite2);
        }

        delimita();

    });

    $('form .qtd-aros input').click(function() {


        if($(this).attr('value') == 1) {

            $('.circulo-1').attr('r', limite);
            $('.circulo-2').attr('r', '00');
            $('.circulo-3').attr('r', '00');
            $('.circulo-4').attr('r', '00');

        }

        if($(this).attr('value') == 2) {

            $('.circulo-1').attr('r', limite);
            $('.circulo-2').attr('r', parseInt(limite2)  + 10);
            $('.circulo-3').attr('r', '00');
            $('.circulo-4').attr('r', '00');
        }

        if($(this).attr('value') == 3) {

            $('.circulo-1').attr('r', limite);
            $('.circulo-2').attr('r', parseInt(limite2) + 10);


            $('.circulo-3').attr('r', parseInt(limite2) + 20);

            $('.circulo-4').attr('r', '00');
        }

        if($(this).attr('value') == 4) {

            $('.circulo-1').attr('r', limite);
            $('.circulo-2').attr('r', parseInt(limite2)  + 10);
            $('.circulo-3').attr('r', parseInt(limite2)  + 20);
            $('.circulo-4').attr('r', parseInt(limite2)  + 30);

        }

            reduzFuro();

        $('.furo').attr('r', limite2);

    });

    //ARO 1
    $('#tamanho-aro-2').on('mouseup', function () {

        var tamanhoAro2 = $('.tamanho-aro-2 .value').text();
        var tamanho2 = parseInt(tamanhoAro2) + parseInt(limite2);

        if( tamanho2 > limite) {

            $('.circulo-2').attr('r', ((parseInt(tamanhoAro2) + parseInt(limite2)) - parseInt(limite2)));

        } else {

            $('.circulo-2').attr('r', (parseInt(tamanhoAro2) + parseInt(limite2)));
        }


    });

    //ARO 2
    $('#tamanho-aro-3').on('mouseup', function () {

        var tamanhoAro3 = $('.tamanho-aro-3 .value').text();
        var tamanho3 = parseInt(tamanhoAro3) + parseInt(limite2);

        if( tamanho3 > limite) {

            $('.circulo-3').attr('r', ((parseInt(tamanhoAro3) + parseInt($('.circulo-2').attr('r')) - parseInt(limite2))));

        } else {

            $('.circulo-3').attr('r', (parseInt(tamanhoAro3) + parseInt($('.circulo-2').attr('r'))));
        }



    });


    $('#tamanho-aro-4').on('mouseup', function () {

        var tamanhoAro4 = $('.tamanho-aro-4 .value').text();
        var tamanho4 = parseInt(tamanhoAro4) + parseInt(limite2);

        if( tamanho4 > limite) {

            $('.circulo-4').attr('r', ((parseInt(tamanhoAro4) + parseInt($('.circulo-3').attr('r')) - parseInt(limite2))));

        } else {

            $('.circulo-4').attr('r', (parseInt(tamanhoAro4) + parseInt($('.circulo-3').attr('r'))));
        }


    });



    function reduzFuro() {
        if($('.circulo-2').attr('r') != 0) {
            if(parseInt(limite2) >= $('.circulo-2').attr('r'))
            {
                limite2 = parseInt($('.circulo-2').attr('r')) - 10;
            }
        }

        if($('.circulo-3').attr('r') != 0) {
            if(parseInt(limite2) >= $('.circulo-3').attr('r'))
            {
                limite2 = parseInt($('.circulo-3').attr('r')) - 10;
            }
        }

        if($('.circulo-4').attr('r') != 0) {
            if(parseInt(limite2) >= $('.circulo-4').attr('r'))
            {
                limite2 = parseInt($('.circulo-4').attr('r')) - 10;
            }
        }

        return limite2;
    }
    function delimita() {
        var limite1 = $('.limite').attr('value');
        var limite2 = $('.limite-2').attr('value');

        $('.delimitador').attr('value', limite1 - limite2);
        alteraRange()
    }
    function alteraRange() {

       $('#tamanho-aro-2').attr({
           'min': 1,
           'max':  $('.delimitador').attr('value')
       });

        $('#tamanho-aro-3').attr({
            'min': 1,
            'max':  $('.delimitador').attr('value')
        });

        $('#tamanho-aro-4').attr({
            'min': 1,
            'max':  $('.delimitador').attr('value')
        });
    }
    function menu_size() {
        if ($(document).scrollTop() > 50) {
            body.addClass("small");
        } else {
            body.removeClass("small");
        }
    }

    $(window).scroll(function () {

        var header = $('.spy2');
        var mainPosition = body.position();

        header.css('top', $(document).scrollTop() + mainPosition.top + 'px');

        menu_size();

        //pega posicao do spy
        var posBotao = header.css('top');
        var posForm = $('.resto-formulario').position().top;

        if(parseInt(posForm) - parseInt(posBotao) <= 270  ) {
            body.addClass('travar');

        } else {
            body.removeClass('travar');
        }



    });
});