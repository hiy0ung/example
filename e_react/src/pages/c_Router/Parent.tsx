import React from 'react'
import { Link } from 'react-router-dom'

export default function Parent() {
  return (
    <div>
      <Link to='example01'>Example 01</Link>
      <Link to='example02'>Example 02</Link>
    </div>
  )
}