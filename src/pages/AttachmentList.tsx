import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container } from 'react-bootstrap'
import { Attachment } from '../lib/types'
import DataTable from '../components/DataTable'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Attachments"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true
						},
						{
							label: 'Bonuses',
							field: 'bonuses'
						},
						{
							label: 'Modification Options',
							field: 'modificationOptions'
						},
						{
							label: 'Applies To',
							field: 'appliesTo'
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
						}
					]}
					data={Data.attachments}
					sort={{ field: 'name', dir: 'ASC' }}
					groups={{
						groupByField: 'category',
						groupLabels: [
							['weapon', 'Weapon Attachments'],
							['armor', 'Armor Attachments']
						]
					}}
					rowStyle={(row: Attachment) => {
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
