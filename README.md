ExpressJS website that grabs your current location+season and displays what fruits are in season
- all server-side
- template engines
- docker (packaging tool for machine setup)

Express setup:
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

Tasks:

Mark:
- data scraper (or some way of retrieving data not manually)
    - python (?)
- data and storage format
    - SQL or NoSQL?

Alex:
- python scraper
    - pip install selenium
    - pip install beautifulsoup4
- Figure way o
- Issue:
    - current scraping technique is only retrieving the elements from the dropdown list, not from the rendered page itself
    https://stackoverflow.com/questions/49939123/scrape-dynamic-contents-created-by-javascript-using-python
    https://stackoverflow.com/questions/26393231/using-python-requests-with-javascript-pages
    http://theautomatic.net/2019/01/19/scraping-data-from-javascript-webpage-python/
    https://sites.google.com/a/chromium.org/chromedriver/downloads


Scraper:
    - Utilizes python3 and virtual environment
        - https://docs.python.org/3/library/venv.html
    - pip install selenium
    - pip install beautifulsoup4
    - Driver:
        - Download chromedriver (my local version is 84)
        - Extract to /usr/local/bin 
            - May need to allow it inside Security and Privacy


    
- express JS setup (MDN guide)
- template engines
- baseline website
- setting npm and packages
    - need detailed steps
