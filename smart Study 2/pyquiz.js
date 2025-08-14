function submitQuiz() {
  let score = 0;
  let wrongAnswers = [];

  let q1Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q1Answer === "variable = value") {
    score++;
  } else {
    wrongAnswers.push('1. Correct answer is "variable = value", Your answer: ' + q1Answer);
  }

  let q2Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q2Answer === "int") {
    score++;
  } else {
    wrongAnswers.push('2. Correct answer is "int", Your answer: ' + q2Answer);
  }
let q3Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q3Answer === "+") {
    score++;
  } else {
    wrongAnswers.push('3. Correct answer is "+", Your answer: ' + q3Answer);
  }

  let q4Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q4Answer === "if condition") {
    score++;
  } else {
    wrongAnswers.push('4. Correct answer is "if condition", Your answer: ' + q4Answer);
  }

  let q5Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q5Answer === "def function_name()") {
    score++;
  } else {
    wrongAnswers.push('5. Correct answer is "def function_name()", Your answer: ' + q5Answer);
  }

let q6Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q6Answer === "All of the above") {
    score++;
  } else {
    wrongAnswers.push('6. Correct answer is "All of the above", Your answer: ' + q1Answer);
  }

  let q7Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q7Answer === "open('file.txt', 'r')") {
    score++;
  } else {
    wrongAnswers.push('7. Correct answer is "open(\'file.txt\', \'r\')", Your answer: ' + q2Answer);
  }

  let q8Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q8Answer === "try") {
    score++;
  } else {
    wrongAnswers.push('8. Correct answer is "try", Your answer: ' + q3Answer);
  }

  let q9Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q9Answer === "[x for x in list]") {
    score++;
  } else {
    wrongAnswers.push('9. Correct answer is "[x for x in list]", Your answer: ' + q4Answer);
  }

  let q10Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q10Answer === "lambda x: x") {
    score++;
  } else {
    wrongAnswers.push('10. Correct answer is "lambda x: x", Your answer: ' + q5Answer);
  }

    let q11Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q11Answer === "re.compile()") {
    score++;
  } else {
    wrongAnswers.push('11. Correct answer is "re.compile()", Your answer: ' + q1Answer);
  }

  let q12Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q12Answer === "socket") {
    score++;
  } else {
    wrongAnswers.push('12. Correct answer is "socket", Your answer: ' + q2Answer);
  }

  let q13Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q13Answer === "sqlite3") {
    score++;
  } else {
    wrongAnswers.push('13. Correct answer is "sqlite3", Your answer: ' + q3Answer);
  }

 let q14Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q14Answer === "tkinter") {
    score++;
  } else {
    wrongAnswers.push('14. Correct answer is "tkinter", Your answer: ' + q4Answer);
  }

  let q15Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q15Answer === "Django") {
    score++;
  } else {
    wrongAnswers.push('15. Correct answer is "Django", Your answer: ' + q5Answer);
  }

  let q16Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q16Answer === "Matplotlib") {
    score++;
  } else {
    wrongAnswers.push('16. Correct answer is "Matplotlib", Your answer: ' + q1Answer);
  }

  let q17Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q17Answer === "Scikit-learn") {
    score++;
  } else {
    wrongAnswers.push('17. Correct answer is "Scikit-learn", Your answer: ' + q2Answer);
  }

  let q18Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q18Answer === "Selenium") {
    score++;
  } else {
    wrongAnswers.push('18. Correct answer is "Selenium", Your answer: ' + q3Answer);
  }

let q19Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q19Answer === "NumPy") {
    score++;
  } else {
    wrongAnswers.push('19. Correct answer is "NumPy", Your answer: ' + q4Answer);
  }

  let q20Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q20Answer === "All of the above") {
    score++;
  } else {
    wrongAnswers.push('20. Correct answer is "All of the above", Your answer: ' + q5Answer);
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

