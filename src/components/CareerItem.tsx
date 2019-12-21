import * as React from 'react'
import { Career } from '../lib/types'
import { Card, ListGroup, Accordion } from 'react-bootstrap'
import { navigate } from 'gatsby'
import CareerSkillAccordion from './CareerSkillAccordion'

const CareerItem = (props: Career) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
				<CareerSkillAccordion careerSkills={props.careerSkills} />
				<Accordion>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="1">
							<span>Specializations</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1" style={{ margin: '10px' }}>
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
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Card.Body>
		</Card>
	)
}

export default CareerItem
