# 🔧 GUÍA DE DIAGNÓSTICO - Botones no funcionan

## 🎯 PASO 1: Subir test.html a GitHub

1. Sube **test.html** a tu repositorio
2. Abre: `https://somtechn.github.io/mototaxi/test.html`
3. Presiona los 4 botones en orden
4. Anota qué errores aparecen

---

## 🔍 ERRORES COMUNES Y SOLUCIONES

### ❌ "config.js no se cargó correctamente"

**Causa:** El archivo config.js no está en GitHub o está mal ubicado

**Solución:**
1. Verifica que `config.js` esté en la raíz del repo
2. Abre: `https://somtechn.github.io/mototaxi/config.js`
3. Deberías ver el código JavaScript
4. Si dice "404", sube el archivo

---

### ❌ "HTTP 404" o "Failed to fetch"

**Causa:** El Code.gs no está actualizado o mal desplegado

**Solución:**
1. Ve a Apps Script
2. Verifica que el Code.gs tenga la función `doGet(e)` actualizada
3. Busca esta parte en el código:

```javascript
// Si tiene parámetro 'action', es una llamada API
if (e.parameter.action) {
  try {
    const action = e.parameter.action;
    const params = e.parameter.params ? JSON.parse(e.parameter.params) : {};
    
    let result;
    
    switch(action) {
      case 'solicitarViaje':
        result = solicitarViaje(params);
        break;
```

4. Si NO está, copia el Code.gs de nuevo
5. **IMPORTANTE:** Re-despliega:
   - Implementar → Administrar implementaciones
   - Click en ⚙️ de tu implementación
   - **Nueva versión**
   - Implementar

---

### ❌ "Función callBackend no está definida"

**Causa:** config.js no se está cargando antes de los scripts

**Solución:**
Verifica que en TODOS los HTML (cliente, motorista, admin) tenga:

```html
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="config.js"></script>  ← DEBE ESTAR AQUÍ
<script>
  // Resto del código...
```

---

### ❌ Botones no hacen nada (sin errores)

**Causa:** Funciones no son async pero usan await

**Solución:**
Abre la consola del navegador (F12) y busca errores como:
- "await is only valid in async functions"
- "Unexpected identifier"

Si ves esto, los HTMLs no se convirtieron bien.

---

## 🚀 SOLUCIÓN RÁPIDA: Verificar en Consola

1. Abre cualquier página (cliente.html, motorista.html, etc)
2. Presiona **F12** (abre Developer Tools)
3. Ve a la pestaña **Console**
4. ¿Ves errores en rojo?
   - SÍ → Anota el error y búscalo arriba
   - NO → Intenta hacer click en un botón y observa

---

## 📸 ENVÍAME ESTO PARA AYUDARTE

Si sigues con problemas, necesito ver:

1. **Captura de pantalla** de la consola (F12 → Console)
2. **El error exacto** que aparece en rojo
3. **Qué botón** estás presionando
4. **Resultado de test.html** - los 4 botones

---

## ✅ SOLUCIÓN GARANTIZADA (Plan B)

Si nada funciona, usa esta configuración TEMPORAL:

### Archivo: config.js (versión con más logging)

```javascript
// Configuración del backend de Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec';

// Función helper para hacer llamadas al backend
async function callBackend(action, params = {}) {
  console.log('🔵 callBackend llamado:', action, params);
  
  try {
    const url = new URL(API_URL);
    url.searchParams.append('action', action);
    url.searchParams.append('params', JSON.stringify(params));
    
    console.log('🔵 URL construida:', url.toString());
    
    const response = await fetch(url.toString());
    
    console.log('🔵 Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    console.log('🔵 Data recibida:', data);
    
    return data;
    
  } catch (error) {
    console.error('🔴 Error en callBackend:', error);
    return { success: false, error: error.message };
  }
}

console.log('✅ config.js cargado, API_URL:', API_URL);
```

Reemplaza tu config.js con este y verás mensajes en la consola que te dirán exactamente qué está pasando.

---

## 🎯 CHECKLIST RÁPIDO

- [ ] Code.gs actualizado en Apps Script
- [ ] Web App re-desplegada con NUEVA VERSIÓN
- [ ] config.js subido a GitHub (raíz del repo)
- [ ] test.html subido y probado
- [ ] Los 3 HTML (cliente, motorista, admin) tienen `<script src="config.js"></script>`
- [ ] Abriste F12 y revisaste la consola
- [ ] No hay errores rojos en consola

---

**SUBE test.html Y PRUÉBALO PRIMERO. ESO TE DIRÁ EXACTAMENTE QUÉ ESTÁ FALLANDO.**
