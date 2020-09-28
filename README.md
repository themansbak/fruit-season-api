ExpressJS website that grabs your current location+season and displays what fruits are in season
- all server-side
- template engines
- docker (packaging tool for machine setup)

Express setup:
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

Tasks:

Mark:

Alex:
- database setup script
    - creates db if not existent
    - parses html
        - updates db
- data and storage format
- setup MongoDB
- deploy MongoDB

Scraper:
- Utilizes python3 and virtual environment
    - https://docs.python.org/3/library/venv.html
- pip install selenium
- pip install beautifulsoup4
- Driver:
    - Download chromedriver (my local version is 84)
    - Extract to /usr/local/bin 
        - May need to allow it inside Security and Privacy
- useful links
    https://stackoverflow.com/questions/49939123/scrape-dynamic-contents-created-by-javascript-using-python
    https://stackoverflow.com/questions/26393231/using-python-requests-with-javascript-pages
    http://theautomatic.net/2019/01/19/scraping-data-from-javascript-webpage-python/
    https://sites.google.com/a/chromium.org/chromedriver/downloads

Server:
- npm init
- npm install express --save
- npm install mongoose

Deployment:
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website
- https://www.codecademy.com/learn/deploy-a-website