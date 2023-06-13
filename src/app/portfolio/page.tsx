import { ExternalLink } from "@/components/links"

export const metadata = {
  title: "Portfolio"
}

function PortfolioLinks() {
  return (
    <div>
      <ul className="list-disc list-outside mt-6 ml-7">
        <li className="text-xl mt-2">
          <span className="font-bold">Eta</span> (
          <ExternalLink href={"https://eta.js.org"}>website </ExternalLink>|{" "}
          <ExternalLink href={"https://github.com/eta-dev/eta"}>
            GitHub
          </ExternalLink>
          ) — a super-fast embedded JS template engine that supports Deno.
          I&apos;m hoping to release a new version soon!
        </li>
        <li className="text-xl mt-2">
          <span className="font-bold">Decline App</span> (
          <ExternalLink href={"https://decline.vercel.app/"}>
            website
          </ExternalLink>
          ) — a website for practicing Czech, Slovak, and Russian noun
          declensions.
        </li>
        <li className="text-xl mt-2">
          <span className="font-bold">Splashpad</span> (
          <ExternalLink
            href={
              "https://chrome.google.com/webstore/detail/splashpad/fainejfmhojphdbbfmpomeknplpdnndb"
            }
          >
            Chrome webstore
          </ExternalLink>
          ) — a Chrome extension that turns your new tab page into a
          customizable dashboard.
        </li>
        <li className="text-xl mt-2">
          <span className="font-bold">npm-to-yarn</span> (
          <ExternalLink href={"https://github.com/nebrelbug/npm-to-yarn"}>
            GitHub
          </ExternalLink>
          ) — an npm package for converting CLI commands between npm, Yarn, and
          pnpm.
        </li>
        <li className="text-xl mt-2">
          <span className="font-bold">Squirrelly</span> (
          <ExternalLink href={"https://squirrelly.js.org"}>
            website{" "}
          </ExternalLink>
          |{" "}
          <ExternalLink href={"https://github.com/squirrellyjs/squirrelly"}>
            GitHub
          </ExternalLink>
          ) — a lightweight JavaScript template engine with support for helpers,
          partials, filters, etc. I&apos;m not actively developing it, but this
          is the project that helped me get into open source.
        </li>
        <li className="text-xl mt-2">
          <span className="font-bold">Esperaboard</span> (
          <ExternalLink
            href={
              "https://chrome.google.com/webstore/detail/esperaboard-esperanto-x-s/nkgbomaneihlabdhjihdhpdlehahahoc"
            }
          >
            Chrome webstore
          </ExternalLink>
          ) — a Chrome extension to transform characters written in the
          Esperanto &quot;x-system&quot; into Esperanto characters while typing.
        </li>
        <li className="text-xl mt-2">
          <span className="font-bold">Tic-Tac-Too</span> (
          <ExternalLink href={"https://tictactoe.bengubler.com/"}>
            website{" "}
          </ExternalLink>
          |{" "}
          <ExternalLink href={"https://github.com/nebrelbug/tictactoo"}>
            GitHub
          </ExternalLink>
          ) — AI tic-tac-toe bot built with TensorFlow.js. I built this as a
          teenager, while just starting to learn about ML, so it&apos;s
          definitely not the best code. But it was a great learning experience.
        </li>
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <div className="max-w-screen-lg m-auto">
      <h2 className="text-4xl font-bold mt-10">Portfolio</h2>

      <PortfolioLinks />
    </div>
  )
}
