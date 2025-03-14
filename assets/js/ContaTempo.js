function updateMonths() {
    const today = new Date();
    const elements = document.querySelectorAll('.tempo-habilidades');
    elements.forEach(element => {
        const startDate = new Date(element.getAttribute('data-start-date'));
        const diffInMonths = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 30.44)); // Aproximadamente meses
        if (diffInMonths >= 12) {
            const years = Math.floor(diffInMonths / 12);
            element.textContent = `${years} Ano${years !== 1 ? 's' : ''}`;
        } else {
            element.textContent = `${diffInMonths} Mês${diffInMonths !== 1 ? 'es' : ''}`;
        }
    });
}

// Chamar a função inicialmente
updateMonths();

// Atualizar a contagem dos meses a cada 1 segundo
setInterval(updateMonths, 1000);