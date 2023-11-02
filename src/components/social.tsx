"use client"

import { usePathname } from "next/navigation"

import {
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon
} from "next-share"

type SocialProps = {
  url: string
  title: string
}

export function TwitterButton(props: SocialProps) {
  return (
    <TwitterShareButton {...props}>
      <TwitterIcon size={32} round className="mr-2" />
    </TwitterShareButton>
  )
}

export function RedditButton(props: SocialProps) {
  return (
    <RedditShareButton {...props}>
      <RedditIcon size={32} round className="mr-2" />
    </RedditShareButton>
  )
}

export function LinkedinButton(props: SocialProps) {
  return (
    <LinkedinShareButton {...props}>
      <LinkedinIcon size={32} round className="mr-2" />
    </LinkedinShareButton>
  )
}

export function FacebookButton(props: SocialProps) {
  return (
    <FacebookShareButton {...props}>
      <FacebookIcon size={32} round className="mr-2" />
    </FacebookShareButton>
  )
}

export function Social({ title }: { title: string }) {
  const pathname = usePathname()

  const url = `https://bengubler.com${pathname}`

  return (
    <div className="social py-2">
      <TwitterButton url={url} title={title} />
      <RedditButton url={url} title={title} />
      <LinkedinButton url={url} title={title} />
      <FacebookButton url={url} title={title} />
    </div>
  )
}
