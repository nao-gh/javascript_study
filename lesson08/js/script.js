$(function(){

    let pieData = {
        labels: ["aaa","bbb","ccc","ddd"],
        series: [14, 9, 8, 6]
    };
    let pieOptions = {
        height: "440px",
        width: "100%"
    };

    new Chartist.Pie(".pie-chart", pieData, pieOptions);

    let barData = {
        labels: ["2018年", "2019年", "2020年"],
        series: [[10, 16, 29]]
    }
    
    let barOptions = {
        axisY: {
            offset: 60,
            scaleMinSpace: 50,
            labelInterpolationFunc: function(value) {
                return value + "人"
            }
        },
        height: "400px",
        width: "100%"
        };

        new Chartist.Bar(".bar-chart", barData, barOptions);

        $(".wrapper").eq(0).addClass("tx");
        $(".wrapper").eq(1).addClass("tx");
        //$(".wrapper").eq(3).addClass("tx");

        const posStart = 400;

        let
        pos2 = $(".wrapper").eq(2).offset().top - 400;
        pos3 = $(".wrapper").eq(3).offset().top - 400;
 
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > pos2.top) {
                
                $(".wrapper").eq(2).addClass("tx");
            }
        });

        $(window).on("scroll", function() {
            if ($(this).scrollTop() > pos3.top) {
                $(".wrapper").eq(3).addClass("tx");
            }
        });
});