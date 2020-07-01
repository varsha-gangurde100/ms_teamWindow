const initialState={
    chatbubble:[]
}

const textReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'SET_CHAT':
            return{
                chatbubble:[...state.chatbubble, action.payload.temp]
            }
        default:
        return state;
    }
}

export default textReducer;

