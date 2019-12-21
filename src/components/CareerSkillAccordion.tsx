import * as React from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default (props: { careerSkills: string[] }) => {
	return (
		<Accordion style={{ marginBottom: '10px' }}>
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="0">
					<span>Career Skills</span>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0" style={{ marginTop: '10px' }}>
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
