import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { WeaponCategory } from '../lib/types'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<Row>
					<Col>Weapons</Col>
				</Row>
				<Row>
					<Col>
						<Table bordered>
							<thead>
								<tr>
									<th>Name</th>
									<th>Skill</th>
									<th>Damage</th>
									<th>Crit</th>
									<th>Range</th>
									<th>Encumbrance</th>
									<th>Hard Points</th>
									<th>Price</th>
									<th>Rarity</th>
									<th>Qualities</th>
									<th>Special</th>
								</tr>
							</thead>
							<tbody>
								{Data.weapons.map((w, ind) => {
									return (
										<tr key={ind}>
											<td>{w.name}</td>
											<td>{w.skill}</td>
											<td>{w.damage}</td>
											<td>{w.crit}</td>
											<td>{w.range}</td>
											<td>{w.encumbrance}</td>
											<td>{w.hardPoints}</td>
											<td>{w.price}</td>
											<td>{w.rarity}</td>
											<td>{w.qualities}</td>
											<td>{w.special}</td>
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
