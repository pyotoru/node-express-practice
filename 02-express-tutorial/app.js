const express = require("express");
const path = require("path");
const app = express();

// set static and middleware
// app.use is for setting up the middleware
// what is "static"? - a file that server does not have to change
// we put all the necessary files in a folder (conventionally named as "public")
// express will deal with all the data in the folder (even if there are like 2000 images)
// static assets
// js makes dynamic the browser, but not server
app.use(express.static("./public"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
	res.status(404).send("resource not found");
});

app.listen(5000, () => {
	console.log("server is litening on port 5000....");
});
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
