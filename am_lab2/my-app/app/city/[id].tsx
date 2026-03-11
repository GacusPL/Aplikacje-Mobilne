import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { cities } from "../../data/cities";

export default function CityDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const city = cities.find((c) => c.id === id);

  if (!city) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Nie znaleziono miasta</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{city.name}</Text>
        <View style={styles.divider} />
        <Text style={styles.populationLabel}>Populacja</Text>
        <Text style={styles.populationValue}>{city.population.toLocaleString()}</Text>
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
    backgroundColor: "#eef2f5", // match main background
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
    color: "#1f2937", // dark gray
  },
  divider: {
    height: 1,
    width: "80%",
    backgroundColor: "#e5e7eb",
    marginVertical: 15,
  },
  populationLabel: {
    fontSize: 14,
    color: "#6b7280", // gray
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
  },
  populationValue: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2563eb", // blue
  },
  errorText: {
    fontSize: 18,
    color: "#ef4444", // red
  },
});
