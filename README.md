# Laboratorio 02 - Docker Compose


## Descripción

En este laboratorio se realizó la configuración y despliegue de una aplicación utilizando Docker Compose.

El objetivo fue crear una API local, construir su propia imagen Docker y trabajar junto con una base de datos PostgreSQL utilizando contenedores.

El proyecto permite:

- Ejecutar 3 copias de una API creada localmente.
- Configurar una base de datos PostgreSQL.
- Utilizar variables de entorno.
- Utilizar volúmenes Docker para mantener información.
- Administrar los servicios mediante Docker Compose.


## Tecnologías utilizadas

- Node.js
- Express
- Docker
- Docker Compose
- PostgreSQL 17


# Configuración del proyecto


## API

La API fue desarrollada utilizando Node.js y Express.

La imagen de la API se genera localmente mediante un archivo Dockerfile.

La API utiliza una variable de entorno llamada `MESSAGE`, la cual permite mostrar un mensaje personalizado sin modificar el código.


Puerto utilizado:

```
3000
```


## Base de datos

Se utilizó PostgreSQL 17 como base de datos.

La configuración se realiza mediante variables de entorno:

```
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_DB
```

Esto permite cambiar la configuración de la base de datos sin modificar los archivos principales del proyecto.


# Despliegue con Docker Compose


Para construir y ejecutar los servicios se utiliza:

```bash
docker compose up -d --scale api=3
```


El parámetro:

```
--scale api=3
```

permite crear tres copias de la misma API.


Para verificar los servicios activos:

```bash
docker compose ps
```


Para detener los contenedores:

```bash
docker compose down
```


# Volúmenes Docker


En el proyecto se utiliza un volumen llamado:

```
postgres_data
```

Este permite guardar la información de PostgreSQL aunque el contenedor sea eliminado.


## Tipos de volúmenes en Docker


### Volume

Es un volumen administrado por Docker.

Se utiliza para guardar datos importantes de los contenedores y mantenerlos disponibles aunque el contenedor cambie.


### Bind Mount

Permite conectar una carpeta del equipo local con una carpeta dentro del contenedor.

Se utiliza cuando se necesita compartir archivos entre el sistema y Docker.


### tmpfs

Guarda información temporal utilizando la memoria RAM.

Los datos almacenados desaparecen cuando el contenedor se detiene.


# Redes Docker


Las redes permiten la comunicación entre los diferentes contenedores.


## Bridge

Es la red más utilizada en Docker.

Permite la comunicación entre contenedores dentro del mismo equipo.


## Host

Permite que el contenedor utilice directamente la red del sistema operativo.


## None

Desactiva la comunicación de red del contenedor.


## Overlay

Permite la comunicación entre contenedores ubicados en diferentes máquinas Docker.


# Variables de entorno


El proyecto utiliza un archivo `.env` para almacenar configuraciones.

Variables utilizadas:

```env
MESSAGE=

POSTGRES_USER=

POSTGRES_PASSWORD=

POSTGRES_DB=
```


# Git y GitHub


El proyecto fue almacenado en un repositorio público de GitHub.

Durante el desarrollo se utilizaron Conventional Commits para organizar los cambios realizados.

Ejemplos utilizados:

```
feat: crear API local

feat: configurar docker compose

docs: agregar README
```

También se utilizó un archivo `.gitignore` para evitar subir archivos innecesarios al repositorio.


# Evidencias del despliegue


Comandos utilizados para comprobar el funcionamiento:

```bash
docker ps
```

```bash
docker compose ps
```

```bash
docker volume ls
```

```bash
docker images
```


# Conclusión

Con este laboratorio se logró implementar un entorno utilizando Docker Compose, integrando una API creada localmente, una base de datos PostgreSQL, variables de entorno, volúmenes y múltiples instancias de la API.
