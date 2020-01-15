import * as React from 'react'
import * as Data from '../../content/data.json'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { Species } from '../lib/types'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<Row>
					<Col>
						<span>Species</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<Table bordered>
							<thead>
								<tr>
									<th>Name</th>
									<th>Brawn</th>
									<th>Agility</th>
									<th>Intellect</th>
									<th>Cunning</th>
									<th>Willpower</th>
									<th>Presence</th>
								</tr>
							</thead>
							<tbody>
								{Data.species.map((s: Species, ind) => {
									return (
										<tr key={ind}>
											<td>
												<Link to={`/Species/${s.name}`}>{s.name}</Link>
											</td>
											<td>{s.brawn}</td>
											<td>{s.agility}</td>
											<td>{s.intellect}</td>
											<td>{s.cunning}</td>
											<td>{s.willpower}</td>
											<td>{s.presence}</td>
										</tr>
									)
								})}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}
