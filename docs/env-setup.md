# Environment Variables Setup

This document explains how to configure the required environment variables for the lead capture system.

## Required Environment Variables

### Google Sheets Integration

#### `GOOGLE_SHEETS_ID`
The ID of your Google Spreadsheet where leads will be saved.

**How to get it:**
1. Create a new Google Spreadsheet
2. The URL will look like: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
3. Copy `YOUR_SHEET_ID` from the URL

**Example:**
```
GOOGLE_SHEETS_ID=1ABC-xyz123_Example-SheetID
```

#### `GOOGLE_SERVICE_ACCOUNT_EMAIL`
The email address of your Google Service Account.

**How to get it:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "IAM & Admin" → "Service Accounts"
4. Click "Create Service Account"
5. Give it a name (e.g., "studyfrontier-leads")
6. Grant the "Editor" role (or just Google Sheets API access)
7. Click "Done"
8. The email will be shown in the service accounts list (looks like `name@project.iam.gserviceaccount.com`)

**Example:**
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=studyfrontier-leads@my-project.iam.gserviceaccount.com
```

#### `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
The private key for authentication with Google Sheets API.

**How to get it:**
1. In Google Cloud Console, click on your service account
2. Go to the "Keys" tab
3. Click "Add Key" → "Create new key"
4. Select "JSON" format
5. Download the JSON file
6. Open the file and copy the value of the `private_key` field
7. **Important:** Keep the newlines as `\n` (they should remain as literal `\n` characters in the .env file)

**Example:**
```
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**Note:** The entire key must be on one line with `\n` representing newlines, and wrapped in quotes.

### Email Notifications

#### `EMAIL_TO`
The email address where lead notifications will be sent.

**Example:**
```
EMAIL_TO=owner@eduagency.com
```

#### `EMAIL_USER`
The Gmail account used to send notification emails.

**Example:**
```
EMAIL_USER=notifications@eduagency.com
```

#### `EMAIL_APP_PASSWORD`
Gmail App Password for authentication (NOT your regular Gmail password).

**How to get it:**
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security"
3. Enable 2-Step Verification (required for App Passwords)
4. Go to "App passwords" (under "2-Step Verification")
5. Select app: "Mail"
6. Select device: "Other" and enter "StudyFrontier Lead System"
7. Click "Generate"
8. Copy the 16-character password (no spaces)

**Example:**
```
EMAIL_APP_PASSWORD=abcdefghijklmnop
```

**Security Note:** Never commit app passwords to version control. Always use environment variables.

---

## Setting Up on Vercel

To deploy your application with these environment variables on Vercel:

1. Go to your project in the Vercel Dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add each variable:
   - **Name:** Variable name (e.g., `GOOGLE_SHEETS_ID`)
   - **Value:** The actual value
   - **Environment:** Select "Production", "Preview", and "Development" as needed

4. Click "Save"

**Important for `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` on Vercel:**
- Paste the entire key including quotes
- Vercel will automatically handle the formatting
- Make sure newlines are preserved as `\n`

### Testing on Vercel

After adding environment variables:
1. Trigger a new deployment (or commit a change)
2. Test the lead form submission
3. Check your Google Sheet and email for new entries

---

## Local Development

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in all the required values in `.env.local`

3. **Never commit `.env.local` to Git** (it's already in `.gitignore`)

4. Restart your development server after adding environment variables:
   ```bash
   npm run dev
   ```

---

## Troubleshooting

### Google Sheets Authentication Errors

**Error: "Google Sheets credentials not configured"**
- Ensure all three Google variables are set
- Check that `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` includes the full key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Verify the key has `\n` characters (not actual newlines)

**Error: "Failed to save to Google Sheets"**
- Make sure you've shared the Google Sheet with the service account email (see `docs/google-sheets-setup.md`)
- Check that the sheet has tabs named "Leads" and "Partners"

### Email Authentication Errors

**Error: "Email credentials not configured"**
- Verify `EMAIL_USER`, `EMAIL_APP_PASSWORD`, and `EMAIL_TO` are all set
- Make sure you're using an App Password, not your regular Gmail password

**Error: "Invalid login"**
- Ensure 2-Step Verification is enabled on your Gmail account
- Regenerate the App Password
- Check for spaces in the password (remove them)

### Environment Variables Not Loading

- Restart your development server after changing `.env.local`
- On Vercel, trigger a new deployment after adding/changing variables
- Check that variable names match exactly (case-sensitive)

---

## Security Best Practices

1. **Never commit sensitive keys to Git**
   - Always use `.env.local` for local development
   - Use Vercel environment variables for production

2. **Rotate credentials periodically**
   - Generate new service account keys every 6-12 months
   - Update App Passwords if compromised

3. **Limit permissions**
   - Service account should only have Google Sheets API access
   - Use a dedicated Gmail account for sending notifications

4. **Monitor usage**
   - Check Google Cloud Console for API usage
   - Review email sending logs

---

## Next Steps

After setting up environment variables:
1. Follow [docs/google-sheets-setup.md](./google-sheets-setup.md) to configure your spreadsheet
2. Test the lead capture form
3. Verify data appears in Google Sheets
4. Confirm email notifications are received
