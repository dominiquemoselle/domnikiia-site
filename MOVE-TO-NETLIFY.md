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

## 4. Next: /portfolio
Once this is live, the portfolio goes in `portfolio/index.html`, which makes `domnikiia.com/portfolio` work automatically.

## 5. Adding portfolio videos
The video list lives in `site.js` (the `WORK` list). Each card plays `assets/work/<name>.mp4`.
Until a file is uploaded, its card shows "Video coming soon".

Upload on GitHub: open `assets/work` → **Add file → Upload files** → rename each file to the exact name below → **Commit changes**.
GitHub's website only accepts files **under 25 MB**, so compress bigger ones first
(HandBrake → preset "Social 720p30", or any free online MP4 compressor; aim for 5–15 MB).

| File name | Drive file |
|---|---|
| `dermazen-david-goliath.mp4` *(homepage)* | Dermazen / DEC2025_DEP27 _David & Goliath_F_ck Big Pharma_V01 |
| `dermazen-most-people.mp4` | Dermazen / Jan2026_DEP45_Mostpeoplegetthiswrong_V1 |
| `dermazen-men-with-beard.mp4` | Dermazen / Jan2026_DEP46_ Menwithbeard_V2 |
| `dermazen-makeup-flakes.mp4` | Dermazen / Mar2026_DEP79_MakeupFlakes_V2 |
| `bedthreads-sheets-harmful.mp4` *(homepage)* | Bed Threads / V5_FEB2026_BTP92_Sheets are harmful |
| `bedthreads-if-welcome.mp4` | Bed Threads / V2_JAN2026_BTP79_If... you're welcome |
| `bedthreads-pick-sheets.mp4` | Bed Threads / JAN2026_BTP81_Howtopicksheetssafeforskin_Iteration_V1 |
| `bedthreads-david-goliath.mp4` | Bed Threads / V3_JAN2026_BTP77_David&Goliath |
| `bedthreads-objection.mp4` | Bed Threads / price objection handling |
| `ijw-you-will-not-smell.mp4` | IJW / JAN2026_IJW39_YOU WILL NOT SMELL_V9 |
| `ijw-smell-better-naked.mp4` | IJW / smell better naked |
| `ijw-ugc-whisper.mp4` | IJW / ugcwishperingad |
| `ijw-interview.mp4` | IJW / interview-fishodorsyndrom |
| `hears-before-after.mp4` | Hears / BEFOREvsAFTER |
| `hears-david-goliath.mp4` | Hears / david&goliath sorytelling |
| `hears-stitch.mp4` | Hears / Stitch ad |
| `hears-if-statement.mp4` | Hears / if-statement |
