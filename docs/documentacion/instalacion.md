# Instalación 

- [Instalación](#instalacion)
    - [Requisitos del servidor](#requisitos-servidor)
    - [Clonar proyecto](#clonar-proyecto)
    - [Configuración](#configuracion)
- [Servidor web](#servidor-web)
    - [URL Amigables](#url-amigables)

<a name="instalacion"></a>
## Instalación

::: warning Advertencia
Para instalar el proyecto, debes descargar adicionalmente el driver [ODBC](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server?view=sql-server-2017) 
de microsoft para poder conectarte al servidor de base de datos.
:::

<a name="requisitos-servidor"></a>
### Requisitos del servidor 

Para tener un entorno de desarrollo adecuado, debe tener instalado los siguientes paquetes

* Apache 2
* PHP >= 7.1.3
* PDO PHP Extension
* Composer
* NodeJS
* Git
* ODBC Driver

<a name="clonar-proyecto"></a>
### Clonar proyecto

::: warning Atención
El proyecto utiliza [composer](https://getcomposer.org/) para gestionar las dependencias.
Por lo que, deberás asegurarte de tener Composer instalado en tu sistema.
:::

Para obtener una copia del proyecto, se debe ejecutar el siguiente comando en la terminal:

```
git clone https://github.com/headcruser/Covemex.git
```
::: danger Nota
El repositorio es privado, por lo que se debe tener tener el usuario y la contraseña.
:::

Al finalizar la descarga, se creara una carpeta nueva llamada Covemex. En la terminal accedemos a ella con el comando:

```
cd Covemex 
```

<a name="configuracion"></a>
### Configuración 

#### Directorio público

Después de haber descargado el proyecto, deberás configurar el documento raíz de tu servidor web para que sea el directorio `public`. El archivo `index.php` en este directorio funciona como controlador frontal (front controller) para todas las peticiones HTTP que entran a la plataforma.

Para establecer el directorio publico del proyecto se edita el archivo `000-default.conf`
de apache mediante el siguiente comando:

```bash
sudo nano /etc/apache2/sites-enabled/000-default.conf
```
Dentro del archivo hay que escribir lo siguiente

```
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/Covemex/public

    <Directory /var/www/Covemex/public/>
        RewriteEngine On
        RewriteBase /var/www/Covemex/public
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
```
Guardamos los cambios en el archivo, y reiniciamos Apache:

```bash
sudo service apache2 restart
```

#### Archivos de configuración

Todos los archivos de configuración para el framework están almacenados en el directorio `config`. 

#### Permisos para directorios

Después de la instalación, necesitarás configurar algunos permisos. Los directorios dentro de `storage` y `bootstrap/cache` deberán tener permiso de escritura para tu servidor web o el proyecto no va a funcionar. 

Para asignar los permisos en el servidor, se ejecutan los siguientes comandos

```bash
sudo chown -R www-data: storage
sudo chmod -R 755 storage
```


#### Clave de la aplicación

Despues de la instalación se debe establecer la clave de la aplicación a una cadena aleatoria de 32 caracteres. Esta clave se establece por el comando `php artisan key:generate`. 

Para que la clave pueda ser generada correctamente, se debe tener el archivo de entorno `.env`.  Si no se ha creado el archivo, puedes copiar el archivo `.env.example` a `.env`, . 

:::danger Nota
Si la clave de la aplicación no está establecida, ¡las sesiones de usuario y otros datos encriptados no serán seguros!
:::


<a name="servidor-web"></a>
## Servidor Web

<a name="url-amigables"></a>
### URL Amigables


#### Apache

Laravel incluye un archivo `public/.htaccess` que es utilizado para proporcionar URLs sin el controlador frontal `index.php` en la ruta. Antes de servir tu aplicación de Laravel con Apache, asegúrate de habilitar el módulo `mod_rewrite` para que tu archivo `.htaccess` funcione correctamente.

```bash
sudo a2enmod rewrite
```

Este comando activará el módulo . Para ver los cambios, hay que reiniciar Apache.

```bash
sudo service apache2 restart
```


