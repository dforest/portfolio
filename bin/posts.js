const fs = require('fs-extra')
const Parser = require('rss-parser')

const rss = [
  `https://zenn.dev/d_forest/feed`,
  `https://note.com/d_forest/rss`,
  `https://qiita.com/d_forest/feed`,
]
const parser = new Parser()
const count = 40

async function fetchPosts(url) {
  const feed = await parser.parseURL(url)
  if (!feed || !feed.items || !feed.items.length) return []

  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet && contentSnippet.replace(/\n/g, ""),
        link,
        isoDate,
        dateMillSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      }
    })
    .filter(({ title, link }) => title && link)
}

async function getPostsFromRss(rss) {
  let feedItems = []
  for (const url of rss) {
    const items = await fetchPosts(url)
    if (items) feedItems = [...feedItems, ...items]
  }
  return feedItems
}

(async function () {
  const posts = await getPostsFromRss(rss)
  posts.sort((a, b) => b.dateMillSeconds - a.dateMillSeconds)
  fs.ensureDirSync(`src/data`)
  fs.writeJSONSync(`src/data/posts.json`, posts.slice(0, count))
}
)()
