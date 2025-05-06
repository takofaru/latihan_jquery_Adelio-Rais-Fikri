import $ from 'jquery'
$(function() {
    $(".title").hide();
    $(".main").hide();
    $(".title").fadeIn("slow", "swing", function() {
        // Defer to next repaint/frame
        $(".main").fadeIn("slow", "swing");
        const numberEl = $(".number").get(0);
        if (numberEl) {
            const listWidth = numberEl.getBoundingClientRect().width;
            console.log("List width:", listWidth); // Debug
            $(".bar").css("width", listWidth-24 + "px");
        }
    });
});

