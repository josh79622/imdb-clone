import React from 'react'

export default function Results({results}) {
  return (
    <div>
      {
        results.map((result, k) => (
          <h2 key={k}>{result.title}</h2>
        ))
      }
    </div>
  )
}
