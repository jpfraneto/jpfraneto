export const orderProgrammingLogs = logs => {
  logs.sort((a, b) => (a.index > b.index ? 1 : -1));
  return logs;
};

export const durationFormatting = duration => {
  if (!duration) return 0;
  const hours = duration.substr(0, 1);
  const minutes = duration.substr(6, 2);
  const durationInMinutes = hours * 60 + +minutes;
  if (durationInMinutes === 0) return 0;
  return durationInMinutes;
};

export const average = data => {
  const counter = 0;
  const sum = 0;
  data.forEach(x => {
    if (x.duration > 0) {
      sum += x.duration;
      counter++;
    }
  });
  const avg = Math.round(sum / counter);
  return avg;
};
