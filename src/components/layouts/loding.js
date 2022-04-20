import React from 'react'
import './loding.css'

const Loding = () => {
  return (
    <>
    <section>
    <div id="container">
  <svg viewBox="0 0 100 100">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
          flood-color="#fc6767"/>
      </filter>
    </defs>
    <circle id="spinner" cx="50" cy="50" r="45"/>
</svg>
</div>
    </section>
    </>
  )
}

export default Loding