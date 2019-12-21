import * as React from 'react'
import { Specialization } from '../lib/types'
import { Card } from 'react-bootstrap'
import CareerSkillAccordion from './CareerSkillAccordion'

export default (props: Specialization) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
				<CareerSkillAccordion careerSkills={props.careerSkills} />
			</Card.Body>
		</Card>
	)
}
