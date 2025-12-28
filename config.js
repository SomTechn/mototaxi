// Configuración del backend de Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbzhm8H4Hap1lvsiujDqaMNOlMtCZnoq-pLIAUK4kfwZQl80tSCzsyqldbWPMBfwhhoD_A/exec';

// Función helper para hacer llamadas al backend
async function callBackend(action, params = {}) {
  try {
    const url = new URL(API_URL);
    url.searchParams.append('action', action);
    url.searchParams.append('params', JSON.stringify(params));
    
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error en llamada al backend:', error);
    return { success: false, error: error.message };
  }
}
