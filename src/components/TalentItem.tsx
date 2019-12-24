import * as React from 'react'
import { Talent } from '../lib/types'
import { Card } from 'react-bootstrap'

export default (props: Talent) => {
	return (
		<Card className={props.passive && "passive"} style={{height: '100%'}}>
			<Card.Header>{props.name}</Card.Header>
			<Card.Body>
				<Card.Text>{props.description}</Card.Text>
			</Card.Body>
		</Card>
	)
}
