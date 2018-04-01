'use strict';
const express = require('express');
const renderer = require('../helpers/renderer').default;

const app = new express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderer(req));
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
