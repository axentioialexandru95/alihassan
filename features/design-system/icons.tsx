type IconProps = {
	className?: string;
};

export function ArrowRightIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 16 16"
		>
			<path
				d="M5.5 3.5 10 8l-4.5 4.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}

export function ChevronDownIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 14 8"
		>
			<path
				d="M2 2.25 7 5.75l5-3.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.6"
			/>
		</svg>
	);
}

export function HomeMarkIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				d="M4.5 10.75 12 4.5l7.5 6.25V19a1 1 0 0 1-1 1H14v-5.25h-4V20H5.5a1 1 0 0 1-1-1z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

export function OperationsMarkIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 96 96"
		>
			<path
				d="M14 77V35m18 42V23m18 54V46m18 31V11"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
			<path
				d="m8 25 10-8 12 11 11-7 12 9 11-15 11 8"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
			/>
			<circle cx="74" cy="72" r="12" stroke="currentColor" strokeWidth="4" />
			<path
				d="M74 64v8l6 4"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
		</svg>
	);
}
