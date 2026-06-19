# Developer Advocate Corner

Personal portfolio site for a developer advocate — homepage, blog post index, codelab catalog, hidden AI Projects page, and an interactive "Roast My App" page where developers can review sample apps and submit structured feedback.

### Live Site

**[xcaas.dev](https://www.xcaas.dev/)**

The name is a nod to **XCaaS (eXperience Communications as a Service)** — a cloud-based communication model that merges Unified Communications as a Service (UCaaS) and Contact Center as a Service (CCaaS) into a single platform, so employees and customer service teams can collaborate over voice, video, and chat on one centralized network.

That's the space I work in as a developer advocate: helping developers build richer voice, video, and chat experiences across the Zoom Workplace ecosystem. Head over to [xcaas.dev](https://www.xcaas.dev/) to learn more about me, read the blog, try the codelabs, or roast one of my sample apps.


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

Edit `src/lib/content/roast/roast.ts`. Each entry powers both the gallery card at `/roast` and a dedicated detail page at `/projects/<slug>`:

```ts
{
  slug: "unique-slug",                                  // Becomes the /projects/<slug> URL
  title: "Sample App Title",
  summary: "One-paragraph pitch — shown on card and detail hero.",
  whyBuilt: "Why this sample exists.",                  // Optional, detail page only
  problem: "The pain point this addresses.",            // Optional, detail page only
  workflow: [                                           // Optional — renders as numbered steps
    { title: "Observe",   description: "..." },
    { title: "Recommend", description: "..." },
    { title: "Approve",   description: "..." },
    { title: "Execute",   description: "..." },
  ],
  video: { provider: "loom", id: "ab064e9f74d8..." },   // Optional. provider: "youtube" | "loom"
  repo: "owner/repo-name",                              // Used for the GitHub link AND pre-filled issues
  liveUrl: "https://...",                               // Optional — omit to hide the "Try it" button
  tech: ["Next.js", "TypeScript"],
  zoomProducts: ["Zoom Workplace", "Team Chat"],        // Optional, detail page only
  difficulty: "Beginner",                               // Optional
  feedbackPrompts: [                                    // Optional — shown above the roast CTA on the detail page
    "What confused you in the setup?",
    "Would you trust this in production?",
  ],
}
```

For the `video.id`, grab the ID from the share URL:

- YouTube `https://youtu.be/<ID>` or `https://www.youtube.com/watch?v=<ID>`
- Loom `https://www.loom.com/share/<ID>`

Omit `video` entirely to hide the walkthrough sections. Omit any of the optional fields to hide that section on the detail page.

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
