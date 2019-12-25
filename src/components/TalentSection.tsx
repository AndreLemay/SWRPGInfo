import * as React from 'react'
import { Talent } from '../lib/types'
import TalentItem from './TalentItem'
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap'

type PropType = { talents: Talent[] }

export default class TalentSection extends React.Component<PropType> {
	render() {
		return (
			<Accordion>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						Talents
					</Accordion.Toggle>
					<Accordion.Collapse
						eventKey="0"
						style={{ marginTop: '10px', maxHeight: '550px', overflow: 'scroll' }}>
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
												{left && (
													<div
														style={{
															background: 'black',
															position: 'absolute',
															content: '',
															left: '-15px',
															top: '50%',
															height: '5px',
															width: '30px'
														}}></div>
												)}
												{right && (
													<div
														style={{
															background: 'black',
															position: 'absolute',
															content: '',
															left: '100%',
															top: '50%',
															height: '5px',
															width: '30px'
														}}></div>
												)}
												{top && (
													<div
														style={{
															background: 'black',
															position: 'absolute',
															content: '',
															left: '50%',
															top: '-50px',
															width: '5px',
															height: '50px'
														}}></div>
												)}
												{bottom && (
													<div
														style={{
															background: 'black',
															position: 'absolute',
															content: '',
															left: '50%',
															top: '100%',
															width: '5px',
															height: '50px'
														}}></div>
												)}
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
