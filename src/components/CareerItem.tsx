import * as React from "react"
import { Career } from "../lib/types"


const CareerItem = (props: Career) => {
	return (
		<div>
			<div>
				<span>{props.name}</span>
			</div>
			<div>
				<span>{props.description}</span>
			</div>
			<div>
				<ul>
					{props.specializations.map(spec => {
						return (
						<li>{spec.name}</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default CareerItem