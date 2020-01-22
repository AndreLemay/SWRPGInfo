import * as React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Species } from '../lib/types'

export default (species: Species) => {
	let imgSrc = require(`../../content/img/species/${species.name.toLowerCase()}.jpg`)

	return (
		<Container className="species">
			<Row>
				<Col xs={6} className="info">
					<Row>
						<Col>
							<span className="name">{species.name}</span>
						</Col>
					</Row>
					<Row>
						<Col>
							<span className="desc">{species.description}</span>
						</Col>
					</Row>
				</Col>
				<Col xs={6}>
					<Image className="image" src={imgSrc} />
				</Col>
				<Col lg={6}>
					<Row className="stats">
						<Col xs={2} className="field">
							<label>Brawn</label>
							<div className="circle">
								<span>{species.brawn}</span>
							</div>
						</Col>
						<Col xs={2} className="field">
							<label>Agility</label>
							<div className="circle">
								<span>{species.agility}</span>
							</div>
						</Col>
						<Col xs={2} className="field">
							<label>Intellect</label>
							<div className="circle">
								<span>{species.intellect}</span>
							</div>
						</Col>
						<Col xs={2} className="field">
							<label>Cunning</label>
							<div className="circle">
								<span>{species.cunning}</span>
							</div>
						</Col>
						<Col xs={2} className="field">
							<label>Willpower</label>
							<div className="circle">
								<span>{species.willpower}</span>
							</div>
						</Col>
						<Col xs={2} className="field">
							<label>Presence</label>
							<div className="circle">
								<span>{species.presence}</span>
							</div>
						</Col>
						<Col xs={4} className="field">
							<label>Starting XP</label>
							<Col xs={{ span: 6, offset: 3 }}>
								<div className="circle">
									<span>{species.startXP}</span>
								</div>
							</Col>
						</Col>
						<Col xs={4} className="field">
							<label>Wound Threshold</label>
							<Col xs={{ span: 6, offset: 3 }}>
								<div className="circle">
									<span>{species.wounds}</span>
								</div>
							</Col>
						</Col>
						<Col xs={4} className="field">
							<label>Strain Threshold</label>
							<Col xs={{ span: 6, offset: 3 }}>
								<div className="circle">
									<span>{species.strain}</span>
								</div>
							</Col>
						</Col>
					</Row>
					<Row className="skills">
						<Col className="field">
							<label>Starting Skills</label>
							<span>{species.startSkills}</span>
						</Col>
					</Row>
					{species.specialAbilities && (
						<Row>
							<Col className="field">
								<label>Special Abilities</label>
								<span>{species.specialAbilities}</span>
							</Col>
						</Row>
					)}
				</Col>
			</Row>
		</Container>
	)
}
