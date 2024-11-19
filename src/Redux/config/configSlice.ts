import {createSlice} from '@reduxjs/toolkit';


interface ConfigModal {
  expenses:any,
  funds:any,
  
    Food:number,
    Transport:number,
    Shopping:number,
    Education:number,
  
  products:any,
  totalfunds:number,
  totalexpenses:number
}

type ActionType = {
  type: string;
  payload: any;
};

let initialState:ConfigModal = {
  expenses:[],
  funds:[],
  
    Food:0,
    Transport:0,
    Shopping:0,
    Education:0,
  
  products: [],
  totalfunds:0,
  totalexpenses:0,

};

const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
   addFunds:(state,action)=>{
    const data:{addFund:number}=action.payload
    console.log(data,"payload")
    state.funds.push(data)
   
    state.totalfunds+=Number(data.addFund)
   },
   addexpenses:(state,action)=>{
    const data=action.payload
    if(data.type=="Food")
      {
        state.Food+=Number(data.addExpense)
      }
      else if(data.type=="Transport")
      {
        state.Transport+=Number(data.addExpense)
      }
     else if(data.type=="Shopping")
      {
        state.Shopping+=Number(data.addExpense)
      }
     else if(data.type=="Education")
      {
        state.Education+=Number(data.addExpense)
      }
    state.expenses.push(data)
    state.totalexpenses+=Number(data.addExpense)
   }
  
  },
  
  // selectors: {
  //   getProducts: (state: ConfigModal) => state.products,
  // },
});

// export const {getProducts} = ConfigSlice.selectors;

export const {
  addFunds,
  addexpenses
} = ConfigSlice.actions;

export default ConfigSlice.reducer;
