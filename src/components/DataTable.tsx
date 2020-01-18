import * as React from 'react'
import { Table } from 'react-bootstrap'

interface DataTableProps {
	title: string
	cols: Array<{
		label: string
		field: string
		width?: number
		sortable?: boolean
		center?: boolean
		left?: boolean
		right?: boolean
	}>
	data: any[]
	rowStyle: (row: any) => any
	bordered?: boolean
}

interface DataTableState {
	sort: {
		field: string
		dir: string
	}
}

class DataTable extends React.Component<DataTableProps> {
	state = { sort: null }

	setSort = field => {
		this.setState((prevState: DataTableState) => {
			if (prevState.sort && prevState.sort.field === field) {
				return {
					sort: { field, dir: prevState.sort.dir === 'ASC' ? 'DESC' : 'ASC' }
				}
			} else {
				return { sort: { field, dir: 'ASC' } }
			}
		})
	}

	render() {
		let { title, cols, data, bordered } = this.props

		return (
			<div className="datatable-container">
				<div className="datatable-title">
					<span>{title}</span>
				</div>
				<div className="datatable-table">
					<Table bordered={bordered || false}>
						<thead>
							<tr>
								{cols.map((c, ind) => {
									return (
										<th
											key={ind}
											onClick={_ => {
												if (c.sortable) this.setSort(c.field)
											}}
											style={{
												width: c.width
											}}>
											{c.label}
										</th>
									)
								})}
							</tr>
						</thead>
						<tbody>
							{data
								.sort((a, b) => {
									if (!this.state.sort) return -1

									if (a[this.state.sort.field] === b[this.state.sort.field]) {
										return 0
									} else {
										return a[this.state.sort.field] < b[this.state.sort.field]
											? this.state.sort.dir === 'ASC'
												? -1
												: 1
											: this.state.sort.dir === 'ASC'
											? 1
											: -1
									}
								})
								.map((d, ind) => {
									return (
										<tr key={ind} style={this.props.rowStyle ? this.props.rowStyle(d) : {}}>
											{cols.map((c, ind2) => {
												return (
													<td
														key={ind2}
														className={`${c.left ? 'text-left' : ''} ${
															c.center ? 'text-center' : ''
														} ${c.right ? 'text-right' : ''}`}>
														{d[c.field]}
													</td>
												)
											})}
										</tr>
									)
								})}
						</tbody>
					</Table>
				</div>
			</div>
		)
	}
}

export default DataTable
