function submitQuiz() {
  let score = 0;
  let wrongAnswers = [];

  let q1Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q1Answer === "Matplotlib") {
    score++;
  } else {
    wrongAnswers.push('1. Correct answer is "Matplotlib", Your answer: ' + q1Answer);
  }

  let q2Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q2Answer === "Scikit-learn") {
    score++;
  } else {
    wrongAnswers.push('2. Correct answer is "Scikit-learn", Your answer: ' + q2Answer);
  }

  let q3Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q3Answer === "Selenium") {
    score++;
  } else {
    wrongAnswers.push('3. Correct answer is "Selenium", Your answer: ' + q3Answer);
  }

  let q4Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q4Answer === "NumPy") {
    score++;
  } else {
    wrongAnswers.push('4. Correct answer is "NumPy", Your answer: ' + q4Answer);
  }

  let q5Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q5Answer === "All of the above") {
    score++;
  } else {
    wrongAnswers.push('5. Correct answer is "All of the above", Your answer: ' + q5Answer);
  }

 let q6Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q6Answer === "int x = 5;") {
    score++;
  } else {
    wrongAnswers.push('6. Correct answer is "int x = 5;", Your answer: ' + q1Answer);
  }

  let q7Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q7Answer === "+") {
    score++;
  } else {
    wrongAnswers.push('7. Correct answer is "+", Your answer: ' + q2Answer);
  }

  let q8Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q8Answer === "if (condition) { code } else { code }") {
    score++;
  } else {
    wrongAnswers.push('8. Correct answer is "if (condition) { code } else { code }", Your answer: ' + q3Answer);
  }

  let q9Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q9Answer === "To avoid naming conflicts") {
    score++;
  } else {
    wrongAnswers.push('9. Correct answer is "To avoid naming conflicts", Your answer: ' + q4Answer);
  }

  let q10Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q10Answer === "All of the above") {
    score++;
  } else {
    wrongAnswers.push('10. Correct answer is "All of the above", Your answer: ' + q5Answer);
  }

  let q11Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q11Answer === "To create generic functions") {
    score++;
  } else {
    wrongAnswers.push('11. Correct answer is "To create generic functions", Your answer: ' + q1Answer);
  }

  let q12Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q12Answer === "try-catch block") {
    score++;
  } else {
    wrongAnswers.push('12. Correct answer is "try-catch block", Your answer: ' + q2Answer);
  }

  let q13Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q13Answer === "ifstream") {
    score++;
  } else {
    wrongAnswers.push('13. Correct answer is "ifstream", Your answer: ' + q3Answer);
  }

   let q14Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q14Answer === "Hiding internal details") {
    score++;
  } else {
    wrongAnswers.push('14. Correct answer is "Hiding internal details", Your answer: ' + q4Answer);
  }

  let q15Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q15Answer === "Bundling data and methods") {
    score++;
  } else {
    wrongAnswers.push('15. Correct answer is "Bundling data and methods", Your answer: ' + q5Answer);
  }

  let q16Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q16Answer === "Deriving a new class from an existing class") {
    score++;
  } else {
    wrongAnswers.push('16. Correct answer is "Deriving a new class from an existing class", Your answer: ' + q1Answer);
  }

  let q17Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q17Answer === "Classes are blueprints for objects") {
    score++;
  } else {
    wrongAnswers.push('17. Correct answer is "Classes are blueprints for objects", Your answer: ' + q2Answer);
  }

  let q18Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q18Answer === "To store memory addresses") {
    score++;
  } else {
    wrongAnswers.push('18. Correct answer is "To store memory addresses", Your answer: ' + q3Answer);
  }

  let q19Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q19Answer === "Arrays are fixed size, vectors are dynamic") {
    score++;
  } else {
    wrongAnswers.push('19. Correct answer is "Arrays are fixed size, vectors are dynamic", Your answer: ' + q4Answer);
  }

  let q20Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q20Answer === "To control the flow of the program") {
    score++;
  } else {
    wrongAnswers.push('20. Correct answer is "To control the flow of the program", Your answer: ' + q5Answer);
  }


 let resultHtml = '';
  resultHtml += '<p>Total Score: ' + score + '/20</p>';
  if (score < 5) {
    resultHtml += '<p>Wrong Answers:</p>';
    resultHtml += '<ul>';
    wrongAnswers.forEach(answer => {
      resultHtml += '<li>' + answer + '</li>';
    });
    resultHtml += '</ul>';
  }
  document.getElementById('result').innerHTML = resultHtml;
}

