import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const numbers = [1,2,3,4,5,6,7,8,9,0];
const password = [1,2,3,7];

function App() {
  const [error, setError] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [pressedNumbers, setPressedNumbers] = useState([]);

  useEffect(() => {
    if (pressedNumbers.length == 1) {
      setError("");
    } else if (pressedNumbers.length == password.length) {
      if (pressedNumbers.join('') == password.join('')) {
        console.log('correct password');
        setIsCorrect(true);
        setError("");
      } else {
        console.log('bad password');
        setError('bad password')
        setPressedNumbers([]);
      }
    }
  }, [pressedNumbers]);

  return (
    <>
      {isCorrect ? (
        <div>Success!</div>
        ) : (
          <div>
            {error}
            <div className='number-pad'>
              {numbers.map((number, index) => (
                <button
                  className={number === 0 ? 'zero': ''}
                  key={index}
                  onClick={() => setPressedNumbers((cur) => [...cur, number])}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        )}
    </>
  )
}

export default App
