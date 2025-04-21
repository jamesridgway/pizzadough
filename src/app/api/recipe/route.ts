import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    // Inputs:
    //   Temperature
    //   Yeast Type
    //   Hours for Fermentation
    const body = await req.json();
    return NextResponse.json({ youPosted: body });
}