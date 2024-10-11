class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class CarritoDeCompras {
    constructor() {
        this.productos = [];
    }
    agregarProducto() {
        let nombre = document.getElementById('nombre').value;
        let precio = document.getElementById('precio').value;
        let cantidad = document.getElementById('cantidad').value;

        // Verificamos que el precio sea válido
        if (!nombre || precio <= 0) {
            document.getElementById('resultado').innerHTML += "<br>Por favor ingresa un nombre y un precio válido.";
            return;
        }

        // Creamos un nuevo producto
        let producto = new Producto(nombre, precio, cantidad);

        // Agregamos el producto al carrito
        this.productos.push(producto);

        // Mostramos el mensaje de agregado
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('resultado').innerHTML += `<br>${producto.cantidad} unidades de ${producto.nombre} ha sido agregado correctamente al carrito por $${producto.precio}.`;
    }

    eliminarProducto() {
        const productoAEliminar = prompt('¿Qué producto deseas eliminar?').toLowerCase();

        // Buscar el índice del producto a eliminar
        const indice = this.productos.findIndex(producto => producto.nombre.toLowerCase() === productoAEliminar);

        // Si el producto existe en el arreglo
        if (indice !== -1) {
            // Eliminar el producto del arreglo
            const productoEliminado = this.productos.splice(indice, 1); // splice elimina y devuelve el producto eliminado
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('resultado').innerHTML += `<p>El producto ${productoEliminado[0].nombre} ha sido eliminado.</p>`;
        } else {
            // Si no se encuentra el producto
            document.getElementById('resultado').innerHTML += `<p>El producto "${productoAEliminar}" no se encontró en el carrito.</p>`;
        }
    }

    mostrarCarrito() {
        const resultadoDiv = document.getElementById('resultado');

        if (this.productos.length === 0) {
            resultadoDiv.innerHTML += '<p>El carrito está vacío.</p>';
        } else {
            const subtotal1 = this.productos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
            let des = 0;
            if (subtotal1 > 3000) {
                des = 0.10;
            }
            const descuento=subtotal1*des;
            const subtotal2=subtotal1-descuento;
            const igv=0.18*subtotal2;
            const total=subtotal2+igv;
            document.getElementById('resultado').innerHTML += `<p>IGV %: 18%.</p>`;
            document.getElementById('resultado').innerHTML += `<p>Subtotal 1: ${subtotal1}.</p>`;
            document.getElementById('resultado').innerHTML += `<p>Descuento %: ${des}.</p>`;
            document.getElementById('resultado').innerHTML += `<p>Descuento: ${descuento}.</p>`;
            document.getElementById('resultado').innerHTML += `<p>Subtotal 2: ${subtotal2}.</p>`;
            document.getElementById('resultado').innerHTML += `<p>IGV: ${igv}.</p>`;
            document.getElementById('resultado').innerHTML += `<p>Total a pagar: ${total}.</p>`;

            resultadoDiv.innerHTML += '<h3>Productos en el carrito:</h3>';
            this.productos.forEach(producto => {
                resultadoDiv.innerHTML += `<p>${producto.cantidad} unidades de ${producto.nombre} - $${producto.precio} cada una.</p>`;
            });
        }
    }
}

const carrito = new CarritoDeCompras();

function insertarPrecio() {
    const productoSeleccionado = document.getElementById('nombre').value;

    switch (productoSeleccionado) {
        case 'Teclado':
            document.getElementById('precio').value = 300;
            break;
        case 'Mouse':
            document.getElementById('precio').value = 50;
            break;
        case 'PC':
            document.getElementById('precio').value = 1000;
            break;
        case 'Audifono':
            document.getElementById('precio').value = 100;
            break;
        default:
            document.getElementById('precio').value = 0; // Valor por defecto si no hay coincidencia
            break;
    }
}
