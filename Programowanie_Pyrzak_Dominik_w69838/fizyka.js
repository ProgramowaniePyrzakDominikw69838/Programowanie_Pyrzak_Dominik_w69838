document.addEventListener('DOMContentLoaded', function() {
    const facts = document.querySelectorAll('.fact');

    // Iteracja po każdym elemencie i dodanie obsługi zdarzenia
    facts.forEach(fact => {
        // Pobranie treści dymku na podstawie atrybutu data-description
        const tooltipContent = fact.dataset.description;

        // Pobranie elementu .tooltip w danym kafelku
        const tooltip = fact.querySelector('.tooltip');

        // Dodanie obsługi zdarzenia najechania kursorem
        fact.addEventListener('mouseover', (event) => {
            // Wyświetlenie dymku z odpowiednią treścią
            tooltip.textContent = tooltipContent;
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';

            // Ustawienie położenia dymku obok kafelka
            const rect = fact.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            tooltip.style.left = `${x + 20}px`; // Dymek będzie wyświetlony 20px na prawo od myszy
            tooltip.style.top = `${y}px`;
        });

        // Dodanie obsługi zdarzenia opuszczenia kafelka
        fact.addEventListener('mouseleave', () => {
            // Ukrycie dymku
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
});
