import { NextRequest } from 'next/server';
import { routeGetParams, routePostParams } from '../../../types';
import { saveUrl } from '../db/services';

export async function GET(req: NextRequest, { params }: routeGetParams) {
    console.log(params.shortCode)
    return new Response('Hello, Next.js!')
}

export async function POST(req: NextRequest, { }: routePostParams) {
    const requestBody = await req.json();
    const result = await saveUrl(requestBody.longUrl);
    return new Response(JSON.stringify(result));
}