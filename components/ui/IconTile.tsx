import type { ReactNode } from 'react';
import { cn } from '@/lib/classes';

type IconTileProps = {
	children: ReactNode;
	className?: string;
};

export default function IconTile({ children, className }: IconTileProps) {
	return (
		<span
			className={cn(
				'flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white',
				className,
			)}
		>
			{children}
		</span>
	);
}
