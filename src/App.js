import { useState } from 'react'
import basicImage from './img/basic-image.jpg'

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className='model-menu'>
        <button onClick = {() => setFlag(true)} class='model-menu-text'>
          Open window
        </button>
        { flag && (
            <div className='overlay'>
              <div className='image-container'>
                <button onClick = {() => setFlag(false)} className='close-bin'>
                  ×
                </button>
                <img src={basicImage} alt='basic-image' className='basic-image' />
              </div>
            </div>
          )}
      </div>
    </>
  );
}

export default App;