import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Fingerprint, 
  User, 
  School, 
  Calendar, 
  Sun, 
  Menu, 
  X, 
  Check, 
  Search, 
  AlertTriangle,
  Linkedin,
  Instagram,
  Twitter,
  ChevronUp
} from "lucide-react";

// Customized Track icon matching the E3 connected shape in the screenshot
const TrackIcon = () => (
  <svg
    className="w-6 h-6 text-[#e14b3b] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 6H5v12h4" />
    <path d="M5 12h3.5" />
    <path d="M15 6h4v6h-3.5v6h3.5" />
    <line x1="8.5" y1="12" x2="15.5" y2="12" />
  </svg>
);

// Pink squiggly waves element matching the right side graphic in screenshot
const SquigglyLines = () => (
  <svg
    className="w-16 h-12 text-[#f05c80]/90 select-none pointer-events-none"
    viewBox="0 0 100 45"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <path d="M 0,5 Q 12.5,15 25,5 T 50,5 T 75,5 T 100,5" />
    <path d="M 0,15 Q 12.5,25 25,15 T 50,15 T 75,15 T 100,15" />
    <path d="M 0,25 Q 12.5,35 25,25 T 50,25 T 75,25 T 100,25" />
    <path d="M 0,35 Q 12.5,45 25,35 T 50,35 T 75,35 T 100,35" />
  </svg>
);

// Pre-configured certificate database for high-fidelity interactive lookup
const CERTIFICATE_DB: Record<string, {
  id: string;
  name: string;
  track: string;
  college: string;
  date: string;
}> = {
  "SCT/JUN25/1811": {
    id: "SCT/JUN25/1811",
    name: "Kondru Abhishek",
    track: "Cyber Security",
    college: "Vignan's institute of information technology",
    date: "2026-06-18",
  },
  "SCT/JUN25/1812": {
    id: "SCT/JUN25/1812",
    name: "Aarav Sharma",
    track: "Data Science",
    college: "Indian Institute of Technology, Madras",
    date: "2025-07-02",
  },
  "SCT/JUN25/1813": {
    id: "SCT/JUN25/1813",
    name: "Ananya Patel",
    track: "Full Stack Development",
    college: "BITS Pilani, Hyderabad Campus",
    date: "2025-07-03",
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [currentId, setCurrentId] = useState("SCT/JUN25/1811");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Auto-close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVerify = (e: FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    setIsSearching(true);
    setErrorMsg("");

    // Simulate standard professional lookup delay
    setTimeout(() => {
      const normalizedId = searchId.trim().toUpperCase();
      if (CERTIFICATE_DB[normalizedId]) {
        setCurrentId(normalizedId);
        setShowSearchBox(false);
        setSearchId("");
      } else {
        setErrorMsg("Certificate ID not found. Try 'SCT/JUN25/1811'");
      }
      setIsSearching(false);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const certificate = CERTIFICATE_DB[currentId] || CERTIFICATE_DB["SCT/JUN25/1811"];

  return (
    <div className="relative min-h-screen bg-[#f4f7f9] flex flex-col justify-between overflow-x-hidden">
      
      {/* Decorative Concentric Circular Lines Background on the Right */}
      <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute right-[-10%] top-[-10%] w-[120%] h-[120%] text-slate-200/50"
          viewBox="0 0 1000 1000"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="900" cy="500" r="100" />
          <circle cx="900" cy="500" r="200" />
          <circle cx="900" cy="500" r="300" />
          <circle cx="900" cy="500" r="400" />
          <circle cx="900" cy="500" r="500" />
          <circle cx="900" cy="500" r="600" />
          <circle cx="900" cy="500" r="700" strokeDasharray="6 6" />
          <circle cx="900" cy="500" r="800" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Yellow semi-circle sticking out on the left edge (Exact match to screenshot) */}
      <div className="absolute left-0 top-[38%] -translate-y-1/2 w-10 h-24 bg-[#ffc20e] rounded-r-full z-10 pointer-events-none" />

      {/* Header Bar */}
      <header className="relative w-full h-24 bg-[#f4f7f9] flex items-center justify-between px-6 md:px-16 z-40">
        
        {/* Logo Container with thin dark border outline (Exact match to desktop screenshot) */}
        <div 
          className="border-2 border-[#1e295b]/80 rounded-[4px] px-4 py-2 flex items-center gap-3 bg-white shadow-sm cursor-pointer hover:border-[#e14b3b] transition-all"
          onClick={() => {
            setCurrentId("SCT/JUN25/1811");
            setShowSearchBox(false);
            setErrorMsg("");
          }}
        >
          {/* Exact Logo Icon structure */}
          <div className="flex items-end gap-[3px] h-[26px]">
            {/* Column 1 (Left): 2 blocks */}
            <div className="flex flex-col gap-[3px]">
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#ffc20e]" />
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#f37021]" />
            </div>
            {/* Column 2 (Middle): 3 blocks */}
            <div className="flex flex-col gap-[3px]">
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#00a651]" />
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#2bb673]" />
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#00a651]" />
            </div>
            {/* Column 3 (Right): 4 blocks */}
            <div className="flex flex-col gap-[3px]">
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#00aeef]" />
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#1c75bc]" />
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#0054a6]" />
              <div className="w-[8px] h-[8px] rounded-[2px] bg-[#00aeef]" />
            </div>
          </div>

          {/* Logo Labels */}
          <div className="flex flex-col justify-center">
            <span className="font-serif font-bold text-[#1e295d] text-2xl tracking-tight leading-none">
              SkillCraft
            </span>
            <span className="font-sans font-extrabold text-[#1e295d] text-[9px] tracking-[0.24em] mt-0.5 leading-none">
              TECHNOLOGY
            </span>
          </div>
        </div>

        {/* Desktop Central Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => {
              setCurrentId("SCT/JUN25/1811");
              setShowSearchBox(false);
              setErrorMsg("");
            }}
            className="text-slate-500 hover:text-slate-900 font-semibold text-base transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => {
              setShowSearchBox(true);
            }}
            className="text-slate-500 hover:text-slate-900 font-semibold text-base transition-colors"
          >
            Verify
          </button>
        </nav>

        {/* Right Actions Block */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle Icon (Solar design) */}
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none" aria-label="Toggle theme">
            <Sun className="w-6 h-6 animate-pulse" />
          </button>

          {/* Desktop "Apply" Button */}
          <button 
            onClick={() => setShowSearchBox(true)}
            className="hidden md:block bg-[#e14b3b] hover:bg-[#c83a2c] text-white font-medium py-2.5 px-7 rounded-full transition-colors shadow-md shadow-rose-200"
          >
            Apply
          </button>

          {/* Hamburger Menu Toggle (Only visible on mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-800 transition-colors focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 relative z-10">
        
        {/* Dynamic decorative elements surrounding the center layout */}
        <div className="w-full max-w-5xl relative flex flex-col md:flex-row items-center justify-center gap-12">
          
          <div className="w-full max-w-md relative">
            
            {/* Mobile Overlay Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[-20px] left-0 right-0 bg-white shadow-xl rounded-2xl p-6 border border-slate-100 flex flex-col gap-4 z-50"
                >
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => {
                        setCurrentId("SCT/JUN25/1811");
                        setIsMenuOpen(false);
                        setShowSearchBox(false);
                      }}
                      className="text-left py-2 text-slate-400 font-medium text-lg hover:text-slate-600 transition-colors"
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => {
                        setShowSearchBox(true);
                        setIsMenuOpen(false);
                      }}
                      className="text-left py-2 text-slate-700 font-semibold text-lg hover:text-slate-900 transition-colors"
                    >
                      Verify
                    </button>
                  </div>
                  <button 
                    onClick={() => {
                      setShowSearchBox(true);
                      setIsMenuOpen(false);
                    }}
                    className="bg-[#e14b3b] hover:bg-[#c83a2c] text-white font-medium py-2 px-6 rounded-full w-28 text-center transition-all shadow-md shadow-rose-200"
                  >
                    Apply
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interactive Search Tool */}
            <AnimatePresence>
              {showSearchBox && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/95 backdrop-blur border border-slate-100 shadow-xl rounded-2xl p-5 mb-5 flex flex-col gap-3"
                >
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Verify Certificate ID</h3>
                    <button onClick={() => { setShowSearchBox(false); setErrorMsg(""); }} className="text-slate-400 hover:text-slate-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <form onSubmit={handleVerify} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter ID (e.g., SCT/JUN25/1811)"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e14b3b]/30 focus:border-[#e14b3b] uppercase placeholder:normal-case font-medium"
                    />
                    <button 
                      type="submit" 
                      disabled={isSearching}
                      className="bg-[#e14b3b] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#c83a2c] transition-colors shrink-0 flex items-center gap-1.5"
                    >
                      <Search className="w-4 h-4" />
                      {isSearching ? "..." : "Verify"}
                    </button>
                  </form>
                  {errorMsg && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errorMsg}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Certificate Main Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[24px] shadow-[0_10px_35px_rgba(30,41,59,0.06)] overflow-hidden relative"
            >
              {/* Top red & pink gradient border bar (Exact split style) */}
              <div className="flex h-[6px] w-full">
                <div className="w-1/2 bg-[#e14b3b]" />
                <div className="w-1/2 bg-[#f07b94]" />
              </div>

              {/* Verification Success Toast Badge if matching newly verified */}
              {currentId !== "SCT/JUN25/1811" && (
                <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-bounce">
                  <Check className="w-3.5 h-3.5" /> Successfully Verified
                </div>
              )}

              {/* Title Block */}
              <div className="pt-12 pb-8 text-center">
                <h1 className="font-sans text-[32px] font-bold text-[#1d234d] tracking-normal leading-tight">
                  Verify Certificate
                </h1>
              </div>

              {/* List details container */}
              <div className="relative pl-7 pr-6 pb-12 space-y-7">
                
                {/* Thick gold vertical line flanking the ID and Name lines */}
                <div className="absolute left-[28px] top-[6px] w-[5px] h-[92px] bg-[#ffc20e] rounded-full" />

                {/* Detail Items */}
                
                {/* ID Item */}
                <div className="flex items-start gap-4 relative z-10 pl-[14px]">
                  <Fingerprint className="w-[22px] h-[22px] text-[#e14b3b] shrink-0 mt-0.5" />
                  <div className="text-lg text-[#1d234d] font-sans">
                    <span className="font-bold">ID:</span>{" "}
                    <span className="font-bold">{certificate.id}</span>
                  </div>
                </div>

                {/* Name Item */}
                <div className="flex items-start gap-4 relative z-10 pl-[14px]">
                  <User className="w-[22px] h-[22px] text-[#e14b3b] shrink-0 mt-0.5" />
                  <div className="text-lg text-[#1d234d] font-sans">
                    <span className="font-bold">Name:</span>{" "}
                    <span className="font-semibold">{certificate.name}</span>
                  </div>
                </div>

                {/* Track Item */}
                <div className="flex items-start gap-4 pl-[14px]">
                  <TrackIcon />
                  <div className="text-lg text-[#1d234d] font-sans">
                    <span className="font-bold">Track:</span>{" "}
                    <span className="font-semibold">{certificate.track}</span>
                  </div>
                </div>

                {/* College Item */}
                <div className="flex items-start gap-4 pl-[14px]">
                  <School className="w-[22px] h-[22px] text-[#e14b3b] shrink-0 mt-0.5" />
                  <div className="text-lg text-[#1d234d] font-sans leading-snug">
                    <span className="font-bold">College:</span>{" "}
                    <span className="font-semibold inline">{certificate.college}</span>
                  </div>
                </div>

                {/* Date Item */}
                <div className="flex items-start gap-4 pl-[14px]">
                  <Calendar className="w-[22px] h-[22px] text-[#e14b3b] shrink-0 mt-0.5" />
                  <div className="text-lg text-[#1d234d] font-sans">
                    <span className="font-bold">Date:</span>{" "}
                    <span className="font-semibold">{certificate.date}</span>
                  </div>
                </div>

              </div>
            </motion.div>
            
          </div>

          {/* Pink squiggly lines visual (Exactly positioned on the right of the certificate in desktop) */}
          <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2">
            <SquigglyLines />
          </div>

        </div>
      </main>

      {/* Decorative Pink Half-circle above the footer (Exact match) */}
      <div className="absolute bottom-[350px] right-0 translate-x-[20%] w-36 h-36 bg-[#f05c80] rounded-full z-0 pointer-events-none" />

      {/* Rich Multi-column Footer Section (Exact Match to rich footer screenshot) */}
      <footer className="w-full bg-white border-t border-slate-100 z-10">
        
        {/* Main Footer Links & Bio */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Slogan */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-[3px] h-[24px]">
                <div className="flex flex-col gap-[3px]">
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#ffc20e]" />
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#f37021]" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#00a651]" />
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#2bb673]" />
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#00a651]" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#00aeef]" />
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#1c75bc]" />
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#0054a6]" />
                  <div className="w-[7px] h-[7px] rounded-[1.5px] bg-[#00aeef]" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-[#1e295d] text-xl tracking-tight leading-none">
                  SkillCraft
                </span>
                <span className="font-sans font-extrabold text-[#1e295d] text-[8px] tracking-[0.24em] mt-0.5 leading-none">
                  TECHNOLOGY
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              Crafting Success through Technology
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="p-2 text-slate-300 hover:text-slate-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-slate-300 hover:text-slate-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-slate-300 hover:text-slate-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#1d234d] font-bold text-lg mb-4 tracking-tight">Quick Links</h4>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-slate-800 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-slate-800 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-slate-800 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-slate-800 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Internships */}
          <div>
            <h4 className="text-[#1d234d] font-bold text-lg mb-4 tracking-tight">Internships</h4>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-slate-800 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-slate-800 transition-colors">Graphics Design</a></li>
              <li><a href="#" className="hover:text-slate-800 transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-slate-800 transition-colors">Software Development</a></li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div>
            <h4 className="text-[#1d234d] font-bold text-lg mb-4 tracking-tight">Address</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Mumbai
            </p>
          </div>

        </div>

        {/* Separator and Bottom Bar */}
        <div className="border-t border-slate-100/80 px-6 md:px-16 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-700 transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Return Policy</a>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-400 font-medium">
              &copy; 2025 SkillCraft Technology. All rights reserved.
            </span>
            
            {/* Scroll to Top Chevron Button (Exact match) */}
            <button 
              onClick={scrollToTop}
              className="bg-[#e14b3b] hover:bg-[#c83a2c] text-white p-2.5 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#e14b3b]/30"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </footer>
    </div>
  );
}

