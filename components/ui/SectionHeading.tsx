import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/classes';

type SectionHeadingProps = ComponentPropsWithoutRef<'h2'> & {
	children: ReactNode;
	className?: string;
	align?: 'left' | 'center';
	as?: 'h1' | 'h2';
};

export default function SectionHeading({
	align = 'left',
	as: Heading = 'h2',
	children,
	className,
	...props
}: SectionHeadingProps) {
	return (
		<Heading
			className={cn(
				'font-(family-name:--font-brand) text-brand-navy',
				align === 'center' && 'mx-auto text-center',
				className,
			)}
			{...props}
		>
			{children}
		</Heading>
	);
}
