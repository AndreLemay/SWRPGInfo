import * as React from 'react'
import Layout from '../components/Layout'
import logo from '../../content/img/SWEotE.png'
import { Image } from 'react-bootstrap'

export default _ => {
	return (
		<Layout>
			<Image className="logo" fluid src={logo} />
		</Layout>
	)
}
