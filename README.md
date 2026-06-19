# Developer Advocate Corner

Personal portfolio site for a developer advocate — homepage, blog post index, codelab catalog, hidden AI Projects page, and an interactive "Roast My App" page where developers can review sample apps and submit structured feedback.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **React Router** v6 (SPA, no SSR)
- **Tailwind CSS** with HSL design tokens
- **shadcn-ui** primitives (Radix under the hood)
- **react-hook-form** + **zod** for form validation
- **Vercel** for hosting (static; all unknown URLs rewrite to `/` so client-side routing works)

## Getting started

Requires Node.js 18+ and npm.

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # eslint
```

## Project structure

```
src/
├── App.tsx                       # Route registrations
├── main.tsx                      # React entry
├── index.css                     # Tailwind + design tokens (HSL CSS vars)
├── components/
│   ├── Header.tsx                # Sticky top nav
│   ├── Hero.tsx, About.tsx,
│   ├── WorkShowcase.tsx,
│   ├── Contact.tsx               # Homepage sections
│   ├── RoastFeedbackForm.tsx     # Roast My App feedback form
│   └── ui/                       # shadcn primitives
├── pages/
│   ├── Index.tsx                 # Homepage
│   ├── BlogPosts.tsx             # /blog
│   ├── Codelabs.tsx              # /codelabs
│   ├── AIEngineer.tsx            # /ai (hidden)
│   ├── RoastMyApp.tsx            # /roast
│   └── NotFound.tsx
└── lib/
    ├── utils.ts                  # cn() helper
    └── content/                  # All page content lives here as typed TS modules
        ├── blogs/blogs.ts
        ├── codelabs/codelabs.ts
        ├── ai-engineer/ai-engineer.ts
        └── roast/roast.ts
```

## Editing the site

### Add or edit a blog post

Edit `src/lib/content/blogs/blogs.ts`. Each entry follows the `Blog` interface — title, excerpt, date (ISO), readTime, tags, url. The first 3 entries appear on the homepage; the full list appears on `/blog` with pagination (6 per page).

### Add or edit a codelab

Edit `src/lib/content/codelabs/codelabs.ts`. Each entry has title, description, duration, difficulty (`Beginner` / `Intermediate` / `Advanced`), technologies, url.

### Add or edit an AI project

Edit `src/lib/content/ai-engineer/ai-engineer.ts`. Shown at `/ai`, which is currently hidden from the nav.

### Add or edit a "Roast My App" sample

Edit `src/lib/content/roast/roast.ts`. Each entry:

```ts
{
  slug: "unique-slug",
  title: "Sample App Title",
  description: "What developers should focus on when reviewing.",
  video: { provider: "loom", id: "ab064e9f74d8..." },   // Optional. provider: "youtube" | "loom"
  repo: "owner/repo-name",                              // Used for both the GitHub link and pre-filled issues
  liveUrl: "https://...",                               // Optional — omit to hide the "Try it" button
  tech: ["Next.js", "TypeScript"],
  difficulty: "Beginner",                               // Optional
}
```

For the `video.id`, grab the ID from the share URL:

- YouTube `https://youtu.be/<ID>` or `https://www.youtube.com/watch?v=<ID>`
- Loom `https://www.loom.com/share/<ID>`

Omit `video` entirely to hide the "Watch walkthrough" button.

Feedback submissions open a pre-filled GitHub issue on the listed `repo`. For tagging to work, add a `feedback` label to each sample-app repo on GitHub (issues will still submit fine without it).

### Edit the homepage

The homepage (`src/pages/Index.tsx`) composes four sections, each its own component:

- `Hero.tsx` — landing pitch
- `About.tsx` — bio
- `WorkShowcase.tsx` — featured blog posts + codelabs (note: blog list here is currently hardcoded; codelabs come from the content module)
- `Contact.tsx` — contact methods, social links, newsletter CTA

### Add a new page

1. Create `src/pages/MyPage.tsx`.
2. Register it in `src/App.tsx` **above** the catch-all `*` route:
   ```tsx
   <Route path="/my-page" element={<MyPage />} />
   ```
3. Add a nav entry in `src/components/Header.tsx`'s `navItems` array if you want it visible.

### Hide or show a page in the nav

A "hidden" page is just a registered route with no corresponding entry in `Header.tsx`'s `navItems`. To hide a page, comment out its entry; to surface it, uncomment. See the `/ai` line in `Header.tsx` as the reference example.

## Styling

All colors are HSL CSS variables defined in `src/index.css` (`--primary`, `--accent`, `--tech-blue`, etc.) and exposed to Tailwind via `tailwind.config.ts`. Use semantic class names (`bg-primary`, `text-muted-foreground`) rather than raw color values. Shadows, gradients, and the page radius are tokens too (`shadow-card`, `bg-gradient-hero`, `rounded-lg`).

## Deployment

Pushes to `main` deploy via Vercel. `vercel.json` rewrites all non-asset URLs to `/` so React Router handles client-side routing. No environment variables, no serverless functions — pure static build.
