import * as React from 'react'
import { Career } from '../lib/types'
import { Card, ListGroup, Accordion } from 'react-bootstrap'
import { navigate } from 'gatsby'

const CareerItem = (props: Career) => {
	return (
		<Card className="career">
			<Card.Header className="header">{props.name}</Card.Header>
			<Card.Body className="body">
				<Accordion defaultActiveKey="desc">
					<Card className="description">
						<Accordion.Toggle as={Card.Header} eventKey="desc">
							<span>Description</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="desc" className="body">
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
					<Card className="specializations">
						<Accordion.Toggle as={Card.Header} eventKey="specs" className="toggle">
							<span>Specializations</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="specs" className="body">
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
