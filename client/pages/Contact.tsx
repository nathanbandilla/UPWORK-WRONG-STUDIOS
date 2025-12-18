import React from "react";
import Layout from "@/components/Layout";
import emailjs from "@emailjs/browser";

// Hook for fade-in on scroll
function useFadeInOnScroll() {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
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

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form Section */}
      <ContactFormSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[630px] pt-[200px] pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact_header.png"
          alt=""
          className="w-full h-full object-cover rounded-3xl border-2 border-white/20 mx-auto max-w-[1420px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
            <div className="h-7 w-[187px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">         
              <span className="h-9 ml-1 font-display text-[24.77px] tracking-wider uppercase">JOIN THE WRONG SIDE</span>          
            </div>
          <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
         </div>    

        {/* Main Heading */}
        <h1 className="font-display text-[60px] md:text-[94px] leading-[1.05] uppercase max-w-[1440px] mx-auto">
          <span className="text-white/60">DOING IT WRONG HAS NEVER</span>
          <br />
          <span className="text-white">LOOKED THIS RIGHT.</span>
        </h1>
       
      </div>
    </section>
  );
}

function ContactFormSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs
      .send(
        "service_i2wbx2x",
        "template_jk5ilx4",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          address: formData.address,
          message: formData.message,
        },
        "UTBrXKFBF642K78XH"
      )
      .then(
        () => {
          alert("Message sent successfully.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      className={`py-20 md:py-32 fade-in-section ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-[60px] md:text-[80px] leading-[1.1] uppercase text-white">
            GET IN TOUCH
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto space-y-6">
          {/* First Name and Last Name - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-display text-[14px] uppercase text-white/90 tracking-wider">
                FIRST NAME
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Type Here"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#03E9F4] transition-colors text-[16px]"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-display text-[14px] uppercase text-white/90 tracking-wider">
                LAST NAME
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Type Here"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#03E9F4] transition-colors text-[16px]"
              />
            </div>
          </div>

          {/* E-Mail and Address - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-display text-[14px] uppercase text-white/90 tracking-wider">
                E-MAIL
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Here"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#03E9F4] transition-colors text-[16px]"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-display text-[14px] uppercase text-white/90 tracking-wider">
                ADDRESS
              </label>
              <input
                type="text"
                name="address"
                placeholder="Type Here"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#03E9F4] transition-colors text-[16px]"
              />
            </div>
          </div>

          {/* Message - Full Width */}
          <div className="space-y-2">
            <label className="block font-display text-[14px] uppercase text-white/90 tracking-wider">
              MESSAGE
            </label>
            <textarea
              name="message"
              placeholder="Type Here"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#03E9F4] transition-colors text-[16px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#03E9F4] text-black px-8 py-4 rounded-xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors tracking-wider"
            >
              Work With Wrong Studios
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


