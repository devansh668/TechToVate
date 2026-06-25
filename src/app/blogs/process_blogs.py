import json

path = r"C:\Users\Devansh\.gemini\antigravity\brain\f64214f0-d55b-436b-8bf8-06db357bf95a\scratch\all_blogs.json"

with open(path, "r", encoding="utf-8") as f:
    blogs = json.load(f)

print(f"Loaded {len(blogs)} blogs from scratch.")

# Clean up characters
for b in blogs:
    title = b.get("title", "")
    content = b.get("content", "")
    excerpt = b.get("excerpt", "")
    seoTitle = b.get("seoTitle", "")
    seoDescription = b.get("seoDescription", "")
    
    # Replace the replacement character  with proper quotes
    title = title.replace("\ufffd", "'").replace("", "'")
    content = content.replace("\ufffd", "'").replace("", "'")
    excerpt = excerpt.replace("\ufffd", "'").replace("", "'")
    seoTitle = seoTitle.replace("\ufffd", "'").replace("", "'")
    seoDescription = seoDescription.replace("\ufffd", "'").replace("", "'")
    
    # Also replace potential double quote encoding issues
    # (sometimes  is used for double quotes, but single quotes are safer or we can just clean them up)
    b["title"] = title
    b["content"] = content
    b["excerpt"] = excerpt
    b["seoTitle"] = seoTitle
    b["seoDescription"] = seoDescription

# Save to src/lib/blogs.json
output_path = r"C:\Users\Devansh\Documents\antigravity\blissful-hopper\src\lib\blogs.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(blogs, f, indent=2, ensure_ascii=False)

print(f"Successfully cleaned and wrote {len(blogs)} blogs to {output_path}.")
