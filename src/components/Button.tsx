import { storyblokEditable } from "@storyblok/react/rsc";

const Button = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      <a href={blok.link_url.url}>{blok.link_text}</a>
    </div>
  );
};

export default Button;
