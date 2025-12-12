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
      title: "Waterfall Expedition",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 2,
      title: "Product Packaging",
      image:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 3,
      title: "Visit Rwanda",
      subtitle: "social media management",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      stats: [
        { label: "TikTok followers", value: "168K" },
        { label: "TikTok views", value: "986K" },
      ],
    },
    {
      id: 4,
      title: "Night Shift",
      image:
        "https://images.unsplash.com/photo-1522204502516-3c5a946b1fde?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 5,
      title: "Fitness App",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 6,
      title: "Brand Packaging",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 7,
      title: "Creative Splash",
      image:
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 8,
      title: "Banking UI",
      image:
        "https://images.unsplash.com/photo-1505842730843-3c6de0323f5f?auto=format&fit=crop&w=1400&q=80",
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
