import React from 'react'

export default function News({title , text}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}
