import { google } from 'googleapis';

// Initialize Google Sheets API
export async function getGoogleSheetsClient() {
  const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!credentials || !email) {
    throw new Error('Google Sheets credentials not configured');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: credentials,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Append a row to a specific sheet
export async function appendToSheet(
  sheetName: string,
  values: any[]
) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEETS_ID not configured');
  }

  const sheets = await getGoogleSheetsClient();

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [values],
    },
  });

  return response.data;
}

// Add timestamp helper
export function getTimestamp() {
  return new Date().toISOString();
}
