const scores = [85, 92, 58, 74, 66, 100, 43];
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function isPassed(score) {
  if (score >= 60) {
    return true;
  } else {
    return false;
  }
}
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}
function getPassedScores(scores) {
  const highscore = scores.filter((scores) => scores >= 60);
  return highscore;
}
function getScoreMessages(scores) {
  return scores.map((score) => {
    const grade = getGrade(score);
    return score + "점은 " + grade + "등급입니다.";
  });
}
function printScoreReport(scores) {
  scores.forEach((score) => {
    const grade = getGrade(score);
    const pass = isPassed(score) ? "합격" : "불합격";
    console.log(score + "점: " + grade + "등급, " + pass);
  });
}
function printSummary(scores) {
  console.log("평균 점수: " + getAverage(scores) + "점");
  console.log("합격 점수: " + getPassedScores(scores).join(","));
  console.log("점수 설명:");
  const messages = getScoreMessages(scores);
  messages.forEach((msg) => {
    console.log(msg);
  });
}
const names = ["민수", "지은", "도윤", "서연", "하준", "유나", "지호"];
function printNamedScoreReport(names, scores) {
  names.forEach((name, index) => {
    const score = scores[index];
    const grade = getGrade(score);
    const pass = isPassed(score) ? "합격" : "불합격";
    console.log(name + ": " + score + "점, " + grade + "등급, " + pass);
  });
}
