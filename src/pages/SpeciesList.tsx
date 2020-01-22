import * as React from 'react'
import * as Data from '../../content/data.json'
import {
	Container,
	OverlayTrigger,
	Tooltip,
	Image
} from 'react-bootstrap'
import Layout from '../components/Layout'
import DataTable from '../components/DataTable'
import { Link } from 'gatsby'

export default () => {
	return (
		<Layout>
			<Container fluid>
				<DataTable
					title="Species"
					bordered
					cols={[
						{
							label: 'Name',
							field: 'name',
							sortable: true,
							render: data => {
								let imgSrc = require(`../../content/img/species/${data.name.toLowerCase()}.jpg`)

								return (
									<OverlayTrigger
										placement="right"
										overlay={
											// tslint:disable-next-line: jsx-wrap-multiline
											<Tooltip id={`tooltip-${data.name}`}>
												<Image className="popupImg" src={imgSrc} fluid />
											</Tooltip>
										}>
										<Link to={`/Species/${data.name}`}>{data.name}</Link>
									</OverlayTrigger>
								)
							}
						},
						{
							label: 'Brawn',
							field: 'brawn',
							sortable: true
						},
						{
							label: 'Agility',
							field: 'agility',
							sortable: true
						},
						{
							label: 'Intellect',
							field: 'intellect',
							sortable: true
						},
						{
							label: 'Cunning',
							field: 'cunning',
							sortable: true
						},
						{
							label: 'Willpower',
							field: 'willpower',
							sortable: true
						},
						{
							label: 'Presence',
							field: 'presence',
							sortable: true
						}
					]}
					data={Data.species}
					sort={{ field: 'name', dir: 'ASC' }}
				/>
			</Container>
		</Layout>
	)
}
