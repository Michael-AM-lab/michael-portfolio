import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Replace these placeholders with each project's URLs. For a design, change
// type to "design" and set its Figma URL.
const projectLinks = {
  nyamatusi: {
    type: "app",
    github: "https://github.com/Michael-AM-lab/nyamatusi.git",
    vercel: "https://nyamatusi-two.vercel.app",
    figma: "https://www.figma.com/design/YOUR_FILE_ID/YOUR_DESIGN",
  },
  gwayiPrimary: {
    type: "app",
    github: "https://github.com/Michael-AM-lab/gwayi-primary-school.git",
    vercel: "https://gwayi-primary-school-pl5z.vercel.app",
    figma: "https://www.figma.com/design/YOUR_FILE_ID/YOUR_DESIGN",
  },
  ycDirectory: {
    type: "design",
    figma: "https://www.figma.com/proto/6r4UtfSRxe3FUlsHTnaLGW/Untitled?node-id=1-2&t=3hImopJpw7nfIQTp-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
};

const ProjectLinks = ({ links, projectName }) => {
  const actions =
    links.type === "design"
      ? [{ label: "View in Figma", href: links.figma }]
      : [
          { label: "GitHub", href: links.github },
        { label: "Open ", href: links.vercel },
        ];

  return (
    <div className="project-links" aria-label={`${projectName} links`}>
      {actions.map(
        ({ label, href }) =>
          href && (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} - ${projectName}`}
            >
              {label}
            </a>
          )
      )}
    </div>
  );
};

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/images/nyamatusi.jpeg"
                alt="Nyamatusi App"
                loading="lazy"
                decoding="async"
              />
              <ProjectLinks
                links={projectLinks.nyamatusi}
                projectName="Nyamatusi"
              />
            </div>
            <div className="text-content">
              <h2>
                Nyamatusi: A safari experience website .
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built using JavaScript, React, Tailwindcss.
              </p>
              <a
                href="https://github.com/Michael-AM-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 underline underline-offset-4 transition-colors hover:text-white"
              >
                Check out my projects
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper project-image-fill">
                <img
                  src="/images/primary.jpeg"
                  alt="School App"
                  loading="lazy"
                  decoding="async"
                />
                <ProjectLinks
                  links={projectLinks.gwayiPrimary}
                  projectName="Gwayi Primary School"
                />
              </div>
              <h2>Gwayi Primary School: A school website</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper project-image-fill">
                <img
                  src="/images/wildwatch.jpeg"
                  alt="YC Directory App"
                  loading="lazy"
                  decoding="async"
                />
                <ProjectLinks
                  links={projectLinks.ycDirectory}
                  projectName="Wildwatch"
                />
              </div>
              <h2>Wildwatch: A wildlife conservation app</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
