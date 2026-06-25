import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5001';

/**
 * Proxy GET /api/enquiries → Express backend
 */
export async function GET() {
  try {
    const backendRes = await fetch(`${BACKEND_URL}/api/enquiries`, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (error: any) {
    console.error('[Next.js proxy] GET /api/enquiries error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to reach backend server.' },
      { status: 502 }
    );
  }
}

/**
 * Proxy POST /api/enquiries → Express backend
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const backendRes = await fetch(`${BACKEND_URL}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (error: any) {
    console.error('[Next.js proxy] POST /api/enquiries error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to reach backend server.' },
      { status: 502 }
    );
  }
}
