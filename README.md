Description:
- ExpressJS website that grabs your current location+season and displays what fruits are in season

Tasks:
- MAJOR: find way to create proxy for frontend to communicate to backend
    - server is being hosted by heroku
    - frontend makes requests to 'localhost:3001'
        - heroku hosted frontend can't make calls to localhost:3001
            - assuming this is because the server has a dynamic IP address so it can't access it
        - find way to request from proper ID
- Mark:

- Alex:
    - optimize data storage of db_setup iterations

Server + Frontend:
- npm run dev

Server:
- npm init
- npm install dotenv --save
- npm install express --save
- npm install mongoose
- dev:  npm run dev
- start: npm start

Frontend:
- npm init
- npm install
- npm start

Deployment:
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website
- https://www.codecademy.com/learn/deploy-a-website
- Heroku:
    - brew install heroku/brew/heroku
    - touch Procfile
    - echo "web: npm start" > Procfile
    - heroku ps:scale web=[#Dynos]
        - Dynos are basically lightweight containers that run whatever application command process
        - Start: heroku ps:scale web=1 
        - Stop: heroku ps:scale web=0
    - Check # dyno processes: heroku ps

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
    - https://stackoverflow.com/questions/49939123/scrape-dynamic-contents-created-by-javascript-using-python
    https://stackoverflow.com/questions/26393231/using-python-requests-with-javascript-pages
    http://theautomatic.net/2019/01/19/scraping-data-from-javascript-webpage-python/
    https://sites.google.com/a/chromium.org/chromedriver/downloads

    - https://stackoverflow.com/questions/51126472/how-to-organise-file-structure-of-backend-and-frontend-in-mern#:~:text=The%20most%20basic%20structure%20would,your%20React%20side%20of%20things