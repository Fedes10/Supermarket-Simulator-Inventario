document.addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('caja-busqueda');
    let filasProductos = document.querySelectorAll('.fila-producto');

    inputBusqueda.addEventListener('input', function() {
        let valorBusqueda = inputBusqueda.value.trim().toLowerCase();

        filasProductos.forEach(fila => {
            let textoFila = fila.cells[1].textContent.trim().toLowerCase(); // Acceder al contenido de la segunda columna (Producto)
            let coincide = textoFila.includes(valorBusqueda); // Verificar si el texto de la columna incluye el valor de búsqueda

            if (coincide) {
                fila.style.display = ''; // Mostrar la fila si coincide
            } else {
                fila.style.display = 'none'; // Ocultar la fila si no coincide
            }
        });
    });
});
