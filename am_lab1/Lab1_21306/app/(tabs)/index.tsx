import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'

import { Fruit, fruitsData } from '@/data/fruits';

export default function Index() {
  const [licznik, setLicznik] = useState(0);

  const router = useRouter();

  const renderFruitItem = ({ item }: { item: Fruit }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => router.push({ pathname: './fruit-details', params: { id: item.id } })}
    >
      <Text style={styles.fruitName}>{item.name}</Text>
      <Text style={styles.fruitDetails}>
        Cena: {item.price} zł | W magazynie: {item.quant} szt.
      </Text> 
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Text style={styles.header}>Zadanie 2</Text>

        <Text style={styles.counterText}>
          Wartość: {licznik}
        </Text>

        <View style={styles.btns}>
          <Button title="Zwiększ" onPress={() => setLicznik(licznik + 1)} />
          <Button title="Zmniejsz" onPress={() => setLicznik(licznik - 1)} />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.listSection}>
        <Text style={styles.header}>Zadanie 3</Text>

        <FlatList
          data={fruitsData}
          renderItem={renderFruitItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  // --- Style dla Zadania 2 ---
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },

  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },

  // --- Style dla Zadania 3 ---
  listSection: {
    flex: 1
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  fruitName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d35400',
    marginBottom: 5,
  },
  fruitDetails: {
    fontSize: 14,
    color: '#666',
  },
});