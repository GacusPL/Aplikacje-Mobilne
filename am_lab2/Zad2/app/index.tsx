import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export const games = [
  { id: '1', name: 'Roblox', developer: 'Roblox Corporation', releaseYear: 2006 },
  { id: '2', name: 'Geometry Dash', developer: 'RobTop Games', releaseYear: 2013 },
  { id: '3', name: 'Minecraft', developer: 'Mojang Studios', releaseYear: 2011 },
  { id: '4', name: 'Fortnite', developer: 'Epic Games', releaseYear: 2017 },
  { id: '5', name: 'Valorant', developer: 'Riot Games', releaseYear: 2020 },
  { id: '6', name: 'League of Legends', developer: 'Riot Games', releaseYear: 2009 },
  { id: '7', name: 'CS 2', developer: 'Valve', releaseYear: 2023 },
  { id: '8', name: 'Among Us', developer: 'Innersloth', releaseYear: 2018 },
  { id: '9', name: 'Rocket League', developer: 'Psyonix', releaseYear: 2015 },
  { id: '10', name: 'Trackmania', developer: 'Ubisoft Nadeo', releaseYear: 2020 },
];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.headerTitle}>Zadanie 2</Text>
        }
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push({ pathname: "/game/[id]", params: { id: item.id } })}
          >
            <Text style={styles.text}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f5",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    paddingBottom: 40,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: "#1d4ed8",
    transform: [{ scale: 0.98 }],
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
