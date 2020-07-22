#!/usr/bin/python3
from requests_html import HTMLSession
from lxml import html
from pprint import pprint
from html.parser import HTMLParser

class Parser(HTMLParser):
    def __init__(self, html_data):
        HTMLParser.__init__(self)
        self.__parsed_data = []
        self.feed(html_data)
        self.filter_data()

    def handle_starttag(self, tag, attrs):
        print('Encountered start tag: ', tag)
    def handle_closetag(self, tag):
        print('Encountered close tag: ', tag)
    def handle_data(self, data):
        print('Encountered some data: ', data)
        self.__parsed_data.append(data)
    def get_parsed_data(self):
        return self.__parsed_data
    def filter_data(self):
        start, end = [0,0]
        for i in range(len(self.__parsed_data)):
            if self.__parsed_data[i].lower() == 'any produce':
                start = i+1
            if self.__parsed_data[i].lower() == 'why eat seasonally?':
                end = i-1
        print('Start: {:d}, End: {:d}'.format(start, end))
        self.__parsed_data = self.__parsed_data[start:end]
        pprint(self.__parsed_data)
        

session = HTMLSession()
r = session.get('https://www.seasonalfoodguide.org/california/early-july')
r.html.render()
parser = Parser(r.html.html)
# pprint(parser.get_parsed_data())
# pprint(r.html.html)