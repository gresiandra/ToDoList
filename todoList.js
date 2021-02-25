const btnAdd = document.querySelector('#btnAdd');
const input = document.querySelector('#inputs');
const sectionResult = document.querySelector('.result');

btnAdd.addEventListener('click', (e) => {

    const div = document.createElement('div');
    const p = document.createElement('p');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');

    if (input.value === '') {
        input.style.border = '1px solid red';
    }
    else {
        input.style.border = '1px solid black';

        sectionResult.append(div);
        div.append(p);
        p.innerText = input.value;

        div.append(button1);
        button1.innerHTML = `&#10004`;
        button1.setAttribute('id', 'btnDone');
    
        div.append(button2);
        button2.innerHTML = '&#10008';
        button2.setAttribute('id', 'btnRemove');
    }

    document.querySelector('#inputs').value = "";

    button1.addEventListener('click', () => {
        p.style.textDecoration = 'line-through';
        console.log(e.target);
    })

    button2.addEventListener('click', () => {
        sectionResult.removeChild(div);
    })

    e.stopPropagation();

})