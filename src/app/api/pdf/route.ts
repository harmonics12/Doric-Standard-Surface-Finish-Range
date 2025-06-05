import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

export async function GET() {
  try {
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: process.env.CHROME_PATH || await chrome.executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    
    // Set viewport to A4 size
    await page.setViewport({
      width: 1240,
      height: 1754,
      deviceScaleFactor: 2,
    });

    // Navigate to the page
    await page.goto(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000', {
      waitUntil: 'networkidle0',
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });

    await browser.close();

    // Return the PDF
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=doric-surface-finish-range.pdf',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
} 