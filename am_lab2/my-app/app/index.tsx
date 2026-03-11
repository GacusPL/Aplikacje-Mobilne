import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { cities } from "../data/cities";

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.headerTitle}>Zad 1 lista miast</Text>
        }
        renderItem={({ item }) => (
          <Link href={`/city/${item.id}`} asChild>
            <Pressable>
              {({ pressed }) => (
                <View style={[styles.button, pressed && styles.buttonPressed]}>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              )}
            </Pressable>
          </Link>
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
    marginBottom: 20, // Increased bottom margin slightly for separation
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center', // Center items horizontally
    paddingBottom: 40, // extra space at the bottom for scroll comfort
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 30, // Much larger vertical padding
    paddingHorizontal: 20,
    borderRadius: 12, // Slightly larger border radius for big buttons
    marginVertical: 15, // Larger margin to spread them out
    alignItems: 'center',
    justifyContent: 'center',
    width: 300, // Fixed uniform width instead of percentages
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
    fontSize: 24, // Larger text for larger buttons
    fontWeight: "bold",
    color: "#ffffff",
  },
});
