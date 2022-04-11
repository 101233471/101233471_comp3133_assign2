const express = require('express');
const app = express();

app.route('http://localhost:8000').get((req, res) => {
res.send({
Listings: [{ listing_title, description }]
});
});
app.listen(8000, () => {
console.log('Server started!');
});