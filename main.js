AOS.init();

const header = document.querySelector(".hero");
  header.addEventListener("mouseenter", () => {
    gsap.to(header, { scale: 1.1, duration: .3, ease: "power2.out" });
  });

  header.addEventListener("mouseleave", () => {
    gsap.to(header, { scale: 1, duration: .3, ease: "power2.out" });
  });

const cardMovie = document.querySelector("#card-movie");

 cardMovie.addEventListener("mouseenter", () => {
    gsap.to(cardMovie, { scale: 1.05, duration: .3, ease: "power2.out" });
  });

  cardMovie.addEventListener("mouseleave", () => {
    gsap.to(cardMovie, { scale: 0.95, duration: .3, ease: "power2.out" });
  });

const cardList = document.querySelector("#card-list");

 cardList.addEventListener("mouseenter", () => {
    gsap.to(cardList, { scale: 1.05, duration: .3, ease: "power2.out" });
  });

 cardList.addEventListener("mouseleave", () => {
    gsap.to(cardList, { scale: 0.95, duration: .3, ease: "power2.out" });
  });

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
