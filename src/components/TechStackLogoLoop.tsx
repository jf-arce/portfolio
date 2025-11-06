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
    { node: <ReactIcon className='h-12 w-12' />, title: 'React', href: 'https://react.dev' },
    { node: <NextjsIcon className='h-12 w-12' />, title: 'NextJS', href: 'https://nextjs.org' },
    {
      node: <TypeScriptIcon className='h-12 w-12' />,
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org',
    },
    { node: <NodejsIcon className='h-12 w-12' />, title: 'NodeJS', href: 'https://nodejs.org' },
    { node: <NestJSIcon className='h-12 w-12' />, title: 'NestJS', href: 'https://nestjs.com' },
    {
      node: <CIcon className='h-12 w-12' />,
      title: 'C#',
      href: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
  ];

  return (
    <div className='w-full'>
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction='left'
        width='100%'
        logoHeight={48}
        gap={32}
        pauseOnHover={true}
        scaleOnHover={true}
        fadeOut={false}
        ariaLabel='Technology stack'
      />
    </div>
  );
};
