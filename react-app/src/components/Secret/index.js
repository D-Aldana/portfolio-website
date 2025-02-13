import { useState, useEffect } from 'react'
import styles from './index.module.scss'

const Secret = () => {
  const [password, setPassword] = useState('')
  const [wrong, setWrong] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [randomPosition, setRandomPosition] = useState({
    top: '50%',
    left: '50%',
  })

  useEffect(() => {
    if (wrong) {
      const top = `${Math.floor(Math.random() * 50) + 20}%`
      const left = `${Math.floor(Math.random() * 50) + 20}%`
      setRandomPosition({ top, left })

      setTimeout(() => {
        setWrong(false)
      }, 500)
    }
  }, [wrong])

  useEffect(() => {
    if (correct) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            window.location.href = '/valentines'
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [correct])

  const onClick = () => {
    if (password.toLowerCase() === 'shipyards') {
      setCorrect(true)
    } else {
      setWrong(true)
    }
  }

  return (
    <div className={styles.container}>
      {!correct ? (
        <>
          <h1>Riddle me this!</h1>
          <h2>
            Last year on this special day, we laced up and slid away. Where the
            ice was smooth and bright, and our hearts felt warm that night.
          </h2>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className={wrong ? styles.wrong : ''}
          />
          <button onClick={onClick} className={styles.submitBtn}>
            SUBMIT
          </button>

          {wrong && (
            <p
              className={styles.wrongMessage}
              style={{
                position: 'absolute',
                top: randomPosition.top,
                left: randomPosition.left,
                transition: 'top 0.2s ease, left 0.2s ease',
              }}
            >
              Try again!
            </p>
          )}
        </>
      ) : (
        <>
          <h1>You got it!</h1>
          <p className={styles.countdown}>Redirecting in {countdown}...</p>
        </>
      )}
    </div>
  )
}

export default Secret
