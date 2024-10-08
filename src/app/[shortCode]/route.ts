import { NextRequest } from 'next/server';
import { routeGetParams } from '../../../types';

export async function GET(req: NextRequest, { params }: routeGetParams) {
    console.log(params.shortCode)
    return new Response('Hello, Next.js!')
}