import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import App from './App.jsx'

//import './index.css'

const users = [
  {
    username:'nicolasmaduro',
    name: "Micolas Naduro Potos",
    isFollowing: false
  },{
    username:'redmoaa',
    name: "Redmoa",
    isFollowing: true
  },{
    username:'hakitadev',
    name: "Public Hakita is a good idea",
    isFollowing: true
  },{
    username:'LIENDoooo',
    name: "Random memera",
    isFollowing: false
  },{
    username:'Svblimeme',
    name: "Mas memeros de kk",
    isFollowing: true
  },
]

function MakeTwitterFollowCard(){
  return (
    <section className='App'>
      {
        users.map(({username,name,isFollowing}) => (
          <TwitterFollowCard 
            key={username}
            username={username}
            initialIsFollowing={isFollowing}>
            <strong>{name}</strong>
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

//Okay, puedo pasar variables.

createRoot(document.getElementById('root')).render(
  MakeTwitterFollowCard()
)
