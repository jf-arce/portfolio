import Dock from './Dock.tsx';
import { HomeIcon, AboutIcon, ProjectIcon, ContactIcon } from './icons/Icons.tsx';

export const Navbar = () => {
  const items = [
    { icon: <HomeIcon />, label: 'Home', onClick: () => (window.location.href = '/') },
    { icon: <AboutIcon />, label: 'About me', onClick: () => (window.location.href = '/about') },
    {
      icon: <ProjectIcon />,
      label: 'Projects',
      onClick: () => (window.location.href = '/projects'),
    },
    { icon: <ContactIcon />, label: 'Contact', onClick: () => (window.location.href = '/contact') },
  ];

  return (
    <div className='pointer-events-none fixed right-0 bottom-2 left-0 z-50 sm:bottom-4'>
      <div className='pointer-events-auto'>
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </div>
  );
};
