import * as React from 'react'
import { Specialization } from '../lib/types'
import { Card, Accordion } from 'react-bootstrap'
import TalentSection from './TalentSection'

export default (props: Specialization) => {
	return (
		<Card className="spec">
			<Card.Header className="header">{props.name}</Card.Header>
			<Card.Body className="body">
				<Accordion defaultActiveKey="desc">
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="desc">
							<span>Description</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="desc">
							<Card.Text className="text">{props.description}</Card.Text>
						</Accordion.Collapse>
					</Card>
					<Card className="careerSkills">
						<Accordion.Toggle as={Card.Header} eventKey="skills" className="toggle">
							<span>Career Skills</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="skills" className="body">
							<div>
								<ul>
									{props.careerSkills.map((cs, ind) => {
										return <li key={ind.toString()}>{cs}</li>
									})}
								</ul>
							</div>
						</Accordion.Collapse>
					</Card>
					<TalentSection talents={props.talents} />
				</Accordion>
			</Card.Body>
		</Card>
	)
}
