const express = require('express');
const app = express();
const { createApi } = require('unsplash-js');
const nodeFetch = require('node-fetch');

const unsplash = createApi({
  accessKey: process.env.accessKey,
  fetch: nodeFetch
});

const recentlySearched = [];

app.get('/api/recent', (req, res) => {
  res.status(201).send({recent: recentlySearched});
})

app.get('/:query', async (req, res) => {
  recentlySearched.push(req.params.query);

  const search = await unsplash.search.getPhotos({
    query: req.params.query,
    page: req.query.page?req.query.page:1,
    perPage: req.query.limit?req.query.limit:10,
  });

  let results = [];
  for (const item of search.response.results) {
    results.push({
      image: item.urls.raw,
      alt: item.alt_description
    });
  }

  // calculate offset
  results = results.slice(req.query.offset?req.query.offset:0, req.query.limit?req.query.limit:results.length);

  res.send({query: results});
});

module.exports = app;