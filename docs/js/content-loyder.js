document.addEventListener('DOMContentLoaded', function() {
    fetch('/data/content.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dynamic-content');
            if (container) {
                let html = '<h2>Наши функции</h2><ul>';
                data.features.forEach(feature => {
                    html += `<li><strong>${feature.title}</strong>: ${feature.description}</li>`;
                });
                html += '</ul>';

                html += '<h2>Команда</h2><ul>';
        data.team.forEach(member => {
            html += `<li>${member.name} — ${member.role}</li>`;
        });
        html += '</ul>';

        container.innerHTML = html;
    }
})
.catch(error => console.error('Ошибка загрузки JSON:', error));
});