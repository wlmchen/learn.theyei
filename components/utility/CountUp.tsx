import React, { useRef } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function CountUpOnce(props) {
  const countedUp = useRef(false)
  return (
    <CountUp start={0} end={props.number} duration={props.duration}>
      {({ countUpRef, start }) => (
        <VisibilitySensor
          onChange={(isVisible) => {
            if (!countedUp.current && isVisible) {
              countedUp.current = true
              start()
            }
          }}
          delayedCall
        >
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  )
}
