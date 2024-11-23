import { StyleSheet, Text, View } from "react-native";
import GenderlessBar from "./GenderLessBar";
import MaleIcon from "@/components/icon/male";
import FemaleIcon from "@/components/icon/female";

interface GenderBarProps {
  rate: number;
}

const GenderBar: React.FC<GenderBarProps> = ({ rate }) => {
  const hasGender = rate > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gênero</Text>
      {hasGender ? (
        <View style={styles.bar}>
          <View
            style={[styles.fill, { width: `${100 - rate * 12.5}%` }]}
          ></View>
        </View>
      ) : (
        <GenderlessBar />
      )}
      <View style={styles.footerContainer}>
        {hasGender ? (
          <View style={styles.footer}>
            <View style={styles.percentageContainer}>
              <MaleIcon />
              <Text style={styles.genderRate}>{100 - rate * 12.5}%</Text>
            </View>
            <View style={styles.percentageContainer}>
              <FemaleIcon />
              <Text style={styles.genderRate}>{rate * 12.5}%</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.unknownText}>Desconhecido</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  bar: {
    flex: 1,
    minHeight: 8,
    backgroundColor: "#FF7596",
    borderRadius: 999,
  },
  fill: {
    flex: 1,
    minHeight: 8,
    backgroundColor: "#2551C3",
    borderRadius: 999,
  },
  footerContainer: {
    marginTop: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderRate: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textTransform: "uppercase",
  },
  percentageContainer: {
    flexDirection: "row",
    gap: 3,
  },
  unknownText: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
  },
});

export default GenderBar;
