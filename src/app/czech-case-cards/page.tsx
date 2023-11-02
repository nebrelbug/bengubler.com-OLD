import { Comments } from "@/components/comments"
import { Social } from "@/components/social"
import { ExternalLink, InternalLink } from "@/components/links"

export const metadata = {
  title: "Czech Case Cards",
  description: "I built case cards for Czech so you don't have to."
}

export default function Home() {
  return (
    <div className="max-w-screen-lg m-auto prose">
      <h1 className="mb-1 mt-5 pt-4">{metadata.title}</h1>

      <p className="text-xl italic mt-4 mb-1">{metadata.description}</p>

      <Social title={metadata.title} />

      <hr className="mt-1" />

      <p>
        I spent many hours creating these! Print these out and you&apos;ll
        memorize the Czech declension patterns in no time.
      </p>

      <p>
        You may also be interested in my{" "}
        <ExternalLink href="https://decline.vercel.app/">
          website for practicing Czech/Russian declensions
        </ExternalLink>{" "}
        or my{" "}
        <InternalLink href="/russian-case-cards">
          Russian case cards
        </InternalLink>
        .
      </p>

      <h2>Basic Case Card</h2>

      <p>
        Note: this won&apos;t display properly on mobile: go{" "}
        <InternalLink href="/declensions/czech-cases-card-basic.pdf">
          here
        </InternalLink>{" "}
        to view and download the PDF in a new window.
      </p>

      <embed
        src="/declensions/czech-cases-card-basic.pdf"
        width="100%"
        height="800px"
        type="application/pdf"
      ></embed>

      <h2>Advanced Case Card</h2>

      <p>
        Note: this won&apos;t display properly on mobile: go{" "}
        <InternalLink href="/declensions/czech-cases-card-advanced.pdf">
          here
        </InternalLink>{" "}
        to view and download the PDF in a new window.
      </p>

      <embed
        src="/declensions/czech-cases-card-advanced.pdf"
        width="100%"
        height="800px"
        type="application/pdf"
      ></embed>

      <div className="w-[80%] m-auto mt-10">
        <Comments />
      </div>
    </div>
  )
}
