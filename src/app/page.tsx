import {
  ISbStoryParams,
  StoryblokComponent,
  getStoryblokApi,
} from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="w-full flex flex-row justify-center">
      <StoryblokComponent blok={data.story.content}></StoryblokComponent>
    </div>
  );
}

async function fetchData() {
  // let storyblokParams: ISbStoryParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();

  // return storyblokApi.get(`cdn/stories/home`, storyblokParams);
  const result = await storyblokApi.get(`cdn/stories/home`, {
    version: "draft",
    cv: 1690231144, // TODO: theres a bug here??
  });

  return result;
}
