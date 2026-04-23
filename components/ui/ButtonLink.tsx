import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/classes';

type ButtonLinkVariant = 'primary' | 'white' | 'ghost';

type ButtonLinkProps = LinkProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
		children: ReactNode;
		variant?: ButtonLinkVariant;
	};

const variantClassNames: Record<ButtonLinkVariant, string> = {
	primary:
		'bg-brand-blue text-white hover:-translate-y-px hover:shadow-[0_20px_40px_rgba(0,112,250,0.24)]',
	white:
		'bg-white text-brand-navy shadow-[0_14px_30px_rgba(7,28,87,0.14)] hover:-translate-y-px',
	ghost:
		'border border-brand-navy/12 bg-white/70 text-brand-navy hover:border-brand-blue/25 hover:text-brand-blue',
};

export default function ButtonLink({
	children,
	className,
	variant = 'primary',
	...props
}: ButtonLinkProps) {
	return (
		<Link
			className={cn(
				'inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline transition duration-200 ease-out',
				variantClassNames[variant],
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
