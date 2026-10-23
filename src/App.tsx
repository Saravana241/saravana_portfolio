import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiDownload,
  FiExternalLink,
  FiMaximize2,
  FiMail,
  FiMapPin,
  FiMenu,
  FiServer,
  FiX,
} from "react-icons/fi";
import {
  achievements,
  education,
  experience,
  navigation,
  projects,
  responsibilities,
  skills,
  type Project,
} from "./data/portfolio";

const resumeLocation = "/resume/Saravana_Kumar_Resume.pdf";
const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

type ProjectImagePreview = {
  projectName: string;
  src: string;
  alt: string;
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [resumeMessage, setResumeMessage] = useState("");
  const [projectImagePreview, setProjectImagePreview] = useState<ProjectImagePreview | null>(null);
  const imageDialogRef = useRef<HTMLDialogElement>(null);
  const resumeTimer = useRef<number | null>(null);

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    const dialog = imageDialogRef.current;
    if (!dialog) return;

    if (projectImagePreview && !dialog.open) {
      dialog.showModal();
    } else if (!projectImagePreview && dialog.open) {
      dialog.close();
    }
  }, [projectImagePreview]);

  const closeMenu = () => setMenuOpen(false);
  const showResumeStatus = async () => {
    if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    try {
      const response = await fetch(resumeLocation, { method: "HEAD" });
      if (response.ok && response.headers.get("content-type")?.includes("application/pdf")) {
        const link = document.createElement("a");
        link.href = resumeLocation;
        link.download = "Saravana_Kumar_Resume.pdf";
        document.body.append(link);
        link.click();
        link.remove();
        return;
      }
      setResumeMessage(`Resume PDF is not available yet. Add it at ${resumeLocation} to enable downloads.`);
    } catch {
      setResumeMessage("The resume could not be checked. Please try again.");
    }
    resumeTimer.current = window.setTimeout(() => setResumeMessage(""), 6000);
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner container">
          <a className="brand" href="#home" aria-label="Saravana Kumar M, home" onClick={closeMenu}>
            <span className="brand-mark">SK<span>.</span></span>
            <span className="brand-label">Saravana Kumar M</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
          <nav
            className={`navigation${menuOpen ? " navigation--open" : ""}`}
            id="primary-navigation"
            aria-label="Primary navigation"
          >
            {navigation.map(({ label, href }) => (
              <a
                className={activeSection === href.slice(1) ? "nav-link nav-link--active" : "nav-link"}
                href={href}
                key={href}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <button className="button button--small button--outline nav-resume" onClick={showResumeStatus}>
              <FiDownload aria-hidden="true" />
              Resume
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> React.js Developer <span className="eyebrow-divider">/</span> Full Stack Developer</p>
              <h1 id="hero-title">Building modern web experiences with <span>clean code</span> and thoughtful engineering.</h1>
              <p className="hero-description">
                I build responsive, scalable web applications using React.js, TypeScript, Node.js, and modern web technologies. I enjoy turning complex requirements into clean user interfaces, reliable APIs, and practical software solutions.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  Explore my projects <FiArrowDownRight aria-hidden="true" />
                </a>
                <button className="button button--text" onClick={showResumeStatus}>
                  <FiDownload aria-hidden="true" /> Download resume
                </button>
              </div>
              <a className="hero-contact-link" href="#contact">Or get in touch <FiArrowRight aria-hidden="true" /></a>
              <div className="hero-meta">
                <span><span className="status-dot" /> Tiruchirappalli, India</span>
                <span className="meta-separator" />
                <span>Product-minded engineering</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Illustrative code panel showing a React component and technology stack" role="img">
              <div className="art-orbit art-orbit--one" />
              <div className="art-orbit art-orbit--two" />
              <div className="code-window">
                <div className="window-top">
                  <span className="window-dots"><i /><i /><i /></span>
                  <span className="window-file">profile.tsx</span>
                  <span className="window-kebab">•••</span>
                </div>
                <div className="code-content" aria-hidden="true">
                  <div><span className="code-number">01</span><span className="code-purple">const</span> <span className="code-cyan">developer</span> = {"{"}</div>
                  <div><span className="code-number">02</span>  name: <span className="code-green">"Saravana Kumar M"</span>,</div>
                  <div><span className="code-number">03</span>  focus: [</div>
                  <div><span className="code-number">04</span>    <span className="code-green">"JavaScript"</span>, <span className="code-green">"React"</span>, <span className="code-green">"TypeScript"</span>,</div>
                  <div><span className="code-number">05</span>    <span className="code-green">"Node.js"</span>, <span className="code-green">"SQL"</span></div>
                  <div><span className="code-number">06</span>  ],</div>
                  <div><span className="code-number">07</span>  mindset: <span className="code-green">"build with care"</span></div>
                  <div><span className="code-number">08</span>{"};"}</div>
                </div>
                <div className="window-footer"><span><FiCheck aria-hidden="true" /> Thoughtful by design</span><span>UTF-8</span></div>
              </div>
              <div className="art-label art-label--top"><FiCode aria-hidden="true" /><span>Frontend</span></div>
              <div className="art-label art-label--bottom"><FiServer aria-hidden="true" /><span>Full stack</span></div>
              <span className="art-cross art-cross--one">+</span>
              <span className="art-cross art-cross--two">+</span>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Scroll to explore</span><span className="hero-bottom-line" /><span>01 — 09</span>
          </div>
        </section>

        <section className="section-shell about-section" id="about" aria-labelledby="about-title">
          <div className="container">
            <SectionHeading number="01" title="About me" id="about-title" kicker="A little introduction" />
            <div className="about-grid">
              <div className="about-lead">
                <p className="large-copy">Good software lives at the intersection of <span>clear thinking</span> and useful experiences.</p>
                <div className="about-mark" aria-hidden="true">SK<span>.</span></div>
              </div>
              <div className="about-body">
                <p>I am a React.js and Full Stack Developer at Axcen Innovation Lab Pvt. Ltd. I work on building responsive web applications, developing reusable frontend components, integrating REST APIs, and implementing backend functionality with Node.js and Express.js.</p>
                <p>My project experience includes healthcare recruitment, job matching, and healthcare management systems. I focus on maintainable code, intuitive user experiences, reliable API integration, and practical solutions to real-world requirements.</p>
                <div className="about-highlights">
                  {["Frontend development", "Full-stack applications", "API integration & workflows"].map((item, index) => (
                    <div className="highlight-item" key={item}><span>0{index + 1}</span>{item}<FiArrowUpRight aria-hidden="true" /></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <SectionHeading number="02" title="Tools of the trade" id="skills-title" kicker="Technical skills" />
            <p className="section-intro">A practical toolkit for building interfaces, connecting services, and delivering useful applications.</p>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-group" key={group.category}>
                  <div className="skill-group-heading">
                    <div className="skill-group-title">
                      <span className="skill-index">0{index + 1}</span>
                      <h3>{group.category}</h3>
                    </div>
                    <span className="skill-count">{String(group.items.length).padStart(2, "0")} tools</span>
                  </div>
                  <div className="technology-grid">
                    {group.items.map(({ name, icon: TechnologyIcon, color, mark }) => (
                      <div className="technology-item" key={name} title={name}>
                        <span className="technology-icon" style={{ "--tech-color": color } as CSSProperties}>
                          {TechnologyIcon ? (
                            <TechnologyIcon aria-hidden="true" focusable="false" />
                          ) : (
                            <span className="technology-mark" aria-hidden="true">{mark}</span>
                          )}
                        </span>
                        <span className="technology-name">{name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell projects-section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <SectionHeading number="03" title="Selected work" id="projects-title" kicker="Projects & case studies" />
            <p className="section-intro">A closer look at products and workflows built across healthcare and recruitment.</p>
            {featuredProjects.map((project, index) => (
              <FeaturedProject
                project={project}
                index={index + 1}
                total={featuredProjects.length}
                onPreviewImage={setProjectImagePreview}
                key={project.id}
              />
            ))}
            {otherProjects.length > 0 && (
              <div className="project-grid">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    project={project}
                    index={index + featuredProjects.length + 1}
                    onPreviewImage={setProjectImagePreview}
                    key={project.id}
                  />
                ))}
              </div>
            )}
            {projects.some((project) => project.visual && !project.screenshots?.length) && (
              <p className="project-note">Illustrative CSS previews are interface concepts, not screenshots of deployed products.</p>
            )}
          </div>
        </section>

        <section className="section-shell experience-section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <SectionHeading number="04" title="Experience & education" id="experience-title" kicker="The path so far" />
            <div className="experience-grid">
              <div className="experience-column">
                <h3 className="column-title"><FiBriefcase aria-hidden="true" /> Professional experience</h3>
                <article className="experience-card">
                  <div className="timeline-marker" />
                  <p className="experience-date">{experience.startDate}</p>
                  <h4>{experience.role}</h4>
                  <p className="experience-company">{experience.company}</p>
                  <ul className="responsibility-list">
                    {responsibilities.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </div>
              <div className="experience-column education-column">
                <h3 className="column-title"><FiAward aria-hidden="true" /> Education</h3>
                <div className="education-list">
                  {education.map((item) => (
                    <article className="education-card" key={item.abbreviation}>
                      <span className="education-year">{item.year}</span>
                      <h4>{item.degree} <span>({item.abbreviation})</span></h4>
                      <p>{item.institution}</p>
                      <span className="grade-label">{item.grade}</span>
                    </article>
                  ))}
                </div>
                <h3 className="column-title achievement-title"><FiAward aria-hidden="true" /> Achievements</h3>
                <div className="achievement-list">
                  {achievements.map((item) => (
                    <article className="achievement-item" key={item.event}>
                      <span className="achievement-badge"><FiAward aria-hidden="true" /></span>
                      <div><strong>{item.place}</strong><p>{item.event}</p><span>{item.institution}</span></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-container">
            <SectionHeading number="05" title="Let's build something great" id="contact-title" kicker="Say hello" />
            <div className="contact-grid">
              <div>
                <p className="contact-copy">I'm interested in building useful web applications and connecting with teams working on thoughtful software products. Feel free to reach out about relevant opportunities or development projects.</p>
                <a className="contact-email" href="mailto:saravanakumarmurugesan3@gmail.com">
                  saravanakumarmurugesan3@gmail.com <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="contact-details">
                <div className="contact-detail"><span className="contact-icon"><FiMapPin aria-hidden="true" /></span><div><span>Based in</span><strong>Tiruchirappalli, Tamil Nadu, India</strong></div></div>
                <div className="contact-detail"><span className="contact-icon"><FiMail aria-hidden="true" /></span><div><span>Email</span><a href="mailto:saravanakumarmurugesan3@gmail.com">Let's start a conversation</a></div></div>
                <a className="button button--primary contact-button" href="mailto:saravanakumarmurugesan3@gmail.com">
                  Get in touch <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">SK<span>.</span></span></a>
          <p>Thoughtful interfaces. Reliable applications.</p>
          <span>© {new Date().getFullYear()} Saravana Kumar M</span>
          <a className="back-to-top" href="#home">Back to top <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>

      <dialog
        className="project-image-dialog"
        ref={imageDialogRef}
        aria-label={projectImagePreview ? `${projectImagePreview.projectName} project image` : "Project image"}
        onClose={() => setProjectImagePreview(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) imageDialogRef.current?.close();
        }}
      >
        {projectImagePreview && (
          <div className="project-image-dialog-content">
            <div className="project-image-dialog-toolbar">
              <p>{projectImagePreview.projectName}</p>
              <button
                className="project-image-dialog-close"
                type="button"
                aria-label="Close full-screen project image"
                onClick={() => imageDialogRef.current?.close()}
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            <img src={projectImagePreview.src} alt={projectImagePreview.alt} />
          </div>
        )}
      </dialog>

      {resumeMessage && <div className="status-toast" role="status">{resumeMessage}</div>}
    </>
  );
}

function SectionHeading({ number, title, id, kicker }: { number: string; title: string; id: string; kicker: string }) {
  return (
    <div className="section-heading">
      <div className="heading-kicker"><span>{number}</span><span className="kicker-line" />{kicker}</div>
      <h2 id={id}>{title}<span className="heading-period">.</span></h2>
    </div>
  );
}

function ProjectVisual({
  project,
  onPreviewImage,
}: {
  project: Project;
  onPreviewImage: (preview: ProjectImagePreview) => void;
}) {
  if (project.screenshots?.length) {
    return (
      <div
        className={`project-screenshot-gallery${project.featured ? " project-screenshot-gallery--featured" : ""}${!project.featured && !project.visual ? " project-screenshot-gallery--card" : ""}`}
      >
        {project.screenshots.map((screenshot) => (
          <div className="project-screenshot-frame" key={screenshot.src}>
            <img src={screenshot.src} alt={screenshot.alt} loading="lazy" decoding="async" />
            <button
              className="project-image-expand"
              type="button"
              aria-label={`View ${project.name} image full screen`}
              onClick={() => onPreviewImage({ projectName: project.name, ...screenshot })}
            >
              <FiMaximize2 aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    );
  }
  if (!project.visual) return null;

  return <IllustrativeProjectVisual kind={project.visual} />;
}

function IllustrativeProjectVisual({ kind }: { kind: "medhire" | "cvclique" | "healthcare" }) {
  if (kind === "medhire") {
    return (
      <div className="visual visual--medhire" role="img" aria-label="Illustrative healthcare recruitment dashboard">
        <div className="mock-sidebar"><span className="mock-logo">m<span>.</span></span><i /><i /><i /><i /><i /></div>
        <div className="mock-main">
          <div className="mock-topbar"><span>Good morning, Saravana</span><span className="mock-avatar">SK</span></div>
          <div className="mock-heading">Recruitment overview <span>Illustrative</span></div>
          <div className="mock-stats"><div><span>Candidate profiles</span><b>Profiles</b><i>Onboarding</i></div><div><span>Job applications</span><b>Workflow</b><i>Application flow</i></div><div><span>Resume files</span><b>Private</b><i>Cloudflare R2</i></div></div>
          <div className="mock-lower">
            <div className="mock-panel"><span>Recruitment workflow</span><div><i className="mock-person mock-person--one" /><b>Candidate onboarding</b><em>Profile</em></div><div><i className="mock-person mock-person--two" /><b>Job application</b><em>Apply</em></div><div><i className="mock-person mock-person--three" /><b>Recruiter review</b><em>Review</em></div></div>
            <div className="mock-panel mock-panel--chart"><span>Application flow</span><div className="mock-workflow"><i>Profile</i><span>→</span><i>Apply</i><span>→</span><i>Review</i></div><small>Illustrative process</small></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`visual visual--small visual--${kind}`} role="img" aria-label={`Illustrative ${kind === "cvclique" ? "candidate search" : "healthcare management"} application interface`}>
      <div className="small-visual-top"><span>{kind === "cvclique" ? "CVhaven" : "care"}<i>.</i></span><span>Dashboard　 Jobs　 Profile</span><b>SK</b></div>
      <div className="small-visual-content">
        {kind === "cvclique" ? (
          <>
            <small>EMPLOYER WORKSPACE · ILLUSTRATIVE</small><h4>Find your next great hire.</h4><div className="fake-search">⌕　Role, skills, or keywords <b>Search</b></div><div className="fake-candidate"><i /><span><b>Candidate profile 01</b><small>Skills and experience summary</small></span><em>View profile ↗</em></div><div className="fake-candidate"><i /><span><b>Candidate profile 02</b><small>Contact details protected</small></span><em>View profile ↗</em></div>
          </>
        ) : (
          <>
            <small>CARE TEAM OVERVIEW · ILLUSTRATIVE</small><h4>Care, coordinated.</h4><div className="health-metric-row"><span><small>Appointments</small><b>Booking flow</b></span><span><small>Care team</small><b>Role-based</b></span><span><small>Reports</small><b>Overview</b></span></div><div className="health-lines"><i /><i /><i /></div>
          </>
        )}
      </div>
    </div>
  );
}

function FeaturedProject({
  project,
  index,
  total,
  onPreviewImage,
}: {
  project: Project;
  index: number;
  total: number;
  onPreviewImage: (preview: ProjectImagePreview) => void;
}) {
  return (
    <article className={`featured-project${project.screenshots?.length || project.visual ? "" : " featured-project--text-only"}`}>
      <div className="featured-topline"><span>Featured project</span><span>{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span></div>
      <ProjectVisual project={project} onPreviewImage={onPreviewImage} />
      <div className="featured-content">
        <div className="featured-title-row">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.name}<span>.</span></h3>
            <ProjectBadges project={project} />
          </div>
          <span className="project-number">{String(index).padStart(2, "0")}</span>
        </div>
        <p className="featured-description">{project.description}</p>
        <ProjectTechnologyList project={project} />
        <ProjectLinks project={project} />
        <ProjectDetails project={project} featured />
      </div>
    </article>
  );
}

function ProjectCard({
  project,
  index,
  onPreviewImage,
}: {
  project: Project;
  index: number;
  onPreviewImage: (preview: ProjectImagePreview) => void;
}) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} onPreviewImage={onPreviewImage} />
      <div className="project-card-content">
        <div className="project-card-heading">
          <p className="project-category">{project.category}</p>
          <span>{String(index).padStart(2, "0")}</span>
        </div>
        <h3>{project.name}</h3>
        <ProjectBadges project={project} />
        <p className="project-card-description">{project.description}</p>
        <ProjectTechnologyList project={project} />
        <ProjectLinks project={project} />
        <ProjectDetails project={project} />
      </div>
    </article>
  );
}

function ProjectBadges({ project }: { project: Project }) {
  if (!project.status && !project.workType) return null;
  return (
    <div className="project-badges">
      {project.status && <span className="project-badge">{project.status}</span>}
      {project.workType && (
        <span className="project-badge project-badge--type">
          {project.workType === "Personal" ? "Personal project" : "Professional project"}
        </span>
      )}
    </div>
  );
}

function ProjectTechnologyList({ project }: { project: Project }) {
  return (
    <div className="tag-list project-tags">
      {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.links) return null;
  const links = [
    { label: "GitHub", href: project.links.github },
    { label: "Live demo", href: project.links.liveDemo },
    { label: "Case study", href: project.links.caseStudy },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));
  if (links.length === 0) return null;

  return (
    <div className="project-links">
      {links.map(({ label, href }) => (
        <a href={href} key={label} target="_blank" rel="noreferrer">
          {label}<FiExternalLink aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function ProjectDetails({ project, featured = false }: { project: Project; featured?: boolean }) {
  const caseStudy = project.caseStudy;
  const hasDetails = Boolean(
    project.features?.length
    || project.contributions?.length
    || project.implementation
    || caseStudy?.userNeed
    || caseStudy?.architecture?.length
    || caseStudy?.storage
    || caseStudy?.engineeringDecisions,
  );
  if (!hasDetails) return null;

  return (
    <details className={`case-study${featured ? "" : " case-study--compact"}`}>
      <summary>{featured ? "Explore the case study" : "View case study"} <FiChevronDown aria-hidden="true" /></summary>
      <div className="case-study-content">
        <div><h4>Project overview</h4><p>{project.description}</p></div>
        {caseStudy?.userNeed && <div><h4>User need</h4><p>{caseStudy.userNeed}</p></div>}
        {project.features?.length ? <ProjectDetailList title="Key functionality" items={project.features} /> : null}
        {project.contributions?.length ? <ProjectDetailList title="Contributions" items={project.contributions} /> : null}
        {project.implementation && <div><h4>Technical implementation</h4><p>{project.implementation}</p></div>}
        {caseStudy?.architecture?.length ? (
          <div className="architecture-block">
            <h4>Architecture at a glance</h4>
            <div className="architecture-flow">
              {caseStudy.architecture.map((layer, index) => (
                <Fragment key={layer}>
                  {index > 0 && <FiArrowRight aria-hidden="true" />}
                  <span>{layer}</span>
                </Fragment>
              ))}
            </div>
            {caseStudy.storage && <div className="storage-note"><FiDatabase aria-hidden="true" /> {caseStudy.storage}</div>}
          </div>
        ) : null}
        {caseStudy?.engineeringDecisions && (
          <div><h4>Engineering decisions</h4><p>{caseStudy.engineeringDecisions}</p></div>
        )}
      </div>
    </details>
  );
}

function ProjectDetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

export default App;
