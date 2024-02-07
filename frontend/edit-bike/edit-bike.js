// console.log(window.location.search)
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('x'));
console.log(urlParams.get('y'));
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Done');


    const brand = document.getElementById('brand');
    const model = document.getElementById('model');
    const price = document.getElementById('price');
    const year = document.getElementById('year');
    // console.log(brand.value);
    // console.log(model.value);
    // console.log(type.value);
    // console.log(price.value);
    // console.log(year.value);

    fetch(`http://localhost:8000/api/bikes/${urlParams.get('id')}`, {
       method: 'PUT',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({
            brand: brand.value,
            model: model.value,
            price: price.value,
            year: year.value
       })

    })
    
    .then( () => {
        console.log('Updated');
    }) 
    // .then(respones => respones.json())
    // .then()
});

// // get the bike id from the url
// const urlParams = new URLSearchParams(window.location.search);
// const bikeId = urlParams.get('id');

// // get the bike from the backend
// fetch(`http://localhost:8000/api/bikes/${bikeId}`)
//     .then(response => response.json())
//     .then(bike => {
//         // set the values for the form
//         document.getElementById('brand').value = bike.brand;
//         document.getElementById('model').value = bike.model;
//         document.getElementById('year').value = bike.year;
//         document.getElementById('price').value = bike.price;
//     });

// // edit the bike
// function editBike(event) {
//     event.preventDefault();

//     const form = event.target;

//     const bike = {
//         brand: form.brand.value,
//         model: form.model.value,
//         year: form.year.value,
//         price: form.price.value,
//     };

//     // send the bike to the backend
//     fetch(`http://localhost:8000/api/bikes/${bikeId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(bike)
//     })
//         .then(response => response.json())
//         .then(bike => {
//             // redirect to the bikes page
//             window.location.href = '../bike-list/bike-list.html';
//         });
// }