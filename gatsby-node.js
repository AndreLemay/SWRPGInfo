exports.createPages = async ({ actions: { createPage } }) => {
	const { careers } = await getData()

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
				careerSkills: [
					'Athletics',
					'Brawl',
					'Perception',
					'Piloting (Planetary)',
					'Piloting (Space)',
					'Ranged (Heavy)',
					'Streetwise',
					'Vigilance'
				],
				specializations: [
					{
						name: 'Assassin',
						subtitle: 'Instrument of Policy',
						description: null,
						careerSkills: []
					},
					{
						name: 'Gadgeteer',
						subtitle: 'Connoisseur of Tech',
						description: null,
						careerSkills: []
					},
					{
						name: 'Survivalist',
						subtitle: 'Master of the Wild',
						description: null,
						careerSkills: []
					}
				]
			},
			{
				name: 'Colonist',
				description: 'Colonize',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Explorer',
				description: 'Explore',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Hired Gun',
				description: 'Apply Gun',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Smuggler',
				description: 'Smuggle',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Technician',
				description: 'Fix shit',
				careerSkills: [],
				specializations: []
			}
		]
	}
}
