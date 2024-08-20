import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import OnboardPage from '@/components/OnboardPage';

const { width } = Dimensions.get('window');

export default function AuthScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  const interpolateIndicator1 = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [3 / 4, 1 / 4],
    extrapolate: 'clamp'
  });

  const interpolateIndicator2 = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [1 / 4, 3 / 4],
    extrapolate: 'clamp'
  });

  const handleContinue = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: width, animated: true });
    }
  };

  const handleStart = () => {
    router.push('/entry-selection');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        style={{ paddingBottom: 100 }}
      >
        <View style={styles.pageContainer}>
          <OnboardPage
            imageSource={require('@/assets/images/trainers/duo_1.png')}
            title='Todos os Pokémons em um só Lugar'
            subtitle='Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela Nintendo'
            buttonTitle='Continuar'
            onButtonPress={handleContinue}
          />
        </View>
        <View style={styles.pageContainer}>
          <OnboardPage
            imageSource={require('@/assets/images/trainers/3.png')}
            title='Mantenha sua Pokédex atualizada'
            subtitle='Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet.'
            buttonTitle='Começar'
            onButtonPress={handleStart}
          />
        </View>
      </ScrollView>

      <View style={styles.pageIndicatorContainer}>
        <Animated.View style={[styles.pageIndicator, { flex: interpolateIndicator1 }]} />
        <Animated.View style={[styles.pageIndicator, { flex: interpolateIndicator2 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  pageContainer: {
    width,
    paddingHorizontal: 16
  },
  pageIndicatorContainer: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    alignSelf: 'center',
    width: 45,
    height: 9,
  },
  pageIndicator: {
    backgroundColor: '#4565B7',
    borderRadius: 100,
    marginHorizontal: 4,
  },
});
