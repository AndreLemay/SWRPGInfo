import * as React from 'react'
import Navbar from './Navbar'

export default ({ children }) => {
	return (
		<div className="mainBody">
			<Navbar />
			{children}
		</div>
	)
}