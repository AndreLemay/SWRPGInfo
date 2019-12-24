import * as React from 'react'
import { Career } from '../lib/types'
import { Card, ListGroup, Accordion } from 'react-bootstrap'
import { navigate } from 'gatsby'
import CareerSkillAccordion from './CareerSkillAccordion'

const CareerItem = (props: Career) => {
	return (
		<Card>
			<Card.Header>{props.name}</Card.Header>
			<Card.Body>
				<Card.Text>{props.description}</Card.Text>
				<CareerSkillAccordion careerSkills={props.careerSkills} />
				<Accordion>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="1">
							<span>Specializations</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1" style={{ margin: '10px' }}>
							<ListGroup>
								{props.specializations.map((spec, ind) => {
									return (
										<ListGroup.Item
											key={ind}
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
