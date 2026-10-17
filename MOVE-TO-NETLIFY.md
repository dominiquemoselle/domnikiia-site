# Moving domnikiia.com from Gamma to Netlify

## 1. Add the missing images
Download these from your Gamma site (right-click → Save image) and put them in `assets/` with these exact names:

| File name | What it is |
|---|---|
| `portrait.jpg` | Your photo in the hero (left column) |
| `ecom-results-1.png` | Case study "E-commerce brand", screenshot 1 (Screenshot 2025-10-20 at 18.32.00) |
| `ecom-results-2.png` | Case study "E-commerce brand", screenshot 2 (Screenshot 2025-10-20 at 18.32.12) |
| `growth-journal-results.png` | Case study "Growth Journal" screenshot (Screenshot 2025-07-31 at 11.43.26) |

## 2. Put the site on Netlify (free)
1. Sign up at netlify.com (GitHub login is best, so future edits deploy automatically).
2. **Add new site → Deploy manually** and drag the whole `domnikiia-site` folder in.
   (Better: push the folder to a GitHub repo and use **Import from Git**.)
3. You get a temporary address like `something.netlify.app`. Check that everything looks right there **before** touching the domain.

## 3. Point the domain at Netlify
*Do this only after step 2 looks right. The Gamma site keeps working until DNS switches.*

1. In Netlify: **Site configuration → Domain management → Add a domain** → `domnikiia.com`. Add `www.domnikiia.com` too.
2. Log in where you **bought** the domain (GoDaddy, Namecheap, Squarespace/Google Domains, Cloudflare…). It's whoever bills you yearly for it, not Gamma.
3. Pick one option:
   - **Option A (simplest):** switch the domain's nameservers to the 4 Netlify nameservers Netlify shows you. Netlify then handles everything, including HTTPS.
   - **Option B (keep DNS where it is):** delete the old records that point to Gamma, then add:
     - `A` record, host `@` → `75.2.60.5`
     - `CNAME` record, host `www` → `<your-site>.netlify.app`
     *(Check these values against what Netlify shows you, since they can change.)*
4. Wait 1–24 hours for DNS to update. Netlify then issues the free HTTPS certificate on its own.
5. In Gamma, remove the custom domain from the site settings. After that you can cancel Gamma's custom-domain plan.

**If you use email on @domnikiia.com:** don't delete `MX` or `TXT` records. With option A, copy them into Netlify DNS first.

## 4. Pages
- `index.html` → domnikiia.com
- `portfolio/index.html` → domnikiia.com/portfolio
- Shared look: `styles.css`. Shared video list and player: `site.js`.

## 5. Adding portfolio videos
The video list lives in `site.js` (`WORK`). Each card plays `assets/work/<id>.mp4`, e.g. `storytelling-01.mp4`.
Until a file is uploaded, its card shows "Video coming soon". Keep brand names out of file names — this repo and site are public.

Upload on GitHub: open `assets/work` → **Add file → Upload files** → **Commit changes**.
GitHub's website only accepts files **under 25 MB**; compress bigger ones first (aim for 5–15 MB).
