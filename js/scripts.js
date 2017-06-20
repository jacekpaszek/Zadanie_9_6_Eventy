var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var element = document.createElement('li');
  var text = document.createTextNode('item ' + list.childElementCount);  
  element.appendChild(text);
  list.appendChild(element);
});