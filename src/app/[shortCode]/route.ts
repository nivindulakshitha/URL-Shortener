import { NextRequest } from 'next/server';
import { routeGetParams, routePostParams } from '../../../types';
import { saveUrl, getUrlByShortCode } from '../db/services';

export async function GET(req: NextRequest, { params }: routeGetParams) {
    const url = await getUrlByShortCode(params.shortCode);
    if (!url) {
        return new Response('Not Found', { status: 404 });
    }
    return Response.redirect(url.longUrl);
}

export async function POST(req: NextRequest, { }: routePostParams) {
    const requestBody = await req.json();
    const result = await saveUrl(requestBody.longUrl);
    return new Response(JSON.stringify(result));
}