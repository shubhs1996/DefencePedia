const init ={
Informations:[]
}


export default (state=init , action )=>{
    switch(action.type){
        case 'ADDINFO':
            return state;
            case 'SETINFO':
                return {...state,Informations:action.infos.reverse()}
    }
 
     return state;
 };