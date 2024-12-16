//age(in years,months and days) calculator
const date = Number(prompt('Enter your date of birth'));
const month = Number(prompt('Enter your month of birth'));
const year = Number(prompt('Enter your year of birth'));
const birthDate = [date, month, year];
const curDate = [13, 12, 2024];
const age = function (dob, cd) {
  const ageInDays = [];
  for (let i = 0; i < 3; i++) {
    ageInDays.push(cd[i] - dob[i]);
  }

  if (ageInDays[0] < 0) {
    ageInDays[0] += 30;
    ageInDays[1]--;
  }
  if (ageInDays[1] < 0) {
    ageInDays[1] += 12;
    ageInDays[2]--;
  }
  if (ageInDays[1] === 0 && ageInDays[0] === 0)
    return `You are ${ageInDays[2]} years old😀`;
  if (ageInDays[1] === 0)
    return `You are ${ageInDays[2]} years, ${ageInDays[0]} days old😀`;
  if (ageInDays[0] === 0)
    return `You are ${ageInDays[2]} years, ${ageInDays[1]} months old😀`;
  return `You are ${ageInDays[2]} years, ${ageInDays[1]} months, ${ageInDays[0]} days old😀`;
};
alert(age(birthDate, curDate));
