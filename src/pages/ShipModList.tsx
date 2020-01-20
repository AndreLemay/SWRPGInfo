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
					title="Ship/Vehicle Mods"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true
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
							label: 'Hard Points',
							field: 'hardPoints',
							sortable: true,
							center: true
						},
						{
							label: 'Applies To',
							field: 'appliesTo'
						},
						{
							label: 'Description',
							field: 'description'
						},
						{
							label: 'Modification Options',
							field: 'modificationOptions'
						}
					]}
					data={Data.shipMods}
					sort={{ field: 'name', dir: 'ASC' }}
				/>
			</Container>
		</Layout>
	)
}
