import React from 'react'

const Header = (props) => {
	return (
	<div>
		<h1>{props.course.name}</h1>
	</div>
	)
}

const Part = ({note}) => {
	return (
		<li>
		{note.name} {note.exercises}
		</li>
	)
}

const Content = ({ course }) => {
	return (
	<div>
		<ul>
			{course.parts.map(part => 
				<Part key={part.id} note={part} />
			)}
		</ul>
	</div>
	)
}

const Total = (props) => {
	const totally = props.course.parts.reduce((p, s)=> p + s.exercises, 0);
	return (
	<div>
		total of {totally} exercises
	</div>
	)
}

const Course = (props) => {
	return (
		<div>
		<Header course={props.course} />
		<Content course={props.course} />
		<Total course={props.course} />
		</div>
	)
}

export default Course