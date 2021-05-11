import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const data = () => {
  const points = {};
  for (let i = 0; i < 6; i++) {
    points[i] = 0;
  }
  return points
  }

const copy = {...data()};

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(copy)
   
  const handlePoints = () => {
    setVote({...copy, [selected]: copy[selected] += 1})
  };
  
  const mostvotes = () => {
		let max = -1, maxtop = -1
		
		for(let key in copy) {
			if (copy[key] > max) {
				maxtop = key
				max = vote[key]
			}
		}
		return maxtop
	}
  
  return (
    <div>
	  <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
	  <p>has {copy[selected]} votes</p>
	  <button onClick={handlePoints}>
		vote
	  </button>
	  <button onClick={()=>setSelected(Math.floor(Math.random() * 6))}>
		Next anecdote 	  
	  </button>
	  <h1>Anecdote with most votes</h1>
	  <p>{props.anecdotes[mostvotes()]}</p>
    </div>
	
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)