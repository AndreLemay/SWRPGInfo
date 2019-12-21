import * as React from 'react'
import { Career } from '../lib/types'
import { Card, ListGroup } from 'react-bootstrap'
import { navigate } from "gatsby"

const CareerItem = (props: Career) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
				<ListGroup>
					{props.specializations.map(spec => {
						return (
							<ListGroup.Item
								action
								onClick={() => {
									navigate('/Specialization/', {
										state: spec
									})
								}}>
								{spec.name} - {spec.subtitle}
							</ListGroup.Item>
						)
					})}
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default CareerItem
