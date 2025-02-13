import React, { useState } from 'react'
import styles from './index.module.scss'

const Contact = () => {
  const [yesButtonSize, setYesButtonSize] = useState(1)
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: '50%',
    left: '50%',
  })

  const [initial, setInitial] = useState(true)
  const [clickedYes, setClickedYes] = useState(false)

  const handleNoClick = () => {
    setInitial(false)
    setYesButtonSize(yesButtonSize * 1.75)

    setNoButtonPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    })
  }

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 400 150" className={styles.svgText}>
        <path id="curve" d="M10,100 Q200,-50 390,100" fill="transparent" />
        <text>
          <textPath
            href="#curve"
            startOffset="50%"
            textAnchor="middle"
            spacing="auto"
          >
            Will you be my valentine?
          </textPath>
        </text>
      </svg>

      {!clickedYes && (
        <div className={styles.buttons}>
          <button
            className={styles.noBtn}
            onClick={handleNoClick}
            style={{
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              position: initial ? '' : 'absolute',
              transform: initial ? '' : 'translate(-50%, -50%)',
            }}
          >
            No
          </button>
          <button
            className={styles.yesBtn}
            onClick={() => setClickedYes(true)}
            style={{
              transform: `scale(${yesButtonSize})`,
            }}
          >
            Yes
          </button>
        </div>
      )}

      {/* Render hearts randomly around the page */}
      <div className={styles.heartsContainer}>
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className={
              Math.random(0, 1) > 0.5 ? styles.heart : styles['heart-pink']
            }
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
          ></div>
        ))}
      </div>

      {clickedYes && (
        <div className={styles.yesMessage}>
          <h1 className={styles.yay}>Yay! I'm so happy you said yes!</h1>
          <img src="/zesty.gif" autoPlay loop muted alt="Video here" />
        </div>
      )}
    </div>
  )
}

export default Contact
