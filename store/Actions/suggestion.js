import { Suggestion } from '../../modals/CollectionsModal'


//adding suggestion to firebase database
export const addSuggestion = (name, email, suggestion) => {
  return async dispatch => {

    const date=new Date();
    const response = await fetch('https://defencepedia-cd337.firebaseio.com/Suggestions.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Suggestion: suggestion,
          createdAt: date.toISOString()
        })
      }
    );

    dispatch({ type: 'ADDSUGGESTION' })
  }
}

//loading suggestions available on server
export const loadSuggestion = () => {
  return async dispatch => {

    try {
      const response = await fetch('https://defencepedia-cd337.firebaseio.com/Suggestions.json')
     
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      const loadedSuggestions = [];

      for (const key in resData) {
        loadedSuggestions.push(
          new Suggestion(
            key,
            resData[key].Name,
            resData[key].Email,
            resData[key].Suggestion,
            new Date(resData[key].createdAt)
          )
        );
      }
      

      dispatch({ type: 'SETSUGGESTION', Suggestions: loadedSuggestions })
    } catch (err) {
      throw err;
    }
  }
}