import React from 'react'

const Support = () => {
  const phrases = [
    "You are beautiful and worth it!",
    "No one that has ever lived shares all the same DNA as you. You ARE special!",
    "In our wild, savage world, where beasts kill and eat each other everyday, you began the day by waking up!",
    "Every prior moment has led to this one, The world is exactly as it should be!",
    "I'm listening.",
    "This world would not be this world without you in it!",
    "You have thousands of stories within you",
    "You will die alone, but so will everyone else!"
  ]

  const phrase = phrases[Math.floor(Math.random() * phrases.length)]

  return (
  <div className='extra-page-container'>
    <h1>Support</h1>
    <p>
      {phrase}
    </p>
  </div>
)}

export default Support
