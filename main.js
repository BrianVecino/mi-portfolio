document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyEmailBtn');

    if (copyButton) {
        copyButton.addEventListener('click', () => {
            const email = copyButton.getAttribute('data-email');
            
            navigator.clipboard.writeText(email).then(() => {

                alert(`¡Correo copiado! ${email}`);
                copyButton.textContent = '¡Copiado! ✅';
                setTimeout(() => {
                    copyButton.textContent = 'Email (Click para Copiar)';
                }, 2000);
                
            }).catch(err => {
                alert(`No se pudo copiar. El Email es${email}`);
                console.error('Error al copiar el texto: ', err);
            });
        });
    }
});