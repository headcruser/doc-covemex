# Materia Prima
Es la encargada de registrar y recibir todo el producto de los diferntes proveedores con los que tiene contacto covemex. Una vez que recibe el producto materia realiza una serie de procedimeintos para poder determinar si trabaja con el producto o no. Una vez que terminan con la evaluacion, se le notifica al proveedor mediante un correo electronico, en el cual indica el estado en que se encuentra el producto. 

el procedimiento para recibir se resume en los sigueinte puntos 

- Recepcion 
- Evaluacion
- Envio de correo a proveedores
- Almacen de Materia prima 
- Carry Over 
- Desechos

## Recepción 
La recepcion de materia prima, es un registro que es utilizado como referencia dentro de la planta, esto con fines de hacer mas practica el seguimiento del mismo. Cuando el evaluador registra una recepcion, se sabe que deberia tener un peso bruto y un peso tara, los cuales son indispensables para calcular el peso utilizable y realizar el calculo del costo segun el proveedor.

## Evaluacion
Descripción de Evaluación de materia prima
- Calcular Peso Bruto `peso_camion + peso_producto`
- Calcular Peso Tara `peso_camion - peso_producto`
- Tomar 20 kg Muestra 
	+ Separación de elementos (En promedio toman 20kg para muestra)
		+ Kg Hoja
		+ kg Pata
	+ Calculo de porcentaje
		+ Calcular los kg Hoja `(kg Hoja * 100 / Peso neto)`
		+ Calcular los kg Pata `(kg Pata * 100 / Peso neto)`
		+ Merma `KgHoja + KgPata`
	+ Calcular Peso utilizable 
		+ `Peso Neto – Merma`
- Obtener el Porcentaje de defectos
	+ Toman una porción de los kg Muestra
	+ Obtienen los Grados y defectos
- Calcular peso Utilizable
- Calcular Costo

## Almacen 
Es la representacion del producto fisico almacenado por la empresa. Es indispensable para determinar cuanto producto se tiene para poder cumplir con las demandas de los clientes. El funcionamiento del almacen se divide en las siguientes actividades

- Ingresos 
- Egresos 
- Carry Over

### Ingreso a Materia prima
Esta actividad se realiza en automatico, cuando el personal evaluador de materia prima determina la calificación del producto.  Para que un producto pueda ser autorizado para su reproceso, las siguientes calificaciones

- **Aceptado** (El producto se encuentra en optimas condiciones)
- **Sobre Inspeccion** (El producto tiene defectos, pero aún tiene buena calidad para el proceso)

Cuando un producto es rechazado, automaticamente se notifica al proveedor , pero en algunas ocasiones se determina trabajar con el producto, ya sea para recuperacion de tallo u alguna otra indicacion. A este concepto se le denomina 

- **Rechazado Procesdado** Trabajan el producto a pesa de su calidad

Una vez que el producto esta autorizado para entrar, en automatico, se actualiza el almacen de materia prima, para su consulta.


### Ingresos 
Para ingresar producto al almacen, la única forma de hacerlo es atraves de la autorizacion de materia prima, y con las condiciones anteriormente mencionadas. Para guardar el producto, se hace atravez de cajones, los cuales son organizados para su posterior manejo.

### Egresos
Para poder sacar producto del alamcen, se hace a traves del pesonal de anden, que determina el tipo de producto a mover para poder realizar su posterior proceso. 

### Carry Over
El concepto consiste en hacer un corte al inicio del turno de produccion, para saber con cuanto producto cuentan al iniciar el turno a las 7 AM. Para eso el jefe de producto preparado revisa el reporte y en base a eso determina como trabajar para poder cumplir con la cuouta que se establece en el plan maestro.
