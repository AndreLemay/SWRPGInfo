import * as React from 'react'
import { Talent } from '../lib/types'
import { Card } from 'react-bootstrap'

export default (props: Talent) => {
	return (
		<Card className={`talent ${props.passive && 'passive'}`} style={{height: '100%'}}>
			<Card.Header className="header">{props.name}</Card.Header>
			<Card.Body className="body">
				<Card.Text className="text">{props.description}</Card.Text>
			</Card.Body>
		</Card>
	)
}
