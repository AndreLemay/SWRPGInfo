let Data = require('./content/data')

exports.createPages = ({ actions: { createPage } }) => {
	Data.careers.forEach(career => {
		createPage({
			path: `/Career/${career.name}`,
			component: require.resolve('./src/templates/Career.tsx'),
			context: { career }
		})

		career.specializations.forEach(spec => {
			createPage({
				path: `/Specialization/${spec.name}`,
				component: require.resolve('./src/templates/Specialization.tsx'),
				context: { spec }
			})
		})
	})

	Data.universalSpecializations.forEach(spec => {
		createPage({
			path: `/Specialization/${spec.name}`,
			component: require.resolve('./src/templates/Specialization.tsx'),
			context: { spec }
		})
	})

	Data.species.forEach(species => {
		createPage({
			path: `/Species/${species.name}`,
			component: require.resolve('./src/templates/Species.tsx'),
			context: { species }
		})
	})
}

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		devtool: 'eval-source-map'
	})
}
