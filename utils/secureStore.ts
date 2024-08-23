import * as SecureStore from 'expo-secure-store';

export const saveCredentials = async (email: string, password: string) => {
  await SecureStore.setItemAsync('userEmail', email);
  await SecureStore.setItemAsync('userPassword', password);
};

export const getCredentials = async () => {
  const email = await SecureStore.getItemAsync('userEmail');
  const password = await SecureStore.getItemAsync('userPassword');
  return { email, password };
};
