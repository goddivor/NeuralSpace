# 🧠 NeuralSpace

**Plateforme universelle de visualisation 3D intelligente propulsée par l'IA**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)

> Transformez n'importe quelle description ou image en expérience 3D interactive en quelques minutes

## 🎯 Vision du Projet

NeuralSpace révolutionne la façon dont nous visualisons et comprenons l'information complexe. Notre plateforme permet à **quiconque** de créer des modèles 3D interactifs simplement en :

- 💬 **Décrivant en langage naturel** ce qu'ils veulent visualiser
- 📸 **Uploadant une image** de référence  
- 🎮 **Explorant le résultat** avec des descriptions contextuelles automatiques

## 🌍 Applications Universelles

### 🏥 Médical & Santé
- Visualisation anatomique pour formation médicale
- Explications visuelles pour patients
- Reconstitution 3D depuis imagerie médicale

### 🎓 Éducation & Formation
- Cours de sciences interactifs
- Exploration historique de monuments
- Démonstrations physiques et chimiques

### 🔧 Industrie & Technique
- Guides de maintenance 3D
- Formation sécurité industrielle
- Documentation technique interactive

### ⚖️ Justice & Investigation
- Reconstitution de scènes de crime
- Analyses forensiques visuelles
- Simulations pour tribunaux

### 🏗️ Architecture & Construction
- Présentation de projets clients
- Visite virtuelle pré-construction
- Formation sécurité chantier

### 🎨 Créativité & Passion
- Prototypage rapide d'idées
- Exploration artistique 3D
- Visualisation de concepts

## ✨ Fonctionnalités Principales

### 🧠 Intelligence Artificielle Avancée
- **Génération 3D depuis texte** : "Montrez-moi un cœur humain" → Modèle 3D complet
- **Reconstruction depuis image** : Photo → Modèle 3D interactif  
- **Analyse contextuelle** : Adaptation automatique selon le domaine
- **Descriptions expertes** : Contenu généré par IA spécialisée

### 🎮 Expérience Interactive
- **Visualiseur 3D intuitif** avec Three.js
- **Zones cliquables** avec informations détaillées
- **Modes d'exploration** : rotation, zoom, éclatement, coupe
- **Animations contextuelles** selon le domaine

### 🌐 Collaboration & Partage
- **Partage instantané** de créations
- **Travail collaboratif** temps réel
- **Export multi-formats** (image, vidéo, modèle 3D)
- **Intégration** avec outils existants

### 📱 Accessibilité Totale
- **Zero installation** - fonctionne dans le navigateur
- **Multi-plateforme** : PC, mobile, tablette
- **Support VR/AR** pour immersion complète
- **Interface adaptative** selon l'expertise utilisateur

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- Clés API : OpenAI, Tripo AI, Anthropic

### Installation

```bash
# Clone du repository
git clone https://github.com/goddivor/neuralspace.git
cd neuralspace

# Installation des dépendances
npm install

# Configuration (voir .env.example)
cp .env.example .env
# Remplir les clés API dans .env

# Démarrage en mode développement
npm run dev
```

### Premier Test

1. **Ouvrez** http://localhost:3000
2. **Décrivez** : "Montrez-moi une molécule d'eau"
3. **Attendez** la génération (60-90 secondes)
4. **Explorez** le modèle 3D interactif !

## 🛠️ Technologies Utilisées

### Frontend
- **React 19** + TypeScript - Interface utilisateur moderne
- **Three.js** + React Three Fiber - Rendu 3D performant
- **Tailwind CSS** - Design responsive et moderne
- **Vite** - Build tool ultra-rapide

### Backend
- **Node.js** + Express - API REST robuste
- **MongoDB** - Base de données flexible
- **Socket.io** - Collaboration temps réel

### Intelligence Artificielle
- **OpenAI GPT-4** - Analyse de requêtes et descriptions
- **Tripo AI** - Génération de modèles 3D
- **Claude AI** - Enrichissement contextuel

## 📁 Structure du Projet

```
neuralspace/
├── src/
│   ├── components/          # Composants React réutilisables
│   │   ├── actions/         # Boutons, switches, etc.
│   │   ├── forms/           # Inputs, selects, etc.
│   │   └── ui/              # Modales, tables, etc.
│   ├── context/             # Contextes React (Toast, etc.)
│   ├── pages/               # Pages principales
│   ├── lib/                 # Utilitaires et helpers
│   └── types/               # Types TypeScript
├── public/                  # Assets statiques
└── docs/                    # Documentation
```

## 🎯 Roadmap

### 🚧 Phase 1 - MVP (En cours)
- [x] Interface utilisateur de base
- [x] Système de composants réutilisables
- [ ] Intégration APIs IA
- [ ] Visualiseur 3D basique
- [ ] Pipeline de génération

### 📈 Phase 2 - Core Features
- [ ] Génération multi-domaines
- [ ] Collaboration temps réel
- [ ] Export/partage avancé
- [ ] Optimisations performance

### 🌟 Phase 3 - Advanced
- [ ] Support VR/AR complet
- [ ] Application mobile Flutter
- [ ] API publique
- [ ] Marketplace de contenus

## 🤝 Contribution

Nous accueillons toutes les contributions ! Voici comment participer :

### Types de Contributions
- 🐛 **Bug reports** et corrections
- ✨ **Nouvelles fonctionnalités**
- 📚 **Documentation** et exemples
- 🎨 **Améliorations UI/UX**
- 🧪 **Tests** et validation

### Process de Contribution

1. **Fork** le repository
2. **Créez** une branche feature (`git checkout -b feature/amazing-feature`)
3. **Committez** vos changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** vers la branche (`git push origin feature/amazing-feature`)
5. **Ouvrez** une Pull Request

### Conventions
- **Commits** : [Conventional Commits](https://conventionalcommits.org/)
- **Code** : ESLint + Prettier configurés
- **Tests** : Jest + Testing Library

## 📖 Documentation

- **[Guide Utilisateur](docs/user-guide.md)** - Comment utiliser NeuralSpace
- **[Documentation API](docs/api.md)** - Référence des endpoints
- **[Guide Développeur](docs/dev-guide.md)** - Setup et architecture
- **[Exemples](docs/examples.md)** - Cas d'usage concrets

## 🎓 Contexte Académique

Ce projet est développé dans le cadre d'un **Mémoire de Master** en Architecture Logicielle, explorant l'intersection entre :
- **Intelligence Artificielle générative**
- **Visualisation 3D interactive**
- **Interface homme-machine intuitive**
- **Applications métiers universelles**

**Objectif :** Démontrer la faisabilité d'une plateforme universelle démocratisant la création de contenu 3D interactif.

## 📄 License

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## 🌟 Support et Communauté

- **⭐ Star** ce repo si vous trouvez le projet intéressant !
- **🐛 Issues** : [Signaler un bug](https://github.com/username/neuralspace/issues)
- **💬 Discussions** : [Forum communauté](https://github.com/username/neuralspace/discussions)
- **📧 Contact** : [email@example.com](mailto:email@example.com)

## 🚀 Démonstration


> **Exemple :** "Montrez-moi la structure d'un moteur de voiture" → Modèle 3D interactif avec toutes les pièces détaillées

---

**NeuralSpace : Transformer l'invisible en expérience, l'incompréhensible en évidence.**

⭐ **N'oubliez pas de star le repo si vous trouvez le projet intéressant !**