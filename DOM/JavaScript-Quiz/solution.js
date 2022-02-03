function solve() {
  const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let rightAnswers = 0;
  let index = 0;

  Array
    .from(document.querySelectorAll('.answer-text'))
    .map((x) => x.addEventListener('click', (e) => {
      const sections = document.querySelectorAll('section');
      const h1 = document.querySelector('#results h1')

      if (correctAnswers.includes(e.target.textContent)) {
        rightAnswers++
      }
      let currSection = sections[index];
      currSection.style.display = 'none';

      if (sections[index + 1] !== undefined) {
        const nextSection = sections[index + 1];
        nextSection.style.display = 'block';
        index++;
      } else {
        document.querySelector('#results').style.display = 'block';
        rightAnswers != 3 ? h1.textContent = `You have ${rightAnswers} right answers.` : h1.textContent = 'You are recognized as top Javascript fan!'
      };

    }));
};
