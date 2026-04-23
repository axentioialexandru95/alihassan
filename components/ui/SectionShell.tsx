import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/classes';

type SectionShellProps = Omit<ComponentPropsWithoutRef<'section'>, 'children'> & {
	children: ReactNode;
	contentClassName?: string;
};

export default function SectionShell({
	children,
	className,
	contentClassName,
	...props
}: SectionShellProps) {
	return (
		<section
			{...props}
			className={cn('px-3 pb-4 md:px-4 md:pb-5', className)}
		>
			{contentClassName ? (
				<div className={contentClassName}>{children}</div>
			) : (
				children
			)}
		</section>
	);
}
