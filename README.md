# coder-SegundaPreEntrega-BackEnd

-Descripción: ecommerce con variedad de productos como frutas, verduras, lacteos o panificados.

-requisitos: vsc, node js, mongoDB, postman.  

-instalación en vsc: 

  1. git clone https://github.com/FrancisArturo/coder-SegundaPreEntrega-BackEnd.git
  
  2. npm i 
  
-correr el proyecto: npm run start 

-Pruebas a realizar 

PRODUCTS   

1.Método GET

1.1.  http://localhost:8000/api/v1/products/insertion
Deberá insertar los productos en la BD.

1.2 http://localhost:8000/api/v1/products
Devolverá la lista de todos los productos en la BD renderizados en una vista. 

1.3 http://localhost:8000/api/v1/products?category=category&limit=limit&sort=sort
Devolverá la lista de todos los productos filtrados según las query pasadas. 
-Deberá filtrar por categoria de acuerdo al valor pasado en category(frutas, verduras, lacteos, panificados). Por defecto mostrará todos.
-Deberá limitar la cantidad de productos mostrados al valor pasado en limit. Por defecto mostrará 10 productos por página.
-Deberá ordenar los productos de acuerdo al parámetro pasado en sort, teniendo en cuenta el precio de los productos. Por defecto estarán desordenados.

1.4 http://localhost:8000/api/v1/products/pid
Devolverá solo el producto cuya id pasamos en pid.

2.Método POST

2.1 http://localhost:8000/api/v1/products
Deberá agregar el producto pasado en req.body. Debe devolver un error siempre que:
-El producto ya se encuentre en la lista de productos
-No se pasen todos los campos con información requerida en el esquema de productos: 
{title: string, description: string, code: string, price: number, status: boolean, stock: number, category: string}.

3.Método PUT
3.1 http://localhost:8000/api/v1/products/pid
Deberá actualizar el producto cuya id fue pasada en pid con el o los campos que pasamos en req.body.
Debe devolver error si la id pasada no corresponde a ningun producto de la lista.

4.Método DELETE 
4.1 http://localhost:8000/api/v1/products/pid
Deberá eliminar de la lista al producto cuya id fue pasada en pid. 
Debe dar error si la id pasada no corresponde a ningun producto de la lista.


CARTS

1.Método GET
1.1 http://localhost:8000/api/v1/carts/cid
Devolverá todos los productos del carrito cuya id fue pasada en cid renderizados en una vista donde se verá la información de cada uno de ellos. 
Debe dar error si la id pasada no corresponde a ningun carrito en la DB.

2. Método POST
2.1 http://localhost:8000/api/v1/carts/cid/products/pid
Debe agregar el producto cuya id fue pasada en pid al carrito cuya id fue pasada en cid.
Debe dar error si la cid no corresponde a ningun carrito en la DB.
Debe dar error si la pid no corresponde a ningun producto en la DB.
Si el producto pasado ya existe en el carrito, debe incrementar la cantidad en 1 unidad.

También se puede agregar un producto desde la vista de productos http://localhost:8000/api/v1/products con el boton "agregar al carrito". 
Este botón crea un nuevo carrito y agrega el producto. El resto de productos que se agreguen con los botones se agregaran al mismo carrito y se mantendran hasta que termine la sesión.

3.Método PUT 
3.1 http://localhost:8000/api/v1/carts/cid
Debe actualizar toda la lista de productos que se encuentran en el carrito cuya id fue pasada en cid por los que se pasen en req.body

3.2 http://localhost:8000/api/v1/carts/cid/products/pid
Debe actualizar la cantidad del producto cuya id fue pasada en pid por la cantidad que sea pasada en req.body:
{ quantity: number }.
Debe dar error si la cid no corresponde a ningun carrito en la DB.
Debe dar error si la pid no corresponde a ningun producto en la DB.

4.Método DELETE
4.1 http://localhost:8000/api/v1/carts/cid
Debe eliminar todos los productos del carrito cuya id fue pasada en cid. 
Debe dar error si la cid no corresponde a ningun carrito en la DB.

4.2 http://localhost:8000/api/v1/carts/cid/products/pid
Debe eliminar el producto cuya id fue pasada en pid del carrito cuya id fue pasada en cid. 
Debe dar error si la cid no corresponde a ningun carrito en la DB.
Debe dar error si la pid no corresponde a ningun producto en el carrito.


