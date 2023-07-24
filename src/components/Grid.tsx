import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

const Grid = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-row justify-between w-full items-center"
      style={{
        height: blok.height_px ? blok.height_px : undefined,
      }}
    >
      {blok.grid_items.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
