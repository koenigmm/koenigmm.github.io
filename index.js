"use-strict"

jQuery(document).ready(function() {
    $("#contact-button").click(function() {
        let cardtext = $("#button-adress");
        let adress = "ko<!--kommentar-->ntakt<!--kommentar-->@<!--kommentar-->koenig<!--kommentar-->marius.de";
        cardtext.html(adress);
    })
})

