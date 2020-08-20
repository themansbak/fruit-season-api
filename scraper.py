"""
Web-scrape tool utilizing Selenium and BeautifulSoup4
"""
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from bs4 import BeautifulSoup
from pprint import pprint
import time
import json

url         = 'https://www.seasonalfoodguide.org/'
config_file = 'config.json'
save_file   = 'data.json'
load_delay = 3.0
scrape_delay = 1.0

def open_config():
    with open(config_file, 'r') as infile:
        configs = json.load(infile)
    print(configs)
    return configs

def main():
    data = {}
    configs = open_config()
    browser = webdriver.Chrome()
    browser.get(url)
    for state in configs['states']:
        data[state] = {}
        select = Select(browser.find_element_by_id('sfg-state'))
        time.sleep(load_delay)
        select.select_by_visible_text(state)
        for month in configs['months']:
            for prefix in configs['period_prefix']:
                season = '{:s} {:s}'.format(prefix, month)
                data[state][season] = []

                calendar = Select(browser.find_element_by_id('veg-calendar'))
                time.sleep(load_delay)
                calendar.select_by_visible_text(season)
                time.sleep(scrape_delay)

                html = browser.page_source
                soup = BeautifulSoup(html, 'lxml')
                produce_list = soup.findAll('h3', {'class': 'card-title'})
                
                for produce in produce_list:
                    data[state][season].append(produce.getText())

    pprint(data)
    with open(save_file, 'w') as infile:
        json.dump(data, infile)

    browser.quit()

if __name__ == "__main__":
    main()
