const btnAdd = document.querySelector('#btnAdd');
const input = document.querySelector('#inputs');


btnAdd.addEventListener('click', () => {

    const div = document.createElement('div');
    const p = document.createElement('p');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const sectionResult = document.querySelector('.result')

    sectionResult.append(div);
    div.append(p);
    p.innerText = input.value;

    div.append(button1);
    button1.innerHTML = `&#10004`;
    button1.setAttribute('id', 'btnDone');

    div.append(button2);
    button2.innerHTML = '&#10008';
    button2.setAttribute('id', 'btnRemove');

    button1.addEventListener('click', () => {
        p.style.textDecoration = 'line-through';
    })

    button2.addEventListener('click', () => {
        sectionResult.removeChild(div);
    })

})