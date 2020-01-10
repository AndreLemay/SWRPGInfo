import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import { Career } from '../lib/types'
import CareerItem from '../components/CareerItem'

export default ({
	pageContext: { career }
}: {
	pageContext: { career: Career }
}) => {
	return (
		<Layout>
			<Container fluid>
				<CareerItem {...career} />
			</Container>
		</Layout>
	)
}
