import {Feed } from '../../modals/CollectionsModal'



export const addFeed =(title,link,content)=>{
 return async dispatch =>{

    const response = await fetch('https://defencepedia-cd337.firebaseio.com/Feed.json',
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
  dispatch({type:'ADDFEED'})
 }


}

export const LoadFeed=()=>{
return async dispatch=>{
try{
  const response = await fetch('https://defencepedia-cd337.firebaseio.com/Feed.json')

  if(!response.ok){
    throw new Error('Something went wrong!')
  }
const resData =await response.json()
let loadedFeeds=[]

for (const key in resData) {
  loadedFeeds.push(
    new Feed(
      key,
      resData[key].Title,
      resData[key].Link,
      resData[key].Content,
      new Date(resData[key].createdAt)
    )
  );
}

dispatch({type:'SETFEED',feed:loadedFeeds})
} catch (err) {
  throw err;
}
}
}

