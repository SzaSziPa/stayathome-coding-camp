

$("button").click(() => {
    let input1 = $("input")
    let value = input1.val();
    $("ul").append(`<li>${value}</li> <input type="checkbox" id="terms">`)
    input1.val('');
});