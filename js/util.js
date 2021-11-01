// модуль с вспомогательными функциями
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkCommentLength(comment, maxLength) {
  return comment.length <= maxLength;
}

const isEscapePressed = (event) => event.key === 'Escape';

export {getRandomPositiveInteger, checkCommentLength, isEscapePressed};
