
 WeatherAPI-TP1

Projet réalisé dans le cadre du TP1 de la matière **SoA & Microservices** (Année universitaire 2024/2025).

## Objectif

Intégrer et consommer l’API RESTful OpenWeatherMap avec Node.js en utilisant trois bibliothèques différentes :

- `request` (ancienne méthode)
- `fetch` via `node-fetch`
- `axios` (recommandée)

---

## Technologies utilisées

- Node.js
- NPM
- OpenWeatherMap API
- Modules :
  - `request`
  - `node-fetch`
  - `axios`

1. **Cloner le projet** :

```bash
git clone https://github.com/Hergliyoussef/WeatherAPI-TP1.git
cd WeatherAPI-TP1
```

2. **Installer les dépendances** :

```bash
npm install request axios node-fetch
```

3. **Exécuter les scripts** :

```bash
node request-weather.js
node fetch-weather.js
node axios-weather.js
```

---

##  Exemple de réponse (ville de Sousse)

```bash
Ville : Sousse
Description : peu nuageux
Température : 20.88°C
Humidité : 78%
```

---

##  Auteur

Youssef Hergli  
Étudiant 4ème Informatique  
Encadrant : Dr. Salah Gontara
