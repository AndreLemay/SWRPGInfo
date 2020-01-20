import * as React from 'react'
import * as Data from '../../content/data.json'
import Layout from '../components/Layout'
import { Container } from 'react-bootstrap'
import DataTable from '../components/DataTable'
import { VehicleType } from '../lib/types'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Vehicles"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true
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
							label: 'Defense',
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
							label: 'Max Altitude',
							field: 'maxAltitude'
						},
						{
							label: 'Crew',
							field: 'crew'
						},
						{
							label: 'Encumbrance',
							field: 'encumbrance',
							sortable: true,
							center: true
						},
						{
							label: 'Passengers',
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
						}
					]}
					data={Data.vehicles}
					sort={{ field: 'name', dir: 'ASC' }}
					groups={{
						groupByField: 'category',
						groupLabels: [
							[VehicleType.Airspeeder, 'Airspeeders'],
							[VehicleType.Landspeeder, 'Landspeeders'],
							[VehicleType.WheelTrack, 'Wheeled and Tracked Vehicles'],
							[VehicleType.Walker, 'Walkers']
						]
					}}
				/>
			</Container>
		</Layout>
	)
}
