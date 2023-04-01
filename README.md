# Spark Vision Portfolio

This is my portfolio as an applicant for Spark Vision.
[Here](https://hristo-d-hristov.github.io/spark-vision-portfolio/) is it`s live version.
I have forked it from [this jekyll template](https://github.com/sharu725/online-cv).

# To convert it to a PDF file
1. Open [web2pdfconvert](https://www.web2pdfconvert.com/)
2. Paste the [link to the printable resume](https://hristo-d-hristov.github.io/spark-vision-portfolio/print.html)

Note: This website provides only 5 prints per day. To avoid this limitation, use it through Tor.

## To preview/edit locally with docker

```sh
docker-compose up
```

*docker-compose.yml* file is used to create a container that is reachable under http://localhost:4000.
Changes *_data/data.yml* will be visible after a while.

### Local machine

* Get the repo into your machine 
```bash
git clone https://github.com/sharu725/online-cv.git
```
* Install required ruby gems
```bash
bundle install
```
* Serve the site locally
```bash
bundle exec jekyll serve
```
* Navigate to `http://localhost:4000`


## Skins

There are 6 color schemes available:

| Blue | Turquoise | Green |
|---------|---------|---------|
| <img src="https://online-cv.webjeda.com/assets/images/blue.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/turquoise.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/green.jpg" width="300"/> |

| Berry | Orange | Ceramic |
|---------|---------|---------|
| <img src="https://online-cv.webjeda.com/assets/images/berry.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/orange.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/ceramic.jpg" width="300"/> |

## Printing
I have used [the html2pdf library](https://github.com/eKoopmans/html2pdf.js)