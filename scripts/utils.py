import requests

def get(url, headers, params=None):
    print("========== REQUEST ==========")
    print("URL:", url)
    print("HEADERS:", headers)
    print("PARAMS:", params)

    response = requests.get(
        url,
        headers=headers,
        params=params
    )

    print("========== RESPONSE ==========")
    print("Status:", response.status_code)
    print(response.text[:500])

    response.raise_for_status()

    return response.json()