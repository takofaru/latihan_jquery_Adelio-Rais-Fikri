$(function() {
    $(".toggleView").hide();
    $("#button").on("click", function(){
        $(".toggleView").show()
        $("#button").hide();
    })
    $("#fadeIn").on("click", function(){
        $("#textI_O").fadeIn("slow", function(){
            console.log("Fade In Pressed")
        });
    })
    $("#fadeOut").on("click", function(){
        $("#textI_O").fadeOut("slow", function(){
            console.log("Fade Out Pressed")
        });
    })
    $("#fadeToggle").on("click", function(){
        $("#textToggle").fadeToggle("slow", function(){
            console.log("Fade Toggle Pressed")
        });
    })
    $("#goTransparent").on("click", function(){
        $("#transparent").fadeTo("slow", 0.4, function(){
            console.log("Fade To Pressed")
        })
        setTimeout(function(){
            $("#transparent").fadeTo("slow", 1, function(){
                console.log("Text went back to 1")
            })
        }, 5000)
    })
    $("#slideUp").on("click", function(){
        $("#slideUDText").slideUp("slow", function(){
            console.log("Slide Up Pressed")
        })
    })
    $("#slideDown").on("click", function(){
        $("#slideUDText").slideDown("slow", function(){
            console.log("Slide Down Pressed")
        })
    })
    $("#slideToggleButton").on("click", function(){
        $("#slideToggleText").slideToggle("slow", function(){
            console.log("Slide Toggle Pressed")
        })
    })
    $("#startAnim").on("click", function(){
        $("#animText").animate({right: '+=60px'}, "slow").animate({opacity: 0.2}, "slow", function(){
            console.log("Start Pressed")
        })
        setTimeout(function(){
            $("#animText").animate({opacity: 1}, "slow").animate({left: '+=60px'}, "slow", function(){
                console.log("Text went back to origin")
            })
        }, 5000)
    })
    $("#stopAnim").on("click", function(){
        $("#animText").stop();
    })
});

