// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');

            // Fecha outros itens abertos (opcional, para foco)
            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.style.maxHeight = null;
                    otherContent.previousElementSibling.querySelector('.icon').textContent = '▼';
                }
            });

            // Lógica de abrir/fechar com transição
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.textContent = '▼';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '▲';
            }
        });
    });
});