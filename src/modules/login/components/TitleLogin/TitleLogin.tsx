import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Pill from '@/shared/icon/white round pill.svg';

export const TitleLogin = () => {
  const textRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.5, rotationY: 360 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: 'power2.out',
      }
    ).fromTo(
      pillRef.current,
      { opacity: 0, rotation: -360, scale: 0 },
      {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.75)',
      },
      '-=0.5'
    );
  }, []);

  return (
    <div className="relative mb-10 md:mb-[50px] md:w-[614px]">
      <h1
        ref={textRef}
        className="title text-[28px] leading-[34px] md:text-[54px] md:leading-[60px]"
      >
        Your medication, delivered Say goodbye to all{' '}
        <span className="text-light-green">your healthcare</span> worries with
        us
      </h1>
      <img
        ref={pillRef}
        src={Pill}
        alt="white round pill"
        width={95}
        height={93}
        className="absolute -top-[56px] right-[20px] md:-top-[104px] md:right-[19px] md:h-[175px] md:w-[179px]"
      />
    </div>
  );
};
