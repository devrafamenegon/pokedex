import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native"
import BackArrowIcon from "@/components/icon/back-arrow";

interface HeaderProps {
  children: any;
}

const HeaderView: React.FC<HeaderProps> = ({ children }) => {
  const router = useRouter();

  const handleBack = () => {
    router.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.backArrow} onPress={handleBack}>
          <BackArrowIcon />
        </Pressable>
        <Text style={styles.header}>Criar conta</Text>
      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },
  headerContainer: {
    height: 38,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  backArrow: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 32,
    margin: -32,
    zIndex: 1
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,   
  }
});

export default HeaderView;