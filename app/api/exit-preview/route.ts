import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { normalizePreviewPath } from '@/lib/routes';

export async function GET(request: NextRequest) {
	const draft = await draftMode();
	draft.disable();

	const redirectPath = normalizePreviewPath(request.nextUrl.searchParams.get('slug'));

	return NextResponse.redirect(new URL(redirectPath, request.url));
}
