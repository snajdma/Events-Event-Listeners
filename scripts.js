$("#first").click(() => {
    console.log("Yeah, you clicked me");
});

$("#second").click(() => {
    $('#first').text('Coronavirus outbreak!');
});

$("#third").click(() => {
    $("button").css("background-color", "peachpuff");
});