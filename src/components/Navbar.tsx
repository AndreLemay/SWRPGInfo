import * as React from 'react'
import * as Data from '../../content/data.json'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { navigate } from 'gatsby'

export default _ => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Toggle aria-controls="nav" />
			<Navbar.Collapse id="nav">
				<Nav>
					<Nav.Link
						eventKey="1"
						onSelect={_ => {
							return navigate('/')
						}}>
						Home
					</Nav.Link>
					<NavDropdown title="Careers" id="dropdown-careers">
						{Data.careers.map((c, ind) => {
							return (
								<NavDropdown.Item
									key={ind}
									onSelect={(key, evt) => {
										return navigate(`/Career/${c.name}`)
									}}>
									{c.name}
								</NavDropdown.Item>
							)
						})}
					</NavDropdown>
					<NavDropdown title="Universal Specializations" id="dropdown-universal">
						{Data.universalSpecializations.map((s, ind) => {
							return (
								<NavDropdown.Item
									key={ind}
									onSelect={(key, evt) => {
										return navigate(`/Specialization/${s.name}`)
									}}>
									{s.name}
								</NavDropdown.Item>
							)
						})}
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
