const bikesBody = document.getElementById('bikes-body');

fetch('http://localhost:8000/api/bikes')
.then(respones => respones.json())
.then(bikes => {
    bikes.forEach(bike => {
        const row = document.createElement('tr');
        const id = document.createElement('td');
        const brand = document.createElement('td');
        const model = document.createElement('td');
        const type = document.createElement('td');
        const price = document.createElement('td');
        const year = document.createElement('td');
        const actions = document.createElement('td');
    

        id.innerText = bike._id;
        brand.innerText = bike.brand;
        model.innerText = bike.model;
        type.innerText = bike.type;
        price.innerText = bike.price;
        year.innerText = bike.year;
        
        
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-primary';
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => {
            window.location.href =`../edit-bike/edit-bike.htmld?id=${bike._id}`;
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            if (confirm(`Are you sure you want to delete ${bike.brand} ${bike.model}?`) === true) {
                // delete the bike
                fetch(`http://localhost:8000/api/bikes/${bike._id}`, {
                    method: 'DELETE'
                })
                    .then(response => response.json())
                    .then(() => {
                        // remove the row from the table
                        row.remove();
                    });
                }
        });

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        row.appendChild(id);
        row.appendChild(brand);
        row.appendChild(model);
        row.appendChild(type);
        row.appendChild(price);
        row.appendChild(year);
        row.appendChild(actions);
        
        bikesBody.appendChild(row);
    })
});

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("bikes");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        // Пропускаем заголовок таблицы
        if (i !== 0) {
            td = tr[i].getElementsByTagName("td");
            var found = false;
            for (var j = 0; j < td.length; j++) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
            tr[i].style.display = found ? "" : "none";
        }
    }
}

