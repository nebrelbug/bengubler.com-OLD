"use client"

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

export function TwitterButton(props) {
  return (
    <TwitterShareButton {...props}>
      <TwitterIcon size={32} round className="mr-2" />
    </TwitterShareButton>
  )
}

export function RedditButton(props) {
  return (
    <RedditShareButton {...props}>
      <RedditIcon size={32} round className="mr-2" />
    </RedditShareButton>
  )
}

export function LinkedinButton(props) {
  return (
    <LinkedinShareButton {...props}>
      <LinkedinIcon size={32} round className="mr-2" />
    </LinkedinShareButton>
  )
}

export function FacebookButton(props) {
  return (
    <FacebookShareButton {...props}>
      <FacebookIcon size={32} round className="mr-2" />
    </FacebookShareButton>
  )
}

export function Social(props) {
  return (
    <div className="social">
      <TwitterButton url={props.url} title={props.title} />
      <RedditButton url={props.url} title={props.title} />
      <LinkedinButton url={props.url} title={props.title} />
      <FacebookButton url={props.url} title={props.title} />
    </div>
  )
}
