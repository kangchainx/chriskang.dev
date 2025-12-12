# Content templates

This project uses file‑based content (Scheme B) as the data source for **Blog** and **Posts**.

## Frontmatter format

Each `.md` / `.mdx` file starts with JSON frontmatter wrapped by `---`:

```mdx
---
{
  "title": "My Title",
  "date": "2025-01-12",
  "summary": "Short summary",
  "locale": "en"
}
---

Markdown / MDX body here...
```

The parser lives in `lib/content.ts`. It reads the JSON block, then uses the remaining body as content.

## Blog

Put blog articles in `content/blog/`.

Recommended fields:

- `title` (string)
- `date` (string, ISO or `YYYY-MM-DD`)
- `summary` (string)
- `locale` (`"en"` or `"zh"`)
- `tags` (string[])

File naming:

- `my-post.en.mdx` / `my-post.zh.mdx` is supported.
- If `locale` is missing, the suffix decides locale.
- URL `slug` defaults to the file name **without extension**. If you keep a locale suffix (e.g. `.en`), it becomes part of the URL. If you want a single URL, use one file without a suffix.

## Posts / Thoughts

Put short posts in `content/posts/`.

Recommended fields:

- `id` (string)
- `date` (string)
- `locale`
- `name`, `handle`, `avatar` (optional)
- `avatarUrl` (optional, e.g. `"/album/chris_02.jpeg"`)
- `timestamp` (string, optional; if omitted we auto‑format from `date`)

Body can be a single line or multiple paragraphs.

### Content images

You can embed images directly in the post body using Markdown:

```md
Here is an image:

![Alt text](/project-screenshot/home_page.png)
```

Images must live under `public/` (so the URL starts with `/...`).
