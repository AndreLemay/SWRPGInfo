import * as React from 'react'
import { Talent } from '../lib/types'
import { Card } from 'react-bootstrap'

export default (props: Talent) => {
	/*
		Formatting fucked this all kinds of ways.. basically just listing which connections exist using this format:
		({Row|Col}|{Row|Col}) repeating for each connection that exists
	*/
	let buildConnectionString = () => {
		return `(${props.connections[0] ? `{${props.row}|${props.column - 1}}` : ''}${
			props.connections[1]
				? `${props.connections[0] ? '-' : ''}{${props.row - 1}|${props.column}}`
				: ''
		}${
			props.connections[2]
				? `${props.connections[0] || props.connections[1] ? '-' : ''}{${
						props.row
				  }|${props.column + 1}}`
				: ''
		}${
			props.connections[3]
				? `${
						props.connections[0] || props.connections[1] || props.connections[2]
							? '-'
							: ''
				  }{${props.row + 1}|${props.column}}`
				: ''
		})`
	}

	return (
		<Card
			className={`talent ${props.passive && 'passive'}`}
			style={{ height: '100%' }}>
			<Card.Header className="header">
				<span>{props.name}</span>
				<span className="connections">{buildConnectionString()}</span>
				<span className="rowCol">
					R:{props.row}|C:{props.column}
				</span>
			</Card.Header>
			<Card.Body className="body">
				<Card.Text className="text">{props.description}</Card.Text>
			</Card.Body>
		</Card>
	)
}
