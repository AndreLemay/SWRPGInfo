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
	sort?: Sort
}

interface Sort {
	field: string
	dir: string
}

interface DataTableState {
	sort: Sort
}

class DataTable extends React.Component<DataTableProps> {
	state = { sort: this.props.sort }

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
											className={
												this.state.sort &&
												this.state.sort.field === c.field &&
												(this.state.sort.dir === 'ASC' ? 'arrow-up' : 'arrow-down')
											}
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

									let aVal = (a[this.state.sort.field] || '').toString()
									let bVal = (b[this.state.sort.field] || '').toString()
									let comp = aVal.localeCompare(bVal, 'en', { sensitivity: 'accent', ignorePunctuation: true, numeric: true})

									return this.state.sort.dir === 'ASC' ? comp * -1 : comp
								})
								.map((d, ind) => {
									return (
										<tr
											key={ind}
											style={this.props.rowStyle ? this.props.rowStyle(d) : {}}>
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
