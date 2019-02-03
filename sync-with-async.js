const URL = 'https://jsonplaceholder.typicode.com/todos/';

async function createPromise (index) {
    let time = Date.now();
    await window.fetch(`${URL}${index}`)
    .then(response => response.json())
    .then(json => {
        console.log('--------new---------');
        console.log('Real task number - ', index);
        console.log('list', json); 
        console.log(`real done in ${(Date.now() - time) / 1000} seconds`); 
        console.log('--------done---------');
        console.log('');
    })
}

let promArr = [];

for (let i = 0; i < 10; i++) {
    promArr.push(createPromise(i));
}

async function workProm (promArr) {
    await Promise.all(promArr);
    console.log('finished');
}

workProm(promArr);
