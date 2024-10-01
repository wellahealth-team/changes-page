<p align="center" style="margin-top: 120px">

  <h3 align="center">Changes.Page</h3>

  <p align="center">
    An open-source solution revolutionizing changelog management.
</p>

## Built with 🛠️

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com)
- [inngest](https://www.inngest.com)
- [Postmark](https://postmarkapp.com)
- [Arcjet](https://arcjet.com)

## Getting Started 🚀

### Differences between this and main repo

The main repo contains all that you need to run the changelog system and hence requires additional setup.

This fork has been modified to remove the Billing Components. A seperate branch `develop-original` is used to keep track of changes from the main repo

To contribute to this fork, use the `develop` branch

### Requirements

- [Node.js](https://nodejs.org/en/) >= 20.17.0
- [pnpm](https://pnpm.io/) >= 9.11.0

### Setup

1. Clone the repository

   ```sh
   git clone https://github.com/techulus/changes-page
   ```

2. Install dependencies

   ```sh
   pnpm install
   ```

3. Set up your .env file

   From `apps/web` and `apps/page`, you will find .env.example. Create your own copy.

4. Setup your Supabase instance and add the credentials to your .env files

   - Create an account here: https://supabase.com/
   - After creating an account, go to Settings and copy the API details to your `.env`
   - Connect to your Supabase database using the guide here: https://supabase.com/docs/guides/database/connecting-to-postgres
   - Run all migrations in the folder `packages/utils/migrations`. Make sure to run the migrations in order.
   - The migrations should be run in the `public` schema of the postgres database
   - In supabase, create a new user in the Authentication section. The new user created will be used to sign up when you run the web

5. Run the build command

   ```sh
   pnpm build
   ```

6. Start the development server

   ```sh
    pnpm dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see
   the result.
