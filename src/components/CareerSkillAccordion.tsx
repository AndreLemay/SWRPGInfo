import * as React from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default (props: { careerSkills: string[] }) => {
	return (
		<Accordion>
			<Card className="careerSkills">
				<Accordion.Toggle as={Card.Header} eventKey="0" className="toggle">
					<span>Career Skills</span>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0" className="body">
					<ul>
						{props.careerSkills.map((cs, ind) => {
							return <li key={ind.toString()}>{cs}</li>
						})}
					</ul>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}
