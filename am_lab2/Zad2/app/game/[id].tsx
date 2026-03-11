import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { games } from "../index";

export default function GameDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Game not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{game.name}</Text>
        <View style={styles.divider} />
        
        <Text style={styles.label}>Developer</Text>
        <Text style={styles.value}>{game.developer}</Text>
        
        <View style={styles.dividerSmall} />
        
        <Text style={styles.label}>Release Year</Text>
        <Text style={styles.value}>{game.releaseYear}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eef2f5",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eef2f5",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 40,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: "100%",
    maxWidth: 350,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#e5e7eb",
    marginVertical: 15,
  },
  dividerSmall: {
    height: 1,
    width: "50%",
    backgroundColor: "#e5e7eb",
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2563eb",
    textAlign: "center"
  },
  errorText: {
    fontSize: 18,
    color: "#ef4444",
  },
});
