export const getCurrentUnixTimeStampInUtc = () => {
  const now = new Date();
  return Math.floor(now.getTime() / 1000);
};
