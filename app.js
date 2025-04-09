const lista = document.getElementById('lista')
console.log(lista)

for (let i = 1; i < 101; i++) {
  const li = document.createElement('li');
  console.dir(li);
  li.classList.add('box--normale');
  li.append(i);
  lista.append(li);

  if (i % 3 === 0) {
    li.classList.add('box--fizz');
    li.append(`fizz`)
  }

  if (i % 5 === 0) {
    li.classList.add('box--buzz');
    li.append(`buzz`)
  }

  if (i % 15 === 0) {
    li.classList.add('box--fizzbuzz');
  }
}