// Configuración del backend de Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbwmtPDR451BYZcQRR6Wjll7NW9u604-wb8vcn1T3zKA7dPkKmzvg0aQDNc1LILGkHGO/exec';

// Función helper para hacer llamadas al backend
async function callBackend(action, params = {}) {
  console.log('🔵 [callBackend] Acción:', action);
  console.log('🔵 [callBackend] Parámetros:', params);
  
  try {
    const url = new URL(API_URL);
    url.searchParams.append('action', action);
    url.searchParams.append('params', JSON.stringify(params));
    
    console.log('🔵 [callBackend] URL completa:', url.toString());
    
    const response = await fetch(url.toString());
    
    console.log('🔵 [callBackend] Status:', response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    console.log('✅ [callBackend] Respuesta exitosa:', data);
    
    return data;
    
  } catch (error) {
    console.error('❌ [callBackend] Error:', error);
    return { success: false, error: error.message };
  }
}

// Mensaje de confirmación
console.log('✅ config.js cargado correctamente');
console.log('📍 API_URL:', API_URL);
