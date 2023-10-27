import time
import requests

while 1:
    url = 'http://be65-34-83-73-24.ngrok-free.app/predict_disease'  # This is a simple HTTP request and response service
    data = {'key1': 'value1', 'key2': 'value2'}

    # Making the POST request
    response = requests.post(url, data=data)
    time.sleep(50)