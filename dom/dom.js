var node = document.getElementById('box');

console.log(node);

var Calculator = {
  nb1: null,
  nb2: null,
  operator: null
};

node.addEventListener('click', function () {
   alert('here');
});

node.addEventListener('mouseover', function () {
    this.classList.toggle('selected');
});

function move(val) {
    var val = parseInt(val) || 1;
    val++;
    return val + 'px';
}

document.addEventListener('keydown', function (e) {
    console.log('keypress', e);



    var code = e.keyCode;

    if ([37, 38, 39, 40].indexOf(code) < 0) {
        return;
    }

    switch (code) {
        case 37:
            var val = parseInt(node.style.left) || 1;
            val--;
            node.style.left =  val + 'px';
            break;
        case 38:
            var val = parseInt(node.style.top) || 1;
            val--;
            node.style.top =  val + 'px';
            break;
        case 39:
            var val = parseInt(node.style.left) || 1;
            val++;
            node.style.left =  val + 'px';
            break;
        case 40:
            var val = parseInt(node.style.top) || 1;
            val++;
            node.style.top =  val + 'px';
            break;

    }

});


var input = document.getElementById('name');

input.addEventListener('blur', function () {
    console.log(this.value);
});

var table = document.querySelector('.calculator');

table.addEventListener('click', function (e) {
   console.log('event', e.currentTarget);

   var target = e.target;
   var nb = parseInt(target.innerHTML);

   if (isNaN(nb)) {
       var operator = target.innerHTML;
   }



});
