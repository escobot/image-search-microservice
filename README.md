# Image Search Abstraction Layer

## Objective

Build a full stack app that allows you to search for images like this: https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10 and browse recent search queries like this: https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/. 

## Requirements

* User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

* User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.

* User Story: I can get a list of the most recently submitted search strings.

## Notes

Requirements:
- NodeJS
- NPM
- Unplash API key

Run using NPM:
```bash
# install dependencies
npm install

# run app at localhost:8000
npm start
```
Run using Docker:
```bash
# build image
docker build -t pbgnz/api-image-search .

# run image
docker run -p 8000:8000 -d pbgnz/api-image-search
```

Usage
```bash
#search
http://localhost:8000/{query}?offset={offset}&page={page}&limit={limit}

# get most recent search strings
http://localhost:8000/api/recent

```
