let Data = require("./content/data")

exports.createPages = ({ actions: { createPage } }) => {
	Data.careers.reduce((specArr, c) => {
		return [...specArr, ...c.specializations]
	}, []).forEach((spec) => {
		createPage({
			path: `/Specialization/${spec.name}`,
			component: require.resolve('./src/templates/Specialization.tsx'),
			context: { spec }
		})
	});
}

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		devtool: 'eval-source-map'
	})
}
