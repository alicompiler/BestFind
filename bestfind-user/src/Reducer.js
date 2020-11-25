const initState = {
    cardStatus:"disable"
  }
  
 


  const Reducer = (state=initState,action) => {
    switch (action.type){
      
      case "changeCardStatus":
        return {
          ...state,
          cardStatus: action.cardStatus
        }
        
        
      default: 
        return state
    }
  }
  
  export default Reducer