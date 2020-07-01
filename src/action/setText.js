
const setText=(bubble)=>{
    return{
    type:'SET_CHAT',
    payload:{
        temp:bubble
    }
  }
} 

export default setText;