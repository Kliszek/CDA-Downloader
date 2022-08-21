# Simple CDA downloader

#### What is it?
This project is a small helper for getting direct video links from a popular Polish website CDA.pl.
It makes a proper POST request to CDA.pl to fetch a direct video url.

It only works for public videos.

I also made a user-friendly script that implements this project.
You need a user script manager like [Tampermonkey](https://www.tampermonkey.net/) installed in your browser to use it.
The script is available [here](https://greasyfork.org/pl/scripts/407868-pobieranie-z-cda-pl).

#### How to run it:
Download the project and run

    yarn install
    yarn start:dev

The application should start on port 3000.

There is one POST endpoint:

    /downloader

Expected payload is:

| Property   | Type   | Description                 |
|------------|--------|-----------------------------|
| `videoUrl` | string | the direct url to the video |
| `quality`  | string | (optional) quality code     |
