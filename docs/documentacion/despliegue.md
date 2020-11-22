# Despliegue

Los siguientes comandos son necesarios para poder actualizar la plataforma en produccion

## Acceso al servidor

Para acceder a modificar cambios en el proyecto, se debe hacer por medio de ssh 
```
ssh programacion@172.16.12.210
```

## Ubicación del proyecto
Para poder hacer alguna configuracion, hay que acceder al directorio en donde se encuentra instalado el proyecto
```
cd /var/www/html/Covemex
```
::: tip 
puedes hacer uso del alias `p-covemex` para poder acceder de una forma mas facil 
:::


## Modo Mantenimiento
Este comando nos brinda la posibilidad de poder dar mantenimiento sin el inconveniente de afectar a los usuarios
mientras ocurre dicha actualizacion 

```
php artisan down
```

## Bajar Cambios al Servidor
El proyecto se encuentra en un repositorio de github, por lo que todos los cambios realizados, se guardan 
en el repositorios, hasta que se hagan de forma manual.

```
git pull origin master
```

## Optimizacion Composer
Este comando nos sive para optimizar la instalacion del proyecto, removiendo todas las dependencias de desarrollo utilizadas en el proyecto.

```
composer install --optimize-autoloader --no-dev
```
::: tip 
Este comando solo se corre, en caso de actualizar las dependencias del proyecto
:::

## Comandos de optimización
Se recomienda aplicar los comandos cada que se realiza algun cambio en la plataforma
```
sudo php artisan cache:clear 
php artisan view:clear
php artisan view:cache
php artisan config:cache
```

## Levantar Servidor
Una vez Terminada la actualizacion, se procede levantar el modo mantemiento
```
php artisan up
```

## Salir
Una vez terminadas las tareas de mantenimiento, cerrar la sesion ssh 
```
exit
```
