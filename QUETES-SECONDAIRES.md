# Backlog : Évolutions & Features "Angular Course Hub"

Ce document recense les idées de fonctionnalités et de composants pour enrichir l'expérience d'apprentissage et améliorer l'interface de la plateforme.

---

## 🎨 Catégorie : Expérience Utilisateur (UI/UX)

### 🌗 Composant `ThemeControlComponent`
**Description** : Un sélecteur de thème intégré à la barre de navigation pour changer l'apparence de l'application (ex: Light, Dark, Retro, Cyberpunk) en utilisant les thèmes de **daisyUI**.

*   **Fonctionnalités clés** :
    *   Changement instantané du thème sans rechargement de la page.
    *   Persistance de la préférence utilisateur via le `localStorage`.
*   **Valeur Utilisateur** : Confort visuel adapté à l'environnement de l'utilisateur (mode sombre pour le soir, mode clair pour le jour).
*   **Défis Techniques** :
    *   Implémentation d'un service de gestion de thème (`ThemeService`).
    *   Manipulation du DOM (via `Renderer2`) pour appliquer la classe du thème sur la balise `<html>`.
*   **Note de conformité (RGPD)** : Bien que le thème soit une préférence non-identifiante, une mention doit être ajoutée dans la politique de confidentialité si nous stockons ces données pour personnaliser l'expérience de manière persistante.

---

## 🎓 Catégorie : Expérience d'Apprentissage (EdTech)

### 📜 Composant `ExerciseInstructionsComponent`
**Description** : Un composant réutilisable placé au sein de chaque leçon/exercice pour afficher les consignes de manière structurée (étapes, objectifs, difficultés).

*   **Fonctionnalités clés** :
    *   Affichage de consignes par "steps" (étapes).
    *   Suivi de progression en temps réel.
*   **Valeur Utilisateur** : Meilleure clarté pédagogique et réduction de la charge cognitive. L'étudiant sait exactement ce qu'il doit faire et où il en est.
*   **Architecture de données (Recherche en cours)** :
    *   **Option A (Statique)** : Fichier `.json` local chargé via `HttpClient`. *Avantage : Facile à maintenir, séparation du code et du contenu.*
    *   **Option B (Directe)** : Constantes TypeScript exportées. *Avantage : Performance maximale, typage fort immédiat.*
    *   *Analyse Performance* : Le chargement d'un petit JSON est négligeable, mais l'option A est préférable pour l'évolutivité (facilité de mise à jour du contenu sans recompiler l'app).
*   **Défis Techniques (Communication entre composants)** :
    *   **`@Input()`** : Pour injecter l'ID de l'exercice ou le contenu des instructions dans le composant.
    *   **`@Output()`** : Pour émettre des événements vers le composant parent (ex: `stepCompleted`, `exerciseFinished`).
    *   **Persistence** : Utilisation du `localStorage` pour sauvegarder la progression (étapes complétées) afin que l'utilisateur ne perde pas son avancement en rafraîchissant la page.

---

## 📈 Roadmap de développement suggérée

1.  **Priorité Haute (Quick Wins)** :
    *   [ ] Mise en place du `ThemeControlComponent` (Amélioration visuelle immédiate).
    *   [ ] Création du composant `ExerciseInstructions` (Amélioration pédagogique directe).

2.  **Priorité Moyenne (Complexité technique)** :
    *   [ ] Implémentation de la logique de suivi de progression via `@Output` et `localStorage`.
    *   [ ] Migration des consignes vers un système de fichiers `.json` externes.

3.  **Priorité Basse (Améliorations continues)** :
    *   [ ] Système de statistiques utilisateur (via `localStorage` ou base de données).
    *   [ ] Mise à jour de la politique de confidentialité pour refléter le stockage des préférences.



