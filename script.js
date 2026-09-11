// Actualizar hora en tiempo real
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 1000);

// Elementos del DOM
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const responseDiv = document.getElementById('response');

// Base de datos local de respuestas rápidas
const quickResponses = {
    'hola': '¡Hola! Soy J.A.R.V.I.S, tu asistente de IA. ¿En qué puedo ayudarte?',
    'ayuda': 'Puedo ayudarte a: buscar información, responder preguntas, hacer cálculos simples, o simplemente conversar.',
    'hora': () => new Date().toLocaleTimeString('es-ES'),
    'fecha': () => new Date().toLocaleDateString('es-ES'),
    'quién eres': 'Soy J.A.R.V.I.S (Just A Really Very Intelligent System), tu asistente personal.',
    'gracias': '¡De nada! Estoy aquí para ayudarte.',
};

// Función para buscar información (simula búsqueda)
async function searchInfo(query) {
    // Convertir a minúsculas para búsqueda
    const lowerQuery = query.toLowerCase().trim();
    
    // Verificar respuestas rápidas
    for (let key in quickResponses) {
        if (lowerQuery.includes(key)) {
            const response = quickResponses[key];
            return typeof response === 'function' ? response() : response;
        }
    }
    
    // Si no hay respuesta rápida, simular búsqueda en segundo plano
    return await performBackgroundSearch(query);
}

// Función de búsqueda en segundo plano
async function performBackgroundSearch(query) {
    try {
        // Aquí es donde irían APIs reales de búsqueda
        // Por ahora, simulamos una respuesta inteligente
        
        const responses = [
            `Buscando información sobre "${query}"...`,
            `Analizando query: "${query}"...`,
            `Consultando base de datos para: "${query}"...`
        ];
        
        // Simulamos latencia de búsqueda
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Respuestas simuladas según tipo de consulta
        if (query.includes('?')) {
            return `He encontrado información relevante sobre "${query}". Esta es una respuesta simulada. Para búsquedas reales, necesitaré integrar una API como Google Search, Wikipedia o similar.`;
        }
        
        return `Información sobre "${query}": Este sistema aún está en desarrollo. Puedo procesizar queries y buscar en segundo plano, pero necesita APIs de búsqueda reales integradas.`;
    } catch (error) {
        return `Error en la búsqueda: ${error.message}`;
    }
}

// Función para mostrar respuesta con efecto de escritura
async function typeResponse(text) {
    responseDiv.innerHTML = '';
    let i = 0;
    
    while (i < text.length) {
        responseDiv.innerHTML += text.charAt(i);
        i++;
        
        // Pequeña pausa entre caracteres para efecto de escritura
        await new Promise(resolve => setTimeout(resolve, 10));
    }
}

// Función para procesar entrada del usuario
async function processInput() {
    const query = userInput.value.trim();
    
    if (!query) return;
    
    // Mostrar query en la respuesta
    responseDiv.innerHTML = `<span class="loading">Procesando: "${query}"...</span>`;
    
    // Buscar información
    const response = await searchInfo(query);
    
    // Mostrar respuesta con efecto de escritura
    await typeResponse(response);
    
    // Limpiar input
    userInput.value = '';
    userInput.focus();
}

// Event listeners
sendBtn.addEventListener('click', processInput);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processInput();
    }
});

// Auto-focus en el input al cargar
userInput.focus();

// Log de inicialización
console.log('✓ J.A.R.V.I.S initialized successfully');
console.log('Sistema listo para recibir queries...');