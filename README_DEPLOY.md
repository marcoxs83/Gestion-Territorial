# Publicar la plataforma

Esta version es un sitio web estatico. Se puede publicar en Netlify, Vercel, GitHub Pages o cualquier hosting que acepte HTML/CSS/JS.

## Opcion recomendada: Netlify

1. Entrar a https://app.netlify.com/drop
2. Arrastrar la carpeta completa `Gestion Territorial`.
3. Netlify genera una URL publica.
4. Si luego queres dominio propio, se configura desde `Domain settings`.

## Opcion Vercel

1. Crear un proyecto en Vercel.
2. Subir este repositorio o carpeta.
3. Framework: `Other`.
4. Build command: dejar vacio.
5. Output directory: `.`.

## Opcion GitHub Pages

1. Subir estos archivos a un repositorio de GitHub.
2. Ir a `Settings > Pages`.
3. Source: `Deploy from a branch`.
4. Branch: `main`.
5. Folder: `/root`.

## Importante

Los datos cargados hoy se guardan en el navegador de cada usuario con `localStorage`. Para una version multiusuario real, con datos compartidos entre operadores, hace falta agregar backend y base de datos.

## Base de datos con Supabase

1. Crear un proyecto en https://supabase.com
2. Abrir `SQL Editor`.
3. Ejecutar el contenido de `supabase-schema.sql`.
4. Ir a `Project Settings > API`.
5. Copiar:
   - Project URL
   - anon public key
6. En la plataforma abrir `Usuarios > Base de datos`.
7. Pegar URL y clave, y guardar la conexion.

Esta configuracion usa permisos publicos de lectura y carga para prototipo. Para produccion conviene agregar login y politicas por usuario.

El esquema crea tablas para `demands`, `referents` y `meetings`.
