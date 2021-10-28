import { useState } from "react";

const express = require("express");
const Pool = require("pg").Pool;

const config = {
	user: "postgres",
	host: "localhost",
	database: "postgres",
	password: "",
};

const pool = new Pool(config);

const DB = () => {
	const [err, setErr] = useState();
	const [res, setRes] = useState();
	return <div>{db.$config.version}</div>;
};

export default DB;
