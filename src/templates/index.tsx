import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CareerItem from '../components/CareerItem'

//hella complicated typing of destructured thing... but basically what we get looks like this:
// {
// 	pageContext: {
// 		careers: Career[]
// 	}
// }
export default props => {
	return (
		<Container fluid style={{ marginTop: '10px' }}>
			<Row>
				{props.pageContext.careers.map(c => {
					return (
						<Col xs={4} style={{ marginBottom: '10px' }}>
							<CareerItem {...c} />
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}
