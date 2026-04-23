'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronIcon, ContactIcon, HomeIcon } from './icons/navbar-icons';
import { navItems } from './navbar-data';

export default function Navbar() {
  return (
    <header
      className="px-[14px] pt-[18px] pb-2 sm:px-5 sm:pt-6 sm:pb-[10px]"
      id="top"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-7 xl:grid-cols-[auto_735px_auto]">
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
          className="w-full overflow-x-auto rounded-full border border-[rgba(22,33,91,0.16)] bg-[rgba(255,255,255,0.96)] p-1.5 shadow-[0_10px_32px_rgba(119,119,119,0.18)] [scrollbar-width:none] sm:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          <ul className="m-0 grid min-w-[620px] grid-cols-5 list-none items-center gap-1 p-0 sm:min-w-full">
            <NavItems />
          </ul>
        </nav>

        <Link
          className="inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[37px] bg-brand-blue px-6 text-[0.9375rem] text-[#eefff6] no-underline shadow-[0_14px_28px_rgba(182,193,207,0.6)] transition duration-[180ms] ease-out hover:-translate-y-px hover:shadow-[0_18px_30px_rgba(0,112,250,0.28)] lg:h-[59px] lg:w-fit font-sans"
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
            'inline-flex h-[50px] w-full min-w-0 items-center justify-center gap-2 rounded-full px-4 text-center text-sm font-normal whitespace-nowrap no-underline transition duration-[180ms] ease-out sm:px-5 font-sans',
            isActive
              ? 'h-[41.64px] w-fit gap-[8.675px] rounded-[108px] bg-brand-blue px-[20.819px] py-[10.41px] text-white shadow-none'
              : 'text-brand-navy hover:-translate-y-px hover:bg-[#eef6ff] hover:text-[#0d1d66] group-focus-within:bg-[#eef6ff] group-hover:bg-[#eef6ff]',
          ].join(' ')}
          href={item.href}
        >
          {item.icon === 'home' ? <HomeIcon isActive={isActive} /> : null}
          <span>{item.label}</span>
          {item.chevron ? (
            <span className="transition duration-200 group-focus-within:rotate-180 group-hover:rotate-180">
              <ChevronIcon />
            </span>
          ) : null}
        </Link>
        {item.dropdown ? (
          <div className="invisible absolute top-full left-1/2 z-50 w-[290px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
