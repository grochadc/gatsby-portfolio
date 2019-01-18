import React from 'react'

const Video = props => (
  <iframe
    title={`vimeo-${props.vimeoID}`}
    src={`https://player.vimeo.com/video/${props.vimeoID}?color=${
      props.color ? props.color : 'ffffff'
    }&byline=${props.byline ? 1 : 0}`}
    width="640"
    height="360"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  />
)

export default Video
