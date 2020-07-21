

const init ={
    Suggestions :[]
}


export default (state=init , action )=>{
   switch(action.type){
       case 'ADDSUGGESTION':
           return state;
           case 'SETSUGGESTION':
               return {...state,Suggestions:action.Suggestions.reverse()}
   }

    return state;
};