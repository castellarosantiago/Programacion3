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

SELECT 'Base de datos inicializada correctamente' AS status;