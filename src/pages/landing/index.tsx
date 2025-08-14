import { ArrowRight, Brain, Eye, Lightning, Globe, Sparkle, Play, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

// Composant Carrousel pour les images
const ImageCarousel = ({ images, autoPlay = true }: { images: string[], autoPlay?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-48 rounded-xl overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt="Application showcase"
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      
      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <CaretLeft size={16} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <CaretRight size={16} />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-gray-100 bg-grid-16 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo animé */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/icon_animate.svg" 
              alt="NeuralSpace Logo" 
              className="w-32 h-32 md:w-40 md:h-40 animate-pulse"
            />
          </div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              NeuralSpace
            </span>
          </h1>
          
          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transformez n'importe quelle description en expérience 3D interactive 
            <span className="text-indigo-600 font-semibold"> propulsée par l'IA</span>
          </p>
          
          {/* Proposition de valeur */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium">
              💬 Décrivez en langage naturel
            </span>
            <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full font-medium">
              🎮 Explorez en 3D interactive
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              🧠 IA génère automatiquement
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Sparkle size={20} />
              Créer maintenant
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2">
              <Play size={20} />
              Voir la démo
            </button>
          </div>
          
          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-2">
              <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye size={32} className="text-indigo-600" />
                  </div>
                  <p className="text-gray-600 font-medium">Aperçu de la démo interactive</p>
                  <p className="text-sm text-gray-500 mt-2">"Montrez-moi une molécule d'eau" → Modèle 3D interactif</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
              Nouveau!
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligence Artificielle
              <span className="text-indigo-600"> Révolutionnaire</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre plateforme utilise les dernières avancées en IA pour transformer vos idées en réalités 3D interactives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Brain size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Génération depuis Texte</h3>
              <p className="text-gray-600 leading-relaxed">
                Décrivez simplement ce que vous voulez visualiser. Notre IA comprend le contexte et génère automatiquement des modèles 3D détaillés et interactifs.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightning size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reconstruction d'Images</h3>
              <p className="text-gray-600 leading-relaxed">
                Uploadez une photo ou un schéma, et notre IA reconstruit automatiquement un modèle 3D interactif avec des informations contextuelles précises.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptation Contextuelle</h3>
              <p className="text-gray-600 leading-relaxed">
                L'IA s'adapte automatiquement selon le domaine d'application : médical, éducatif, industriel, créatif, et génère du contenu expert approprié.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Applications
              <span className="text-indigo-600"> Universelles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme, des possibilités infinies. Découvrez comment NeuralSpace révolutionne chaque secteur
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Médical & Santé",
                description: "Visualisation anatomique, formation médicale, explications patients",
                color: "bg-red-50 border-red-200 text-red-800",
                images: [
                  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop&crop=center"
                ]
              },
              {
                title: "Éducation & Formation",
                description: "Cours interactifs, exploration historique, démonstrations scientifiques",
                color: "bg-blue-50 border-blue-200 text-blue-800",
                images: [
                  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=center"
                ]
              },
              {
                title: "Industrie & Technique",
                description: "Guides maintenance 3D, formation sécurité, documentation interactive",
                color: "bg-orange-50 border-orange-200 text-orange-800",
                images: [
                  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop&crop=center"
                ]
              },
              {
                title: "Justice & Investigation",
                description: "Reconstitution scènes, analyses forensiques, simulations tribunaux",
                color: "bg-purple-50 border-purple-200 text-purple-800",
                images: [
                  "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&crop=center"
                ]
              },
              {
                title: "Architecture & Construction",
                description: "Présentation projets, visites virtuelles, formation chantier",
                color: "bg-green-50 border-green-200 text-green-800",
                images: [
                  "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center"
                ]
              },
              {
                title: "Créativité & Passion",
                description: "Prototypage rapide, exploration artistique, visualisation concepts",
                color: "bg-pink-50 border-pink-200 text-pink-800",
                images: [
                  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop&crop=center",
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
                ]
              }
            ].map((app, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${app.color} bg-white`}
              >
                {/* Carrousel d'images */}
                <div className="mb-4">
                  <ImageCarousel images={app.images} />
                </div>
                
                {/* Contenu de la card */}
                <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer vos idées en réalité 3D ?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Rejoignez des milliers de créateurs qui utilisent déjà NeuralSpace pour donner vie à leurs visions les plus audacieuses
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white hover:bg-gray-50 text-indigo-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Sparkle size={20} />
              Commencer gratuitement
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white hover:bg-white hover:text-indigo-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2">
              <Play size={20} />
              Planifier une démo
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-indigo-100 text-sm">
            <span>✓ Sans installation</span>
            <span>✓ Fonctionne dans le navigateur</span>
            <span>✓ Support VR/AR</span>
            <span>✓ Collaboration temps réel</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;