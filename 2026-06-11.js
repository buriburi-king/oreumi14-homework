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
