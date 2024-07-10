document.addEventListener('DOMContentLoaded', () => {
    const countryList = document.getElementById('country-list');
    const papersContainer = document.getElementById('papers-container');
    const categoryDescriptionText = document.getElementById('category-description-text');

    // Add "All" tab
    const allLi = document.createElement('li');
    const allA = document.createElement('a');
    allA.href = '#';
    allA.textContent = 'All';
    allA.setAttribute('data-country', 'all');
    allLi.appendChild(allA);
    countryList.appendChild(allLi);

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
        let questionsHTML = '';

        if (country === 'all') {
            let allQuestions = [];
            for (const country in elecData) {
                allQuestions = allQuestions.concat(elecData[country].Questions);
            }
            if (allQuestions.length) {
                questionsHTML += '<ul class="questions-list">';
                allQuestions.forEach((question) => {
                    questionsHTML += `<li>${question}</li>`;
                });
                questionsHTML += '</ul>';
            } else {
                questionsHTML += '<p>No questions available.</p>';
            }
        } else {
            const questions = elecData[country].Questions;
            if (questions.length) {
                questionsHTML += '<ul class="questions-list">';
                questions.forEach((question) => {
                    questionsHTML += `<li>${question}</li>`;
                });
                questionsHTML += '</ul>';
            } else {
                questionsHTML += '<p>No questions available for this country.</p>';
            }
        }

        categoryDescriptionText.textContent = country === 'all' ? 'All Questions' : `Questions for ${country}:`;
        papersContainer.innerHTML = questionsHTML;
    }
});