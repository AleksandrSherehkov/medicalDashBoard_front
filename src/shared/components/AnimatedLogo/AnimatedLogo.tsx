import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from '@/shared/icon/logo.svg';

export const AnimatedLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { rotation: 0, opacity: 0.5 },
        {
          rotation: 360,
          opacity: 1,
          duration: 2,
          repeat: -1,
          ease: 'linear',
        }
      );
    }
  }, []);

  return (
    <img
      ref={logoRef}
      src={Logo}
      alt="logo"
      width={150}
      height={150}
      className="absolute inset-0 m-auto opacity-75"
    />
  );
};
