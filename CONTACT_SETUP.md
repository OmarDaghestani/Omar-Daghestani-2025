# Contact Form Setup Guide

The contact form uses **Formspree** for reliable email delivery without server-side complexity.

## Setup Instructions

### 1. Configure Formspree

1. **Sign up at [Formspree](https://formspree.io/)** (free tier: 50 submissions/month)
2. **Create a new form** and get your form ID
3. **Set environment variable** in `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

### 2. Alternative Services

If you prefer other services:

- **Netlify Forms** (free tier: 100 submissions/month)
- **Getform** (free tier: 50 submissions/month)
- **EmailJS** (client-side, 200 emails/month free)

## How It Works

1. **User submits form** → Frontend sends data to Formspree
2. **Formspree validates** → Checks required fields and spam
3. **Email delivered** → Formspree sends email to your inbox
4. **User gets feedback** → Success/error message displayed

## Features

- ✅ Form validation (required fields, email format)
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Spam protection (Formspree)
- ✅ No server maintenance required

## Testing

1. Fill out the contact form
2. Submit the form
3. Check your email inbox
4. Verify the form resets after successful submission

## Environment Variables

Your `.env.local` should contain:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ACTUAL_FORM_ID
```

Replace `YOUR_ACTUAL_FORM_ID` with your real Formspree form ID.
