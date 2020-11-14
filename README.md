# Documentacion Covemex

VuePress es una herramienta que se compone de dos partes: un generador de sitio estático minimalista con un sistema de temas con tecnología Vue y API de complementos, y un tema predeterminado optimizado para escribir documentación técnica.

La intención de utilizar esta herramienta, es para que los usuarios, puedan acceder y consultar preguntas frecuentes, acerca de la 
plataforma

# Instalación

Para instalar el paquete en el proyecto
```
$ npm i vuepress
```

# Guia de uso

## Ejecutar proyecto
Para correr el proyecto de forma local, y realizar cambios del mismo

```
 $ npm run docs:dev
```

## Construir proyecto
Para generar el sitio estatico, se debe ejecutar el siguiente comando para poner la documentacion
en un servidor.

```
 $ npm run docs:build
```

Al ejecutar el comando, crea un pequeño servidor en donde genera una url para poder acceder al proyecto.

# Estructura de directorio
La estructura de directorios, especfica como esta organizada la documentacion del proyecto
```
- docs
	+ .vuepress 
	+ public
	+ override.styl
	+ style.styl
	+ config.js
	+ README.md
- .editorconfig
- .gitignore
- package.json

```
+ **docs/.vuepress**: Se utiliza para almacenar configuraciones globales, componentes, recursos estáticos, etc.
+ **docs/override.styl**: Sobreescribe los colores de la plantilla base.
+ **docs/style.styl**: Sobreescribe los colores de los links.
+ **docs/config.js**: Archivo de configuracion en donde se escriben los menus de la documentacion.
+ **.editorconfig**: Archivo que define las reglas de espaciado.
+ **.gitignore**: Archivo que se ignoran del control de versiones.
```

# Autores

* **Daniel Martinez Sierra**  

