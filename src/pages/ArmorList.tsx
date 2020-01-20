import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container } from 'react-bootstrap'
import { WeaponCategory, Weapon } from '../lib/types'
import DataTable from '../components/DataTable'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Armors"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true
						},
						{
							label: 'Defense',
							field: 'defense',
							sortable: true,
							center: true
						},
						{
							label: 'Soak',
							field: 'soak',
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
							label: 'Special',
							field: 'special'
						}
					]}
					data={Data.armors}
					sort={{ field: 'name', dir: 'ASC' }}
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
