import * as React from 'react'
import Layout from '../components/Layout'
import logo from '../../content/img/SWEotE.png'

export default _ => {
	return (
		<Layout>
			<img className="logo" src={logo} />
		</Layout>
	)
}
