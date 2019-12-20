import React from 'react'
import { Career } from '../lib/types'
import CareerItem from '../components/CareerItem'

//hella complicated typing of destructured thing... but basically what we get looks like this:
// {
// 	pageContext: {
// 		careers: Career[]
// 	}
// }
export default (props) => {
	return (
		<div className="test">
			{props.pageContext.careers.map(c => {
				return (
					<CareerItem {...c} />
				)
			})}
		</div>
	)
}
