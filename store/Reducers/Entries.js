import { ENTRIESLIST } from "../../dummy-data/data";


const init ={
    EntryList:ENTRIESLIST,
    FilteredEntry:ENTRIESLIST,
    
}


export default (state=init,action )=>{
   switch(action.type){
       case 'FILTER_LIST':
           let availableEntry=[]
           if(action.value!=='ALL'){
         availableEntry =state.EntryList.filter(entry=>entry.entryCategory===action.value)
           }else {
               availableEntry=ENTRIESLIST
           }

        
          return {...state,FilteredEntry:availableEntry}
   
   }

    return state;
}