let input = document.getElementById("input");
let btn = document.getElementById('enter');
let ul = document.querySelector('.listItems');
let lilist = document.getElementsByTagName('li');

function createList() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    // console.log(child);
    ul.appendChild(li);
    input.value = "";

    function Listclick() {
        li.classList.toggle('none');
    }
    li.addEventListener('click', Listclick);

    // console.log(li.classList.contains('none'));
    let btn1 = document.createElement('button');
    btn1.appendChild(document.createTextNode('X'));
    li.appendChild(btn1);

    function deletelist() {
        li.classList.add('delete');
    }
    btn1.addEventListener('click', deletelist);

}

btn.addEventListener('click', function() {
    // console.log(input.value.length);
    if (input.value.length > 0) {
        createList();
    }
});

// function keyPress(e) {
//     if ((input.value.length > 0) && e.which == 13) {
//         console.log("e.key");
//         createList();
//     }
// }

// input.addEventListener('keypress', keyPress);
input.addEventListener('keypress', function(e) {
    if ((input.value.length > 0) && e.keyCode == 13) {
        createList();
    }
});