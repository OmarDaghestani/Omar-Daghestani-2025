# Contact Form Setup Guide

The contact form now uses a professional server-side approach (like most companies do) with a Next.js API route.

## Setup Instructions

### 1. Configure Email Service

You have several options for sending emails:

#### Option A: Gmail (Recommended for personal use)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Set environment variables** in `.env.local`:
   ```
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_app_password_here
   ```

#### Option B: Outlook/Hotmail

1. **Enable 2-Factor Authentication**
2. **Generate an App Password**
3. **Set environment variables**:
   ```
   EMAIL_USER=your.email@outlook.com
   EMAIL_PASS=your_app_password_here
   ```

#### Option C: Professional Email Service (Recommended for business)

For production, consider using:

- **SendGrid** (free tier: 100 emails/day)
- **Mailgun** (free tier: 5,000 emails/month)
- **AWS SES** (very cheap, $0.10 per 1,000 emails)

### 2. Alternative: Use a Form Service

If you prefer not to handle email sending yourself, you can use:

- **Formspree** (free tier: 50 submissions/month)
- **Netlify Forms** (free tier: 100 submissions/month)
- **Getform** (free tier: 50 submissions/month)

## How It Works

1. **User submits form** → Frontend sends data to `/api/contact`
2. **Server validates data** → Checks required fields and email format
3. **Server sends email** → Uses nodemailer to send to your email
4. **User gets feedback** → Success/error message displayed

## Security Features

- ✅ Server-side validation
- ✅ Rate limiting (can be added)
- ✅ CORS protection
- ✅ Input sanitization
- ✅ Error handling

## Features

- ✅ Form validation (required fields, email format)
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Automatic fallback to email client
- ✅ Form reset after successful submission
- ✅ Responsive design
- ✅ Accessibility features

## Testing

1. Fill out the contact form
2. Submit the form
3. Check your email (if EmailJS is configured) or your email client (if using fallback)
4. Verify the form resets after successful submission

The form will work immediately with the fallback option, but for the best user experience, set up EmailJS.
