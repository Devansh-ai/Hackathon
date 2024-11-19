import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Expenses from '../../components/expenses'
import Square from '../../components/expenses/index2'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const { totalfunds, totalexpenses, Food, Education, Shopping, Transport } = useSelector((store: any) =>
    store.counter
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFDF4' }}>
      <ScrollView bounces={false}>


        <View style={styles.header}>
          <Text style={styles.headText}>
            Your Expenses Management App
          </Text>
        </View>
        <Expenses
          type={'Expenses on Food'}
          amount={Food}
        />
        <Expenses
          type={'Expenses on Transport'}
          amount={Transport}
        />
        <Expenses
          type={'Expenses on Shopping'}
          amount={Shopping}
        />
        <Expenses
          type={'Expenses on Education'}
          amount={Education}
        />
        <View style={styles.tiles}>

          <Square
            type={'Total Funds'}
            amount={totalfunds}
          />
          <Square
            type={"Total Expenses"}
            amount={totalexpenses}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  tiles: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  headText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#7f3dff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
})