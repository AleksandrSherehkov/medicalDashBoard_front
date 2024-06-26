import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from '@/shared/icon/loginLogo.svg';

export const LoginLogo = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { scale: 0, rotation: 720, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.75)',
      }
    )
      .fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .to(
        logoRef.current,
        {
          scale: 1.2,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: 'power1.inOut',
        },
        '-=1'
      );
  }, []);

  return (
    <div className="mb-[148px] flex items-center gap-[14px] md:mb-[204px] desk:mb-[226px]">
      <img ref={logoRef} src={Logo} alt="logo" width={44} height={44} />
      <h2 ref={textRef} className="title text-xl">
        E-Pharmacy
      </h2>
    </div>
  );
};
