[Next.js](https://nextjs.org/) stocks API project for Clepher.

## Dependecies
- TailwindCSS
- shadcn/ui
- react-query
- chart.js

## To Started This Project

1. First install the dependecies:

```bash
npm install
# or
yarn
```


2. Add Env variables

- Create a `.env.local` file.
- Get API key from [The Alpha Vantage support page](https://www.alphavantage.co/support/#api-key) (valid for only 25 queries)
- Add the required variables

```dotenv
NEXT_PUBLIC_API_URL=https://www.alphavantage.co/query
NEXT_PUBLIC_API_KEY=your_api_key
```


3. Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
