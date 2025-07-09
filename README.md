# Despliegue manual de una app React (Vite) en GitHub Pages

## 🎯 Objetivo
Desplegar una aplicación hecha con React + Vite + React Router DOM en GitHub Pages de forma manual pero automatizada con `gh-pages`.

## Paso a paso seguido

### 1. Instalación de gh-pages

```bash
npm install gh-pages --save-dev
```

### 2. Configuración de Vite

**Archivo `vite.config.js`:**

```javascript
export default defineConfig({
  base: '/Smart-Orders/',
  ...
});
```

Esto permite que el proyecto funcione correctamente en GitHub Pages, que sirve el proyecto desde `https://gustedeveloper.github.io/Smart-Orders/`.

### 3. Configuración de React Router

**En `AppRoutes.tsx`:**

```tsx
<Router basename="/Smart-Orders/">
```

Para que todas las rutas funcionen correctamente desde el subdirectorio.

### 4. Configuración de scripts de despliegue en package.json

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 5. Despliegue

**Comando usado:**

```bash
npm run deploy
```

Este comando genera la carpeta `dist` y la sube automáticamente a una rama `gh-pages`.

### 6. Activación en GitHub

En el repositorio:

1. Ir a **Settings > Pages**
2. Seleccionar rama: `gh-pages`
3. Carpeta: `/root`

## ✅ Resultado

El proyecto queda desplegado en: https://gustedeveloper.github.io/Smart-Orders/
