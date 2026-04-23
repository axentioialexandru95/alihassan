const staticRouteSlugs = new Set(['design-system']);

export function getRouteSlug(slug?: string[]) {
	return slug?.length ? slug.join('/') : 'home';
}

export function isStaticRouteSlug(slug: string) {
	return staticRouteSlugs.has(slug);
}

export function normalizePreviewPath(path: string | null) {
	if (!path) {
		return '/';
	}

	try {
		const url = new URL(path);
		path = `${url.pathname}${url.search}`;
	} catch {
		// Plain paths are expected from Storyblok preview configuration.
	}

	const normalizedPath = path.startsWith('/') ? path : `/${path}`;

	if (normalizedPath.startsWith('//')) {
		return '/';
	}

	return normalizedPath;
}
