import fs from 'fs';
import { Feed } from 'feed';
import { getSortedPostsData } from './mdxUtils';

export default async function generateRSSFeed() {
  const feed = new Feed({
    title: 'DenTium Tech Blog',
    description: 'DenTium Tech Blog RSS feed',
    id: 'https://dentium.tech',
    link: 'https://dentium.tech',
    language: 'ko-KR',
    copyright: 'ENIGMA',
  });

  const allPosts = getSortedPostsData();

  allPosts.forEach((post) => {
    if (!post.id) return;
    if (post.category === 'tech') {
      feed.addItem({
        id: `https://dentium.tech/posts/${post.id}`,
        link: `https://dentium.tech/posts/${post.id}`,
        title: post.title,
        description: post.description,
        date: new Date(post.date),
      });
    }
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());
}
