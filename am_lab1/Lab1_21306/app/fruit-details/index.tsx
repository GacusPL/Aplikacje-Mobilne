// app/fruit-details/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fruitsData } from '@/data/fruits';

export default function FruitDetails() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const selectedFruit = fruitsData.find(fruit => fruit.id.toString() === id);

    if (!selectedFruit) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>Nie znaleziono takiego owocu!</Text>
                <Button title="Powrót" onPress={() => router.back()} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedFruit.name}</Text>

            <View style={styles.card}>
                {/* WYŚWIETLAMY ZDJĘCIE */}
                <Image
                    source={selectedFruit.image}
                    style={styles.fruitImage}
                    resizeMode="contain" // Sprawia, że zdjęcie zachowuje proporcje i nie jest obcięte
                />

                <Text style={styles.detailText}>Cena za sztukę: {selectedFruit.price} zł</Text>
                <Text style={styles.detailText}>Dostępna ilość: {selectedFruit.quant} szt.</Text>
                <Text style={styles.detailText}>Identyfikator: {selectedFruit.id}</Text>
            </View>

            <View style={styles.btnContainer}>
                <Button title="Wróć do listy" onPress={() => router.back()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#d35400',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        alignItems: 'center', // Wyśrodkowuje tekst i obrazek wewnątrz karty
    },
    // STYL DLA ZDJĘCIA
    fruitImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    detailText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    errorText: {
        fontSize: 20,
        color: 'red',
        marginBottom: 20,
    },
    btnContainer: {
        marginTop: 10,
    }
});