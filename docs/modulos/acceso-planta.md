# Acceso Planta

El modulo de viajes es el encargado de poder recibir fletes que llegan 
a la empresa. En el instante que es recibido se procede 
a registrar la recepcion del producto. 
En este momento unicamente se crea la recepción del viaje. 

Anteriormente se realizaba como un solo movimiento, pero ahora el modulo se ha 
abstraido la funcionalidad para que se gestione como un elemento independiente.

Este modulo unicamente será utilizado:

- Vigilantes 
- Auxiliares de vigilancia


## Registro de fletes
El registro de fletes permite ingresar la información del viaje, en donde la información reelevante es la siguiente

- Chofer 
- Vehiculo 
- Plataforma
- Fecha y hora de entrada
- Comentarios
- Flete
	+ Numero de flete 
	+ Recipientes 
	+ Tipo Recipientes
	+ proveedor
	+ Rancho 
	+ Tabla
	+ Producto
	+ Variedad

## Catalogos

**Chofer**

Catalogo que almacena a los choferes, que llegan con el producto a la planta

**Vehiculo**

Catalogo que almacena todo lo referente a los vehiculos

**Plataforma**

Catalogo que almacena todo lo referente a las plataformas que transportan el producto 

**Tablas**

Catalogo que almacena las pacelas del proveedor

**Ranchos**

Catalogo que indica el rancho de procedencia  del proveedor

**Zonas**

Catalogo que indica que que zona viene el rancho

**Marcas**

Catalogo que guarda las marcas de los camiones que llegan a la planta

**Tipo de licencia**

Catalogo que especifica el tipo de licencia que puede tener un chofer

**Proveedores**

Catalogo que contiene la información de todos los proveedores que tiene la empresa y de los cuales reciben el producto
