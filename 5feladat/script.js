

$("button").click(() => {
    let input1 = $("input")
    let value = input1.val();
    $("ul").append(`<li>${value} <input type="checkbox" id="terms"></li>`)
    input1.val('');
});
