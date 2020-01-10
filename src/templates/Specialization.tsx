import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SpecializationItem from '../components/SpecializationItem'
import { Specialization } from '../lib/types'
import Layout from '../components/Layout'

export default ({
	pageContext: { spec }
}: {
	pageContext: { spec: Specialization }
}) => {
	return (
		<Layout>
			<Container fluid>
				<SpecializationItem {...spec} />
			</Container>
		</Layout>
	)
}
