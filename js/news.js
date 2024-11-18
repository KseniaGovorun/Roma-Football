document.addEventListener('DOMContentLoaded', () => {

    const newsImageInput = document.getElementById('newsImage');
    const previewImage = document.getElementById('preview');
    const newsForm = document.getElementById('newsForm');
    const newsTitle = document.getElementById('newsTitle');
    const newsText = document.getElementById('newsText');

    newsImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });

    newsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        if (!newsTitle.value.trim()) {
            isValid = false;
            newsTitle.style.borderColor = 'red';
        } else {
            newsTitle.style.borderColor = '';
        }

        if (!newsText.value.trim()) {
            isValid = false;
            newsText.style.borderColor = 'red';
        } else {
            newsText.style.borderColor = '';
        }

        if (!newsImageInput.files.length) {
            isValid = false;
            alert('Please add an image to the news.');
        }

        if (isValid) {
            alert('News added successfully!');

            newsForm.reset();
            previewImage.src = 'img/image.png';
        }
    });
});
