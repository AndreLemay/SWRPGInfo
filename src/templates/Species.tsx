import * as React from 'react'
import Layout from '../components/Layout'
import SpeciesItem from '../components/SpeciesItem'
import { Container } from 'react-bootstrap'

export default ({
	pageContext: { species }
}: {
	pageContext: { species: any }
}) => {
	return (
		<Layout>
			<Container fluid>
				<SpeciesItem {...species} />
			</Container>
		</Layout>
	)
}
