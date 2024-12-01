export const getAvatarName = (fullName: string): string => {
  const nameParts = fullName.split(" ");
  const firstLetter = nameParts[0]?.charAt(0).toUpperCase();
  const lastLetter = nameParts[nameParts.length - 1]?.charAt(0).toUpperCase();
  return `${firstLetter}${lastLetter}`;
};
