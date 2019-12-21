import * as React from 'react'
//import $ from 'jquery'
import { Talent } from '../lib/types'
import TalentItem from './TalentItem'
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap'

type PropType = { talents: Talent[] }

export default class TalentSection extends React.Component<PropType> {
	lineHolder: React.RefObject<HTMLDivElement>

	constructor(props: PropType) {
		super(props)
		this.lineHolder = React.createRef()
	}

	// componentDidMount() {
	// 	let lines = []

	// 	this.props.talents.forEach(t => {
	// 		let [left, top, right, bottom] = t.connections

	// 		if (left) {
	// 			let leftTalent = this.props.talents.filter(
	// 					x => x.row === t.row && x.column === t.column - 1
	// 				)[0],
	// 				leftElem = document.getElementById(
	// 					`#${leftTalent.name}${leftTalent.row}${leftTalent.column}`
	// 				),
	// 				thisElem = document.getElementById(`#${t.name}${t.row}${t.column}`) //,
	// 			// leftPos = leftElem.position(),
	// 			// leftWidth = leftElem.width(),
	// 			// leftHeight = leftElem.height(),
	// 			// thisPos = thisElem.position(),
	// 			// thisHeight = thisElem.height()

	// 			lines.push(
	// 				<svg>
	// 					<line
	// 						// x1={leftPos.left + leftWidth}
	// 						// x2={thisPos.left}
	// 						// y1={leftPos.top + leftHeight / 2}
	// 						// y2={thisPos.top + thisHeight / 2}
	// 						x1={leftElem.offsetLeft + leftElem.offsetWidth}
	// 						x2={thisElem.offsetLeft}
	// 						y1={leftElem.offsetTop + leftElem.offsetHeight / 2}
	// 						y2={thisElem.offsetTop + thisElem.offsetHeight / 2}></line>
	// 				</svg>
	// 			)
	// 		}

	// 		lines.forEach(l => {
	// 			this.lineHolder.current.appendChild(l)
	// 		})
	// 	})
	// }

	render() {
		return (
			<Accordion>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						Talents
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0" style={{ marginTop: '10px', maxHeight: '550px' }}>
						<Container fluid>
							<Row>
								{this.props.talents
									.sort((a, b) => {
										return a.row === b.row ? a.column - b.column : a.row - b.row
									})
									.map((t, ind) => {
										return (
											<Col xs={3} style={{ marginBottom: '50px' }} key={ind}>
												<TalentItem id={`${t.name}${t.row}${t.column}`} {...t} />
											</Col>
										)
									})}
							</Row>
							<div ref={this.lineHolder}></div>
						</Container>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		)
	}
}
