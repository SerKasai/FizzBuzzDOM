const lista = document.getElementById('lista')
console.log(lista)

for (let i = 1; i <= 100; i++) {
  const div = document.createElement('div');
  console.dir(div);
  div.classList.add('box--normale');
  // div.append(div);
  // lista.append(div);

  if (i % 3 === 0 && i % 5 === 0) {
    div.classList.add('box--fizzbuzz');
    div.append(`fizzbuzz`)

  } else if (i % 3 === 0) {
    div.classList.add('box--fizz');
    div.append(`fizz`)

  } else if (i % 5 === 0) {
    div.classList.add('box--buzz');
    div.append(`buzz`)

  } else {
    div.append(i);
  }

  lista.append(div);

}