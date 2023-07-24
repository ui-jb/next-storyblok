import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

const Page = ({ blok }: any) => {
  return (
    <main className="text-center mt-4 w-full" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
