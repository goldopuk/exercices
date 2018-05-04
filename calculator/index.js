var btnAdd = document.querySelector('#btn-add');

btnAdd.addEventListener('click', function () {
   var nb1 = document.querySelector("#number1");
   var nb2 = document.querySelector("#number2");

   var sum = parseFloat(nb1.value) + parseFloat(nb2.value);

   var nodeResult = document.querySelector("#result-box");

   nodeResult.innerHTML = sum;
});
