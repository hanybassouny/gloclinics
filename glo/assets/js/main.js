$(document).ready(function () {
//     $("span").on("mouseenter" , function () { 
//         $(this).addClass("animated rubberBand special");
//     });

//     $("span").on("mouseleave" , function () { 
//         $(this).removeClass("animated rubberBand special");
//     });


//     $(".social li").on("mouseenter" , function () { 
//         $(this).addClass("animated rubberBand");
//     });

//     $(".social li").on("mouseleave" , function () { 
//         $(this).removeClass("animated rubberBand");
//     });






    $(".menu li:nth-child(1)").on("mouseenter",function(){
        $("#home").html('Home').css({
            "color":"#c3b772",
            "transition": "all 0.3s ease-in-out",
            "font-weight":"bold"
        });

    });

    $(".menu li:nth-child(1)").on("mouseleave",function(){
        $(this).html('<a id="home" href="index.html"><i class="fas fa-home"></i></a>');
        });





    $(".menu li:nth-child(2)").on("mouseenter",function(){
        $("#about").html("About").css({
            "color":"#c3b772",
            "transition": "all 0.3s ease-in-out",
            "font-weight":"bold",
            
        });

    });

    $(".menu li:nth-child(2)").on("mouseleave",function(){
        $(this).html('<a href="about.html" id="about"><i class="fas fa-user"></i></a>');
        });




        
        
    $(".menu li:nth-child(3)").on("mouseenter",function(){
        $("#skills").html('Services').css({
            "color":"#c3b772",
            "transition": "all 0.3s ease-in-out",
            "font-weight":"bold"
        });

    });

    $(".menu li:nth-child(3)").on("mouseleave",function(){
        $(this).html('<a id="skills" href="skills.html"><i class="fas fa-cog"></i></a>');
    });

    
                    




    // $(".menu li:nth-child(4)").on("mouseenter",function(){
    //     $("#work").html('Work').css({
    //         "color":"#FB0E48",
    //         "transition": "all 0.3s ease-in-out",
    //         "font-weight":"bold"
    //     });

    // });

    // $(".menu li:nth-child(4)").on("mouseleave",function(){
    //     $(this).html('<a id="work" href="#"><i class="fas fa-eye"></i></a>');
    // });


        





    $(".menu li:nth-child(4)").on("mouseenter",function(){
        $("#contact").html('Contact').css({
            "color":"#c3b772",
            "transition": "all 0.3s ease-in-out",
            "font-weight":"bold"
            
        });

    });

    $(".menu li:nth-child(4)").on("mouseleave",function(){
        $(this).html('<a id="contact" href="contact.html"><i class="fas fa-envelope"></i></a>');
    });


            

    
});



$(document).ready(function(){
    $('.tagBall').cloudTag({ballSize:200});
});









$( document ).ready( function() {

    var entries = [ 
        
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JAVASCRIPT' },
        { label: 'JQUERY' },
        { label: 'BOOTSTRAP' },
        { label: 'VUE JS'},
        { label: 'ANGULAR JS' },
        { label: 'WORDPRESS' },
        { label: 'SASS' },
        { label: 'HTML5' },
        { label: 'CSS3' },
        { label: 'TYPESCRIPT'},

    ];

    var settings = {

        entries: entries,
        width: 430,
        height: 430,
        radius: '40%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '16',
        fontColor: '#FB0E48',
        fontWeight: 'bold',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#holder' ).svg3DTagCloud( settings );

} );