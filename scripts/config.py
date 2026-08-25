import os
from dotenv import load_dotenv

load_dotenv()

BASE_URL = "https://kb.finviet.com.vn/rest/api/content"

SPACE_KEY = "DMSNEW"

COOKIE = os.getenv("CONFLUENCE_COOKIE")

HEADERS = {
    "Cookie": COOKIE
}