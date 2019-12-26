import * as React from 'react'
import { Specialization } from '../lib/types'
import { Card } from 'react-bootstrap'
import CareerSkillAccordion from './CareerSkillAccordion'
import TalentSection from './TalentSection'

export default (props: Specialization) => {
	return (
		<Card className="spec">
			<Card.Header className="header">{props.name}</Card.Header>
			<Card.Body className="body">
				<Card.Text className="text">{props.description}</Card.Text>
				<CareerSkillAccordion careerSkills={props.careerSkills} />
				<TalentSection talents={props.talents} />
			</Card.Body>
		</Card>
	)
}
