import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container } from 'react-bootstrap'
import { Gear, GearCategory } from '../lib/types'
import DataTable from '../components/DataTable'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Gear"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true
						},
						{
							label: 'Desription',
							field: 'description'
						},
						{
							label: 'Price',
							field: 'price',
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
							label: 'Rarity',
							field: 'rarity',
							sortable: true,
							center: true
						}
					]}
					data={Data.gear}
					sort={{ field: 'name', dir: 'ASC' }}
					groups={{
						groupByField: 'category',
						groupLabels: [
							[GearCategory.Communication, 'Communications'],
							[GearCategory.Cybernetic, 'Cybernetics'],
							[GearCategory.Detection, 'Detection Devices'],
							[GearCategory.Drug, 'Drugs'],
							[GearCategory.Illegal, 'Unique Illegal Equipment'],
							[GearCategory.Medical, 'Medical'],
							[GearCategory.Poison, 'Poisons'],
							[GearCategory.Recreation, 'Recreational/Entertainment'],
							[GearCategory.Security, 'Security'],
							[GearCategory.Survival, 'Survival'],
							[GearCategory.Tool, 'Tools']
						]
					}}
					rowStyle={(row: Gear) => {
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
