

const init = {
    dailyInfo: []
}


export default (state = init, action) => {
    switch (action.type) {
        case 'ADDFEED':
            return state;
        case 'SETFEED':
            return { ...state, dailyInfo: action.feed.reverse()}
    }

    return state;
};