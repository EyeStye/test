document.querySelector(".calc").addEventListener("click", function () {
  const date = document.querySelector('input[type="date"]').value;
  const birthDate = [date.slice(8, 10), date.slice(5, 7), date.slice(0, 4)];
  // fetch current date on basis of UTC +0
  let today = new Date().toISOString().slice(0, 10); //YYYY-MM-DD
  const curDate = [today.slice(8, 10), today.slice(5, 7), today.slice(0, 4)];
  const age = function (dob, cd) {
    const ageInDays = [];
    for (let i = 0; i < 3; i++) {
      ageInDays.push(Number(cd[i]) - Number(dob[i]));
    }
    if (ageInDays[0] < 0) {
      ageInDays[0] += 30;
      ageInDays[1]--;
    }
    if (ageInDays[1] < 0) {
      ageInDays[1] += 12;
      ageInDays[2]--;
    }
    terms = ["day", "month", "year"];
    for (let i = 0; i < terms.length; i++) {
      terms[i] = ageInDays[i] !== 1 ? terms[i] + "s" : terms[i];
    }
    if (ageInDays[2] === 0 && ageInDays[1] === 0 && ageInDays[0] === 0)
      return `You are just born today 🎉`;
    if (ageInDays[1] === 0 && ageInDays[0] === 0)
      return `You are ${ageInDays[2]} ${terms[2]} old. Happy birthday 🎂`;
    if (ageInDays[2] === 0 && ageInDays[0] === 0)
      return `You are ${ageInDays[1]} ${terms[1]} old`;
    if (ageInDays[1] === 0 && ageInDays[2] === 0)
      return `You are ${ageInDays[0]} ${terms[0]} old`;
    if (ageInDays[1] === 0)
      return `You are ${ageInDays[2]} ${terms[2]}, ${ageInDays[0]} ${terms[0]} old`;
    if (ageInDays[0] === 0)
      return `You are ${ageInDays[2]} ${terms[2]}, ${ageInDays[1]} ${terms[1]} old`;
    if (ageInDays[2] === 0)
      return `You are ${ageInDays[1]} ${terms[1]}, ${ageInDays[0]} ${terms[0]} old`;
    return `You are ${ageInDays[2]} ${terms[2]}, ${ageInDays[1]} ${terms[1]}, ${ageInDays[0]} ${terms[0]} old`;
  };
  document.querySelector(".result").textContent = age(birthDate, curDate);
});
