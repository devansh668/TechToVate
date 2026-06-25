import json
import os

with open(r"C:\Users\Devansh\.gemini\antigravity\brain\f64214f0-d55b-436b-8bf8-06db357bf95a\scratch\all_blogs.json", "r", encoding="utf-8") as f:
    blogs = json.load(f)

print(f"Total fetched blogs: {len(blogs)}")
live_slugs = [b.get("slug") for b in blogs]

local_slugs = ["cheap-flights", "top-10-bali", "summer-spots-india", "budget-international"]

print("\nComparing local slugs with live slugs:")
for local in local_slugs:
    matched = [s for s in live_slugs if local in s]
    print(f"- Local slug '{local}' matches live: {matched}")

print("\nFirst 15 live blog titles and slugs:")
for i, b in enumerate(blogs[:15]):
    print(f"{i+1}. Title: {b.get('title')}\n   Slug: {b.get('slug')}\n   Category: {b.get('category')}\n")
