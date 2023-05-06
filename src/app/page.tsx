import Image from "next/image"

import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin
} from "react-icons/ai"

import { QuickLinks } from "@/components/quick-links"
import { ExternalLink, InternalLink } from "@/components/links"
import { PostsList } from "@/components/posts-list"

import profilePic from "@/assets/profile.jpg"

import type { IconType } from "react-icons"

function SocialLink({
  href,
  label,
  Icon,
  internal
}: {
  href: string
  label: string
  Icon: IconType
  internal?: boolean
}) {
  let Comp = internal ? InternalLink : ExternalLink

  return (
    <Comp href={href} label={label}>
      <div className="w-8 h-8">
        <div className="w-7 m-auto py-0.5 hover:w-8 hover:py-0">
          <Icon size={"100%"} title={label}></Icon>
        </div>
      </div>
    </Comp>
  )
}

function HeaderSection() {
  return (
    <div className="flex flex-col items-center my-48">
      <h1 className="text-6xl font-bold ">Ben Gubler</h1>
      <Image
        src={profilePic}
        alt="Profile picture"
        className="border-4 border-gray-600 rounded-full my-16"
        width={200}
        height={200}
      />
      <h2 className="text-3xl text-center italic max-w-lg">
        Open-source developer, student in ML, and aspiring polyglot. Creator of{" "}
        <ExternalLink href="https://eta.js.org">Eta</ExternalLink> and{" "}
        <ExternalLink href="https://squirrelly.js.org">Squirrelly</ExternalLink>
      </h2>
      <div className="flex flex-row items-center gap-4 mt-8">
        <SocialLink
          href="https://github.com/nebrelbug"
          label="GitHub"
          Icon={AiOutlineGithub}
        />
        <SocialLink
          href="https://www.linkedin.com/in/ben-gubler/"
          label="LinkedIn"
          Icon={AiOutlineLinkedin}
        />
        <SocialLink
          href="https://twitter.com/nebrelbug"
          label="Twitter"
          Icon={AiOutlineTwitter}
        />
        <SocialLink
          href="/contact"
          label="Mail"
          Icon={AiOutlineMail}
          internal
        />
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div>
      <h2 className="text-4xl font-bold">About Me</h2>

      <p className="text-xl mt-6">
        I&apos;m currently studying at Brigham Young University in Provo, where
        I&apos;m pursuing a double major in Computer Science and Arabic.
        <br />
        <br />I work as a research assistant in the PCCL (Perception, Control,
        and Cognition Lab), where I study novel applications of artificial
        intelligence and Natural Language Processing. I also design simulations
        for the Footron, a big interactive display in the BYU CS building.
      </p>

      <p className="text-2xl italic mt-6">Fun Facts</p>

      <ul className="list-disc list-outside text-xl ml-7">
        <li className="mt-2">
          I&apos;m passionate about language learning — I speak English, Czech,
          and Slovak, and am currently learning Russian and Arabic.
        </li>
        <li className="mt-2">
          I love spending time in the outdoors! Backpacking, fishing, and
          mountain biking are some of my favorite hobbies.
        </li>
        <li className="mt-2">
          I enjoy great literature, both contemporary and classic!
        </li>
      </ul>
    </div>
  )
}

function PostsSection() {
  return (
    <div className="mt-20">
      {/* because of the gap-20 */}
      <h2 className="text-4xl font-bold">Recent Posts</h2>
      {/* Known error, being worked on upstream. TODO: remove after fix */}
      {/* @ts-expect-error Async Server Component */}
      <PostsList limit={3} />
      <p className="ml-7 mt-4">
        <InternalLink href="/posts">See all posts →</InternalLink>
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="max-w-screen-lg m-auto">
      <HeaderSection />
      <hr />
      <div className="grid md:grid-cols-2 gap-20 md:gap-40 md:gap-y-0 my-8">
        <div>
          <AboutSection />
        </div>
        <div>
          <QuickLinks />
          <PostsSection />
        </div>
      </div>
    </div>
  )
}
