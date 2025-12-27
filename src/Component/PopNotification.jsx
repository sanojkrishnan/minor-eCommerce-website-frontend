import React, { useContext } from 'react'
import { MessageContext } from '../Context/StateContext'

function PopNotification() {
    const { viewMessage, setViewMessage } = useContext(MessageContext);
  if(viewMessage){
    setTimeout(() => {
        setViewMessage("");
    },5000);
    return (
        <div className='w-full fixed bottom flex justify-center'>
        <div className='block x-20 rounded-xl text-white bg-black text-center font-semibold text-lg p-4 w-fit'>
            <p>{viewMessage}</p>
        </div>
        </div>
    )
  }
  if(!viewMessage) {
    return null;
  }
}

export default PopNotification