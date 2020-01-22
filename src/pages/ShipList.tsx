import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container, OverlayTrigger, Tooltip, Image } from 'react-bootstrap'
import DataTable from '../components/DataTable'
import { ShipType, Ship } from '../lib/types'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Ships"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true,
							render: data => {
								let imgSrc = data.imgName ? require(`../../content/img/ships/${data.imgName.toLowerCase()}.jpg`) : null

								return imgSrc ? (
									<OverlayTrigger
										placement="right"
										overlay={
											// tslint:disable-next-line: jsx-wrap-multiline
											<Tooltip id={`tooltip-${data.name}`}>
												<Image className="popupImg" src={imgSrc} fluid />
											</Tooltip>
										}>
										<span>{data.name}</span>
									</OverlayTrigger>
								) : (
									<span>{data.name}</span>
								)
							}
						},
						{
							label: 'Silhouette',
							field: 'silhouette',
							sortable: true,
							center: true
						},
						{
							label: 'Speed',
							field: 'speed',
							sortable: true,
							center: true
						},
						{
							label: 'Handling',
							field: 'handling',
							sortable: true,
							center: true
						},
						{
							label: 'Defense (Fore/Port/Starboard/Aft)',
							field: 'defense',
							center: true
						},
						{
							label: 'Armor',
							field: 'armor',
							sortable: true,
							center: true
						},
						{
							label: 'Hull',
							field: 'hull',
							sortable: true,
							center: true
						},
						{
							label: 'System Strain',
							field: 'systemStrain',
							sortable: true,
							center: true
						},
						{
							label: 'Sensor Range',
							field: 'sensorRange',
							sortable: true
						},
						{
							label: 'Hyperdrive',
							field: 'hyperdrive'
						},
						{
							label: 'Navicomputer',
							field: 'navicomputer'
						},
						{
							label: 'Crew',
							field: 'crew'
						},
						{
							label: 'Encumbrance Capacity',
							field: 'encumbrance',
							sortable: true,
							center: true
						},
						{
							label: 'Passenger Capacity',
							field: 'passengers',
							sortable: true,
							center: true
						},
						{
							label: 'Consumables',
							field: 'consumable'
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
							label: 'Weapons',
							field: 'weapons'
						},
						{
							label: 'Special',
							field: 'special'
						}
					]}
					data={Data.ships}
					sort={{ field: 'name', dir: 'ASC' }}
					groups={{
						groupByField: 'category',
						groupLabels: [
							[ShipType.Starfighter, 'Starfighters and Patrol Boats'],
							[ShipType.Freighter, 'Freighters and Transports']
						]
					}}
					rowStyle={(row: Ship) => {
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
