import time
import requests

while 1:
    url = 'http://17ce-35-239-255-102.ngrok-free.app'  # This is a simple HTTP request and response service
    data = {'key1': 'value1', 'key2': 'value2'}

    # Making the POST request
    response = requests.post(url, data=data)
    time.sleep(50)