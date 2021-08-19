import React from 'react'

const hostName = (str) => {
  const url = new URL(str)
  return (url && url.hostname) || "blog"
}
export default hostName

