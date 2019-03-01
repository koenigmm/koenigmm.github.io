"use-strict"

jQuery(document).ready(function () {

    $("#show-contact").click(function () {
        $("#contact-container").removeClass("d-none");
        $("#tp-id").removeClass("temp-padding");

        setTimeout(function () {
            let cardtext = $("#show-adress");
            let ph1 = "ko";
            let ph2 = "ntakt";
            let ph3 = "+";
            let ph4 = "forms";
            let ph5 = "&#64";
            let ph6 = "ko";
            let ph7 = "enigmarius.de"
            let ausgabe = ph1 + ph2 + ph3 + ph4 + ph5 + ph6 + ph7;
            cardtext.html("<a href = " + "ma" + "il" + "to" + ":" + ausgabe + ">" + ausgabe + "</a>");

            let placeholder01 = "https://formspree"
            let placeholder02 = ".io/ko"
            let placeholder03 = "ntakt+"
            let placeholder04 = "forms@ko"
            let placeholder05 = "enigmarius.de"
            let textForAction = placeholder01 + placeholder02 + placeholder03 + placeholder04 + placeholder05;

            $("#form").attr('action', textForAction);
        },500)

    })

})