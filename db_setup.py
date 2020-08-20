#!/usr/bin/python3
from requests_html import HTMLSession
from pprint import pprint
from parser import Parser
from multiprocessing import Pool
import json
import time

"""
Data retrieved,
Need to setup database
"""

storage_file = 'data.json'
config_file = 'test-config.json'

def open_config():
    with open(config_file, 'r') as infile:
        configs = json.load(infile)
    print(configs)
    return configs

def get_data(storage_file):
    with open(storage_file, 'r') as infile:
        data = json.load(infile)
    return data

def main():
    data = get_data(storage_file)

if __name__ == "__main__":
    main()