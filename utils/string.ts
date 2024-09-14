export const capitalizeFirstLetter = (text: string) => {
  if (!text[0]) return;
  
  const firstLetter = text[0].toUpperCase();
  const restOfText = text.slice(1);

  return firstLetter + restOfText;
}

export const formatPokemonNumber = (id: number) => {
  return (id/1000).toFixed(3).split('.').join("")
}