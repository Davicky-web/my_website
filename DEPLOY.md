# Deploying Your Site

Options to publish your static site:

1) GitHub Pages (free)
  - Create a GitHub repo and push this folder.
  - In repo Settings → Pages, set source to `main` branch `/ (root)`.
  - After a few minutes your site is live at `https://<user>.github.io/<repo>`.

2) Netlify (drag & drop or Git)
  - Create an account at netlify.com.
  - Drag the `my-website` folder to Sites → Deploy.
  - Or connect your Git repo for continuous deploys.

3) Vercel
  - Create an account at vercel.com and import your Git repo.

Local quick serve

```bash
cd "c:/Users/Glory/vscode/my-website"
# start a simple server with npx
npx http-server -p 8000
# then open http://localhost:8000
```

Notes

- For forms, you'll need a backend or a service (Formspree, Netlify Forms).
- To automate deployment from GitHub, use GitHub Pages or Netlify's Git integration.
