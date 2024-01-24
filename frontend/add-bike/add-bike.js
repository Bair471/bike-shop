const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Done');


    const brand = document.getElementById('brand');
    const model = document.getElementById('model');
    const type = document.getElementById('type');
    const price = document.getElementById('price');
    const year = document.getElementById('year');
    // console.log(brand.value);
    // console.log(model.value);
    // console.log(type.value);
    // console.log(price.value);
    // console.log(year.value);

    fetch('http://localhost:8000/api/bikes', {
       method: 'POST',
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
        console.log('Added');
    }) 
    // .then(respones => respones.json())
    // .then()
});

function clearForm() {
    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("type").value = "";
    document.getElementById("price").value = "";
    document.getElementById("year").value = "";
}