# Proyecto Frontend ZenomyAi

¡Bienvenido a nuestro proyecto desarrollado con [Next.js](https://nextjs.org/)!

Este documento proporciona toda la información necesaria para configurar y ejecutar este proyecto.

---

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js**: versión 20 o superior
- **npm** o **yarn**

---

## Instalación

Sigue estos pasos para configurar el proyecto:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/repo-nextjs.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd repo-nextjs
   ```

3. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

---

## Ejecución del Proyecto

### Desarrollo
Para iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```
Accede a la aplicación en `http://localhost:3000`.

### Producción
Para construir y ejecutar el proyecto en modo producción:
1. Construye la aplicación:
   ```bash
   npm run build
   # o
   yarn build
   ```

2. Inicia el servidor:
   ```bash
   npm start
   # o
   yarn start
   ```

3. Contruye la imagen de docker
    ```
    docker build -t nextjs-docker .
    docker run -p 3000:3000 nextjs-docker
    ```
---



## Scripts Disponibles

- **`npm run dev`**: Inicia el servidor en modo desarrollo.
- **`npm run build`**: Construye la aplicación para producción.
- **`npm start`**: Inicia el servidor en modo producción.
- **`npm run lint`**: Analiza el código para detectar errores y advertencias.

---
