let count = 0;


$("button").on('click', (event) => {
    console.log("Yeah, you clicked me");
  });

$("#gomb").click(() => {
    $("#gomb").text("Liked!")
});

$("#gomb").click(() => {
  count += 1;
  $("#like").text(`${count}`);
});
