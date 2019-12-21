import * as React from 'react'
import { Talent } from '../lib/types'
import { Card } from 'react-bootstrap'

export default (props: Talent & { id: string }) => {
	return (
		<Card id={props.id} className={props.passive && "passive"}>
			<Card.Header>{props.name}</Card.Header>
			<Card.Body>
				<Card.Text>{props.description}</Card.Text>
			</Card.Body>
		</Card>
	)
}
