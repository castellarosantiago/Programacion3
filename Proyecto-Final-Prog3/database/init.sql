-- Archivo de inicialización de la base de datos
-- Este archivo se ejecuta automáticamente cuando se crea el contenedor de PostgreSQL

-- Crear extensiones útiles
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Crear esquemas adicionales si es necesario
-- CREATE SCHEMA IF NOT EXISTS analytics;

-- Insertar datos iniciales si es necesario
-- INSERT INTO users (name, email) VALUES ('Admin', 'admin@example.com');

-- Mensaje de confirmación
SELECT 'Base de datos inicializada correctamente' AS status;

---------------------------------------------------------------------------------------------------
--TABLA USERS CON USUARIO CREADO, PUEDE RECIBIR MAS USERS

CREATE TABLE IF NOT EXISTS "Users"(
    id_user SERIAL PRIMARY KEY,
    mail VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

--USER DEMO
INSERT INTO "Users"(mail, password)
VALUES(
    'demo@gmail.com',
    '12345678'
)
ON CONFLICT (mail) DO NOTHING;


--------------------------------------------------------------------------------
-- TABLA CATEGORIES
CREATE TABLE IF NOT EXISTS "Categories" (
    id_category SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- TABLA IMAGES_CATEGORY
CREATE TABLE IF NOT EXISTS "Images_category" (
    id_image SERIAL PRIMARY KEY,
    id_category INTEGER NOT NULL REFERENCES "Categories"(id_category) ON DELETE CASCADE,
    url_image TEXT NOT NULL
);

---------------------------------------------------------------------------------------------------
--CATEGORIAS

INSERT INTO "Categories"(name) VALUES
('Montañas'),
('Playa'),
('Bosque'),
('Ciudades'), 
('Animales')
ON CONFLICT (name) DO NOTHING;

--IMAGENES: ver que existan las categorias y usar los ids

INSERT INTO "Images_category"(id_category, url_image)
SELECT id_category, 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'
FROM "Categories" WHERE name = 'Montañas';

INSERT INTO "Images_category"(id_category, url_image)
SELECT id_category, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'
FROM "Categories" WHERE name = 'Playa';

INSERT INTO "Images_category"(id_category, url_image)
SELECT id_category, 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'
FROM "Categories" WHERE name = 'Bosque';

INSERT INTO "Images_category"(id_category, url_image)
SELECT id_category, 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1600&q=80'
FROM "Categories" WHERE name = 'Ciudades';

INSERT INTO "Images_category"(id_category, url_image)
SELECT id_category, 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
FROM "Categories" WHERE name = 'Animales';

SELECT 'Base de datos inicializada correctamente' AS status;