import React, { useEffect, useRef } from 'react'
import './newPrompt.css'

const NewPrompt = () => {

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth"})
  },[])

  return (
    <>
    {/* ADD NEW CHAT */}
    <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt="attachment" />
        </label>
        <input id='file' type="file" multiple={false} hidden/>
        <input type="text" placeholder='Ask anything...' />
        <button>
          <img src="/arrow.png" alt="arrow" />
        </button>
      </form>
    </>
  )
}

export default NewPrompt