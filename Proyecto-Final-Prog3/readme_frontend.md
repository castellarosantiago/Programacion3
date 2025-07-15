# Frontend - Aplicación de Meditación

## 📌 Comando
Correr el Frontend: 
`Docker compose up --build frontend`

## 🛠️ Tecnologías
- **React** con Hooks 
- **CSS** para estilos
- **Fetch API** para comunicación con el backend

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── inicio/
│   │   ├── Inicio.jsx
│   │   ├── ContadorMeditador.jsx
│   │   ├── Personalizacion.jsx
│   │   ├── TarjetasMeditacion.jsx
│   │   └── CategoriasImagenes.jsx
│   └── login/
│       └── Login.jsx
└── App.jsx
```

## 🔄 Componentes

### 1. **App.jsx** 
> **Propósito:** Componente raíz que gestiona el estado global de autenticación.

**Características:**
- Controla el flujo principal de la aplicación
- Renderizado condicional entre Login e Inicio
- Gestiona el estado del usuario autenticado
- Punto de entrada principal de la aplicación

---

### 2. **Login.jsx** 
> **Propósito:** Componente de autenticación que maneja login y registro de usuarios.

**Características:**
- Formulario dual para login/registro con toggle
- Validación de contraseña (mínimo 8 caracteres)
- Manejo de errores de autenticación
- Integración con API de autenticación

**Props:**
- `onLoginExitoso`: Callback ejecutado tras autenticación exitosa

---

### 3. **ContadorMeditador.jsx**
> **Propósito:** Componente principal que maneja la lógica de la meditación de respiración.  

**Características:**
- Controla las tres fases de respiración: inhalar, aguantar, exhalar
- Gestiona temporizadores y ciclos de meditación
- Incluye animación visual de círculo que se expande/contrae
- Permite iniciar, pausar y reiniciar la meditación
- Acepta imagen de fondo personalizada

**Props:**
- `duracion`: Objeto con tiempos de cada fase y número de ciclos
- `backgroundImage`: URL de imagen de fondo opcional

---

### 4. **Personalizacion.jsx**
> **Propósito:** Formulario para personalizar los parámetros de meditación.

**Características:**
- Permite ajustar tiempos de inhalación, retención y exhalación
- Configuración del número de ciclos
- Campo para título de la meditación personalizada
- Guarda preferencias en la base de datos
- Sincroniza inhalar/exhalar 

**Props:**
- `personalizacion`: Estado actual de la configuración
- `onChange`: Callback para actualizar configuración
- `onPreferenciaGuardada`: Callback ejecutado después de guardar
- `usuario`: Objeto con datos del usuario  

---

### 5. **TarjetasMeditacion.jsx**
> **Propósito:** Muestra las preferencias de meditación guardadas del usuario.

**Características:**
- Renderiza tarjetas con configuraciones guardadas
- Botón "Iniciar" para cargar una configuración
- Botón "Borrar" para eliminar preferencias
- Manejo de estado vacío cuando no hay preferencias

**Props:**
- `preferencias`: Array de configuraciones guardadas
- `onSeleccionar`: Callback para cargar una configuración
- `onBorrar`: Callback para eliminar una preferencia

---

### 6. **CategoriasImagenes.jsx** 
> **Propósito:** Galería de imágenes organizadas por categorías para fondos de meditación.

**Características:**
- Obtiene categorías e imágenes desde la API
- Renderiza tarjetas visuales con preview de imagen
- Selección de imagen para fondo del contador
- Componente Card reutilizable para cada categoría

**Props:**
- `onSeleccionarImagen`: Callback para establecer imagen de fondo

---

### 7. **Inicio.jsx** 
> **Propósito:** Componente contenedor principal que orquesta toda la aplicación.

**Características:**
- Gestiona el estado global de personalización
- Coordina la comunicación entre componentes
- Maneja la carga y eliminación de preferencias
- Controla la selección de imagen de fondo

**Props:**
- `usuario`: Objeto con información del usuario autenticado

  
  

## 🌐 Integraciones API

### Autenticación
- `POST /api/auth/login` - Autenticación de usuario
- `POST /api/auth/registro` - Registro de nuevo usuario

### Preferencias
- `GET /api/preferences/{userId}` - Obtiene preferencias guardadas
- `POST /api/preferences/{userId}` - Guarda nueva preferencia
- `DELETE /api/preferences/{breathId}` - Elimina preferencia

### Recursos
- `GET /api/categories` - Obtiene categorías de imágenes