
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyEmailBtn');

    if (copyButton) {
      copyButton.addEventListener('click', () => {
        const email = copyButton.getAttribute('data-email');
    
        navigator.clipboard.writeText(email).then(() => {
        const originalContent = copyButton.innerHTML;
        copyButton.innerHTML = '<span class="tus-clases">¡Copiado! ✅</span>';

        setTimeout(() => {
            copyButton.innerHTML = originalContent;
        }, 2000);
        
      }).catch(err => {
        console.error('Error al copiar: ', err);
    });
      });
    }
});
