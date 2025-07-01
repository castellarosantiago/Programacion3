# Meditación App

Esta es una aplicación de meditación desarrollada con React, Node.js y Sequelize. La aplicación permite a los usuarios realizar meditaciones personalizadas con un contador que guía la respiración.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
meditacion-app-frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Inicio
│   │   │   ├── ContadorMeditador.jsx
│   │   │   ├── FondoImagenes.jsx
│   │   │   ├── Personalizacion.jsx
│   │   │   └── MeditacionCard.jsx
│   │   └── index.js
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── app.css
├── package.json
└── README.md
```

## Componentes

- **ContadorMeditador.jsx**: Maneja la funcionalidad del temporizador de meditación, incluyendo animaciones para inhalar, mantener y exhalar. Incluye botones para pausar, iniciar y reiniciar.

- **FondoImagenes.jsx**: Gestiona la selección de categorías de imágenes y obtiene imágenes de fondo de la base de datos según las categorías seleccionadas. Pasa estas imágenes al componente ContadorMeditador.

- **Personalizacion.jsx**: Permite a los usuarios personalizar los parámetros de meditación, como la duración de inhalar, mantener y exhalar. Guarda la configuración personalizada en la base de datos.

- **MeditacionCard.jsx**: Muestra una tarjeta para cada meditación guardada, mostrando el título y los parámetros de duración de la meditación. Recupera estos datos de la base de datos.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd meditacion-app-frontend
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación, ejecuta el siguiente comando:
```
npm start
```

La aplicación se abrirá en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.