# 🛵 Sistema de Mototaxis - Honduras

Sistema completo de gestión de servicios de mototaxis con geolocalización en tiempo real, cálculo automático de tarifas y panel administrativo.

## 🚀 Acceso Directo

- **🌐 Página principal:** [https://somtechn.github.io/mototaxis-hn/](https://somtechn.github.io/mototaxis-hn/)

### Interfaces del Sistema:

- **👥 Cliente:** [Solicitar viaje](https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=cliente)
- **🏍️ Motorista:** [Panel motorista](https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=motorista)
- **📊 Admin:** [Panel admin](https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=admin)

## 📱 Códigos QR

### Cliente
![QR Cliente](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=cliente)

### Motorista
![QR Motorista](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=motorista)

### Admin
![QR Admin](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec?page=admin)

## ✨ Características

### Para Clientes 👥
- ✅ Solicitud de viaje con GPS en tiempo real
- ✅ Selección de origen y destino en mapa interactivo
- ✅ Cálculo automático de tarifa según distancia
- ✅ Indicar monto de pago y ver cambio calculado
- ✅ Seguimiento de estado del viaje
- ✅ Interfaz móvil optimizada

### Para Motoristas 🏍️
- ✅ Registro y autenticación con ID único
- ✅ Compartir ubicación GPS automáticamente
- ✅ Ver viajes cercanos con distancia en tiempo real
- ✅ Aceptar viajes disponibles
- ✅ Información completa del cliente y ruta
- ✅ Integración con Google Maps para navegación
- ✅ Sistema de estados: Disponible/Ocupado

### Para Administradores 📊
- ✅ Dashboard con estadísticas en tiempo real
- ✅ Mapa con ubicación de todos los motoristas activos
- ✅ Asignación manual de viajes
- ✅ Filtrado de viajes por estado
- ✅ Visualización de ingresos totales
- ✅ Control de motoristas disponibles/ocupados

## 🛠️ Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript
- **Mapas:** Leaflet.js + OpenStreetMap
- **Backend:** Google Apps Script
- **Base de datos:** Google Sheets
- **Hosting:** GitHub Pages

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet
- GPS activado (para clientes y motoristas)

## 🎯 Uso Rápido

### Cliente
1. Abre la URL del cliente
2. Ingresa tus datos
3. Permite ubicación GPS
4. Selecciona origen y destino
5. Confirma y solicita el viaje

### Motorista
1. Regístrate una vez (guarda tu ID)
2. Inicia sesión
3. Permite ubicación GPS
4. Acepta viajes cercanos
5. Completa el viaje al terminar

### Admin
1. Abre panel admin
2. Visualiza estadísticas
3. Monitorea motoristas en mapa
4. Asigna viajes manualmente si es necesario

## 🔧 Configuración de Tarifas

Edita la hoja "Tarifas" en Google Sheets:

| Distancia Min | Distancia Max | Tarifa Base | Precio/km |
|---------------|---------------|-------------|-----------|
| 0             | 5             | L 20        | L 8       |
| 5             | 10            | L 30        | L 10      |
| 10            | 999           | L 50        | L 12      |

## 📊 Estados del Sistema

### Estados de Viaje
- **Pendiente** - Viaje solicitado, esperando asignación
- **Asignado** - Motorista asignado, en camino
- **Completado** - Viaje finalizado

### Estados de Motorista
- **Disponible** - Listo para aceptar viajes
- **Ocupado** - En un viaje activo

## 🗺️ Roadmap

- [ ] Notificaciones push
- [ ] Chat entre cliente y motorista
- [ ] Historial de viajes
- [ ] Sistema de calificaciones
- [ ] App móvil nativa
- [ ] Múltiples métodos de pago

## 📞 Soporte

Para reportar bugs o solicitar features, contacta al desarrollador.

---

**Desarrollado con ❤️ por SomTech - Honduras 🇭🇳**

**Versión:** 1.0.0
