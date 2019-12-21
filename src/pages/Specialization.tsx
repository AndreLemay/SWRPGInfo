import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SpecializationItem from '../components/SpecializationItem'

export default props => {
	return (
		<Container fluid style={{ marginTop: '10px' }}>
			<Row>
				<Col>
					<SpecializationItem {...props.location.state} />
				</Col>
			</Row>
		</Container>
	)
}
