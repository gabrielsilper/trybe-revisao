function convertTime(current: string, correct: string): number {
  let operations = 0;
  const operationsValues = [60, 15, 5, 1];

  let toCorrect: number;
  const currentMinutes = convertToMinute(current);
  const correctMinutes = convertToMinute(correct);

  if (current > correct) {
    toCorrect = correctMinutes + 1440 - currentMinutes;
  } else {
    toCorrect = correctMinutes - currentMinutes;
  }

  for (const value of operationsValues) {
    if (toCorrect > 0 && toCorrect >= value) {
      operations += Math.floor(toCorrect / value);
      toCorrect = toCorrect % value;
    }
  }

  return operations;
}

function convertToMinute(time: string): number {
  const [hours, minutes] = time.split(':');
  return Number(minutes) + Number(hours) * 60;
}

console.log(convertTime('11:00', '11:01'));
console.log(convertTime('02:30', '04:35'));
console.log(convertTime('23:30', '00:45'));
