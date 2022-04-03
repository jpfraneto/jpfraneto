export const timeFormatting = s => {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${dos(mins)}:${dos(secs)}`;
};

const dos = x => {
  return x > 9 ? x : `0${x}`;
};
