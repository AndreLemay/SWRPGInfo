import * as React from 'react'
import { Specialization } from '../lib/types'
import { Card } from 'react-bootstrap'
import CareerSkillAccordion from './CareerSkillAccordion'
import TalentSection from './TalentSection'

export default (props: Specialization) => {
	return (
		<Card>
			<Card.Header>{props.name}</Card.Header>
			<Card.Body>
				<Card.Text>{props.description}</Card.Text>
				<CareerSkillAccordion careerSkills={props.careerSkills} />
				<TalentSection talents={props.talents} />
			</Card.Body>
		</Card>
	)
}
