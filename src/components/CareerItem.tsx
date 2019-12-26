import * as React from 'react'
import { Career } from '../lib/types'
import { Card, ListGroup, Accordion } from 'react-bootstrap'
import { navigate } from 'gatsby'
import CareerSkillAccordion from './CareerSkillAccordion'

const CareerItem = (props: Career) => {
	return (
		<Card className="career">
			<Card.Header className="header">{props.name}</Card.Header>
			<Card.Body className="body">
				<Card.Text className="text">{props.description}</Card.Text>
				<CareerSkillAccordion careerSkills={props.careerSkills} />
				<Accordion>
					<Card className="specializations">
						<Accordion.Toggle as={Card.Header} eventKey="1" className="toggle">
							<span>Specializations</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1" className="body">
							<ListGroup>
								{props.specializations.map((spec, ind) => {
									return (
										<ListGroup.Item
											className="specLink"
											key={ind}
											action
											onClick={() => {
												return navigate(`/Specialization/${spec.name}`)
											}}>
											{spec.name} - {spec.subtitle}
										</ListGroup.Item>
									)
								})}
							</ListGroup>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Card.Body>
		</Card>
	)
}

export default CareerItem
