# Google Sheets Setup Guide

This guide walks you through setting up a Google Sheet to receive lead submissions from your StudyFrontier website.

---

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click the **+ Blank** button to create a new spreadsheet
3. Rename it to something like "StudyFrontier Leads"

---

## Step 2: Set Up Sheet Tabs

Your spreadsheet needs two tabs (sheets) with specific names:

### Tab 1: **Leads** (for student lead submissions)

1. Rename "Sheet1" to **Leads** (exact spelling, case-sensitive)
2. Add the following headers in row 1:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | Email | Phone | City | Desired Level | Interest | Source | IP Address |

**Column descriptions:**
- **Timestamp:** When the form was submitted (ISO format)
- **Full Name:** Student's full name
- **Email:** Student's email address
- **Phone:** Student's phone number
- **City:** Student's city of residence
- **Desired Level:** UG (Undergraduate), Grad (Graduate), or CC (Community College)
- **Interest:** Country of interest (default: USA)
- **Source:** Page URL where the form was submitted
- **IP Address:** User's IP (for analytics/security)

### Tab 2: **Partners** (for partner inquiries)

1. Create a new sheet by clicking the **+** button at the bottom
2. Rename it to **Partners** (exact spelling, case-sensitive)
3. Add the following headers in row 1:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Organization Name | Contact Name | Email | Website | Markets of Interest | Message | IP Address |

**Column descriptions:**
- **Timestamp:** When the form was submitted (ISO format)
- **Organization Name:** Name of the educational institution
- **Contact Name:** Name of the person submitting the inquiry
- **Email:** Contact email address
- **Website:** Institution's website URL
- **Markets of Interest:** Geographic markets they want to recruit from
- **Message:** Additional message/information
- **IP Address:** Submitter's IP address

---

## Step 3: Get the Spreadsheet ID

1. Look at the URL of your Google Sheet. It will look like:
   ```
   https://docs.google.com/spreadsheets/d/1ABCxyz123-ExampleSheetID/edit#gid=0
   ```

2. Copy the part between `/d/` and `/edit`
   - In the example above: `1ABCxyz123-ExampleSheetID`

3. Save this as your `GOOGLE_SHEETS_ID` environment variable

---

## Step 4: Create a Service Account

If you haven't already created a service account, follow these steps:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Click "Enable APIs and Services"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create a Service Account:
   - Navigate to "IAM & Admin" → "Service Accounts"
   - Click "Create Service Account"
   - Name: `studyfrontier-leads`
   - Description: "Service account for StudyFrontier lead collection"
   - Click "Create and Continue"
   - **Role:** Skip (no project-level roles needed)
   - Click "Done"

5. Create a Key:
   - Click on the service account you just created
   - Go to the "Keys" tab
   - Click "Add Key" → "Create new key"
   - Select **JSON** format
   - Click "Create" (a JSON file will download)

6. Extract credentials from the JSON file:
   - Open the downloaded JSON file
   - Find `"client_email"` - this is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - Find `"private_key"` - this is your `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

---

## Step 5: Share the Sheet with the Service Account

**This is the most important step!** Without this, the service account cannot write to your sheet.

1. Open your Google Spreadsheet
2. Click the **Share** button (top right)
3. In the "Add people and groups" field, paste your service account email
   - It looks like: `studyfrontier-leads@your-project.iam.gserviceaccount.com`
4. Set permission to **Editor**
5. **Uncheck** "Notify people" (service accounts don't need notifications)
6. Click **Share**

You should see the service account email listed under "People with access"

---

## Step 6: Format the Sheet (Optional but Recommended)

### Make headers bold and freeze them:
1. Select row 1 (the header row)
2. Click **Format** → **Text** → **Bold**
3. Click **View** → **Freeze** → **1 row**

### Add data validation for "Desired Level" column (Leads sheet):
1. Select column F (starting from row 2)
2. Click **Data** → **Data validation**
3. Under "Criteria," select **Dropdown (from a range)**
4. Enter custom values: `UG, Grad, CC`
5. Click **Save**

### Set column widths for readability:
- **Timestamp:** 180 pixels
- **Full Name / Organization Name:** 200 pixels
- **Email:** 250 pixels
- **Phone:** 150 pixels
- **City:** 150 pixels
- **Desired Level:** 120 pixels
- **Interest / Markets:** 150 pixels
- **Source / Website:** 300 pixels
- **Message:** 400 pixels
- **IP Address:** 120 pixels

### Add conditional formatting (optional):
Highlight new leads from the last 24 hours:
1. Select all data rows (A2:I1000)
2. Click **Format** → **Conditional formatting**
3. Under "Format cells if," select **Custom formula is**
4. Enter: `=A2>NOW()-1`
5. Choose a light green background color
6. Click **Done**

---

## Step 7: Test the Integration

After setting up environment variables (see `docs/env-setup.md`):

1. Start your development server or deploy to production
2. Navigate to your contact page
3. Fill out and submit the lead capture form
4. Check your Google Sheet - a new row should appear in the **Leads** tab
5. Check your email for a notification

### Troubleshooting:

**No data appears in the sheet:**
- Verify the sheet is shared with the service account email
- Check that tab names are exactly "Leads" and "Partners" (case-sensitive)
- Verify `GOOGLE_SHEETS_ID` is correct
- Check server logs for error messages

**"Permission denied" errors:**
- Make sure you clicked "Share" and added the service account as an Editor
- Wait a few minutes for permissions to propagate

**Data appears but in wrong columns:**
- Verify header row matches exactly as specified above
- Check that headers are in row 1 (not row 2 or later)

---

## Step 8: Set Up Notifications (Optional)

### Get instant notifications when leads arrive:

**Option 1: Google Sheets Email Notifications**
1. In your spreadsheet, click **Tools** → **Notification rules**
2. Select "Any changes are made"
3. Choose "Email - right away"
4. Click **Save**

**Option 2: Zapier/Make Integration**
- Connect Google Sheets to Zapier or Make.com
- Trigger on new row in "Leads" or "Partners"
- Send to Slack, email, CRM, etc.

---

## Best Practices

### Security
- **Never share the service account JSON file publicly**
- Keep the spreadsheet private (don't share with "Anyone with the link")
- Only share with specific team members who need access
- Regularly review who has access to the sheet

### Data Management
- **Backup your sheet regularly** (File → Download → .xlsx)
- Create a separate "Archive" tab for old leads
- Use filters to segment leads by source, date, or desired level
- Add a "Status" column to track lead follow-up

### Privacy Compliance
- Ensure you have proper consent to collect lead data
- Add privacy policy link to your lead capture forms
- Provide a way for leads to request data deletion
- Don't share personal data without consent

---

## Advanced: Automation with Google Apps Script

You can add custom automation to your sheet using Google Apps Script:

### Example: Auto-send thank you emails

1. In your spreadsheet, click **Extensions** → **Apps Script**
2. Replace the code with:

```javascript
function onFormSubmit(e) {
  var sheet = e.source.getActiveSheet();
  var row = e.range.getRow();
  
  if (sheet.getName() === 'Leads') {
    var email = sheet.getRange(row, 3).getValue(); // Column C
    var name = sheet.getRange(row, 2).getValue();  // Column B
    
    MailApp.sendEmail({
      to: email,
      subject: 'Thank you for your inquiry - StudyFrontier',
      body: `Dear ${name},\n\nThank you for your interest in studying abroad. We have received your inquiry and will contact you within 24 hours.\n\nBest regards,\nStudyFrontier Team`
    });
  }
}
```

3. Click **Save**
4. Set up a trigger:
   - Click **Triggers** (clock icon)
   - Add Trigger
   - Function: `onFormSubmit`
   - Event: From spreadsheet → On form submit
   - Save

---

## Sample Data for Testing

You can add these sample rows to test your setup:

### Leads Tab:
```
2024-01-15T10:30:00.000Z | John Doe | john@example.com | +212600000000 | Casablanca | UG | USA | /en/contact | 192.168.1.1
2024-01-15T11:45:00.000Z | Jane Smith | jane@example.com | +212611111111 | Rabat | Grad | USA | /fr/contact | 192.168.1.2
```

### Partners Tab:
```
2024-01-15T14:20:00.000Z | University of Example | Robert Johnson | robert@university.edu | https://university.edu | Morocco, Tunisia | Looking for student recruitment | 203.0.113.1
```

---

## Support

If you encounter issues:
1. Check the [env-setup.md](./env-setup.md) documentation
2. Review server logs for error messages
3. Verify all environment variables are set correctly
4. Test the Google Sheets API connection separately

---

## Next Steps

After completing this setup:
- ✅ Spreadsheet created with correct tabs and headers
- ✅ Service account created and sheet shared
- ✅ Environment variables configured
- ✅ Test submission completed successfully

You're ready to start collecting leads! 🎉
