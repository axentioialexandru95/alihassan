import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import type { StoryblokPageBlok } from '@/lib/storyblok-types';

type PageProps = {
  blok: StoryblokPageBlok;
};

const Page = ({ blok }: PageProps) => (
  <main
    {...storyblokEditable(blok)}
    className="relative overflow-hidden"
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_center,rgba(0,112,250,0.12),transparent_64%)]" />
    <div className="mx-auto flex w-full  flex-col gap-8 px-4 pb-16 sm:px-6 lg:gap-10 lg:px-8 xl:px-0">
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  </main>
);

export default Page;
