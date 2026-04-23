import Link from 'next/link';

type NavItem = {
	label: string;
	href: string;
	active?: boolean;
	icon?: 'home';
	chevron?: boolean;
};

const navItems: NavItem[] = [
	{ label: 'Home', href: '/', active: true, icon: 'home' },
	{ label: 'Services', href: '/#services', chevron: true },
	{ label: 'Speciality', href: '/#speciality', chevron: true },
	{ label: 'Blog', href: '/#blog' },
	{ label: 'About us', href: '/#about' },
	{ label: 'Contact', href: '/#contact' },
];

function HomeIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-[18px] w-[18px] shrink-0"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				d="M4 10.75 12 4l8 6.75v8.25a1 1 0 0 1-1 1h-4.75v-5.25h-4.5V20H5a1 1 0 0 1-1-1z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function ChevronIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-2 w-2 shrink-0 opacity-70"
			fill="none"
			viewBox="0 0 10 6"
		>
			<path
				d="M1 1.25 5 4.75l4-3.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.4"
			/>
		</svg>
	);
}

function ContactIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-[18px] w-[18px] shrink-0"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.8" />
			<path
				d="M6.5 18a5.5 5.5 0 0 1 11 0"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.8"
			/>
			<rect
				x="3.5"
				y="3.5"
				width="17"
				height="17"
				rx="8.5"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

export default function Navbar() {
	return (
		<header className="px-[14px] pt-[18px] pb-2 sm:px-5 sm:pt-6 sm:pb-[10px]">
			<div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-5 lg:grid-cols-[auto_minmax(0,735px)_auto] lg:gap-7">
				<Link
					aria-label="Alihassan UX home"
					className="text-brand-navy relative inline-flex w-fit text-[1.8rem] leading-none font-bold tracking-[-0.08em] no-underline sm:text-[2.2rem] font-(family-name:--font-brand)"
					href="/"
				>
					<span className="inline-block">ALIHASSAN</span>
					<span className="text-brand-blue absolute -top-1.5 -right-3.5 text-[0.9rem] font-bold tracking-[-0.05em] sm:-top-2 sm:-right-[1.15rem]">
						UX
					</span>
				</Link>

				<nav
					aria-label="Primary"
					className="w-full overflow-x-auto rounded-full border border-[rgba(22,33,91,0.16)] bg-[rgba(255,255,255,0.96)] p-1.5 shadow-[0_10px_32px_rgba(119,119,119,0.18)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				>
					<ul className="flex min-w-max list-none items-center gap-1 p-0 m-0">
						{navItems.map((item) => (
							<li className="flex" key={item.label}>
								<Link
									aria-current={item.active ? 'page' : undefined}
									className={[
										'inline-flex h-[50px] min-w-[104px] items-center justify-center gap-2 rounded-full px-4 text-center text-sm font-normal whitespace-nowrap no-underline transition duration-[180ms] ease-out sm:min-w-[120px] sm:px-5 font-sans',
										item.active
											? 'bg-brand-blue text-white shadow-[0_12px_22px_rgba(0,112,250,0.28)]'
											: 'text-brand-navy hover:bg-[rgba(0,112,250,0.08)] hover:text-[#0d1d66] hover:-translate-y-px',
									].join(' ')}
									href={item.href}
								>
									{item.icon === 'home' ? <HomeIcon /> : null}
									<span>{item.label}</span>
									{item.chevron ? <ChevronIcon /> : null}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link
					className="inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[37px] bg-brand-blue px-6 text-[0.9375rem] text-white no-underline shadow-[0_14px_28px_rgba(182,193,207,0.6)] transition duration-[180ms] ease-out hover:-translate-y-px hover:shadow-[0_18px_30px_rgba(0,112,250,0.28)] lg:h-[59px] lg:w-fit font-sans"
					href="/#contact"
				>
					<ContactIcon />
					<span>Get In Touch</span>
				</Link>
			</div>
		</header>
	);
}
