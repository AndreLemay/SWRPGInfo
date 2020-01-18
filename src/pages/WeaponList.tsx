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
					rowStyle={(row: Weapon) => {
						return row.restricted ? {
							background: 'red',
							color: 'white'
						} : {}
					}}
				/>
			</Container>
		</Layout>
	)
}
