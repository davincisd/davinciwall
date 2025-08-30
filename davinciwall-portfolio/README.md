
# DavinciWall — Next.js Portfolio

## Dev
```bash
npm install
npm run dev
```

## Build & Start
```bash
npm run build
npm start
```

## Deploy to Vercel
- Push to GitHub then import in Vercel, or use `vercel` CLI.
- Add your domain `davinciwall.com` in Vercel > Project > Settings > Domains.
- In GoDaddy DNS:
  - Apex (davinciwall.com) → A record to **76.76.21.21**
  - www → CNAME to **cname.vercel-dns.com**
