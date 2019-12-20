exports.createPages = async ({ actions: { createPage } }) => {
	const { careers } = await getData()
	console.log(careers)
	createPage({
		path: `/`,
		component: require.resolve('./src/templates/index.tsx'),
		context: { careers }
	})
}

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		devtool: 'eval-source-map'
	})
}

const getData = () => {
	return {
		careers: [
			{
				name: 'Bounty Hunter',
				description: 'Hunt bounties',
				careerSkills: null,
				specializations: []
			},
			{
				name: 'Colonist',
				description: 'Colonize',
				careerSkills: null,
				specializations: []
			},
			{
				name: 'Explorer',
				description: 'Explore',
				careerSkills: null,
				specializations: []
			},
			{
				name: 'Hired Gun',
				description: 'Apply Gun',
				careerSkills: null,
				specializations: []
			},
			{
				name: 'Smuggler',
				description: 'Smuggle',
				careerSkills: null,
				specializations: []
			},
			{
				name: 'Technician',
				description: 'Fix shit',
				careerSkills: null,
				specializations: []
			}
		]
	}
}
