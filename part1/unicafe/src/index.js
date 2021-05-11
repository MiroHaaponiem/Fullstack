import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
	return (
		<button onClick={props.setClick}>
		{props.tet}
	  </button>
	)
}

const StatisticLine = (props) => {
	return (
		<tbody>
		<tr>
		<td>{props.text}</td> 
		<td>{props.value}</td>
		</tr>
		</tbody>
	)
}

const Statistics = (props) => {
	const proper = [];
	proper[0] = 0
	proper[1] = 0
	proper[2] = 0
	const totally = (props.proper[0] + props.proper[1] + props.proper[2])
	if (!props.proper[0] == 0 || !props.proper[1] == 0 || !props.proper[2] == 0) {
		return (
			<div>
			<table>
				<StatisticLine text='good' value={props.proper[0]} />
				<StatisticLine text='neutral' value={props.proper[1]} />
				<StatisticLine text='bad' value={props.proper[2]} />
				<StatisticLine text='All' value={totally} />
				<StatisticLine text='average' value={<Calculator lista={[props.proper[0],props.proper[1],props.proper[2]]} />} />
				<StatisticLine text='positive' value={<Percent count={[props.proper[0],props.proper[1],props.proper[2]]} />} />
			</table>
		</div>
		)
	} else {
		return (
			<p>No feedback given</p>
		)
	}
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [All, setAll] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1) 
  const increaseBad = () => setBad(bad + 1) 

  return (
    <div>
      <h1>Give feedback</h1>
	  <Button 
		setClick={increaseGood}
		tet='good'
	  />
	  <Button 
		setClick={increaseNeutral}
		tet='neutral'
	  />
	  <Button 
		setClick={increaseBad}
		tet='bad'
	  />
	  <h1>Statistics</h1>
	  <Statistics proper={[good,neutral,bad]} />
    </div>
  )
}

const Calculator = (props) => {
	const lista = []; 
	const total = (props.lista[0] + props.lista[1] + props.lista[2])
	lista[0] = 0
	lista[1] = 0
	lista[2] = 0
	const math = (props.lista[0]*1 + props.lista[1]*0 + props.lista[2]*-1) / total
	return (
	math
);
}

const Percent = (props) => {
	const count = [];
	const total2 = (props.count[0] + props.count[1] + props.count[2])
	count[0] = 0
	count[1] = 0
	count[2] = 0
	const math = (props.count[0] / total2) * 100
	return (
	math
	)
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
