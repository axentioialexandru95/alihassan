import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { normalizePreviewPath } from '@/lib/routes';

export async function GET(request: NextRequest) {
	const { searchParams } = request.nextUrl;
	const secret = searchParams.get('secret');
	const previewSecret = process.env.STORYBLOK_PREVIEW_SECRET;

	if (!previewSecret || secret !== previewSecret) {
		return NextResponse.json({ message: 'Invalid preview secret.' }, { status: 401 });
	}

	const draft = await draftMode();
	draft.enable();

	const redirectPath = normalizePreviewPath(
		searchParams.get('slug') ?? searchParams.get('path'),
	);

	return NextResponse.redirect(new URL(redirectPath, request.url));
}
