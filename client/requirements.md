## Packages
(none needed)

## Notes
Uses existing shadcn/ui components in client/src/components/ui (button, dialog, input, textarea, toast).
No stock images required; premium look achieved via gradients, glow, grid + noise overlay.
SEO handled in LandingPage via document.title + meta tags (description + og tags).
Lead form posts to /api/leads using api.leads.create.* from @shared/routes and shows toast on success.
Tailwind config note: existing tailwind.config.ts already maps fontFamily.sans/serif/mono; this UI uses CSS variables for display/body fonts in index.css.
