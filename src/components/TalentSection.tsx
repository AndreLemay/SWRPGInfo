import * as React from 'react'
import { Talent } from '../lib/types'
import TalentItem from './TalentItem'
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap'

interface PropType {
	talents: Talent[]
}

export default class TalentSection extends React.Component<PropType> {
	render() {
		return (
			<Accordion>
				<Card className="talents">
					<Accordion.Toggle as={Card.Header} eventKey="0" className="toggle">
						Talents
					</Accordion.Toggle>
					<Accordion.Collapse className="body" eventKey="0">
						<Container fluid>
							<Row>
								{this.props.talents
									.sort((a, b) => {
										return a.row === b.row ? a.column - b.column : a.row - b.row
									})
									.map((t, ind) => {
										let [left, top, right, bottom] = t.connections

										return (
											<Col xs={3} style={{ marginBottom: '50px' }} key={ind}>
												<TalentItem {...t} />
												{left && <div className="left" />}
												{right && <div className="right" />}
												{top && <div className="top" />}
												{bottom && <div className="bottom" />}
											</Col>
										)
									})}
							</Row>
						</Container>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		)
	}
}
