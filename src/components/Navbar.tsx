import * as React from 'react'
import * as Data from '../../content/data.json'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'gatsby'
import { Specialization, Career } from '../lib/types.js'

export default _ => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Toggle aria-controls="nav" />
			<Navbar.Collapse id="nav">
				<Nav>
					<Nav.Item>
						<Link to="/">Home</Link>
					</Nav.Item>
					<NavDropdown title="Careers" id="dropdown-careers">
						{Data.careers.map((c: Career, ind) => {
							return (
								<NavDropdown.Item key={ind}>
									<Link to={`/Career/${c.name}`}>{c.name}</Link>
								</NavDropdown.Item>
							)
						})}
					</NavDropdown>
					<NavDropdown title="Universal Specializations" id="dropdown-universal">
						{Data.universalSpecializations.map((s: Specialization, ind) => {
							return (
								<NavDropdown.Item key={ind}>
									<Link to={`/Specialization/${s.name}`}>{s.name}</Link>
								</NavDropdown.Item>
							)
						})}
					</NavDropdown>
					<Nav.Item>
						<Link to="/SpeciesList">Species</Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
