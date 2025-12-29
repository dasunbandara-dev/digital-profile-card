import { useRef, useEffect } from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube,
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowDown
} from 'react-icons/fa';
import { profileData } from '../data/profileData';

const ProfileCard = () => {
  const containerRef = useRef(null);

  // Simple visual effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroContent = document.getElementById('hero-content');
      if (heroContent) {
        // Fade out hero content and move it up slightly as we scroll
        heroContent.style.opacity = Math.max(0, 1 - scrollY / 300);
        heroContent.style.transform = `translateY(-${scrollY * 0.5}px) scale(${1 - scrollY * 0.0005})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    youtube: FaYoutube,
    tiktok: FaTiktok,
  };

  return (
    <div className="relative w-full min-h-[200vh] bg-black selection:bg-blue-500/30">
      
      {/* 1. FIXED BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${profileData.backgroundImage})` }}
        />
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      </div>

      {/* 2. HERO SECTION (Sticky/Fixed Visual) */}
      <div className="fixed inset-0 z-10 flex flex-col justify-end pb-32 md:pb-24 pointer-events-none">
         <div id="hero-content" className="container mx-auto px-6 text-center transition-transform duration-100 ease-out will-change-transform">
            
            {/* 3D Floating Name Card */}
            <div className="apple-glass-card inline-block p-8 md:p-10 mb-6 backdrop-blur-2xl rounded-[40px] pointer-events-auto transform transition-transform hover:scale-[1.02] duration-500 cursor-default shadow-2xl ring-1 ring-white/10">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-2 hero-text-shadow">
                {profileData.name.split(' ')[0]} 
                <span className="text-white/60 font-light ml-3">{profileData.name.split(' ')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200/80 font-medium tracking-wide">
                {profileData.username}
              </p>
            </div>

            <p className="max-w-xl mx-auto text-lg text-gray-300 font-light leading-relaxed drop-shadow-md">
              {profileData.bio}
            </p>

            {/* Scroll Hint */}
            <div className="mt-12 animate-bounce opacity-60">
              <FaArrowDown className="mx-auto text-white text-xl" />
            </div>
         </div>
      </div>

      {/* 3. SCROLLING CONTENT LAYER (The Overlapping Sheet) */}
      {/* Spacer to push content down */}
      <div className="h-[80vh]"></div>

      {/* The Glass Sheet */}
      <div className="relative z-20 w-full min-h-screen bg-transparent">
        <div className="apple-sheet-container min-h-screen rounded-t-[50px] md:rounded-t-[80px] p-6 md:p-12 pb-24 shadow-[0_-20px_60px_rgba(0,0,0,0.8)] border-t border-white/15">
          
          {/* Handle Indicator (iOS style) */}
          <div className="w-16 h-1.5 bg-white/20 rounded-full mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* Contact Grid - Futuristic Cards */}
            <section className="animate-slideUp">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-[0.3em] mb-8 ml-2">Connect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 
                 {/* Email Card */}
                 <a href={`mailto:${profileData.email}`} className="group apple-action-card">
                   <div className="icon-circle bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white">
                     <FaEnvelope />
                   </div>
                   <div className="flex-1 min-w-0">
                     <span className="block text-xs text-white/40 uppercase tracking-wider">Email</span>
                     <span className="block text-white font-medium truncate">{profileData.email}</span>
                   </div>
                 </a>

                 {/* Phone Card */}
                 {profileData.phone && (
                   <a href={`tel:${profileData.phone}`} className="group apple-action-card">
                     <div className="icon-circle bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white">
                       <FaPhone />
                     </div>
                     <div className="flex-1 min-w-0">
                       <span className="block text-xs text-white/40 uppercase tracking-wider">Mobile</span>
                       <span className="block text-white font-medium">{profileData.phone}</span>
                     </div>
                   </a>
                 )}

                 {/* Phone 2 Card */}
                 {profileData.phone2 && (
                   <a href={`tel:${profileData.phone2}`} className="group apple-action-card">
                     <div className="icon-circle bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white">
                       <FaPhone />
                     </div>
                     <div className="flex-1 min-w-0">
                       <span className="block text-xs text-white/40 uppercase tracking-wider">Secondary</span>
                       <span className="block text-white font-medium">{profileData.phone2}</span>
                     </div>
                   </a>
                 )}

                 {/* Location Card */}
                 <div className="apple-action-card">
                   <div className="icon-circle bg-purple-500/20 text-purple-400">
                     <FaMapMarkerAlt />
                   </div>
                   <div className="flex-1">
                     <span className="block text-xs text-white/40 uppercase tracking-wider">Location</span>
                     <span className="block text-white font-medium">{profileData.location}</span>
                   </div>
                 </div>

              </div>
            </section>

            {/* Simple CV Data - Experience & Education combined */}
            <section>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-[0.3em] mb-8 ml-2">Background</h3>
              <div className="apple-glass-panel space-y-px overflow-hidden rounded-3xl">
                
                {/* Education Items */}
                {profileData.education && profileData.education.map((edu, i) => (
                  <div key={`edu-${i}`} className="bg-white/5 p-6 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                       <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                       <span className="text-xs font-mono text-white/50 px-2 py-1 bg-white/5 rounded-md">{edu.year}</span>
                    </div>
                    <p className="text-blue-200/70 text-sm">{edu.institution}</p>
                  </div>
                ))}

                {/* Experience Items */}
                {profileData.experience && profileData.experience.slice(0, 3).map((exp, i) => (
                   <div key={`exp-${i}`} className="bg-white/5 p-6 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                       <h4 className="text-lg font-semibold text-white">{exp.position}</h4>
                       <span className="text-xs font-mono text-white/50 px-2 py-1 bg-white/5 rounded-md">{exp.period}</span>
                    </div>
                    <p className="text-blue-200/70 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed text-justify">{exp.description}</p>
                  </div>
                ))}
              
              </div>
            </section>

            {/* Social Links Row */}
            <section className="pb-12">
               <h3 className="text-sm font-semibold text-white/40 uppercase tracking-[0.3em] mb-8 ml-2 text-center md:text-left">Socials</h3>
               <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {Object.entries(profileData.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!url || !Icon) return null;
                    return (
                      <a 
                        key={platform} 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl
                                 hover:bg-white/20 hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-xl"
                      >
                        <Icon />
                      </a>
                    );
                  })}
               </div>
            </section>

            {/* Footer */}
            <div className="text-center pt-12 text-white/20 text-xs tracking-widest uppercase">
              Profile • {new Date().getFullYear()}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileCard;
