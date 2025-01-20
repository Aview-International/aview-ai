import { AI_Tools_Page } from '../../../constants/constants';
import Image from 'next/image';
import Link from 'next/link';

const AiToolsPage = () => {
  const baseUrl = 'http://localhost:3000';
  return (
    <section className="m-horizontal  text-white">
      <div className="my-s10 w-4/5 md:mx-auto md:w-2/4">
        <p className="text-start text-7xl font-semibold md:text-center">
          Advanced AI Creator Suite
        </p>
        <p className="text-start text-base md:text-center">
          Effortlessly capture, edit, and share audio & video content with
          Aview&rsquo;s comprehensive AI tools
        </p>
      </div>
      <div className="mb-s18 flex grid-cols-3 flex-col gap-5 md:grid md:gap-8">
        {AI_Tools_Page.map((item, index) => {
          return (
            <Link href={`${baseUrl}/${item.link}`} key={index} passHref>
              <a className="flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-white-transparent py-2">
                <Image src={item.img} alt="img" width={240} height={240} />
                <p className="text-center text-5xl font-semibold">
                  {item.title}
                </p>
                <p className="text-center">{item.description}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AiToolsPage;
