import React from 'react'


export const CustomCursor = () => {

  const cursorRef = React.useRef(null)

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) =>{
      const {clientX, clientY} = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2

    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  },[])
  return(
    <div className="fixed h-8 w-8 border rounded-full pointer-events-none overflow-hidden transform-none z-1000" ref={cursorRef}/>
  )
}
