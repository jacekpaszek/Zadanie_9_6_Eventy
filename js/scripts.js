var list = document.getElementById('list');
var i = document.getElementById('list').childElementCount;
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var element = document.createElement('li');
  var text = document.createTextNode('item ' + i);  
  element.appendChild(text);
  list.appendChild(element);
});