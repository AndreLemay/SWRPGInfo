import * as React from "react"
import { SpecializationItem } from "../lib/types"


export default (props: SpecializationItem) => {
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