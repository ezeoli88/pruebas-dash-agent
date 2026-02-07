# Pruebas Dash Agent

## Descripción
Este es un servidor desarrollado en Node.js que utiliza Express para el manejo de rutas. Está escrito en TypeScript y diseñado para facilitar la integración con tecnologías como SQL.js para operaciones de base de datos en memoria.

## Requisitos
- Node.js (>=18)

## Instalación
1. Clona el repositorio desde GitHub.
2. Ejecuta `npm install` para instalar las dependencias.
3. Para iniciar el servidor en modo de desarrollo, utiliza `npm run dev`. Para producción, utiliza `npm run build` seguido de `npm start`.

## Configuración
El servidor se configura mediante variables de entorno. Debería existir un archivo `.env.example` como plantilla, pero este no se encuentra actualmente. Asegúrate de configurar las variables de entorno adecuadas antes de iniciar el servidor.

## Base de Datos
El proyecto utiliza SQL.js para manejar una base de datos en memoria con persistencia opcional. Las migraciones de la base de datos se ejecutan automáticamente al iniciar el servidor.

## Endpoints
- `/health`: Comprueba el estado del servidor.
- `/tasks`: Manejo de tareas.
- `/repos`: Operaciones relacionadas con repositorios.
- `/setup`: Configuraciones iniciales.
- `/data`: Acceso a datos genéricos.
- `/secrets`: Gestión de secretos.

Además, se ofrece un streaming de logs vía SSE en el endpoint `/tasks/:id/logs`.

## Notas de Seguridad
Asegúrate de no incluir secretos reales en el código fuente. Configura adecuadamente las credenciales necesarias para integraciones con AI y GitHub.

## Troubleshooting
- Verifica que el puerto utilizado por el servidor no esté ocupado por otro proceso.
- Asegúrate de que las migraciones de base de datos se ejecutan correctamente al iniciar el servidor.