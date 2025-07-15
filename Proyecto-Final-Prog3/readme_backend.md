# Backend - API de Meditación

## 📌 Comando
Correr el Backend: 
`Docker compose up --build backend`

## 🛠️ Tecnologías
- **Node.js** con Express
- **Sequelize** ORM
- **Base de datos relacional** (PostgreSQL)


### 🗂️ Estructura de Carpetas
```
backend/
├── models/
│   ├── usersModel.js
│   ├── preferencesModel.js
│   ├── categoriesModel.js
│   ├── imagesModel.js
│   └── index.js
├── controllers/
│   ├── authController.js
│   ├── preferencesController.js
│   └── categoriesController.js
└── routes/
    ├── authRoutes.js
    ├── preferencesRoutes.js
    ├── categoriesRoutes.js
    └── index.js
```

## 🔐 Autenticación

### **authController.js**
> **Propósito:** Maneja el registro e inicio de sesión de usuarios

#### **Métodos:**
- **`registro(req, res)`**
  - Valida datos de entrada (email, password mínimo 8 caracteres)
  - Verifica que el usuario no exista
  - Crea nuevo usuario en la base de datos
  - Retorna datos del usuario registrado

- **`login(req, res)`**
  - Valida credenciales
  - Busca usuario por email
  - Compara contraseñas
  - Retorna datos del usuario autenticado

#### **Rutas:**
- `POST /api/auth/registro` - Registro de nuevo usuario
- `POST /api/auth/login` - Inicio de sesión

---

### **usersModel.js**
> **Propósito:** Modelo de datos para usuarios


#### **Relaciones:**
- **Uno a muchos** con `Personalized_breaths`

---

## 💾 Preferencias

### **preferencesController.js**
> **Propósito:** CRUD para configuraciones de meditación personalizadas

#### **Métodos:**
- **`createPreference(req, res)`**
  - Crea nueva preferencia de respiración
  - Asocia preferencia al usuario
  - Guarda configuración (título, tiempos, ciclos)

- **`getPreferences(req, res)`**
  - Obtiene todas las preferencias de un usuario
  - Filtra por `id_user`
  - Retorna array de configuraciones

- **`deletePreference(req, res)`**
  - Elimina preferencia específica
  - Busca por `id_breath`
  - Confirma eliminación exitosa

#### **Rutas:**
- `POST /api/preferences/:id_user` - Crear preferencia
- `GET /api/preferences/:id_user` - Obtener preferencias del usuario
- `DELETE /api/preferences/:id_breath` - Eliminar preferencia

---

### **preferencesModel.js**
> **Propósito:** Modelo de datos para configuraciones de meditación


#### **Relaciones:**
- **Muchos a uno** con `Users`

---

## 🖼️ Categorías e Imágenes

### **categoriesController.js**
> **Propósito:** Gestión de categorías de imágenes para fondos de meditación

#### **Métodos:**
- **`getAllCategories(req, res)`**
  - Obtiene todas las categorías
  - Incluye imágenes asociadas
  - Retorna estructura completa para la galería

- **`getImagesByCategory(req, res)`**
  - Filtra imágenes por categoría específica
  - Incluye información de la categoría

#### **Rutas:**
- `GET /api/categories` - Obtener todas las categorías con imágenes
- `GET /api/categories/:categoryId/images` - Obtener imágenes por categoría

---

### **categoriesModel.js**
> **Propósito:** Modelo de datos para categorías de imágenes


#### **Relaciones:**
- **Uno a muchos** con `Images_category`

---

### **imagesModel.js**
> **Propósito:** Modelo de datos para imágenes de categorías


#### **Relaciones:**
- **Muchos a uno** con `Categories`

---



