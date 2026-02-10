# ✅ Vercel Deployment Checklist

## The Problem
Contact and volunteer forms show "Unable to send message" on Vercel because environment variables are not configured.

## The Solution
Add SMTP environment variables to your Vercel project.

---

## 🚀 Quick Fix Steps

### 1. Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### 2. Select Your Project
Click on your ODCCH website project

### 3. Go to Settings
Click **Settings** in the top navigation

### 4. Add Environment Variables
1. Click **Environment Variables** in the left sidebar
2. Add each variable below:

| Name | Value | Environment |
|------|-------|-------------|
| `SMTP_HOST` | `mail.privateemail.com` | Production, Preview, Development |
| `SMTP_PORT` | `465` | Production, Preview, Development |
| `SMTP_USER` | `info@odcch.org` | Production, Preview, Development |
| `SMTP_PASS` | `Ratna@@123` | Production, Preview, Development |
| `SMTP_FROM` | `info@odcch.org` | Production, Preview, Development |
| `CONTACT_TO` | `info@odcch.org` | Production, Preview, Development |

**Important**: Check all three environment types (Production, Preview, Development) for each variable.

### 5. Redeploy
After adding all variables:
1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Click **Redeploy**
4. OR just push a new commit to trigger auto-deployment

### 6. Test
1. Visit your live website
2. Go to the Contact page
3. Fill out and submit the form
4. You should see: "Thanks — we received your message and will contact you soon."

---

## 🔍 Troubleshooting

### Form still not working?

#### Check Vercel Function Logs:
1. Go to your project in Vercel
2. Click **Deployments**
3. Click on the latest deployment
4. Click **Functions** tab
5. Look for `/api/contact` or `/api/volunteer`
6. Check the logs for error messages

#### Common Issues:

**"Email is not configured" error:**
- ✅ Make sure ALL 6 environment variables are set
- ✅ Check for typos in variable names (they're case-sensitive)
- ✅ Ensure all three environments are checked (Production, Preview, Development)

**"Authentication failed" error:**
- ✅ Verify the password is correct: `Ratna@@123`
- ✅ Check that `SMTP_USER` is `info@odcch.org`
- ✅ Contact your email provider to ensure SMTP access is enabled

**"Connection timeout" error:**
- ✅ Try changing `SMTP_PORT` from `465` to `587`
- ✅ If using port 587, the code will use STARTTLS instead of SSL

**Form submits but no email received:**
- ✅ Check your spam/junk folder
- ✅ Verify `CONTACT_TO` is set to the correct email
- ✅ Check function logs to see if email was sent successfully

---

## 📧 Email Provider Settings

### Current Setup: PrivateEmail (Namecheap)
- **Host**: mail.privateemail.com
- **Port**: 465 (SSL)
- **Username**: info@odcch.org
- **Password**: Ratna@@123

### If You Need to Change Email Provider:

#### Gmail:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password (not regular password!)
```
Note: Requires 2FA and app-specific password

#### SendGrid (Recommended for production):
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

---

## ✨ What Was Changed in the Code

1. **Better Error Handling**: API routes now provide detailed error messages in logs
2. **Configuration Validation**: Clear messages about which environment variables are missing
3. **Improved Logging**: Console logs show when emails are sent successfully
4. **Development Details**: Error details are shown in development mode for easier debugging

---

## 📝 Next Steps After Deployment

1. ✅ Test the contact form on your live site
2. ✅ Test the volunteer form on your live site
3. ✅ Verify emails arrive at info@odcch.org
4. ✅ Check that reply-to works (emails should show sender's email)
5. ✅ Monitor Vercel function logs for any issues

---

## 🆘 Still Having Issues?

1. Check Vercel function logs (see troubleshooting section above)
2. Verify environment variables are set correctly
3. Test the form locally with `npm run dev` to ensure code works
4. Contact Vercel support if you see infrastructure-related errors
5. Consider switching to a more robust email service like SendGrid

---

**Last Updated**: February 10, 2026
