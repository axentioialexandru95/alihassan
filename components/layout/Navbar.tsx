'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronIcon, ContactIcon, HomeIcon } from '../icons/navbar-icons';
import { navItems } from './navbar-data';

export default function Navbar() {
  return (
    <header
      className="relative w-screen max-w-[100vw] px-[14px] pt-[18px] pb-2 sm:px-5 sm:pt-6 sm:pb-[10px] md:w-full md:max-w-full"
      id="top"
    >
      <div className="mx-auto flex w-full min-w-0 max-w-[1280px] flex-col gap-3 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-3 lg:gap-7 xl:grid-cols-[auto_735px_auto]">
        <div className="flex min-h-12 w-[calc(100vw-28px)] min-w-0 max-w-full items-center gap-3 sm:w-[calc(100vw-40px)] md:contents md:w-auto">
          <Link
            aria-label="Alihassan UX home"
            className="text-brand-navy relative inline-flex w-fit py-1 text-[1.7rem] leading-[1.05] font-bold tracking-[-0.08em] no-underline sm:text-[1.9rem] md:py-0 lg:text-[2.2rem] font-(family-name:--font-brand)"
            href="/"
          >
            <span className="inline-block">ALIHASSAN</span>
            <span className="text-brand-blue absolute -top-1.5 -right-3.5 text-[0.85rem] font-bold tracking-[-0.05em] sm:-top-2 sm:-right-[1.15rem] sm:text-[0.9rem]">
              UX
            </span>
          </Link>

        </div>

        <nav
          aria-label="Primary"
          className="w-[calc(100vw-28px)] min-w-0 max-w-full overflow-x-auto rounded-[24px] border border-[rgba(22,33,91,0.12)] bg-[rgba(255,255,255,0.96)] p-1 shadow-[0_10px_32px_rgba(119,119,119,0.12)] [scrollbar-width:none] sm:w-[calc(100vw-40px)] md:w-full md:overflow-visible md:rounded-full md:border-[rgba(22,33,91,0.16)] md:shadow-[0_10px_32px_rgba(119,119,119,0.18)] lg:p-1.5 [&::-webkit-scrollbar]:hidden"
        >
          <ul className="m-0 flex w-max min-w-full list-none items-center gap-0.5 p-0 md:grid md:w-full md:grid-cols-5 md:gap-1">
            <NavItems />
          </ul>
        </nav>

        <Link
          className="hidden h-12 w-full items-center justify-center gap-2 rounded-[37px] bg-brand-blue px-4 text-sm text-brand-cta-text no-underline shadow-[0_14px_28px_rgba(182,193,207,0.6)] transition duration-[180ms] ease-out hover:-translate-y-px hover:shadow-[0_18px_30px_rgba(0,112,250,0.28)] md:inline-flex md:w-fit lg:h-[59px] lg:gap-2.5 lg:px-6 lg:text-[0.9375rem] font-sans"
          href="/#contact"
        >
          <ContactIcon />
          <span>Get In Touch</span>
        </Link>
      </div>
    </header>
  );
}

function NavItems() {
  const pathname = usePathname();

  return navItems.map((item) => {
    const isActive =
      item.href === '/'
        ? pathname === '/'
        : pathname === item.href || pathname.startsWith(`${item.href}/`);

    return (
      <li className="group relative flex" key={item.label}>
        <Link
          aria-current={isActive ? 'page' : undefined}
          aria-haspopup={item.dropdown ? 'menu' : undefined}
          className={[
            'inline-flex h-10 w-full min-w-0 items-center justify-center gap-1.5 rounded-full px-2.5 text-center text-xs font-normal whitespace-nowrap no-underline transition duration-[180ms] ease-out sm:px-3 md:h-11 md:gap-1 md:px-2.5 md:text-[13px] lg:h-[50px] lg:gap-2 lg:px-5 lg:text-sm font-sans',
            isActive
              ? 'h-9 w-fit gap-1.5 rounded-[108px] bg-brand-blue px-3 py-2 text-white shadow-none lg:h-[41.64px] lg:gap-[8.675px] lg:px-[20.819px] lg:py-[10.41px]'
              : 'text-brand-navy hover:-translate-y-px hover:bg-brand-hover-soft hover:text-brand-hover-navy group-focus-within:bg-brand-hover-soft group-hover:bg-brand-hover-soft',
          ].join(' ')}
          href={item.href}
        >
          {item.icon === 'home' ? <HomeIcon isActive={isActive} /> : null}
          <span>{item.label}</span>
          {item.chevron ? (
            <span className="hidden transition duration-200 group-focus-within:rotate-180 group-hover:rotate-180 md:inline-flex">
              <ChevronIcon />
            </span>
          ) : null}
        </Link>
        {item.dropdown ? (
          <div className="invisible absolute top-full left-1/2 z-50 hidden w-[290px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:block">
            <div
              className="rounded-[24px] border border-brand-navy/10 bg-white p-2 text-left shadow-[0_24px_60px_rgba(22,33,91,0.18)]"
              role="menu"
            >
              {item.dropdown.map((dropdownItem) => (
                <Link
                  className="block rounded-[18px] px-4 py-3 text-brand-navy no-underline transition duration-150 hover:bg-brand-soft focus:bg-brand-soft focus:outline-none"
                  href={dropdownItem.href}
                  key={dropdownItem.label}
                  role="menuitem"
                >
                  <span className="block text-sm font-semibold tracking-[-0.03em]">
                    {dropdownItem.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-brand-muted">
                    {dropdownItem.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </li>
    );
  });
}
