import profile from "../assets/profile.png"; 
export default function Navbar() {
  return (
    <nav className="fixed top-5 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-16 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 flex items-center justify-between px-8 shadow-2xl">

        <img
         src={profile}
         alt="Ankit"
         className="w-10 h-10 rounded-full object-cover"
        />

        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          <a href="#home"
             className="transition-colors duration-300 hover:white hover:translate-y-0.5"
          >
            Home</a>
          <a href="#projects"
             className="transition-colors duration-300 hover:white hover:translate-y-0.5"
          >
            Projects</a>
          <a href="#about"
             className="transition-colors duration-300 hover:white hover:translate-y-0.5"
          >
            About</a>
          <a href="#contact"
             className="transition-colors duration-300 hover:white hover:translate-y-0.5"
          >
            Contact</a>
        </div>

      </div>
    </div>
    </nav>
  );
}