const h1 = document.createElement('h1');
h1.textContent = 'Работа с DOM';
document.body.prepend(h1);

const a = document.createElement('a');
a.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model';
a.textContent = 'DOM';
const main = document.getElementById('main');
main.append(a);

const backgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};
backgroundColor('lightblue');

const addLi = (text) => {
  const li = document.createElement('li');
  const list = document.getElementById('list');
  li.textContent = text;
  list.append(li);
};
addLi('Hello World');

const removeCopyright = (id) => {
  const el = document.getElementById(id);
  el.remove();
};
removeCopyright('copyright');
