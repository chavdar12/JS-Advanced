function solve() {
    const correct = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    const sections = Array.from(document.querySelectorAll('#quizzie section'));
    let current = 0;
    let rightAnswers = 0;

    sections.forEach((section) => {
        section.querySelectorAll('.answer-text').forEach((answer) => {
            answer.addEventListener('click', () => {
                if (answer.textContent === correct[current]) rightAnswers++;
                section.classList.add('hidden');
                current++;
                if (current < sections.length) {
                    sections[current].classList.remove('hidden');
                } else {
                    document.getElementById('results').style.display = 'block';
                    document.querySelector('#results h1').textContent = rightAnswers === correct.length
                        ? 'You are recognized as top JavaScript fan!'
                        : `You have ${rightAnswers} right answers`;
                }
            });
        });
    });
}
