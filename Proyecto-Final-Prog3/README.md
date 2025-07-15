# 🌿 Proyecto Web de Meditación Personalizada

## ✨ Descripción

Este proyecto es una aplicación web de meditación donde los usuarios pueden acceder a un contador de meditación, personalizar sus propias sesiones y guardar sus preferencias. El objetivo es brindar una experiencia inmersiva, simple y personalizada para quienes desean incorporar la meditación en su día a día.

---

## 🧘‍♀️ Funcionalidades Principales

### 🕒 Meditación por defecto
- La página inicial ofrece un **contador de respiración guiada** que permite al usuario comenzar una meditación inmediatamente.

### 🛠️ Personalización de meditaciones
- El usuario puede crear sus propias meditaciones ajustando:
  - Tiempo de **inhalación**, **retención**, **exhalación** y cantidad de **ciclos**.
  - Título personalizado.
  - Imagen de fondo durante la meditación.

### 📸 Imágenes temáticas
- Se muestran distintas categorías de imágenes (por ejemplo: **Paisajes**).
- Al hacer clic en una imagen, se muestra como fondo en el contador de meditación.
- **Estas imágenes no se guardan** en la base de datos, son solo para personalización temporal.

### 💾 Guardado de meditaciones
- Las meditaciones personalizadas son **guardadas en una base de datos**.
- Las meditaciones guardadas se muestran en pantalla.
- El usuario puede **eliminarlas**.

---

## 🔐 Autenticación

- La aplicación cuenta con un sistema de **login**.
- Solo los usuarios autenticados pueden **guardar sus meditaciones personalizadas**.
- USUARIO DEFAULT PARA INICIAR SESIÓN:
  # Usuario (email): demo@gmail.com
  # Contraseña: 12345678

---

## 🚀 Estado actual

✔️ Componentes en desarrollo
✔️ Diseño frontend en desarrollo
✔️ Rutas en desarrollo 
✔️ Login 
✔️  Base de datos
✔️  Modelos

---
## ⚙ Correr el proyecto

💻 docker compose up --build

- backend/Dockerfile:
  - FROM node:18-alpine

  - WORKDIR /app

  - # Instalar dependencias
  - COPY package*.json ./
  - RUN npm install
  
  - # Copiar código fuente
  - COPY . .
  
  - # Exponer puerto
  - EXPOSE 3001
  
  - # Comando por defecto
  - CMD ["npm", "run", "dev"]

- frontend/Dockerfile:
  # frontend/Dockerfile
 - FROM node:18-alpine

  -WORKDIR /app

  # Instalar dependencias
  -COPY package*.json ./
  -RUN npm install

  # Copiar código fuente
  -COPY . .

  # Exponer puerto
  -EXPOSE 3000

  # Comando por defecto
  -CMD ["npm", "start"]

# 📖 A tener en cuenta
- Para dejar de correr la app :
  - docker compose down 
  # Se vuelve a iniciar con docker compose up y se mantienen los datos registrados.
- Si se quieren borrar los volumenes y por consecuencia la base de datos:
  - docker compose down -v
  # Esto borraria toda la instalacion en el contenedor, y limpiaria la base de datos, dejando solo el user default.
