var cadastrar = document.getElementById('cadastrar');
var alterar = document.getElementById('alterar');
var deletar = document.getElementById('deletar');

var id = document.getElementById('id');
var item = document.getElementById('item');
var description = document.getElementById('description');
var price = document.getElementById('price');
var collection = document.getElementById('collection');
var sku = document.getElementById('sku');
var warehouse = document.getElementById('warehouse');



cadastrar.addEventListener('click', function(e) {
    let data = {
        "appID": "36ds6gXQpAHQAKuGYOrg",
        "mutations": [
            {
                "kind": "add-row-to-table",
                "tableName": "native-table-E3C68B58BhF1OSvlOX3h",
                "columnValues": {
                    "Item": item.value,
                    "Description": description.value,
                    "Price": price.value,
                    "Collection": collection.value,
                    "SKU": sku.value,
                    "Warehouse location": warehouse.value
                }
            }
        ]
    };
 
    fetch("https://api.glideapp.io/api/function/mutateTables", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ad18f479-6af0-4105-b2db-32764b301ea8`
    },
    body: JSON.stringify(data)
    }).then(res => res.json()
    .then (json => console.log(json))
    );

    e.preventDefault();
});

alterar.addEventListener('click', function(e) {
    let data = {
        "appID": "36ds6gXQpAHQAKuGYOrg",
        "mutations": [
            {
                "kind": "set-columns-in-row",
                "tableName": "native-table-E3C68B58BhF1OSvlOX3h",
                "columnValues": {
                    "Item": item.value,
                    "Description": description.value,
                    "Price": price.value,
                    "Collection": collection.value,
                    "SKU": sku.value,
                    "Warehouse location": warehouse.value
                },
                "rowID": id.value
            }
        ]
    };
 
    fetch("https://api.glideapp.io/api/function/mutateTables", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ad18f479-6af0-4105-b2db-32764b301ea8`
    },
    body: JSON.stringify(data)
    }).then(res => res.json()
    .then (json => console.log(json))
    );

    e.preventDefault();
});

deletar.addEventListener('click', function(e) {
    let data = {
        "appID": "36ds6gXQpAHQAKuGYOrg",
        "mutations": [
            {
                "kind": "delete-row",
                "tableName": "native-table-E3C68B58BhF1OSvlOX3h",
                "rowID": id.value
            }
        ]
    };
 
    fetch("https://api.glideapp.io/api/function/mutateTables", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ad18f479-6af0-4105-b2db-32764b301ea8`
    },
    body: JSON.stringify(data)
    }).then(res => res.json()
    .then (json => console.log(json))
    );

    e.preventDefault();
})