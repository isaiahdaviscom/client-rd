
# Next + Netlify Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/4884826a-6cf3-4a44-aac5-e5903ec52424/deploy-status)](https://app.netlify.com/sites/customfades/deploys)

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

This is a [Next.js](https://nextjs.org/) v14 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

This project is a very minimal starter that includes 2 sample components, a global stylesheet, a `netlify.toml` for deployment, and a `jsconfig.json` for setting up absolute imports and aliases. With Netlify, you'll have access to features like Preview Mode, server-side rendering/incremental static regeneration via Netlify Functions, and internationalized routing on deploy automatically.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Table of Contents

- [Next + Netlify Starter](#next--netlify-starter)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation options](#installation-options)
  - [Testing](#testing)
    - [Included Default Testing](#included-default-testing)
    - [Removing Renovate](#removing-renovate)
    - [Removing Cypress](#removing-cypress)
  - [Connect Netlify Forms to Google Gmail](#connect-netlify-forms-to-google-gmail)
    - [1 Set up a Netlify Site](#1-set-up-a-netlify-site)
    - [2. Create a Netlify Form](#2-create-a-netlify-form)
    - [3. Create a Netlify Serverless Function](#3-create-a-netlify-serverless-function)
    - [4. Install Dependencies](#4-install-dependencies)
    - [5. Deploy Your Site](#5-deploy-your-site)
    - [6. Set Environment Variables](#6-set-environment-variables)
    - [7. Test Your Form](#7-test-your-form)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/netlify-templates/next-netlify-starter.git`
2. Navigate to the directory and run `npm install`
3. Run `npm run dev`
4. Make your changes
5. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

## Testing

### Included Default Testing

We’ve included some tooling that helps us maintain these templates. This template currently uses:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process

If your team is not interested in this tooling, you can remove them with ease!

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you’re not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.

### Removing Cypress

For our testing, we use [Cypress](https://www.cypress.io/) for end-to-end testing. This makes sure that we can validate that our templates are rendering and displaying as we’d expect. By default, we have Cypress not generate deploy links if our tests don’t pass. If you’d like to keep Cypress and still generate the deploy links, go into your `netlify.toml` and delete the plugin configuration lines:

```diff
[[plugins]]
  package = "netlify-plugin-cypress"
-  [plugins.inputs.postBuild]
-    enable = true
-
-  [plugins.inputs]
-    enable = false
```

If you’d like to remove the `netlify-plugin-cypress` build plugin entirely, you’d need to delete the entire block above instead. And then make sure sure to remove the package from the dependencies using:

```bash
npm uninstall -D netlify-plugin-cypress
```

And lastly if you’d like to remove Cypress entirely, delete the entire `cypress` folder and the `cypress.config.ts` file. Then remove the dependency using:

```bash
npm uninstall -S cypress
```

## Connect Netlify Forms to Google Gmail

### 1 Set up a Netlify Site

If you don't have a Netlify site, create one by following the steps on the Netlify website.

### 2. Create a Netlify Form

Add a form to your HTML with the necessary input fields. Netlify will automatically handle form submissions.

```html
<!-- index.html -->
<form name="contact" method="post" netlify>
  <label for="name">Name:</label>
  <input type="text" name="name" required>

  <label for="email">Email:</label>
  <input type="email" name="email" required>

  <label for="message">Message:</label>
  <textarea name="message" required></textarea>

  <button type="submit">Submit</button>
</form>
```

### 3. Create a Netlify Serverless Function

Create a functions folder at the root of your project. Inside it, create a file named sendEmail.js with the following code:

```javascript
// functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '<your@gmail.com>', // your Gmail address
      pass: 'your-gmail-password', // your Gmail password or app-specific password
    },
  });

  const mailOptions = {
    from: '<your@gmail.com>',
    to: '<recipient@gmail.com>', // recipient's email address
    subject: 'New Form Submission',
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
```

### 4. Install Dependencies

Run the following command in your terminal to install the required Node.js packages:

```bash
npm install nodemailer
```

### 5. Deploy Your Site

Deploy your site to Netlify using the Netlify CLI or by connecting your Git repository to Netlify.

### 6. Set Environment Variables

In your Netlify site dashboard, go to "Settings" > "Build & deploy" > "Environment" and add the following environment variables:

GMAIL_USER: your Gmail address
GMAIL_PASS: your Gmail password or app-specific password

### 7. Test Your Form

Submit a form on your site and check if the email is sent to the specified Gmail address.

Note: Storing sensitive information like passwords directly in your code or environment variables is not recommended. Consider using environment variables and a secure method for handling secrets in production environments.
