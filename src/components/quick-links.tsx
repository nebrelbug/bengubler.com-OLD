import { InternalLink, ExternalLink } from "./links"

export function QuickLinks({}) {
  return (
    <div>
      <h2 className="text-4xl font-bold">Quick Links</h2>
      <ul className="list-disc list-outside mt-6 ml-7">
        <li className="text-xl mt-2">
          <InternalLink href={`/portfolio`}>💡 Portfolio</InternalLink>
        </li>

        <li className="text-xl mt-2">
          <InternalLink href={`/posts`}>🖋️ Posts</InternalLink>
        </li>

        <li className="text-xl mt-2">
          <InternalLink href={`/contact`}>👋 Contact Me</InternalLink>
        </li>

        <li className="text-xl mt-2">
          <InternalLink href={`/ben-gubler-resume.pdf`}>
            📃 Resumé / CV
          </InternalLink>
        </li>

        <li className="text-xl mt-2">
          <InternalLink href={`/my-stack`}>🚀 My Stack</InternalLink>
        </li>

        <li className="text-xl mt-2">
          <ExternalLink href={`https://paypal.me/bengubler`}>
            👀 Pay Me
          </ExternalLink>
        </li>

        <li className="text-xl mt-2">
          <InternalLink href={`/czech-case-cards`}>
            🇨🇿 Czech Case Cards
          </InternalLink>
        </li>

        <li className="text-xl mt-2">
          <InternalLink href={`/russian-case-cards`}>
            🇷🇺 Russian Case Cards
          </InternalLink>
        </li>
      </ul>
    </div>
  )
}
