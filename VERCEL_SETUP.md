# Vercel Deployment Setup

## Required Environment Variables

For the contact and volunteer forms to work on Vercel, you **must** configure the following environment variables in your Vercel project:

### How to Add Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Click on **Environment Variables** in the sidebar
4. Add each variable below

### Required Variables:

| Variable       | Description                                      | Example                |
| -------------- | ------------------------------------------------ | ---------------------- |
| `SMTP_HOST`    | Your SMTP server address                         | `smtp.gmail.com`       |
| `SMTP_PORT`    | SMTP port (587 for TLS, 465 for SSL)             | `587`                  |
| `SMTP_USER`    | Your email address                               | `your-email@gmail.com` |
| `SMTP_PASS`    | Your email password or app password              | `your-app-password`    |
| `SMTP_FROM`    | Email address to send from                       | `your-email@gmail.com` |
| `CONTACT_TO`   | Email where contact form submissions go          | `info@odcch.org`       |
| `VOLUNTEER_TO` | Email where volunteer applications go (optional) | `info@odcch.org`       |

### Gmail Setup Instructions:

If you're using Gmail:

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account settings
   - Security → 2-Step Verification
   - Follow the prompts to enable it

2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "ODCCH Website"
   - Copy the 16-character password
   - Use this as your `SMTP_PASS` value

3. **Configuration**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx (app password from step 2)
   SMTP_FROM=your-email@gmail.com
   CONTACT_TO=info@odcch.org
   ```

### Alternative: Using a Different Email Service

You can also use:

- **SendGrid**: More reliable for production
- **AWS SES**: Scalable solution
- **Mailgun**: Developer-friendly
- **Resend**: Modern email API

### After Adding Variables:

1. Redeploy your Vercel project (or it will auto-deploy)
2. Test the contact form on your live site
3. Check Vercel logs if there are still issues:
   - Go to your project
   - Click "Deployments"
   - Click on the latest deployment
   - Click "Functions" tab to see logs

### Troubleshooting:

If the form still doesn't work after setting variables:

1. Check Vercel Function logs for specific error messages
2. Verify all environment variables are set correctly (no typos)
3. If using Gmail, ensure the app password is correct
4. Check that your email provider allows SMTP connections
5. Try setting `SMTP_PORT` to `465` and see if that works better

### Testing Locally:

Create a `.env.local` file in your project root with the same variables to test locally:

```bash
cp .env.example .env.local
# Edit .env.local with your actual credentials
npm run dev
```

**Important**: Never commit `.env.local` to git - it's already in `.gitignore`.
