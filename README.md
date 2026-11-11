# Sabara Partners — Consulting Site

This is the source code for the Sabara Partners website, deployed as a Cloudflare Worker.

## How to update images

All images are referenced by URL inside `worker.js`. To swap an image:

1. Open `worker.js` in GitHub (or your editor).
2. Find the image you want to change:
   - **Founder profile photo** — search for `profile-img` and update the `src` URL
   - **Favicon** — search for `favicon` and update the SVG data URI
3. Commit and push to the `main` branch.
4. Cloudflare Workers Builds auto-deploys within seconds.

## How to update the intake form

The contact form is a JotForm embed. To change it, search for `jotform` in `worker.js`
and replace the script `src` URL with your new JotForm form URL.

## Local development

```bash
npx wrangler dev
