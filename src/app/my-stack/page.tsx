import { ExternalLink } from "@/components/links"

type linkList = {
  name: string
  link: string
  description: string
}

function LinkList({ tools }: { tools: Array<linkList> }) {
  return (
    <div>
      <ul className="list-disc list-outside mt-6 ml-7">
        {tools.map((tool) => (
          <li className="text-xl mt-2" key={tool.name}>
            <ExternalLink href={tool.link}>{tool.name}</ExternalLink> —{" "}
            {tool.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const metadata = {
  title: "My Stack"
}

export default function Stack() {
  return (
    <div className="max-w-screen-lg m-auto">
      <h2 className="text-4xl font-bold mt-10">My Stack</h2>

      <h3 className="text-2xl font-bold mt-10">Productivity</h3>

      <LinkList
        tools={[
          {
            name: "Todoist",
            link: "https://todoist.com/",
            description:
              "I couldn't function effectively without my trusty todo list!"
          },
          {
            name: "Obsidian",
            link: "https://obsidian.md/",
            description: "Second brain & knowledge base."
          },
          {
            name: "Google Calendar",
            link: "https://calendar.google.com/",
            description: "Boring, but effective."
          }
        ]}
      />

      <h3 className="text-2xl font-bold mt-10">Language Learning</h3>

      <LinkList
        tools={[
          {
            name: "Anki",
            link: "https://apps.ankiweb.net/",
            description:
              "A flashcard app that uses spaced repetition. I use it to practice vocab."
          },
          {
            name: "Pimsleur",
            link: "https://www.pimsleur.com/",
            description:
              "My favorite way to start learning a language. It's based on listening and repetition, so it's great for improving your accent."
          },
          {
            name: "Glossika",
            link: "https://ai.glossika.com/",
            description:
              "A great way to practice speaking. It's based on listening and repeating sentences and has lots of language pairings (e.g. Czech to Russian)."
          },
          {
            name: "Mango",
            link: "https://mangolanguages.com/",
            description:
              "Solid alternative to Duolingo. If you have a public library membership, it may be free for you."
          },
          {
            name: "DeepL Translator",
            link: "https://www.deepl.com/translator",
            description: "Like Google Translate, but more natural translations."
          },
          {
            name: "Glosbe Dictionary",
            link: "https://glosbe.com/",
            description:
              "Dictionary with tons of languages and example sentences sourced from the web."
          }
        ]}
      />

      <h3 className="text-2xl font-bold mt-10">Tech — Languages</h3>

      <LinkList
        tools={[
          {
            name: "JavaScript / Node.js",
            link: "https://nodejs.org/en",
            description: "Fun to program in, but I prefer TypeScript"
          },
          {
            name: "Typescript",
            link: "https://www.typescriptlang.org/",
            description: "Makes writing JavaScript not scary"
          },
          {
            name: "Python",
            link: "https://www.python.org/",
            description: "Fantastic for AI/ML work"
          },
          {
            name: "Rust",
            link: "https://www.rust-lang.org/",
            description:
              "For writing low-level code with a modern build system, great syntax, and no segfaults :)"
          }
        ]}
      />

      <h3 className="text-2xl font-bold mt-10">Tech — Libraries</h3>

      <LinkList
        tools={[
          {
            name: "React",
            link: "https://react.dev",
            description: "By far my favorite framework for building websites"
          },
          {
            name: "Next.js",
            link: "https://nextjs.org/",
            description: "Solid ecosystem, great performance"
          },
          {
            name: "Tailwind",
            link: "https://tailwindcss.com/",
            description:
              "Literally so much better than writing CSS by hand in separate files"
          }
        ]}
      />

      <h3 className="text-2xl font-bold mt-10">Tech — Platforms</h3>

      <LinkList
        tools={[
          {
            name: "Vercel",
            link: "https://vercel.com/",
            description: "Fantastic solution for hosting web apps"
          },
          {
            name: "GitHub Actions",
            link: "https://github.com/features/actions",
            description: "CI/CD built in to GitHub"
          }
        ]}
      />
    </div>
  )
}
