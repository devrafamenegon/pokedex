import RegionsIcon from "@/components/icon/tab/regions";
import ProfileIcon from "@/components/icon/tab/profile";
import PokedexIcon from "@/components/icon/tab/pokedex";
import FavoritesIcon from "@/components/icon/tab/favorites";
import { StyleSheet, Text } from "react-native";
import PokedexActiveIcon from "@/components/icon/tab/pokedex-active";
import RegionsActiveIcon from "@/components/icon/tab/regions-active";
import FavoritesActiveIcon from "@/components/icon/tab/favorites-active";
import ProfileActiveIcon from "@/components/icon/tab/profile-active";
import { Stack, Tabs } from "expo-router";
import HomeScreen from "./pokedex";
import RegionsScreen from "./regions";
import FavoritesScreen from "./favorites";
import ProfileScreen from "./profile";

interface TabBarIconProps {
  focused: boolean;
  label: string;
  ActiveIcon: React.ComponentType;
  InactiveIcon: React.ComponentType;
}

const TabBarIcon = ({
  focused,
  label,
  ActiveIcon,
  InactiveIcon,
}: TabBarIconProps) => {
  return {
    tabBarLabel: () => (
      <Text
        style={{
          ...styles.tabLabel,
          color: focused ? "#173EA5" : "#333",
          opacity: focused ? 1 : 0.3,
        }}
      >
        {label}
      </Text>
    ),
    tabBarIcon: () => (focused ? <ActiveIcon /> : <InactiveIcon />),
  };
};

function TabsScreen() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 72,
          backgroundColor: "#fff",
          borderColor: "#E6E6E6",
          borderWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="pokedex"
        options={({ route, navigation }) => ({
          ...TabBarIcon({
            focused: navigation.isFocused(),
            label: "Pokedéx",
            ActiveIcon: PokedexActiveIcon,
            InactiveIcon: PokedexIcon,
          }),
        })}
      />

      <Tabs.Screen
        name="regions"
        options={({ route, navigation }) => ({
          ...TabBarIcon({
            focused: navigation.isFocused(),
            label: "Regiões",
            ActiveIcon: RegionsActiveIcon,
            InactiveIcon: RegionsIcon,
          }),
        })}
      />

      <Tabs.Screen
        name="favorites"
        options={({ route, navigation }) => ({
          ...TabBarIcon({
            focused: navigation.isFocused(),
            label: "Favoritos",
            ActiveIcon: FavoritesActiveIcon,
            InactiveIcon: FavoritesIcon,
          }),
        })}
      />

      <Tabs.Screen
        name="profile"
        options={({ route, navigation }) => ({
          ...TabBarIcon({
            focused: navigation.isFocused(),
            label: "Conta",
            ActiveIcon: ProfileActiveIcon,
            InactiveIcon: ProfileIcon,
          }),
        })}
      />
    </Tabs>
  );
}

export default function TabsLayout() {
  return <TabsScreen />;
}

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#173EA5",
  },
});
