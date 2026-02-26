import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Project = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  stats?: { label: string; value: string }[];
};

// Hook for fade-in on scroll
function useFadeInOnScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}

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
          src="/work.png" 
          alt="" 
          className="w-full h-full object-cover rounded-3xl border-2 border-white/20 mx-auto max-w-[1420px] opacity-20 blur-md"
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
  const { ref, isVisible } = useFadeInOnScroll();
  const projects: Project[] = [
    {
      id: 1,
      title: "BILLY BRUNCH BARCELONA",
      subtitle: "Brunch Restaurant",
      image:
        "/project/project1.png",
      stats: [
          { label: "TikTok views", value: "27.3M" },
          { label: "Instagram views", value: "22.6M" },
      ],  
    },
    {
      id: 2,
      title: "TASTE OF HILTON (Lenz social dining)",
      subtitle: "Restaurant",
      image:
        "/project/project2.png",
      stats: [
          { label: "Instagram Views", value: "1.9M" }        
      ],  
    },
    {
      id: 3,
      title: "KIBAKO",
      subtitle: "Japanese Restaurant",
      image:
        "/project/project3.png",
      stats: [
        { label: "Tiktok and Instagram Views", value: "200K+" }
     
      ],
    },
    {
      id: 4,
      title: "DARRY RING",
      subtitle: "Jewelry Store",
      image:
        "/project/project4.png",
      stats: [
          { label: "Tiktok and Instagram views", value: "700K+" }       
        ],
    },
   
  ];

  return (   
   <section ref={ref} className={`bg-black py-16 md:py-24 fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-2">
        <div className="text-center mb-12 md:mb-16 mt-24">
            <h1 className="font-display text-[60px] md:text-[94px] leading-[1.05] uppercase max-w-[1054px] mx-auto">
            Featured Projects
          </h1>
        </div>

        <div className="p-0 md:p-32 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 border-0">
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
    <div className="h-full w-full group overflow-hidden border-[1px] rounded-0 hover:border-cyan">
        
      <div className="relative aspect-[12/8]">
     
          <img
            src={project.image}
            alt={project.title}
            className=" pt-4 w-full h-[50%] object-contain transition duration-500 group-hover:scale-105"
          />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="absolute p-2 md:p-4">
          <div className="text-white">
            <div className="font-display text-2xl md:text-3xl leading-tight drop-shadow text-white/50 ">
              {project.title}
            </div>
            {project.subtitle && (
              <div className="text-white/50 text-base mt-1">{project.subtitle}</div>
            )}
            {hasStats && (
              <div className="flex gap-6 text-sm uppercase tracking-wide text-white/50">
                {project.stats?.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-base font-semibold text-white/50">{item.value}</span>
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
  const navigate = useNavigate();
  return (
    <section className="bg-black py-24 md:py-28 text-center">
      <div className="max-w-[960px] mx-auto px-4">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm tracking-[0.3em] uppercase text-white/70">
            <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
              <div className="leading-[20px] h-6 w-[268px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">
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
        
        <div className="flex justify-center pt-4"> 
          <div className="cta-running-border">
            <button
              onClick={() => navigate('/contact')}
              className="relative bg-black text-white px-8 py-4 rounded-2xl font-bold text-[18px] transition-colors capitalize leading-[19.6px]"
            >
               JOIN THE WRONG SIDE
            </button>
          </div>
          </div>
      </div>
    </section>
  );
}
