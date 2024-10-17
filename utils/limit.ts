export const getLimit = () => {
  return Number(process.env.EXPO_PUBLIC_POKEMON_API_LIMIT ?? 10);
};
