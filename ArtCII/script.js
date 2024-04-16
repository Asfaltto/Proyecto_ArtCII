
let tbody = document.getElementById("contenidotabla")

tbody.append(alimentar_tabla())

// fetch
fetch("http://localhost:3000/mensajes")
    .then(res => console.log(res))

// crear datos en tabla
function alimentar_tabla(){
    let td = document.createElement('tr');
    td.innerHTML = `<td class="tede">Pepe</td><td class="tede">Increible pagina, me encanta, estaria aca todo el tiempo es que es impresionante lo mucho que se puede hacer. Es la mejor pagina de toda internet</td>`
}