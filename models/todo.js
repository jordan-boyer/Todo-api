module.exports = function(sequelize, dataTypes) {
	return sequelize.define("todo", {
		"description": {
			type: dataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 256]
			}
		},
		completed: {
			type: dataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
};