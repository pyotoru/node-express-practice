const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
	res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
	const newProducts = products.map((products) => {
		const { id, name, image } = products;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
	// console.log(req);
	// console.log(req.params);
	const { productID } = req.params;

	const singleProduct = products.find(
		(product) => product.id === Number(productID)
	);
	if (!singleProduct) {
		return res.status(404).send("Product Does Not Exist");
	}

	return res.json(singleProduct);
});
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
	console.log(req.params);
});

app.get("/api/v1/query", (req, res) => {
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1) {
		// res.status(200).send("no products matched your search");
		return res.status(200).json({ success: true, data: [] });
	}
	res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
