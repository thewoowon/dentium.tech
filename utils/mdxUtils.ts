import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type MetaType = {
  title: string;
  description: string;
  date: string;
  image: string;
  writer: string;
  position: string;
  profile: string;
  category: string;
  tag: string;
};

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

// posts 디렉토리 내부의 모든 파일을 읽어서
// 파일 이름을 기준으로 정렬하는 함수
export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(POSTS_PATH);
  const allPostsData = fileNames.map((fileName) => {
    // id를 가져오기 위해 파일 이름에서 ".mdx"를 제거합니다.
    const id = fileName.replace(/\.mdx$/, '');

    // mdx 파일을 문자열로 읽습니다.
    const fullPath = path.join(POSTS_PATH, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter를 사용하여 포스트의 메타데이터 섹션을 분석합니다.
    const matterResult = matter(fileContents);

    // 데이터를 id와 합칩니다.
    return {
      id,
      ...(matterResult.data as MetaType),
    };
  });
  // 날짜별로 정렬합니다.
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
