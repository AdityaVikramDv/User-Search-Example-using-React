module.exports = {
	entry:[
	"./src/main.js"
	],
	output:{
		path:__dirname,
		filename:"production/bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loader:"babel-loader",
				exclude:/node_modules/
			}
		]
	}
}