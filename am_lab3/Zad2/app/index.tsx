import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Index() {
  const [billAmount, setBillAmount] = useState<string>('156');
  const [people, setPeople] = useState<number>(3);
  const [tipPercentage, setTipPercentage] = useState<number>(20);

  const parsedBill = parseFloat(billAmount) || 0;
  const tipAmount = parsedBill * (tipPercentage / 100);
  const totalAmount = parsedBill + tipAmount;
  const splitAmount = people > 0 ? totalAmount / people : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Zadanie 2 - napiwki</Text>

        {/* Top Result Card */}
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Tyle płaci każda osoba:</Text>
          <Text style={styles.resultAmount}>{splitAmount.toFixed(2)}</Text>
        </View>

        {/* Main Control Card */}
        <View style={styles.controlCard}>
          {/* Bill Input */}
          <View style={styles.billInputContainer}>
            <Text style={styles.currencySymbol}>$</Text>
            <Text style={styles.billInputLabel}>Do zapłaty</Text>
            <TextInput
              style={styles.billInput}
              keyboardType="numeric"
              value={billAmount}
              onChangeText={setBillAmount}
              placeholder="0.00"
              placeholderTextColor="#B0B0B0"
            />
          </View>
          
          <View style={styles.separator} />

          {/* People Control */}
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Liczba osób</Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => setPeople(Math.max(1, people - 1))}
              >
                <Text style={styles.counterButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{people}</Text>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => setPeople(people + 1)}
              >
                <Text style={styles.counterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Total Tip Display */}
          <View style={[styles.row, { marginTop: 24 }]}>
            <Text style={styles.rowLabel}>Cały napiwek</Text>
            <Text style={styles.totalTipValue}>{tipAmount.toFixed(1)}zł</Text>
          </View>

          {/* Tip Slider */}
          <View style={styles.sliderContainer}>
            <Text style={styles.tipPercentageLabel}>{tipPercentage}%</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={tipPercentage}
              onValueChange={setTipPercentage}
              minimumTrackTintColor="#55D85A"
              maximumTrackTintColor="#D4F7D4"
              thumbTintColor="#55D85A"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  resultCard: {
    backgroundColor: '#C8F79D',
    borderRadius: 16,
    paddingVertical: 32,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultLabel: {
    fontSize: 16,
    color: '#5B9E3A',
    fontWeight: '500',
    marginBottom: 8,
  },
  resultAmount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#55D85A', // A more vibrant green for the big text
    textShadowColor: 'rgba(0,0,0,0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  controlCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  billInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
  },
  currencySymbol: {
    fontSize: 22,
    color: '#4DA6FF',
    fontWeight: '600',
    marginRight: 10,
  },
  billInputLabel: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  billInput: {
    fontSize: 18,
    color: '#55D85A',
    fontWeight: '500',
    padding: 0,
    minWidth: 80,
    textAlign: 'right',
  },
  separator: {
    height: 2,
    backgroundColor: '#4DA6FF', // Blue line under input
    marginBottom: 24,
    opacity: 0.8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rowLabel: {
    fontSize: 16,
    color: '#888',
    fontWeight: '500',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 36,
    height: 36,
    backgroundColor: '#C8F79D', // Light green background for buttons
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonText: {
    fontSize: 20,
    color: '#55D85A',
    fontWeight: 'bold',
    lineHeight: 22, // Fix vertical alignment on some devices
  },
  counterValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#55D85A',
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: 'center',
  },
  totalTipValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#55D85A',
  },
  sliderContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  tipPercentageLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#55D85A',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
