# 🤖 J.A.R.V.I.S - AI Assistant Search

Asistente de IA futurista que busca información en segundo plano. Interfaz estilo JARVIS (Iron Man) con búsqueda inteligente.

## ✨ Características

- 🎨 **Interfaz Futurista**: Diseño circular tipo JARVIS con animaciones neon
- 🔍 **Búsqueda Inteligente**: Procesa queries y busca información automáticamente
- ⚡ **Búsqueda en Background**: No bloquea la interfaz mientras busca
- 💬 **Respuestas Dinámicas**: Efecto de escritura en las respuestas
- 🎯 **Fácil de Usar**: Solo escribe y presiona Enter

## 🚀 Cómo Usar

### Opción 1: Abrir localmente
1. Descarga los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! Comienza a hacer preguntas

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```
Luego abre: `http://localhost:8000`

## 📋 Comandos Disponibles

- `hola` - Saludo inicial
- `ayuda` - Ver opciones disponibles
- `hora` - Mostrar hora actual
- `fecha` - Mostrar fecha actual
- `quién eres` - Info sobre J.A.R.V.I.S
- `gracias` - Respuesta amable

## 🔧 Estructura del Proyecto

```
AI-Assistant-Search/
├── index.html      # Interfaz HTML
├── styles.css      # Estilos futuristas
├── script.js       # Lógica y funcionalidad
└── README.md       # Este archivo
```

## 📝 Archivos

### `index.html`
- Estructura de la interfaz circular
- Elementos de entrada y respuesta
- Display de estado del sistema

### `styles.css`
- Animaciones circulares rotativas
- Efectos neon y glow
- Diseño responsive
- Scrollbar personalizado

### `script.js`
- Lógica de procesamiento de queries
- Búsqueda en segundo plano (async)
- Efecto de escritura en respuestas
- Gestor de entrada de usuario

## 🎯 Próximas Mejoras

- [ ] Integrar API Google Search
- [ ] Integrar Wikipedia API
- [ ] Búsqueda en GitHub
- [ ] Soporte de voz
- [ ] Historial de búsquedas
- [ ] Temas oscuro/claro
- [ ] Guardado de preferencias

## 🛠️ Integración de APIs

Para agregar búsqueda real, modifica `performBackgroundSearch()` en `script.js`:

```javascript
// Ejemplo con fetch
const response = await fetch(`https://api.ejemplo.com/search?q=${query}`);
const data = await response.json();
```

## 📱 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 💡 Requisitos

- Navegador moderno (ES6+)
- Conexión a internet (opcional, para APIs)

## 🎮 Controles

| Acción | Control |
|--------|---------|
| Escribir query | Campo de entrada |
| Enviar | Click en SEARCH o Enter |
| Limpiar | Click en input después de respuesta |

## 🌟 Características Técnicas

- **Async/Await**: Para búsquedas no bloqueantes
- **Animaciones CSS**: Rotación de anillos, pulsos y glows
- **Efecto Typing**: Escritura carácter por carácter
- **Responsive**: Adaptable a diferentes pantallas
- **Módular**: Fácil de extender y modificar

## 📞 Contacto

Creado para: isaiasmiguelolivares-spec
Última actualización: 2026-09-11

## 📄 Licencia

MIT - Libre para usar y modificar

---

**¡Disfruta tu asistente IA futurista! 🚀✨**