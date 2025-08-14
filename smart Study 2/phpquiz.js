

function submitQuiz() {
  let score = 0;
  let wrongAnswers = [];

  let q1Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q1Answer === "both") {
    score++;
  } else {
    wrongAnswers.push('1. Correct answer is "both" (array() and $array = []), Your answer: ' + q1Answer);
  }

  let q2Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q2Answer === "new") {
    score++;
  } else {
    wrongAnswers.push('2. Correct answer is "new", Your answer: ' + q2Answer);
  }

  let q3Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q3Answer === "if (condition)") {
    score++;
  } else {
    wrongAnswers.push('3. Correct answer is "if (condition)", Your answer: ' + q3Answer);
  }

  let q4Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q4Answer === "throw") {
    score++;
  } else {
    wrongAnswers.push('4. Correct answer is "throw", Your answer: ' + q4Answer);
  }

  let q5Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q5Answer === "string") {
    score++;
  } else {
    wrongAnswers.push('5. Correct answer is "string", Your answer: ' + q5Answer);
  }

  let q6Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q6Answer === "file_get_contents") {
    score++;
  } else {
    wrongAnswers.push('6. Correct answer is "file_get_contents", Your answer: ' + q1Answer);
  }

  let q7Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q7Answer === "function") {
    score++;
  } else {
    wrongAnswers.push('7. Correct answer is "function", Your answer: ' + q2Answer);
  }

let q8Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q8Answer === "$_POST['name']") {
    score++;
  } else {
    wrongAnswers.push('8. Correct answer is "$_POST[\'name\']", Your answer: ' + q3Answer);
  }

  let q9Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q9Answer === "file_get_contents") {
    score++;
  } else {
    wrongAnswers.push('9. Correct answer is "file_get_contents", Your answer: ' + q4Answer);
  }

  let q10Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q10Answer === "json_decode") {
    score++;
  } else {
    wrongAnswers.push('10. Correct answer is "json_decode", Your answer: ' + q5Answer);
  }

  let q11Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q11Answer === "mysqli_connect") {
    score++;
  } else {
    wrongAnswers.push('11. Correct answer is "mysqli_connect", Your answer: ' + q1Answer);
  }

  let q12Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q12Answer === "==") {
    score++;
  } else {
    wrongAnswers.push('12. Correct answer is "==", Your answer: ' + q2Answer);
  }

  let q13Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q13Answer === "preg_match") {
    score++;
  } else {
    wrongAnswers.push('13. Correct answer is "preg_match", Your answer: ' + q3Answer);
  }

  let q14Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q14Answer === "session_start()") {
    score++;
  } else {
    wrongAnswers.push('14. Correct answer is "session_start()", Your answer: ' + q4Answer);
  }

  let q15Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q15Answer === ".") {
    score++;
  } else {
    wrongAnswers.push('15. Correct answer is ".", Your answer: ' + q5Answer);
  }

let q16Answer = document.querySelector('input[name="q1"]:checked').value;
  if (q16Answer === "$variable = value") {
    score++;
  } else {
    wrongAnswers.push('16. Correct answer is "$variable = value", Your answer: ' + q1Answer);
  }

  let q17Answer = document.querySelector('input[name="q2"]:checked').value;
  if (q17Answer === "define()") {
    score++;
  } else {
    wrongAnswers.push('17. Correct answer is "define()", Your answer: ' + q2Answer);
  }

  let q18Answer = document.querySelector('input[name="q3"]:checked').value;
  if (q18Answer === "Server-side scripting") {
    score++;
  } else {
    wrongAnswers.push('18. Correct answer is "Server-side scripting", Your answer: ' + q3Answer);
  }

 let q19Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q19Answer === "simplexml_load_string()") {
    score++;
  } else {
    wrongAnswers.push('19. Correct answer is "simplexml_load_string()", Your answer: ' + q4Answer);
  }

  let q20Answer = document.querySelector('input[name="q5"]:checked').value;
  if (q20Answer === "Laravel") {
    score++;
  } else {
    wrongAnswers.push('20. Correct answer is "Laravel", Your answer: ' + q5Answer);
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