import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { WeaponCategory, Weapon } from '../lib/types'
import DataTable from '../components/DataTable'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Weapons"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true
						},
						{
							label: 'Skill',
							field: 'skill',
							sortable: true
						},
						{
							label: 'Damage',
							field: 'damage',
							sortable: true,
							center: true
						},
						{
							label: 'Crit',
							field: 'crit',
							sortable: true,
							center: true
						},
						{
							label: 'Range',
							field: 'range',
							sortable: true
						},
						{
							label: 'Encumbrance',
							field: 'encumbrance',
							sortable: true,
							center: true
						},
						{
							label: 'Hard Points',
							field: 'hardPoints',
							sortable: true,
							center: true
						},
						{
							label: 'Price',
							field: 'price',
							sortable: true,
							center: true
						},
						{
							label: 'Rarity',
							field: 'rarity',
							sortable: true,
							center: true
						},
						{
							label: 'Qualities',
							field: 'qualities'
						},
						{
							label: 'Special',
							field: 'special'
						}
					]}
					data={Data.weapons}
					sort={{ field: 'name', dir: 'ASC' }}
					groups={{
						groupByField: 'category',
						groupLabels: [
							[WeaponCategory.Arrow, 'Arrows'],
							[WeaponCategory.Energy, 'Energy Weapons'],
							[WeaponCategory.Explosive, 'Explosives'],
							[WeaponCategory.Grenade, 'Grenades'],
							[WeaponCategory.Melee, 'Melee Weapons'],
							[WeaponCategory.MicroRocket, 'Micro-Rockets'],
							[WeaponCategory.Missile, 'Missiles'],
							[WeaponCategory.Other, 'Other Weapons'],
							[WeaponCategory.Slugthrower, 'Slugthrowers'],
							[WeaponCategory.Thrown, 'Thrown Weapons']
						]
					}}
					rowStyle={(row: Weapon) => {
						return row.restricted
							? {
									background: 'red',
									color: 'white'
							  }
							: {}
					}}
				/>
			</Container>
		</Layout>
	)
}
