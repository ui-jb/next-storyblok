import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const StoryblokImage = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      <Image
        src={blok.image.filename}
        alt={blok.alt_text}
        style={{ objectFit: blok.object_fit }}
        fill={!blok.height_px && !blok.width_px}
        width={blok.width_px ? blok.width_px : undefined}
        height={blok.height_px ? blok.height_px : undefined}
      ></Image>
    </div>
  );
};

export default StoryblokImage;
