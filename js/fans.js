getElementById('appealForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const appealText = document.getElementById('appeal').value.trim();

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

    document.getElementById('appealsList').prepend(newAppeal);
    document.getElementById('appeal').value = '';
});
