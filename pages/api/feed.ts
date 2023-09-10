import { getSortedPostsData } from '@/utils/mdxUtils';
import { Feed } from 'feed';

export default async (req: any, res: any) => {
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

  // Generate RSS feed
  const rssFeed = feed.rss2();

  // Set the response headers
  res.setHeader('Content-Type', 'application/rss+xml; charset=UTF-8');

  // Send the RSS feed as the response
  res.status(200).send(rssFeed);
};
