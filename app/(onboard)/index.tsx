import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { CTAButton } from '@/components/CTAButton';

const { width, height } = Dimensions.get('window');

const OnboardScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);

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
      >
        <View style={styles.page}>
          <Image source={require('@/assets/images/trainers/duo_1.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Todos os Pokémons em um só Lugar</Text>
            <Text style={styles.subtitle}>Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela Nintendo</Text>
          </View>
          <CTAButton title='Continuar' type='default' onPress={handleContinue} />
        </View>

        <View style={styles.page}>
          <Image source={require('@/assets/images/trainers/3.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Mantenha sua Pokédex atualizada</Text>
            <Text style={styles.subtitle}>Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet.</Text>
          </View>
          <CTAButton title='Começar' type='default' />
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
  },
  page: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
    paddingHorizontal: 19.5,
    paddingBottom: 80,
  },
  image: {
    alignSelf: 'center',
  },
  textContainer: {
    marginBottom: 40,
    gap: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 26,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
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

export default OnboardScreen;