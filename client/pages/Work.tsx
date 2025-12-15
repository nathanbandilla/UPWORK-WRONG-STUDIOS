import Layout from "@/components/Layout";

type Project = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  stats?: { label: string; value: string }[];
};

export default function Work() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <CtaSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[630px] pt-[200px] pb-20 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/work_header.png"
          alt=""
          className="w-full h-full object-cover rounded-3xl border-2 border-white/20 mx-auto max-w-[1420px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
         {/* Section Label */}
         <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
            <div className="h-7 w-[93px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">         
              <span className="h-9 ml-1 font-display text-[24.77px] tracking-wider uppercase">OUR WORK</span>          
            </div>
          <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
         </div>  

        {/* Main Heading */}
        <h1 className="font-display text-[60px] md:text-[94px] leading-[1.05] uppercase max-w-[1054px] mx-auto">
          <span className="text-white/60">We Don't just create content.</span>
          <br />
          <span className="text-white">We create culture.</span>
        </h1>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "",
      image:
        "/project1.png",
    },
    {
      id: 2,
      title: "",
      image:
        "/project2.png",
    },
    {
      id: 3,
      title: "Visit Rwanda",
      subtitle: "social media management",
      image:
        "/group.png",
      stats: [
        { label: "TikTok followers", value: "168K" },
        { label: "TikTok views", value: "986K" },
      ],
    },
    {
      id: 4,
      title: "",
      image:
        "/project4.png",
    },
    {
      id: 5,
      title: "Fitness App",
      image:
        "/project5.png",
    },
    {
      id: 6,
      title: "",
      image:
        "/project6.png",
    },
    {
      id: 7,
      title: "",
      image:
        "/project7.png",
    },
    {
      id: 8,
      title: "",
      image:
        "/project8.png",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
            <h1 className="font-display text-[60px] md:text-[94px] leading-[1.05] uppercase max-w-[1054px] mx-auto">
            Featured Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hasStats = project.stats && project.stats.length > 0;

  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-neutral-950 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-end p-6">
          <div className="text-white">
            <div className="font-display text-2xl md:text-3xl leading-tight drop-shadow">
              {project.title}
            </div>
            {project.subtitle && (
              <div className="text-white/85 text-base mt-1">{project.subtitle}</div>
            )}
            {hasStats && (
              <div className="mt-4 flex gap-6 text-sm uppercase tracking-wide text-white/80">
                {project.stats?.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-2xl font-semibold text-white">{item.value}</span>
                    <span className="text-[11px]">{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="bg-black py-24 md:py-28 text-center">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm tracking-[0.3em] uppercase text-white/70">
            <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
              <div className="h-6 w-[268px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">
                <span className="font-display text-[24px] tracking-wider ml-1 text-white">                  
                Ready to stop being ignored?
                </span>
              </div>
            <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
        </div>
        <h2 className="font-display text-[60px] md:text-[70px] leading-[1] uppercase">
          Let&apos;s build something
          <br />
          unforgettable.
        </h2>
        <button className="mt-8 rounded-2xl bg-cyan px-6 py-3 text-black font-semibold transition hover:scale-[1.02]">
          Join the Wrong Side
        </button>
      </div>
    </section>
  );
}
