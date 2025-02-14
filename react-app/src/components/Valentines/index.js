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
      {!clickedYes && (
        <>
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
        </>
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
        <>
          <div className={styles.yesMessage}>
            <h1 className={styles.yay}>Yay! I'm so happy you said yes!</h1>
            <img src="/zesty.gif" autoPlay loop muted alt="Video here" />
          </div>

          <div
            className={styles.message}
            style={{
              background: "url('/parchment.jpg') no-repeat center center",
            }}
          >
            <span>Dear Trisha, </span>
            <span>
              As of today, we've had 10 months of McFlurries, shared 45 weeks of
              Chicko Chicken, 320 days of calling you babe until you got used to
              it, 7680 hours of smelling each other's farts, 460,800 minutes
              snoring on the phone, and 27,648,000 seconds of being interrupted
              by phone calls from your parents.
            </span>
            <br />
            <span>
              When you walked up 45 minutes lates on the day we met, and even on
              this day 1 year ago on the ice, I could've never known that this
              much time later, you would mean so much to me. I know it's not
              easy being far apart like this, but one day we'll no longer have
              to say goodbye. Instead, it'll be see you at home. We have our ups
              and our downs, but I'd stay awake through 1000 more bad nights if
              it means I get to wake up next to you every morning.
            </span>
            <br />
            <span>
              Each moment passed is another moment closer to our next moment
              together. Thank you for loving me. I love you more than you will
              ever know. Happy Valentine's Day, my baby.
            </span>
            <br />
            <span>Love, Dokie</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Contact
