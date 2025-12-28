# 📦 FRONTEND COMPLETO PARA GITHUB

## 📁 Estructura de Archivos

```
mototaxis-hn/
├── index.html          ← Página principal
├── cliente.html        ← Interfaz de cliente
├── motorista.html      ← Interfaz de motorista
├── admin.html          ← Panel administrativo
├── README.md           ← Documentación
├── LICENSE             ← Licencia MIT
└── .gitignore          ← Archivos a ignorar
```

## 🚀 CÓMO SUBIR A GITHUB

### PASO 1: Crear repositorio

1. Ve a https://github.com/somtechn
2. Click en **+** → **New repository**
3. **Repository name:** `mototaxis-hn`
4. **Description:** `Sistema de gestión de mototaxis con GPS - Honduras`
5. ✅ **Public**
6. ✅ **Add a README file**
7. Click **Create repository**

### PASO 2: Subir archivos

**Opción A: Desde la web**

1. En tu repositorio, click **Add file** → **Upload files**
2. Arrastra TODOS estos archivos:
   - ✅ index.html
   - ✅ cliente.html
   - ✅ motorista.html
   - ✅ admin.html
   - ✅ README.md
   - ✅ LICENSE
   - ✅ .gitignore
3. Mensaje: `Agregar sistema completo v1.0`
4. Click **Commit changes**

**Opción B: Con Git (si lo tienes instalado)**

```bash
git clone https://github.com/somtechn/mototaxis-hn.git
cd mototaxis-hn
# Copia todos los archivos aquí
git add .
git commit -m "Agregar sistema completo v1.0"
git push
```

### PASO 3: Activar GitHub Pages

1. En tu repo, ve a **Settings**
2. Menú izquierdo → **Pages**
3. **Source:**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. ⏳ Espera 2-3 minutos

### PASO 4: Tu sitio estará listo en:

```
https://somtechn.github.io/mototaxis-hn/
```

## 🌐 URLS DE TU SISTEMA

### Página Principal (GitHub Pages)
```
https://somtechn.github.io/mototaxis-hn/
```

### Interfaces Funcionales (Apps Script)

**Cliente:**
```
https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=cliente
```

**Motorista:**
```
https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=motorista
```

**Admin:**
```
https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=admin
```

## 📱 CÓDIGOS QR

### Para Clientes
![QR Cliente](https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=cliente)

### Para Motoristas
![QR Motorista](https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=motorista)

### Para Admin
![QR Admin](https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=admin)

## 📋 DESCRIPCIÓN DE ARCHIVOS

### index.html
- Página de bienvenida
- Links a las 3 interfaces
- Códigos QR integrados
- Diseño responsive y moderno

### cliente.html
- Formulario paso a paso
- Integración con GPS
- Mapas interactivos
- Cálculo de tarifas
- Solicitud de viajes

### motorista.html
- Panel de motorista
- Registro e inicio de sesión
- Ver viajes cercanos
- Aceptar/completar viajes
- Compartir ubicación GPS

### admin.html
- Dashboard de estadísticas
- Mapa con motoristas activos
- Gestión de viajes
- Asignación manual
- Filtros y reportes

### README.md
- Documentación completa
- Guía de uso
- Características
- Screenshots

### LICENSE
- Licencia MIT
- Uso libre

### .gitignore
- Archivos a ignorar en Git

## ✅ CHECKLIST

Antes de publicar:

- [ ] Todos los archivos subidos
- [ ] GitHub Pages activado
- [ ] URLs funcionando
- [ ] Códigos QR generados
- [ ] README actualizado
- [ ] Sistema probado en móvil

## 🎨 PERSONALIZACIÓN

### Cambiar colores

En cada HTML, busca:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Cambiar logo

En index.html, busca:
```html
<div class="logo">🛵</div>
```

### Cambiar textos

Edita directamente los archivos HTML según necesites.

## 🔗 LINKS ÚTILES

- Repositorio: https://github.com/somtechn/mototaxis-hn
- GitHub Pages: https://somtechn.github.io/mototaxis-hn/
- Google Sheet: [Tu Sheet]
- Apps Script: [Tu deployment]

## 📞 SOPORTE

Para dudas o problemas:
1. Abre un Issue en GitHub
2. Revisa la documentación
3. Contacta al desarrollador

---

**Desarrollado por SomTech - Honduras 🇭🇳**
**Versión: 1.0.0**

¡Tu sistema está listo para producción! 🚀
