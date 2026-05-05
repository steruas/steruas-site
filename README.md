# Portfolio

Bilingual (PT/EN) growth + AI portfolio.

## Editing content

All copy lives in `src/content/site.ts`:

- **Add a blog post** — append an entry to the `posts` array. Provide bilingual `title`, `excerpt`, and `category`.
- **Add a case study** — append an entry to the `cases` array. Update `tools` and `sector` per case.
- **Site copy** — edit the `content.pt` / `content.en` objects.

## Routes

- `/pt` — Portuguese (default)
- `/en` — English
- `/` — redirects to `/pt`

## Contact form

Posts to a TanStack server function in `src/server/contact.functions.ts` (currently logs to server console).
