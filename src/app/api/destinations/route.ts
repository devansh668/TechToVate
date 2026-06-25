import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5001';

/**
 * Proxy GET /api/destinations → Express backend
 * Supports ?search= and ?featured=true query params.
 */
export async function GET(request: Request) {
  try {
    const { search } = new URL(request.url);
    const backendRes = await fetch(`${BACKEND_URL}/api/destinations${search}`, {
      headers: { 'Content-Type': 'application/json' },
      // Do not cache so fresh data is always fetched from MongoDB
      cache: 'no-store',
    });
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (error: any) {
    console.error('[Next.js proxy] GET /api/destinations error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to reach backend server.' },
      { status: 502 }
    );
  }
}

/**
 * Proxy POST /api/destinations → Express backend
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const backendRes = await fetch(`${BACKEND_URL}/api/destinations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (error: any) {
    console.error('[Next.js proxy] POST /api/destinations error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to reach backend server.' },
      { status: 502 }
    );
  }
}
