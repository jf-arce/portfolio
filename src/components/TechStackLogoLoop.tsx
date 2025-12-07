import LogoLoop from "./LogoLoop";
import {
    ReactIcon,
    NextjsIcon,
    TypeScriptIcon,
    NodejsIcon,
    NestJSIcon,
    CIcon,
} from "./icons/Icons";

const techLogos = [
    {
        node: <ReactIcon className="h-12 w-12" />,
        title: "React",
        href: "https://react.dev",
    },
    {
        node: <NextjsIcon className="h-12 w-12" />,
        title: "NextJS",
        href: "https://nextjs.org",
    },
    {
        node: <TypeScriptIcon className="h-12 w-12" />,
        title: "TypeScript",
        href: "https://www.typescriptlang.org",
    },
    {
        node: <NodejsIcon className="h-12 w-12" />,
        title: "NodeJS",
        href: "https://nodejs.org",
    },
    {
        node: <NestJSIcon className="h-12 w-12" />,
        title: "NestJS",
        href: "https://nestjs.com",
    },
    {
        node: <CIcon className="h-12 w-12" />,
        title: "C#",
        href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
];

// Alternative with image sources
const imageLogos = [
    {
        src: "/logos/company1.png",
        alt: "Company 1",
        href: "https://company1.com",
    },
    {
        src: "/logos/company2.png",
        alt: "Company 2",
        href: "https://company2.com",
    },
    {
        src: "/logos/company3.png",
        alt: "Company 3",
        href: "https://company3.com",
    },
];

export function TechStackLogoLoop() {
    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Basic horizontal loop */}
            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
            />

            {/* Vertical loop with deceleration on hover */}
            {/* <LogoLoop
                logos={techLogos}
                speed={80}
                direction="up"
                logoHeight={48}
                gap={40}
                hoverSpeed={20}
                fadeOut
            /> */}
        </div>
    );
}
