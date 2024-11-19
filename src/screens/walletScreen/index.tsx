import { Dimensions, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addexpenses, addFunds } from '../../Redux/config/configSlice';
import Expenses from '../../components/expenses';

const SCREEN_HEIGHT=Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;
const WalletScreen = () => {
  const dispatch=useDispatch();
  const {totalfunds,totalexpenses}=useSelector((store:any)=>
  store.counter
  );
  const [addAmount,setAddAmount]=useState({
    type:'',
    addFund:0,
    addExpense:0,
  });

  console.log('addAmount',addAmount);
  

  console.warn(totalexpenses,"hgfghjgh");
  
  // const [deductAmount,setDeductAmount]=useState(0);
  const onTypeChange=(text:string)=>{
    setAddAmount({...addAmount,type:text})
  }
  const onEnter=()=>
  {
    dispatch(addFunds(addAmount));
  }
  const onEnterExpense=()=>
  {
    dispatch(addexpenses(addAmount));
    setAddAmount({...addAmount,addExpense:0,type:''})

  }
  const onFundChange=(text:number)=>
  {
    setAddAmount({...addAmount,addFund:text})
    
  }
  const onExpenseChange=(text:number)=>
  {
    setAddAmount({...addAmount,addExpense:text})
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHead}>
        Funds
      </Text>
    <TextInput
    placeholder='Type'
    placeholderTextColor={'#7f3dff'}
    style={styles.textInput}
    onChangeText={onTypeChange}

    />
    <TextInput
    placeholder='Amount Spent'
    placeholderTextColor={'#7f3dff'}
    keyboardType='numeric'

    style={styles.textInput}
    onChangeText={onFundChange}
    />
    <TouchableOpacity onPress={onEnter} style={styles.addButton}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
    <Text style={styles.textHead}>
      Expenses
      </Text>
      <TextInput
      
    placeholder='Type'
    placeholderTextColor={'#7f3dff'}
    style={styles.textInput}
    onChangeText={onTypeChange}

    />
    <TextInput
    placeholder='Amount Earned'
    placeholderTextColor={'#7f3dff'}
    style={styles.textInput}
    onChangeText={onExpenseChange}
    />
    <TouchableOpacity onPress={onEnterExpense} style={styles.addButton}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
    {/* <TextInput
    placeholder='Type'
    placeholderTextColor={'#7f3dff'}
    style={styles.textInput}
    /> */}
      <Expenses
      type={'Total Funds'}
      amount={totalfunds}
      />
      <Expenses
      type={'Total Expenses'}
      amount={totalexpenses}
      />

    </SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({
  textHead:{
    fontSize:20,
    fontWeight:'500',
    alignSelf:'center',
  },
  addButton:{
    backgroundColor:'#7f3dff',
    width:SCREEN_WIDTH*0.4,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:25,
    height:SCREEN_HEIGHT*0.04,
    margin:10,
  },
  buttonText:{
    color :'white',
    fontSize:20,
    fontWeight:'400',
  },
  textInput:{
    backgroundColor:'#eee6ff',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    margin:10,
    borderColor:'white',
    width:SCREEN_WIDTH*0.7,
    height:SCREEN_HEIGHT*0.05,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    fontSize:20,
    fontWeight:'400',

  },
  container:{
    flex:1,
  },
})