import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container } from 'react-bootstrap'
import DataTable from '../components/DataTable'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Ship Weapons"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true
						},
						{
							label: 'Range',
							field: 'range',
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
							label: 'Minimum Size to Mount',
							field: 'minSizeToMount',
							sortable: true,
							center: true
						},
						{
							label: 'Special',
							field: 'special'
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
						}
					]}
					data={Data.shipWeapons}
					sort={{ field: 'name', dir: 'ASC' }}
					groups={{
						groupByField: 'category',
						groupLabels: [
							['energy', 'Energy Weapons'],
							['projectile', 'Projectile Weapons'],
							['special', 'Special Weapons']
						]
					}}
				/>
			</Container>
		</Layout>
	)
}
