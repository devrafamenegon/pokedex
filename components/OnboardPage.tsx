import React from 'react';
import { View, Image, Text, StyleSheet, ViewStyle, ImageSourcePropType, Dimensions } from 'react-native';
import { CTAButton } from '@/components/CTAButton';

const { width, height } = Dimensions.get('window');

type OnboardPageProps = {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  buttonTitle: string;
  onButtonPress: () => void;
  style?: ViewStyle;
};

const OnboardPage: React.FC<OnboardPageProps> = ({ 
  imageSource, 
  title, 
  subtitle, 
  buttonTitle, 
  onButtonPress, 
  style 
}) => {
  return (
    <View style={[styles.page, style]}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <CTAButton title={buttonTitle} type='default' onPress={onButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-end',
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
});

export default OnboardPage;
