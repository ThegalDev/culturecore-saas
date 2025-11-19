# Deployment Guide for CultureCore SaaS

This guide outlines the steps to build and deploy the CultureCore SaaS application.

## Prerequisites

- **Node.js**: Version 18.17 or later.
- **npm**: Version 9 or later.

## Local Development

To run the application locally:

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

To create a production build:

1.  Run the build command:
    ```bash
    npm run build
    ```

    This generates an optimized version of the application in the `.next` folder.

2.  Start the production server:
    ```bash
    npm run start
    ```

## Deployment Options

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import your project into Vercel.
3.  Vercel will automatically detect Next.js and configure the build settings.
4.  Click **Deploy**.

### Netlify

1.  Push your code to a Git repository.
2.  Import your project into Netlify.
3.  Set the build command to `npm run build`.
4.  Set the publish directory to `.next`.
5.  Install the `@netlify/plugin-nextjs` if not automatically detected.

### Docker

You can containerize the application using Docker.

1.  Create a `Dockerfile` in the root directory (if not already present).
2.  Build the Docker image:
    ```bash
    docker build -t culturecore-saas .
    ```
3.  Run the container:
    ```bash
    docker run -p 3000:3000 culturecore-saas
    ```
