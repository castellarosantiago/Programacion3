# Clínica Turnos - TP3 Programación 3

Este proyecto es una aplicación web para la gestión de turnos en una clínica. Permite a pacientes registrarse, iniciar sesión y reservar/cancelar turnos, mientras que la clínica puede gestionar pacientes y turnos desde un panel protegido.

## Características principales

- **Registro y login de pacientes**: Los pacientes pueden crear una cuenta y acceder a su panel.
- **Reserva y cancelación de turnos**: Los pacientes pueden ver turnos disponibles, reservarlos y cancelarlos.
- **Panel de clínica**: Acceso protegido para la clínica, donde puede ver todos los pacientes, crear nuevos y gestionar turnos (asignar/cancelar).
- **Autenticación con JWT y sesiones**: Seguridad mediante tokens y sesiones.
- **Validación de formularios**: Uso de Joi para validar datos de entrada.
- **Vistas dinámicas**: Renderizado con EJS y PUG.
- **Estilo básico**: CSS personalizado para una mejor experiencia de usuario.

## Estructura del proyecto

- `src/` - Código fuente principal
  - `controllers/` - Lógica de negocio y controladores de rutas
  - `models/` - Modelos de datos (mock y SQLite)
  - `routes/` - Definición de rutas Express
  - `views/` - Vistas EJS y PUG
  - `middlewares/` - Middlewares personalizados (auth, validación)
  - `schemas/` - Esquemas de validación Joi
  - `css/` - Hojas de estilo
- `docs/` - Documentación y diagramas
- `.env.template` - Variables de entorno de ejemplo

## Instalación y uso

1. Instala las dependencias:
```sh
    npm init -y
    npm install express ejs express-session cookie-parser jsonwebtoken joi
```
2. Copia `.env.template` a `.env` y ajusta las variables si es necesario.
3. Inicia el servidor:
```sh
    npm run dev
```
4. Accede a la app en [http://localhost:3000](http://localhost:3000).

## Autores

Lourdes Gerdes, Santiago Minor, Paula General y Santiago Castellaro