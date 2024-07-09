document.addEventListener('DOMContentLoaded', () => {
    const countryList = document.getElementById('country-list');
    const papersContainer = document.getElementById('papers-container');
    const categoryDescriptionText = document.getElementById('category-description-text');

    // Populate country list dynamically
    for (const country in elecData) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = country;
        a.setAttribute('data-country', country);
        li.appendChild(a);
        countryList.appendChild(li);
    }

    // Add event listeners to the country links
    document.querySelectorAll('.category-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const country = e.target.getAttribute('data-country');
            displayQuestions(country);
        });
    });

    function displayQuestions(country) {
        const questions = elecData[country].Questions;
        let questionsHTML = '';

        if (questions.length) {
            questionsHTML += '<ul>'; // Use a simple ul container for questions
            questions.forEach((question) => {
                questionsHTML += `<li>${question}</li>`;
            });
            questionsHTML += '</ul>';
        } else {
            questionsHTML += '<p>No questions available for this country.</p>';
        }

        // categoryDescriptionText.textContent = `Questions for ${country}:`;
        papersContainer.innerHTML = questionsHTML;
    }
});
