const knex = require("knex")({
	client: "pg",
	version: "0.95.12",
	connection: {
		host: "localhost",
		port: 5432,
		user: "postgres",
		password: "1234",
		database: "postgres",
	},
});

const createMoon = () => {
	knex("test_db")
		.insert([{ num: 18, str: "{moon}" }])
		.catch((err) => {
			console.log(err);
		});
};

const deleteMoon = () => {
	knex("test_db")
		.where("str", "{moon}")
		.del()
		.catch((res) => {
			console.log(res);
		});
};

const selectAll = () => {
	knex
		.select()
		.from("test_db")
		.then((res) => {
			console.log(res);
			return res;
		})
		.catch((err) => {
			console.log(err);
		});
};
