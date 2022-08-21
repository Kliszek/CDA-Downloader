# Simple CDA downloader

#### What is it?
This project is a small helper for getting direct video links from a popular Polish website CDA.pl.
It makes a proper POST request to CDA.pl to fetch a direct video url.

It only works for public videos.

#### How to run it:
Download the project and run

    yarn install
    yarn start:dev

The application should start on port 3000.

There is one POST endpoint:

    /downloader

Expected payload is:

| property   | type   | description                 |
|------------|--------|-----------------------------|
| `videoUrl` | string | the direct url to the video |
| `quality`  | string | quality code                |
