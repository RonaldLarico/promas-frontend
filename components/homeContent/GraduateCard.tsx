import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeIn } from '../utils/motion';
import Image from 'next/image';
import Link from 'next/link';

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const GraduateCard: FC<InsightCardProps> = ({ imgUrl, title, subtitle, index }) => (
  <Link href="/graduate">
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    initial="animate"
    className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-20 mx-auto rounded-3xl shadow-xl shadow-violet-600 bg-violet-500/50 hover:cursor-pointer"
    whileHover={{ scale: 1.1, backgroundColor: 'purple' }}
    whileTap={{ scale: 1 }}
  >
    <div className="flex justify-center">
    <Image
      src={imgUrl}
      alt="planet-01"
      width={150}
      height={200}
      className="md:w-[270px] w-auto h-[250px] object-cover"
    />
    </div>
    <div className="w-full flex items-center justify-center text-center ">
      <div className="flex-1 flex flex-col max-w-[650px]">
        <h4 className="font-semibold lg:text-[28px] text-[26px] text-white">
          {title}
        </h4>
        <h5 className="mt-[16px] lg:mb-6 font-semibold lg:text-[17px] text-[14px] text-white">
          {subtitle}
        </h5>
      </div>

      {/* <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={200}
          height={200}
          className="w-[40%] h-[40%] object-contain"
        />
      </div> */}
    </div>
  </motion.div>
  </Link>
);

export default GraduateCard;
