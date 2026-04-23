'use client';

import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import { useRef, useState } from 'react';
import type { StoryblokLandingSectionProps } from '@/lib/storyblok/types';
import { problemCards, type ProblemCard } from '../data';

const previousControlIcon = '/icons/carousel-previous.svg';
const nextControlIcon = '/icons/plus.svg';
const repeatedProblemCards = [
  ...problemCards,
  ...problemCards,
  ...problemCards,
];
const maxScrollIndex = repeatedProblemCards.length - problemCards.length;

export default function ProblemCardsSection({ blok }: StoryblokLandingSectionProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollToCard = (nextIndex: number) => {
    const boundedIndex =
      nextIndex < 0
        ? maxScrollIndex
        : nextIndex > maxScrollIndex
          ? 0
          : nextIndex;
    const targetCard = viewportRef.current?.querySelector<HTMLElement>(
      `[data-carousel-index="${boundedIndex}"]`,
    );

    if (targetCard) {
      viewportRef.current?.scrollTo({
        behavior: 'smooth',
        left: targetCard.offsetLeft,
      });
    }

    setScrollIndex(boundedIndex);
  };

  const goToPreviousCard = () => {
    scrollToCard(scrollIndex - 1);
  };

  const goToNextCard = () => {
    scrollToCard(scrollIndex + 1);
  };

  const activeIndex = scrollIndex % problemCards.length;

  return (
    <section
      {...(blok ? storyblokEditable(blok) : {})}
      className="py-[-10px] px-3 pb-4 md:px-4 md:pb-5"
    >
      <div
        className="rounded-[32px] bg-brand-soft px-5 py-7 sm:px-8 sm:py-10 xl:px-[58px] xl:py-[50px]"
        data-node-id="7:1059"
      >
        <div
          className="mx-auto w-full max-w-[1275px]"
          data-node-id="7:1060"
        >
          <div
            className="flex flex-col items-end gap-6"
            data-node-id="7:1068"
          >
            <div
              className="w-full overflow-hidden"
              data-node-id="7:1069"
              ref={viewportRef}
            >
              <div className="flex gap-5">
                {repeatedProblemCards.map((card, index) => (
                  <ProblemCardArticle
                    card={card}
                    index={index}
                    key={`${card.title}-${index}`}
                  />
                ))}
              </div>
            </div>

            <CarouselControls
              activeIndex={activeIndex}
              onNext={goToNextCard}
              onPrevious={goToPreviousCard}
              onSelect={(index) => scrollToCard(index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCardArticle({
  card,
  index,
}: {
  card: ProblemCard;
  index: number;
}) {
  return (
    <article
      className={[
        'relative h-[330px] flex-none basis-full overflow-hidden rounded-[24px] text-brand-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] sm:h-[362px] md:basis-[calc((100%_-_20px)_/_2)] lg:basis-[calc((100%_-_60px)_/_4)]',
        card.tone,
      ].join(' ')}
      data-carousel-index={index}
      data-node-id="7:1070"
    >
      <div
        className="absolute left-6 top-9 flex w-[calc(100%-48px)] flex-col items-start gap-[18px]"
        data-node-id="7:1071"
      >
        <h2
          className="font-(family-name:--font-brand) text-[24px] leading-8 font-extrabold tracking-[-0.24px] text-brand-navy"
          data-node-id="7:1072"
        >
          {card.title}
        </h2>
        <p
          className={[
            'text-[18px] leading-[1.6] font-medium text-brand-navy',
            card.descriptionClassName,
          ].join(' ')}
          data-node-id="7:1073"
        >
          {card.description}
        </p>
      </div>
      <div
        className={[
          'pointer-events-none absolute',
          card.image.positionClassName,
        ].join(' ')}
        data-node-id="7:1074"
      >
        <Image
          alt=""
          className={[
            'absolute inset-0 max-w-none',
            card.image.objectFitClassName,
          ].join(' ')}
          fill
          sizes="(min-width: 1280px) 190px, 45vw"
          src={card.image.src}
        />
      </div>
    </article>
  );
}

function CarouselControls({
  activeIndex,
  className,
  onNext,
  onPrevious,
  onSelect,
}: {
  activeIndex: number;
  className?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  onSelect?: (index: number) => void;
}) {
  return (
    <div
      className={['flex items-center gap-5', className]
        .filter(Boolean)
        .join(' ')}
      data-node-id="7:1090"
    >
      <CarouselControlButton
        ariaLabel="Previous problem"
        iconSrc={previousControlIcon}
        onClick={onPrevious}
      />

      <div
        className="flex items-start gap-2"
        data-node-id="7:1092"
      >
        {problemCards.map((card, index) => {
          const isActive = activeIndex === index;
          const indicatorClassName = [
            'h-2 rounded-[18px] transition-all duration-200',
            isActive ? 'w-[46px] bg-brand-blue' : 'w-2 bg-brand-border-cool',
          ].join(' ');

          return (
            <button
              aria-current={isActive ? 'step' : undefined}
              aria-label={`Show ${card.title}`}
              className={indicatorClassName}
              key={card.title}
              onClick={() => onSelect?.(index)}
              type="button"
            />
          );
        })}
      </div>

      <CarouselControlButton
        ariaLabel="Next problem"
        iconSrc={nextControlIcon}
        onClick={onNext}
      />
    </div>
  );
}

function CarouselControlButton({
  ariaLabel,
  iconSrc,
  onClick,
}: {
  ariaLabel: string;
  iconSrc: string;
  onClick?: () => void;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="inline-flex size-14 items-center justify-center rounded-full border border-brand-border-cool bg-transparent p-4 transition duration-200 ease-out hover:border-brand-blue/40 disabled:pointer-events-none"
      data-node-id="7:1091"
      onClick={onClick}
      type="button"
    >
      <Image alt="" height={24} src={iconSrc} width={24} />
    </button>
  );
}
