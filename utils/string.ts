export const capitalizeFirstLetter = (text: string) => {
  const firstLetter = text[0].toUpperCase();
  const restOfText = text.slice(1);

  return firstLetter + restOfText;
}