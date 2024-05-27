document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('expanded');
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i> Show/Hide Details';
        toggleButton.className = 'btn btn-primary mb-3';
        section.prepend(toggleButton);

        toggleButton.addEventListener('click', () => {
            section.classList.toggle('expanded');
            const details = section.querySelector('.details');
            if (details) {
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            }
        });

        const details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = section.innerHTML;
        section.innerHTML = '';
        section.appendChild(toggleButton);
        section.appendChild(details);
    });
});
