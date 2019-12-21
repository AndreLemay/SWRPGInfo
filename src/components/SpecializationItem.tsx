import * as React from "react"
import { Specialization } from "../lib/types"


export default (props: Specialization) => {
	return (
		<div>
			<div>
				<span>{props.name}</span>
			</div>
			<div>
				<span>{props.description}</span>
			</div>
		</div>
	)
}