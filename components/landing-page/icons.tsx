type IconProps = {
	className?: string;
};

export function ArrowLeftIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 16 16"
		>
			<path
				d="M10.5 3.5 6 8l4.5 4.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}

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

export function OperationsIcon({ className }: IconProps) {
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
			<path
				d="M67 62a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm14 13 3-5-3-5-6-1-3-5h-6l-3 5-6 1-3 5 3 5-3 5 6 1 3 5h6l3-5 6-1Z"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="4"
			/>
		</svg>
	);
}

export function TeamLoadIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 96 96"
		>
			<path
				d="M18 72h60M24 66V53h48v13M31 53V41h34v12M40 41V31h16v10"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
			/>
			<circle cx="48" cy="25" r="6" stroke="currentColor" strokeWidth="4" />
			<path
				d="M35 26 28 12m33 14 7-14m-44 43h-8m64 0h-8"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
		</svg>
	);
}

export function FinanceOutlineIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 96 96"
		>
			<path
				d="M24 18h31l17 17v43H24z"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="4"
			/>
			<path
				d="M55 18v17h17"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="4"
			/>
			<circle cx="40" cy="50" r="9" stroke="currentColor" strokeWidth="4" />
			<path
				d="M35.5 50h9M40 45.5V54.5M58 61l7 9m-20 2 9-9m-9-7 5-5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
		</svg>
	);
}

export function SchedulingAlertIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 96 96"
		>
			<rect
				x="18"
				y="20"
				width="34"
				height="44"
				rx="8"
				stroke="currentColor"
				strokeWidth="4"
			/>
			<path
				d="M27 15v10M43 15v10M18 34h34"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
			<path
				d="M66 44 52 68h28L66 44Z"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="4"
			/>
			<path
				d="M66 55v6m0 7h.01"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
			<circle cx="76" cy="74" r="10" stroke="currentColor" strokeWidth="4" />
			<path
				d="M76 68v6m0 4h.01"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
		</svg>
	);
}

export function ShieldCheckIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 3.75 5.75 6.3v5.1c0 4.14 2.5 7.95 6.25 9.6 3.75-1.65 6.25-5.46 6.25-9.6V6.3L12 3.75Z"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
			<path
				d="m9.3 12.2 1.95 1.95 3.5-3.85"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}

export function SparkGridIcon({ className }: IconProps) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z"
				stroke="currentColor"
				strokeWidth="1.7"
			/>
			<path
				d="m12 2.75 1.15 2.7 2.7 1.15-2.7 1.15L12 10.45l-1.15-2.7-2.7-1.15 2.7-1.15L12 2.75Z"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.4"
			/>
		</svg>
	);
}
