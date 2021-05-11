import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
	<div>
		<h1>{props.course.name}</h1>
	</div>
	)
}

const Part = (props) => {
	console.log(props)
	return (
	<div>
		{props.course.name} {props.course.exercises}
	</div>
	)
}

const Content = (props) => {
	return (
	<div>
		<Part course={props.course.parts[0]} />
		<Part course={props.course.parts[1]} />
		<Part course={props.course.parts[2]} />
	</div>
	)
}

const Total = (props) => {
	return (
	<div>
		<p>
		Number of exercises {10+7+14}
		</p>
	</div>
	)
}

const App = () => {
  const course = {
	name: 'Half Stack application development',
	parts: [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]
}

  return (
    <div>
		<Header course={course} />
		<Content course={course} />
		<Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
