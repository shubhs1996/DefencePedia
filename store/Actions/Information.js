import {Info} from '../../modals/CollectionsModal'


//adding info to server and in reducer state
export const addInfo =(title,link,content)=>{
    return async dispatch =>{
   
       const response = await fetch('https://defencepedia-cd337.firebaseio.com/Information.json',
       {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           Title: title,
           Link:link,
           Content:content,
           createdAt:new Date()
         })
       }
     );
   
     // if (!response.ok) {
     //   const errorResData = await response.json();
     //   const errorId = errorResData.error.message;
     // console.log(errorId)
     //   throw new Error(message);
     // }
     dispatch({type:'ADDINFO'})
    }
   
   
   }


   //loading informations from server
   export const loadInfo=()=>{
       return async dispatch=>{
         try{ 
           
          const response = await fetch('https://defencepedia-cd337.firebaseio.com/Information.json')

        if(!response.ok){
          throw new Error('Something went wrong!')
        }
      const resData =await response.json()
      let loadedInfos=[]
      
      for (const key in resData) {
        loadedInfos.push(
          new Info(
            key,
            resData[key].Title,
            resData[key].Link,
            resData[key].Content,
            new Date(resData[key].createdAt)
          )
        );
      }
      
      dispatch({type:'SETINFO',infos:loadedInfos})
      } catch (err) {
        throw err;
      }
       }
   }

