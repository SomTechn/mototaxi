// Service Worker para Sistema Mototaxis
const CACHE_NAME = 'mototaxis-v1.0.0';
const ASSETS_TO_CACHE = [
  '/mototaxi/',
  '/mototaxi/index.html',
  '/mototaxi/cliente.html',
  '/mototaxi/motorista.html',
  '/mototaxi/admin.html',
  '/mototaxi/config.js',
  '/mototaxi/manifest.json',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Instalación - cachear recursos
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cacheando archivos');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[SW] Instalación completa');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Error al cachear:', error);
      })
  );
});

// Activación - limpiar caches viejos
self.addEventListener('activate', (event) => {
  console.log('[SW] Activando Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Eliminando cache viejo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Activación completa');
        return self.clients.claim();
      })
  );
});

// Fetch - estrategia Network First, luego Cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // No cachear llamadas al API de Apps Script
  if (url.hostname.includes('script.google.com')) {
    return event.respondWith(fetch(event.request));
  }
  
  // No cachear llamadas a APIs externas (como Nominatim para geocoding)
  if (url.hostname.includes('nominatim.openstreetmap.org')) {
    return event.respondWith(fetch(event.request));
  }
  
  // Network First para archivos HTML, CSS, JS
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la respuesta es válida, clonarla y guardar en cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, intentar servir desde cache
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('[SW] Sirviendo desde cache:', event.request.url);
              return cachedResponse;
            }
            
            // Si no está en cache, mostrar página offline
            if (event.request.destination === 'document') {
              return caches.match('/mototaxi/offline.html');
            }
          });
      })
  );
});

// Sincronización en segundo plano (para enviar datos cuando se recupere la conexión)
self.addEventListener('sync', (event) => {
  console.log('[SW] Evento de sincronización:', event.tag);
  
  if (event.tag === 'sync-ubicacion') {
    event.waitUntil(
      // Aquí podrías implementar lógica para sincronizar ubicación
      console.log('[SW] Sincronizando ubicación...')
    );
  }
});

// Notificaciones Push (para futuras mejoras)
self.addEventListener('push', (event) => {
  console.log('[SW] Push recibido');
  
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Mototaxis';
  const options = {
    body: data.body || 'Nuevo viaje disponible',
    icon: '/mototaxi/icon-192.png',
    badge: '/mototaxi/icon-72.png',
    vibrate: [200, 100, 200],
    data: data,
    actions: [
      { action: 'ver', title: 'Ver viaje' },
      { action: 'cerrar', title: 'Cerrar' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Clic en notificación');
  
  event.notification.close();
  
  if (event.action === 'ver') {
    event.waitUntil(
      clients.openWindow('/mototaxi/motorista.html')
    );
  }
});
