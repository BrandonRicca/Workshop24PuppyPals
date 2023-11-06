import './App.css'
import './index.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log("puppyList: ", puppyList)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  {
    featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )
  }
  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p onClick={() => { }} key={puppy.id}>
              {puppy.name}
              {() => { console.log("puppy id: ", puppy.id) }}
              onClick={() => { setFeatPupId(puppy.id) }}
            </p>
          );
        })}
      </div>
    </>
  )
}

export default App
