import { ArrowRight, Brain, Lightning, Globe, Sparkle, Play, Cube, ChartPieSlice, Atom } from '@phosphor-icons/react';
import { useState, useEffect, useRef } from 'react';

// Hook pour les effets de parallax
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Composant pour les particules flottantes 3D
const FloatingParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const container = particlesRef.current;
    if (!container) return;
    
    // Créer 20 particules
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-60';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
      particle.classList.add('animate-pulse');
      container.appendChild(particle);
      particles.push(particle);
    }
    
    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);
  
  return <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

// Composant Card 3D avec effet de hover
const Card3D = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotY = (e.clientX - centerX) / 10;
    const rotX = -(e.clientY - centerY) / 10;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };
  
  return (
    <div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transform transition-all duration-300 ease-out ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Composant Cube 3D animé
const AnimatedCube = ({ size = 100, delay = 0 }: { size?: number, delay?: number }) => {
  return (
    <div 
      className="relative mx-auto animate-spin"
      style={{ 
        width: size, 
        height: size,
        animationDuration: '20s',
        animationDelay: `${delay}s`
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80 rounded-lg"
        style={{ transform: 'rotateY(0deg) translateZ(50px)' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-80 rounded-lg"
        style={{ transform: 'rotateY(90deg) translateZ(50px)' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-80 rounded-lg"
        style={{ transform: 'rotateY(180deg) translateZ(50px)' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-80 rounded-lg"
        style={{ transform: 'rotateY(-90deg) translateZ(50px)' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600 opacity-80 rounded-lg"
        style={{ transform: 'rotateX(90deg) translateZ(50px)' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-80 rounded-lg"
        style={{ transform: 'rotateX(-90deg) translateZ(50px)' }}
      />
    </div>
  );
};

// Composant sphère 3D avec morphing
const MorphingSphere = () => {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(prev => (prev + 0.1) % (Math.PI * 2));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  const morphValue = Math.sin(phase) * 20 + 50;
  
  return (
    <div className="relative w-32 h-32 mx-auto">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full opacity-80 animate-pulse"
        style={{
          borderRadius: `${morphValue}% ${100-morphValue}% ${morphValue}% ${100-morphValue}%`,
          transform: `rotate(${phase * 50}deg) scale(${1 + Math.sin(phase * 2) * 0.1})`
        }}
      />
      <div 
        className="absolute inset-2 bg-gradient-to-tl from-purple-400 via-pink-500 to-red-600 rounded-full opacity-60"
        style={{
          borderRadius: `${100-morphValue}% ${morphValue}% ${100-morphValue}% ${morphValue}%`,
          transform: `rotate(${-phase * 30}deg) scale(${1 + Math.cos(phase * 3) * 0.1})`
        }}
      />
    </div>
  );
};

// Composant principal du Landing
const Landing = () => {
  const scrollY = useParallax();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Curseur personnalisé 3D */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="w-full h-full bg-white rounded-full animate-ping opacity-50" />
        <div className="absolute inset-2 bg-white rounded-full" />
      </div>
      
      {/* Hero Section avec effets 3D */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-tl from-cyan-900 via-blue-900 to-indigo-900 opacity-70"
            style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
          />
        </div>
        
        {/* Particules flottantes */}
        <FloatingParticles />
        
        {/* Grille 3D en arrière-plan */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.2}px) perspective(500px) rotateX(45deg)`
          }}
        />
        
        {/* Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo 3D animé */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <MorphingSphere />
              <div className="absolute -inset-8 flex items-center justify-center">
                <Brain size={40} className="text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Titre avec effet néon */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight relative">
            <span 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse"
              style={{
                textShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))'
              }}
            >
              NeuralSpace
            </span>
          </h1>
          
          {/* Sous-titre avec animation de typewriter */}
          <div className="text-xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <p>Transformez vos idées en</p>
            <span className="text-cyan-400 font-bold text-3xl md:text-4xl animate-pulse">
              expériences 3D immersives
            </span>
            <p className="mt-2">propulsées par l'IA générative</p>
          </div>
          
          {/* Cubes flottants */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <AnimatedCube size={60} delay={0} />
            <AnimatedCube size={80} delay={2} />
            <AnimatedCube size={50} delay={4} />
          </div>
          
          {/* Proposition de valeur avec cartes 3D */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Brain, text: "IA Générative", color: "from-purple-500 to-pink-500" },
              { icon: Cube, text: "Rendu 3D Temps Réel", color: "from-cyan-500 to-blue-500" },
              { icon: Lightning, text: "Performance WebGL", color: "from-yellow-500 to-orange-500" }
            ].map((item, index) => (
              <Card3D key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-r ${item.color} p-4 rounded-xl border border-white/20 backdrop-blur-sm`}>
                  <item.icon size={24} className="mx-auto mb-2 group-hover:animate-spin" />
                  <span className="text-sm font-medium block">{item.text}</span>
                </div>
              </Card3D>
            ))}
          </div>
          
          {/* CTA Buttons avec effet 3D */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Card3D>
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-6 px-10 rounded-2xl transition-all duration-300 shadow-2xl border border-cyan-400/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Sparkle size={24} className="group-hover:animate-spin" />
                  <span className="text-lg">Créer en 3D</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </Card3D>
            
            <Card3D>
              <button className="group relative border-2 border-cyan-400 hover:border-cyan-300 text-cyan-400 hover:text-cyan-300 font-bold py-6 px-10 rounded-2xl transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Play size={24} className="group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Voir la Démo</span>
                </div>
                <div className="absolute inset-0 bg-cyan-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>
            </Card3D>
          </div>
          
          {/* Demo Preview 3D */}
          <Card3D className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 border border-gray-700 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Simulation d'interface 3D */}
                <div className="relative z-10 text-center">
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <Atom size={48} className="text-cyan-400 animate-spin" />
                    <ChartPieSlice size={40} className="text-purple-400 animate-pulse" />
                    <Cube size={44} className="text-pink-400 animate-bounce" />
                  </div>
                  <p className="text-cyan-300 font-bold text-xl mb-2">"Créez-moi une molécule d'ADN interactive"</p>
                  <p className="text-gray-400">→ Génération 3D en temps réel avec IA</p>
                </div>
                
                {/* Effet de scan/loading */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -skew-x-12 animate-pulse" />
              </div>
              
              {/* Badge "Nouveau" flottant */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold transform rotate-12 animate-pulse">
                🚀 Révolutionnaire!
              </div>
            </div>
          </Card3D>
        </div>
        
        {/* Indicateur de scroll amélioré */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center mb-2">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-cyan-400 text-xs">Explorez</span>
          </div>
        </div>
      </section>

      {/* Section Features avec cartes 3D */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Technologies Avancées
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une stack technologique de pointe pour des expériences 3D sans compromis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "IA Générative Multimodale",
                description: "Transformation texte→3D, image→3D, et adaptation contextuelle intelligente avec des modèles de deep learning avancés.",
                color: "from-purple-600 to-pink-600",
                glowColor: "purple"
              },
              {
                icon: Lightning,
                title: "WebGL & Three.js Optimisé",
                description: "Rendu 3D haute performance directement dans le navigateur, avec optimisations GPU et techniques de LOD automatiques.",
                color: "from-cyan-600 to-blue-600",
                glowColor: "cyan"
              },
              {
                icon: Globe,
                title: "Architecture Distribuée",
                description: "Infrastructure cloud-native avec microservices, WebRTC pour la collaboration temps réel et CDN global.",
                color: "from-green-600 to-teal-600",
                glowColor: "green"
              }
            ].map((feature, index) => (
              <Card3D key={index} className="h-full">
                <div 
                  className={`h-full bg-gradient-to-br ${feature.color} p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group`}
                  style={{
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(${
                      feature.glowColor === 'purple' ? '168, 85, 247' :
                      feature.glowColor === 'cyan' ? '6, 182, 212' : '16, 185, 129'
                    }, 0.2)`
                  }}
                >
                  {/* Icône 3D */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon size={40} className="text-white group-hover:animate-pulse" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000" />
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final avec effet immersif */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* Effet de grille 3D */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
              animation: 'float 6s ease-in-out infinite alternate'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            L'avenir de la
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Visualisation 3D
            </span>
            est ici
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez la révolution de l'IA générative et créez des expériences 3D qui transforment la façon dont nous apprenons, travaillons et explorons
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Card3D>
              <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-3xl transition-all duration-300 shadow-2xl border border-cyan-400/50">
                <div className="flex items-center gap-4">
                  <Sparkle size={28} className="group-hover:animate-spin" />
                  <span className="text-xl">Démarrer Maintenant</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            </Card3D>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-cyan-300 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Pas d'installation requise
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Compatible VR/AR
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Collaboration temps réel
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              IA de dernière génération
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Landing;