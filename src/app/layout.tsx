import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import Page from "@/components/Page";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import StoryblokImage from "@/components/Image";

import "../styles/globals.scss";

storyblokInit({
  accessToken: `${process.env.STORYBLOK_ACCESS_TOKEN}`,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
    cache: {
      type: "none",
      clear: "auto",
    },
  },
  components: {
    page: Page as any,
    button: Button as any,
    grid: Grid as any,
    image: StoryblokImage as any,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
