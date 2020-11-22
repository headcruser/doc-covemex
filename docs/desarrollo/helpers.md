# Funciones de ayuda
Esta seccion describe todas las funciones de ayuda, utilizadas en el proyecto de Regina web.

## imgToBase64
Esta funcion consiste en convertir una imagen a una codificacion base64

### Argumentos 

- **string** $path Ruta donde se ubica el archivo

### Resultado

- **string** Cadena en formato Base64

Ejemplo: 

```php
$path_logotipo = public_path('img/logo_covemex.png');
$base64 = imgToBase64($path_logotipo);
echo "<img src={$base64}>";
```


## routeIs
Esta funcion indica si la ruta actual, coincide con la ruta especificada.

### Argumentos
- **string|array** $route Nombre que se le asigno a la ruta
- **string** $class Clase css que se utiliza para resaltar el link

### Resultado
- string Regresa el nombre de la clase

Ejemplo: 
```php
routeIs('mp.herramientas.envio-evaluacion.index','active-link bg-covemex')
```
