"""
Web-scrape tool utilizing Selenium and BeautifulSoup4
"""
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import Select
from bs4 import BeautifulSoup
from pprint import pprint
import time
import json
import os
url         = 'https://www.seasonalfoodguide.org/'
config_file = 'config.json'
save_file   = 'fruit_list.json'
load_delay = 3.0
scrape_delay = 1.0

state_retrieval = False
fruit_retrieval = True
save_data       = True

def is_non_zero_file(fpath):  
    return os.path.isfile(fpath) and os.path.getsize(fpath) > 0

def open_config():
    with open(config_file, 'r') as infile:
        configs = json.load(infile)
    print(configs)
    return configs

def retrieve_data():
    if is_non_zero_file(save_file):
        with open(save_file, 'r') as infile:
            data = json.load(infile)
        return data
    else:
        return {}

"""
Find way to segment file write on each month
"""
def main():
    data = retrieve_data()
    configs = open_config()
    browser = webdriver.Chrome(ChromeDriverManager().install())
    browser.get(url)
    if state_retrieval:
        for state in configs['states']:
            if state not in data:
                data[state] = {}
                try:
                    select = Select(browser.find_element_by_id('sfg-state'))
                except Exception as e:
                    print('Error occurred in parsing: {:s}'.format(e))
                    browser.quit()
                    return
                
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
                    with open(save_file, 'w') as infile:
                        json.dump(data, infile)
    elif fruit_retrieval:
        html = browser.page_source
        soup = BeautifulSoup(html, 'lxml')
        fruit_card = soup.findAll('div', {'class': 'card-body'})
        for fruit_tag in fruit_card:
            print(fruit_tag.getText())
            print(fruit_tag.a['href'])
            fruit_name = fruit_tag.a['href'].strip('/').split('/')[1].replace('-', ' ')
            fruit_desc = fruit_tag.getText()
            data[fruit_name] = fruit_desc


    if save_data:
        pprint(data)
        with open(save_file, 'w') as infile:
            json.dump(data, infile)
        pprint('Saved data to {:s}'.format(save_file))

    browser.quit()

if __name__ == "__main__":
    main()