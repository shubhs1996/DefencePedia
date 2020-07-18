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

   export const loadInfo=()=>{
       return async dispatch=>{
        const response = await fetch('https://defencepedia-cd337.firebaseio.com/Information.json')

        const resData =await response.json()

        console.log(resData)
       }
   }

