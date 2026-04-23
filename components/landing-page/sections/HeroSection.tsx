import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="px-3 pb-3 md:px-4 md:pb-4">
      <div
        className="relative isolate mx-auto min-h-[430px] max-w-[1390px] overflow-hidden rounded-t-[32px] bg-brand-navy sm:min-h-[520px] lg:h-[clamp(520px,45.32vw,630px)] lg:min-h-0"
        data-node-id="7:1047"
        id="home"
      >
        <h1
          className="pointer-events-none absolute left-[4%] top-[-2%] z-0 font-(family-name:--font-brand) text-[clamp(5.6rem,20.8vw,18.8125rem)] leading-normal font-semibold tracking-[-0.05em] text-[#dbecff] sm:top-[-3%] lg:left-[49px] lg:top-[159.5px] lg:-translate-y-1/2 lg:text-[clamp(12rem,21.65vw,290px)] lg:tracking-[-15.05px]"
          data-node-id="9:2192"
        >
          Pharmacy
        </h1>

        <div
          className="absolute left-1/2 top-[18%] z-10 h-[72%] w-[78%] max-w-[466px] -translate-x-1/2 sm:top-[14%] sm:h-[80%] sm:w-[46%] lg:left-[calc(50%+10px)] lg:top-[125px] lg:h-[clamp(420px,36.26vw,504px)] lg:w-[clamp(388px,33.53vw,466px)]"
          data-node-id="9:2191"
        >
          <Image
            alt="Healthcare professional in blue scrubs pointing upward."
            className="object-cover object-center"
            fill
            priority
            sizes="(min-width: 1024px) 466px, (min-width: 640px) 46vw, 78vw"
            src="/pharmacy/hero-practitioner.png"
          />
        </div>

        <a
          className="absolute bottom-7 left-7 z-20 max-w-[23.2rem] text-[15px] leading-[1.6] font-medium text-[#f2f5f9] no-underline sm:bottom-[18%] sm:left-[5%] sm:text-base lg:bottom-auto lg:left-[69px] lg:top-[67.6%]"
          data-node-id="11:80"
          href="#services"
        >
          Operational bottlenecks, frequent billing errors, and mismanaged
          schedules can lead to revenue loss and frustrated patients.
        </a>

        <a
          className="absolute bottom-auto right-[59px] top-[69.5%] z-20 hidden items-center text-brand-navy no-underline lg:flex"
          data-node-id="11:105"
          href="#contact"
        >
          <span
            className="inline-flex h-16 items-center justify-center gap-[8.872px] rounded-[60px] bg-[#e7c2d4] px-[21.292px] text-[14.195px] font-semibold"
            data-node-id="11:82"
          >
            <CalendarLoveIcon className="h-[21.292px] w-[21.292px]" />
            <span>Book Appointment</span>
          </span>
          <span
            className="inline-flex h-[64.585px] w-[64.585px] items-center justify-center rounded-[47.361px] bg-[#e7c2d4] p-[18.216px]"
            data-node-id="11:97"
          >
            <RightIcon className="h-[28.153px] w-[28.153px]" />
          </span>
        </a>

        <a
          className="absolute right-5 bottom-7 z-20 inline-flex items-center gap-2.5 rounded-full bg-[#e7c2d4] px-5 py-3 text-sm font-semibold text-brand-navy no-underline sm:right-7 lg:hidden"
          href="#contact"
        >
          <CalendarLoveIcon className="h-5 w-5" />
          <span>Book Appointment</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e7c2d4]">
            <RightIcon className="h-5 w-5" />
          </span>
        </a>
      </div>
    </section>
  );
}

function CalendarLoveIcon({ className }: { className?: string }) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      height={22}
      src="/icons/calendar-love-01.svg"
      width={22}
    />
  );
}

function RightIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        backgroundColor: '#16215b',
        mask: "url('/icons/Monotone add.svg') center / contain no-repeat",
        WebkitMask: "url('/icons/Monotone add.svg') center / contain no-repeat",
      }}
    />
  );
}
