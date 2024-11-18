document.addEventListener('DOMContentLoaded', () => {
    const appealForm = document.getElementById('appealForm');
    const appealInput = document.getElementById('appeal');
    const appealsList = document.getElementById('appealsList');

    appealForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const appealText = appealInput.value.trim();

        if (!appealText) {
            alert('Please enter a valid appeal.');
            return;
        }

        const currentDate = new Date().toLocaleString();

        const newAppeal = document.createElement('div');
        newAppeal.classList.add('appeal');
        newAppeal.innerHTML = `
            <p class="appeal-text">${appealText}</p>
            <div class="appeal-footer">
                <span class="appeal-date">${currentDate}</span>
                <span class="appeal-author">FootballFan2012</span>
            </div>
            <hr />
        `;

        appealsList.prepend(newAppeal);
        appealInput.value = '';
    });
});
