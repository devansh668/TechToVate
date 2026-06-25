import urllib.request
import json

url = "https://paradiseyatra.com/api/blogs?limit=200"
req = urllib.request.Request(url)
req.add_header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

try:
    with urllib.request.urlopen(req) as response:
        content = response.read().decode("utf-8")
        data = json.loads(content)
        blogs = data.get("blogs", [])
        pagination = data.get("pagination", {})
        print(f"Successfully fetched {len(blogs)} blogs.")
        print(f"Pagination: {pagination}")
        
        # Write to local scratch JSON for processing
        output_path = r"C:\Users\Devansh\.gemini\antigravity\brain\f64214f0-d55b-436b-8bf8-06db357bf95a\scratch\all_blogs.json"
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(blogs, f, indent=2)
            
        if blogs:
            print("\nFields of the first blog post:")
            first = blogs[0]
            for key, value in first.items():
                val_str = str(value)
                if len(val_str) > 100:
                    val_str = val_str[:100] + "... (truncated)"
                print(f"- {key}: {val_str}")
except Exception as e:
    print("Error:", e)
