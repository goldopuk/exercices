var div = document.querySelector('div');

div.addEventListener('mouseover', function (e) {
   console.log(new Date());
   this.style.backgroundColor = 'red';
   e.stopPropagation();
}, true);

// div.addEventListener('mouseout', function () {
//     console.log(new Date());
//     this.style.backgroundColor = '';
// });
