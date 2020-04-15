let names = ['Stepan', 'Noemi', 'Nimrod', 'Amalia', 'Sabina'];
$('ul li').remove();
names.forEach(element => {
    console.log(element)
    $('ul').append(
        `<li>${element}</li>`
    );
    if (element == 'Sabina') {

    }
});


