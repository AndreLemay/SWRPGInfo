import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SpecializationItem from '../components/SpecializationItem'
import { Specialization } from '../lib/types'

export default ({ pageContext: { spec } }: { pageContext: { spec: Specialization } }) => {
	return (
		<Container fluid style={{ marginTop: '10px' }}>
			<Row>
				<Col>
					<SpecializationItem {...spec} />
				</Col>
			</Row>
		</Container>
	)
}
