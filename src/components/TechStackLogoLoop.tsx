import {
  CIcon,
  NestJSIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TypeScriptIcon,
} from './icons/Icons';
import LogoLoop from './LogoLoop';

export const TechStackLogoLoop = () => {
  const techLogos = [
    { node: <ReactIcon />, title: 'React', href: 'https://react.dev' },
    { node: <NextjsIcon />, title: 'NextJS', href: 'https://nextjs.org' },
    { node: <TypeScriptIcon />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <NodejsIcon />, title: 'NodeJS', href: 'https://nodejs.org' },
    { node: <NestJSIcon />, title: 'NestJS', href: 'https://nestjs.com' },
    { node: <CIcon />, title: 'C#', href: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  ];

  // Alternative with image sources
  const imageLogos = [
    { src: '/logos/company1.png', alt: 'Company 1', href: 'https://company1.com' },
    { src: '/logos/company2.png', alt: 'Company 2', href: 'https://company2.com' },
    { src: '/logos/company3.png', alt: 'Company 3', href: 'https://company3.com' },
  ];

  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction='left'
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor='#ffffff'
        ariaLabel='Technology partners'
      />
    </div>
  );
};
