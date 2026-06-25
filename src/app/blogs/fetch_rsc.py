import urllib.request
import json

endpoints = [
    "/api/blog",
    "/api/blogs",
    "/api/posts",
    "/api/articles",
    "/api/all-blogs"
]

for endpoint in endpoints:
    url = f"https://paradiseyatra.com{endpoint}"
    req = urllib.request.Request(url)
    req.add_header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read().decode("utf-8")
            print(f"Success on {endpoint}! Size: {len(content)}")
            # try to parse as json
            try:
                data = json.loads(content)
                print(f"JSON parsed. Keys: {list(data.keys()) if isinstance(data, dict) else 'is list'}")
                # Save first 500 chars
                print("Snippet:", content[:200])
            except:
                print("Not a JSON response")
    except Exception as e:
        print(f"Failed on {endpoint}: {e}")
