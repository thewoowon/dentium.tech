import { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { PostType } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';

type RollingProps = {
  title: string;
  posts: PostType[];
};

const Rolling = ({ title, posts }: RollingProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <SliderOutsideAlign>
      <TitleTypography ref={divRef}>
        {title.toUpperCase()} <SpanTypography>Article</SpanTypography>
      </TitleTypography>
      <Swiper
        cssMode={true}
        spaceBetween={30}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel]}
        className="rollingSwiper"
      >
        {posts.map((post, index) => {
          return (
            <SwiperSlide key={index} className="rollingSwiperSlide">
              <Link
                className="text-gray-900 hover:text-gray-900 transition ease-in-out duration-200 dark:text-white"
                as={`/posts/${post.slug}`}
                href={`/posts/[slug]`}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '300px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={post.image ?? ''}
                    fill
                    alt="post_image"
                    priority
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '20px',
                  }}
                >
                  <H1Typography>{post.title}</H1Typography>
                  <BottomTypography>{post.description}</BottomTypography>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                      paddingTop: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        marginRight: '10px',
                      }}
                    >
                      <Image
                        src={post.profile ?? ''}
                        alt={post.writer ?? ''}
                        fill
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '14px',
                        }}
                      >{`${post.position} ${post.writer}`}</div>
                      <div
                        style={{
                          fontSize: '14px',
                        }}
                      >
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderOutsideAlign>
  );
};

export default Rolling;

const SliderOutsideAlign = styled.div`
  width: 100vw;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  padding: 20px 50px;
`;

const TitleTypography = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 20px 0;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: -0.05em;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;
`;

const SpanTypography = styled.span`
  font-size: 42px;
  font-weight: 600;
  color: #6e6e73;
`;

const H1Typography = styled.div`
  width: 100%;
  height: 70px;
  font-size: 28px;
  letter-spacing: -0.05em;
  line-height: 1.2;
  font-weight: 600;
  color: black;
  text-align: left;
`;
// 말줄임 표시
const BottomTypography = styled.div`
  font-size: 16px;
  height: 40px;
  letter-spacing: -0.05em;
  line-height: 1.2;
  padding-top: 5px;
  color: #6e6e73;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
