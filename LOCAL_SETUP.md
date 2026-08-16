# TekaBill Frontend — Local Setup

TekaBill is a responsive demonstration frontend for a Nigerian bill-payment platform. It contains a public landing page, customer authentication interface, customer dashboard, bill-payment flows, wallet, transaction history, profile settings and an administrative dashboard.

The current package is a frontend prototype. Payment gateways, bill-payment providers, customer authentication, databases and real wallet transactions are not yet connected.

## Requirements

Install the following before running the project:

- Node.js 22.13.0 or newer
- npm 10 or newer
- Git is optional

Check your installed versions:

```bash
node --version
npm --version
```

## 1. Extract the ZIP

Extract `TekaBill-Frontend.zip`, then open a terminal inside the extracted `TekaBill-Frontend` directory.

Windows PowerShell example:

```powershell
cd C:\path\to\TekaBill-Frontend
```

macOS or Linux example:

```bash
cd /path/to/TekaBill-Frontend
```

## 2. Install dependencies

```bash
npm install
```

For a clean installation based strictly on `package-lock.json`, use:

```bash
npm ci
```

## 3. Start the development server

```bash
npm run dev -- --host 0.0.0.0
```

Open the address shown in the terminal. It will normally be:

```text
http://localhost:5173
```

If the terminal displays another port, use the displayed address.

## 4. Explore the interface

1. Open the landing page.
2. Click `Sign in` or `Create free account`.
3. The demonstration login form is prefilled.
4. Click `Sign in securely` to open the customer dashboard.
5. Use the sidebar to open Pay Bills, Wallet, Transactions and Profile.
6. Click `Admin demo` in the customer sidebar to open the operations dashboard.

No real payment is submitted. The confirmation flow uses local demonstration state only.

## Build for production

```bash
npm run build
```

The verified production build is generated in the `dist` directory.

To run the production build locally:

```bash
npm run start
```

## Run code checks

Run the linter:

```bash
npm run lint
```

Run the build and rendered HTML test:

```bash
npm test
```

## Main source files

```text
app/page.tsx          Complete interactive website interface
app/globals.css       Global design system and responsive styles
app/layout.tsx        Page metadata and application layout
public/               Static assets
package.json          Dependencies and scripts
vite.config.ts        Vite and Vinext configuration
next.config.ts        Next-compatible configuration
worker/index.ts       Cloudflare-compatible server entry
```

## Changing the temporary brand

The temporary brand name is `TekaBill`.

To replace it:

1. Open `app/page.tsx`.
2. Replace all visible instances of `TekaBill` with the final brand name.
3. Open `app/layout.tsx` and update the title and description.
4. Edit the colours at the beginning of `app/globals.css`.

The primary brand colour is controlled by:

```css
--green: #12a36d;
```

The dark navigation colour is controlled by:

```css
--navy: #09292b;
```

## Connecting the backend later

The next development stage should replace the demonstration arrays and local component state with API calls to the NestJS backend. Recommended endpoints include:

```text
POST /api/v1/auth/login
GET  /api/v1/users/me
GET  /api/v1/wallet
GET  /api/v1/transactions
GET  /api/v1/bills/categories
GET  /api/v1/bills/products
POST /api/v1/bills/validate
POST /api/v1/bills/purchase
GET  /api/v1/bills/:reference
```

Keep all payment-provider secret keys on the backend. Never place Monnify, Paystack, Flutterwave or bill-aggregator secret keys inside the frontend.

## Common issues

### Node version error

Install Node.js 22.13.0 or newer, then run `npm install` again.

### Port already in use

Run the project on another port:

```bash
npm run dev -- --host 0.0.0.0 --port 5174
```

Then open:

```text
http://localhost:5174
```

### Dependencies behave unexpectedly

Delete the generated `node_modules` directory and reinstall:

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm ci
```

macOS or Linux:

```bash
rm -rf node_modules
npm ci
```

### Development cache issue

Stop the server, delete `.vinext`, `.next` and `dist` if they exist, then restart the development server.
