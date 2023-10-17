import type { postData } from "src/lib/get-posts"

export let externalPosts: postData[] = [
  {
    title: "Adding Deno support to the Eta template engine",
    date: "2020-09-14",
    url: "https://dev.to/nebrelbug/adding-deno-support-to-the-eta-template-engine-28n7",
    site: "Dev.to"
  },
  {
    title: "I built a JS template engine 3x faster than EJS",
    date: "2020-04-11",
    url: "https://dev.to/nebrelbug/i-built-a-js-template-engine-3x-faster-than-ejs-lj8",
    site: "Dev.to"
  },
  {
    title: "TensorFlow.js: An intro and analysis with use cases",
    date: "2019-04-24",
    url: "https://blog.logrocket.com/tensorflow-js-an-intro-and-analysis-with-use-cases-8e1f9a973183/",
    site: "LogRocket"
  },
  {
    title:
      "Introducing Squirrelly: a fast, lightweight, and simple JS template engine",
    date: "2018-09-26",
    url: "https://hackernoon.com/introducing-squirrelly-a-fast-lightweight-and-simple-js-template-engine-70a873d765c9",
    site: "HackerNoon"
  }
].map((postData) => {
  return { ...postData, source: "external" }
})
