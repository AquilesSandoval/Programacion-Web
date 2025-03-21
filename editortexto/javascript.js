// Función para ejecutar comandos de edición
function execCommand(command) {
    document.execCommand(command, false, null);
}

// Función para ejecutar comandos con argumentos
function execCommandWithArg(command, arg) {
    document.execCommand(command, false, arg);
}

// Función para insertar enlace
function insertLink() {
    const url = prompt('Ingrese la URL:', 'http://');
    if (url) {
        execCommandWithArg('createLink', url);
    }
}

// Función para insertar imagen
function insertImage() {
    const url = prompt('Ingrese la URL de la imagen:', 'http://');
    if (url) {
        execCommandWithArg('insertImage', url);
    }
}

// Función para buscar texto
function searchText() {
    const searchTerm = document.getElementById('searchInput').value;
    const editorContent = document.getElementById('editor');
    
    // Eliminar resaltados anteriores
    const text = editorContent.innerHTML;
    editorContent.innerHTML = text.replace(/<mark class="highlight">(.*?)<\/mark>/g, '$1');
    
    if (searchTerm === '') return;

    const regex = new RegExp(searchTerm, 'gi');
    const newText = editorContent.innerHTML.replace(regex, match => 
        `<mark class="highlight">${match}</mark>`
    );
    
    editorContent.innerHTML = newText;
}

// Función para reemplazar texto
function replaceText() {
    const searchTerm = document.getElementById('searchInput').value;
    if (!searchTerm) {
        alert('Por favor, ingrese un texto para buscar');
        return;
    }

    const replaceWith = prompt('Reemplazar con:', '');
    if (replaceWith === null) return;

    const editorContent = document.getElementById('editor');
    const regex = new RegExp(searchTerm, 'gi');
    editorContent.innerHTML = editorContent.innerHTML.replace(regex, replaceWith);
}

// Función para contar palabras y caracteres
function updateWordCount() {
    const text = document.getElementById('editor').innerText;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const chars = text.length;

    document.getElementById('wordCount').textContent = words;
    document.getElementById('charCount').textContent = chars;
}

// Función para agregar archivo adjunto
function addAttachment() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = function() {
        const file = this.files[0];
        if (file) {
            const attachmentList = document.getElementById('attachmentList');
            const attachmentItem = document.createElement('div');
            attachmentItem.className = 'attachment-item';
            attachmentItem.innerHTML = `
                <i class="fas fa-paperclip"></i>
                ${file.name}
                <button onclick="this.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            `;
            attachmentList.appendChild(attachmentItem);
        }
    };
    input.click();
}

// Función para guardar como borrador
function saveAsDraft() {
    const draftData = {
        to: document.getElementById('to').value,
        cc: document.getElementById('cc').value,
        subject: document.getElementById('subject').value,
        content: document.getElementById('editor').innerHTML,
        timestamp: new Date().toISOString()
    };

    // Guardar en localStorage
    const drafts = JSON.parse(localStorage.getItem('emailDrafts') || '[]');
    drafts.push(draftData);
    localStorage.setItem('emailDrafts', JSON.stringify(drafts));

    alert('Borrador guardado exitosamente');
}

// Función para simular el envío del email
function sendEmail() {
    const to = document.getElementById('to').value;
    const cc = document.getElementById('cc').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('editor').innerHTML;

    if (!to || !subject || !content.trim()) {
        alert('Por favor, complete todos los campos requeridos');
        return;
    }

    // Aquí normalmente se conectaría con un servidor de correo
    alert(`Email enviado con éxito!\n\nPara: ${to}\nCC: ${cc}\nAsunto: ${subject}`);
}

// Eventos del editor
document.getElementById('editor').addEventListener('input', updateWordCount);
document.getElementById('editor').addEventListener('paste', function(e) {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
});

// Eventos de teclado para búsqueda
document.getElementById('searchInput').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        searchText();
    }
});

// Mantener el foco en el editor después de usar los botones de formato
document.querySelectorAll('.toolbar button').forEach(button => {
    button.addEventListener('mousedown', function(e) {
        e.preventDefault();
    });
});

// Inicializar el editor
document.getElementById('editor').innerHTML = 'Escribe tu mensaje aquí...';
updateWordCount();

// Función para actualizar el estado de los botones de formato
function updateToolbarState() {
    const commands = ['bold', 'italic', 'underline', 'strikeThrough', 
                     'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'];
    
    commands.forEach(command => {
        const button = document.querySelector(`button[onclick="execCommand('${command}')"]`);
        if (button) {
            button.classList.toggle('active', document.queryCommandState(command));
        }
    });
}

document.getElementById('editor').addEventListener('keyup', updateToolbarState);
document.getElementById('editor').addEventListener('mouseup', updateToolbarState);