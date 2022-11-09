import { useRef } from 'react'

const Play = () => {
    const videoRef = useRef();
  
    

    const handlePlay = () => {
        videoRef.current.play();
    }
    const handlePause = () => {
        videoRef.current.pause();
    }
    
  return (
    <>
       <div className="grid-btn">
        <div className="btn" onClick={handlePlay}>Play</div>
        <div className="btn-pause" onClick={handlePause}>Pause</div>
          </div>
          <video width="520" height="240" ref={videoRef}>
              <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"/>
          </video>
    </>
  )
}

export default Play