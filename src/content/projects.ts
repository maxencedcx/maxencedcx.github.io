export interface Project {
    id: string;
    slug: string;
    override_title?: {fr: string, en: string};
    title: string;
    year_of_release?: string;
    platforms?: string[];
    sales?: string;
    genre: { fr: string; en: string };
    nominations?: string[];
    duration: { fr: string; en: string };
    team?: { fr: string; en: string };
    company?: string;
    role: { fr: string; en: string };
    tags: string[];
    short_description: {fr: string; en: string };
    description: { fr: string; en: string };
    tech_description?: {fr: string; en: string };
    itch_url?: string;
    itch_embed?: string;
    steam_url?: string;
    code_url?: string;
}

export function isPro(project: Project): boolean {
    return project.company != null;
}

export const projects: Project[] = [
    {
        id: '001',
        slug: 'project-001',
        title: 'Tabletop Soccer',
        year_of_release: '2022',
        genre: {fr: 'Football', en: 'Soccer'},
        duration: {fr: '50h · Game Jam', en: '50h · Game Jam'},
        team: {fr: 'Iris PECQUET, Eloïse ZIROTTI, Kryse, Adrien FEUGERE, RoPo, Guillaume VANUXEM, Robin SIX, Maxence DELACROIX', en: 'Iris PECQUET, Eloïse ZIROTTI, Kryse, Adrien FEUGERE, RoPo, Guillaume VANUXEM, Robin SIX, Maxence DELACROIX'},
        role: {fr: 'Programmeur', en: 'Programmer'},
        tags: ['Unity', 'C#', 'Local multiplayer', 'Game Design'],
        short_description : {
            fr: `Tabletop Soccer est un jeu de football en multijoueur réalisé le temps d'un weekend pour la GMTK 2022, qui avait comme thème "Roll of the dice".`,
            en: 'Tabletop Soccer is a multiplayer soccer game that was coded in a span of a weekend for the GMTK 2022, themed around "Roll of the dice".'
        },
        description: {
            fr: `Tabletop Soccer est un jeu de football en multijoueur réalisé le temps d'un weekend pour la GMTK 2022, qui avait comme thème "Roll of the dice".\n
            Jouable de 2 à 6 joueurs, deux équipes s'affrontent dans un match de foot dans lequel le ballon a pris la forme d'un dé. Chaque fois que le dé s'arrête sur une face pendant quelques instants, il déclenche un des 6 effets pour rendre la partie plus chaotique.`,
            en: 'Tabletop Soccer is a multiplayer soccer game that was coded in a span of a weekend for the GMTK 2022, themed around "Roll of the dice".\n' +
                'Playable from 2 to 6 players, two teams are playing against each other in a soccer match, in which the ball took the form of a dice. Each time the dice stops for a few moments on one of its faces, a magic effect is triggered to make the game more chaotic.',
        },
        itch_url: 'https://sixrobin.itch.io/tabletopsoccer',
    },
    {
        id: '002',
        slug: 'project-002',
        title: 'Loopin\' Goblin',
        year_of_release: '2025',
        genre: {fr: 'Action', en: 'Action'},
        duration: {fr: '96h · Game Jam', en: '96h · Game Jam'},
        team: {fr: 'Eloïse ZIROTTI, Robin SIX, Maxence DELACROIX', en: 'Eloïse ZIROTTI, Robin SIX, Maxence DELACROIX'},
        role: {fr: 'Programmeur', en: 'Programmer'},
        tags: ['Unity', 'C#', 'WebGL', 'Game Design'],
        short_description: {
            fr: `Loopin' Goblin est un jeu d'action point and click réalisé dans le cadre de la GMTK 2025, qui avait comme thème "Loop".`,
            en: `Loopin' Goblin is a point and click action game that was coded for GMTK 2025, themed around "Loop".`
        },
        description: {
            fr: `Loopin' Goblin est un jeu d'action point and click réalisé dans le cadre de la GMTK 2025, qui avait comme thème "Loop".\n
             Le joueur est le commandant d'une armée de goblins qui marche en boucle. Le joueur modifie le parcours de son armée en déplaçant des bannières à l'aide sa souris afin d'esquiver les projectiles, de récupérer des bonus et d'affronter les ennemis.`,
            en: `Loopin' Goblin is a point and click action game that was coded for GMTK 2025, themed around "Loop".\n
             The player is the commander of a goblin army walking in a loop. To modify the path of its army, the player needs to drag and drop several banners, therefore dodging projectiles, gathering bonuses and attacking ennemies.`,
        },
        itch_url: 'https://sixrobin.itch.io/loopingoblin',
        itch_embed: 'https://itch.io/embed-upload/14669901?color=000000',
    },
    {
        id: '003',
        slug: 'project-003',
        title: 'Kuiper Space Rescue',
        year_of_release: '2026',
        genre: {fr: 'Exploration', en: 'Exploration'},
        duration: {fr: '48h · Game Jam', en: '48h · Game Jam'},
        team: {fr: 'Eloïse ZIROTTI, Robin SIX, Iris PECQUET, Maxence DELACROIX', en: 'Eloïse ZIROTTI, Robin SIX, Iris PECQUET, Maxence DELACROIX'},
        role: {fr: 'Programmeur', en: 'Programmer'},
        tags: ['Godot', 'GDScript', 'WebGL', 'Game Design'],
        short_description: {
            fr: `Kuiper Space Rescue est un jeu d'exploration réalisé dans le cadre de la Ludum Dare 59, qui avait comme thème "Signal".`,
            en: `Kuiper Space Rescue is an exploration game made for Ludum Dare 59, themed around "Signal".`,
        },
        description: {
            fr: `Kuiper Space Rescue est un jeu d'exploration réalisé dans le cadre de la Ludum Dare 59, qui avait comme thème "Signal".\n
            Le joueur incarne un vaisseau spatial perdu dans l'obscurité de l'espace, avec comme seul outil un radar qui permet de détecter de manière temporaire les astéroïdes aux alentours. Pour finir le jeu, le joueur doit réparer 6 satellites qui sont éparpillés et cachés à divers endroits de la carte. Des bonus sont également disponibles, aidant à la navigation ou à la détection des astéroïdes. Il faudra être patient et avancer de manière prudente, car au bout de 3 collisions c'est la mort et on recommence à zéro avec une nouvelle carte.\n
            Nous avions fait le choix d'avoir un jeu simple dans son gameplay mais ayant une forte identité visuelle, inspirée des films des années 80 et leur style "cassette futuriste". Pour cela, de nombreux détails sont présents et poussés dans leur niveau de polish.`,
            en: `Kuiper Space Rescue is an exploration game made for Ludum Dare 59, themed around "Signal".\n
            The player controls a spaceship lost in the darkness of space, with only a radar as a tool that allows them to temporarily detect nearby asteroids. To complete the game, the player must repair 6 satellites scattered and hidden across the map. Bonuses are also available, helping with navigation or asteroid detection. Patience and careful movement are key, as 3 collisions mean death and a fresh start with a newly generated map.\n
            We made the deliberate choice to keep the gameplay simple while building a strong visual identity, inspired by 80s films and their "cassette futurism" aesthetic. For that, a lot of details are displayed and pushed to a high level of polish.`,
        },
        itch_url: 'https://sixrobin.itch.io/kuiperspacerescue',
        itch_embed: 'https://itch.io/embed-upload/17234926?color=000000',
    },
    {
        id: '004',
        slug: 'project-004',
        title: 'The Last Spell',
        year_of_release: '2023',
        platforms: ['PC', 'PS4', 'PS5', 'Switch'],
        sales: "~500k+",
        company: 'Ishtar Games',
        genre: {fr: 'RPG Tactical', en: 'Tactical RPG'},
        nominations: ['Pégase 2022', 'Dice Awards 2024'],
        duration: {fr: '3 ans', en: '3 years'},
        team: {fr: '~15 personnes', en: '~15 people'},
        role: {fr: 'Gameplay Programmeur, Lead programmeur', en: 'Gameplay Programmer, Lead programmer'},
        tags: ['Unity', 'C#', 'SVN', 'Roguelike', 'Pathfinding', 'Algorithms'],
        short_description: {
            fr: `THE LAST SPELL est un tactical RPG se déroulant dans un monde post-apocalyptique arborant un style dark-fantasy. Le jeu implémente une multitudes de mécaniques roguelike et présente un gameplay profond et complexe, caractéristique du genre.`,
            en: `THE LAST SPELL is a tactical RPG set in a post-apocalyptic world with a dark fantasy aesthetic. The game implements a wide range of roguelike mechanics and features deep, complex gameplay characteristic of the genre.`,
        },
        description: {
            fr: `THE LAST SPELL est un tactical RPG se déroulant dans un monde post-apocalyptique arborant un style dark-fantasy. Le jeu implémente une multitudes de mécaniques roguelike et présente un gameplay profond et complexe, caractéristique du genre.\n
                Le joueur dirige une équipe d’une poignée de héros et doit protéger une ville pendant un nombre de jours fixe. La journée il prépare ses défenses et la nuit il fait face à des hordes de zombies.\n
                THE LAST SPELL correspond à ma première opportunité professionnelle dans le milieu du jeu vidéo et travailler sur ce projet était une expérience enrichissante.\n
                Tout au long des trois années de production, la nécessité de mettre en place des méthodes de travail au coeur de notre équipe de développement m’ont amené à accepter le rôle de lead programmeur et à proposer différents préceptes de travail (nomenclature, architecture, documentation).\n
                Chercher à avoir un impact long terme au sein du studio et non pas seulement sur un projet unique mais également sur les suivants fut une véritable motivation pour moi.\n
                Un travail d’équipe continu et une répartition intelligente du travail a permis un environnement d’échange qui a été bénéfique à tous.
                A la suite de THE LAST SPELL, débuter un autre projet (non annoncé) avec la même équipe de développeur nous a permis de solidifier nos acquis et de confirmer nos méthodes et nos rôles. Au sein d’ISHTAR GAMES j’ai donc pu concrétiser ma vision de la programmation à travers les architectures de code que j’ai mis en place. La modularité, la maintenabilité et l’agnosticisme des systèmes est au coeur de ma philosophie de travail.`,
            en: `THE LAST SPELL is a tactical RPG set in a post-apocalyptic world with a dark fantasy aesthetic. The game implements a wide range of roguelike mechanics and features deep, complex gameplay characteristic of the genre.\n
                The player leads a small team of heroes and must protect a city for a fixed number of days. During the day they prepare their defenses, and at night they face waves of zombies.\n
                THE LAST SPELL was my first professional opportunity in the video game industry and working on this project was a deeply rewarding experience.\n
                Throughout the three years of production, the need to establish solid working methods within our development team led me to take on the role of lead programmer and to propose various working principles (naming conventions, architecture, documentation).\n
                Seeking to have a long-term impact within the studio — not just on a single project but on future ones as well — was a genuine motivation for me.\n
                Continuous teamwork and smart task distribution fostered an environment of knowledge-sharing that benefited everyone.\n
                Following THE LAST SPELL, starting another project (unannounced) with the same development team allowed us to consolidate what we had learned and confirm our methods and roles. Within ISHTAR GAMES I was able to bring my vision of programming to life through the code architectures I put in place. Modularity, maintainability and system agnosticism are at the core of my working philosophy.`,
        },
        tech_description: {
            fr: `• Développement et implémentation d'algorithmes, tel que le KMeans utilisé pour optimiser les mouvements de caméra
            • Système de "code" XML, permettant aux game designers de créer du nouveau gameplay sans avoir besoin d'un game dev et ouvrant la porte au modding joueur
            • Des missions diverses de gameplay, d'UI, d'IA, de gestion de fichiers de sauvegarde ainsi que du bugfix`,
            en: `• Development and implementation of several algorithms, such as KMeans used to optimize camera movements
            • XML "code" system, allowing game designers to create new gameplay without the need for a game dev and opening the modding possibilities
            • Diverse game developer missions, such as gameplay, UI, AI, save file management as well as bugfixes`,
        },
        steam_url: 'https://store.steampowered.com/app/1105670/The_Last_Spell/',
    },
    {
        id: '005',
        slug: 'project-005',
        override_title: {
            fr: "Projet non annoncé",
            en: "Unannounced project",
        },
        title: 'NDA Project',
        company: 'Ishtar Games',
        genre: {fr: '????', en: '????'},
        duration: {fr: '2 ans', en: '2 years'},
        team: {fr: '~15 personnes', en: '~15 people'},
        role: {fr: 'Lead programmeur', en: 'Lead programmer'},
        tags: ['Unity', 'C#', 'SVN', 'SOLID', 'ScriptableObjects', 'Multiplayer'],
        short_description: {
            fr: `Projet sous NDA.`,
            en: `Project under NDA.`,
        },
        description: {
            fr: `Projet encore sous NDA. Ce jeu est le premier projet professionnel pour lequel j'ai désigné l'architecture code de A à Z. J'ai ainsi organisé le développement d'une nouvelle librairie interne au studio pensée sur le long terme, j'ai unifié le coding style de l'équipe de développement et je me suis assuré que les bonnes pratiques étaient respéctées dès le début pour chaque feature afin de poser une base solide et stable sur laquelle il était simple et agréable de travailler. Pas de code spaghetti, aucune fonction dupliquée et une approche modulaire et agnostique.`,
            en: `Project still under NDA. This game is the first professional project for which I designed the code architecture from A to Z. I organized the development of a new internal studio library built with longevity in mind, unified the coding style across the development team, and made sure best practices were followed from the start for every feature, laying a solid and stable foundation that was simple and enjoyable to build upon. No spaghetti code, no duplicated functions, and a modular, agnostic approach.`,
        },
        tech_description: {
            fr: `• Design d'architecture code
            • Code reviews
            • Mise en place d'une architecture multijoueur via Unity network
            • Système d'action, de conditions et de durée via Scriptable Objects`,
            en: `• Code architecture design
            • Code reviews
            • Multiplayer architecture using Unity network
            • Action, conditions and duration systems using Scriptable Objects`,
        },
    },
    {
        id: '006',
        slug: 'project-006',
        title: 'ENDOPLANETO',
        company: 'NextSoundLab',
        genre: {fr: 'Expérience immersive', en: 'Immersive experience'},
        duration: {fr: 'En cours', en: 'Ongoing'},
        team: {fr: 'Antoine BOUCHERIKHA, Anne HÉLOU, Thomas ROUVILLAIN, Ambrune MARTIN, Aurélie STEUNOU-GUÉGAN, Maxence DELACROIX', en: 'Antoine BOUCHERIKHA, Anne HÉLOU, Thomas ROUVILLAIN, Ambrune MARTIN, Aurélie STEUNOU-GUÉGAN, Maxence DELACROIX'},
        role: {fr: 'Tech Lead', en: 'Tech Lead'},
        tags: ['Unity', 'C#', 'Git', 'GitLab', 'iOS', 'Simulation', 'WWise', 'Burst'],
        short_description: {
            fr: `ENDOPLANETO se positionne à la frontière entre le jeu vidéo et l’expérience audio interactive, reprenant les caractéristiques de ces deux médias et les équilibrant dans une expérience originale.`,
            en: `ENDOPLANETO positions itself at the boundary between video games and interactive audio experience, drawing on the characteristics of both mediums and balancing them into an original experience.`,
        },
        description: {
            fr: `ENDOPLANETO se positionne à la frontière entre le jeu vidéo et l’expérience audio interactive, reprenant les caractéristiques de ces deux médias et les équilibrant dans une expérience originale.\n
            Le projet prend deux formes, l’une statique sur téléphone et l’autre en déplacement libre (6DOF). Ces deux formes invitent le·la joueur·euse à réfléchir sur son rapport au vivant en mettant en avant l’écoute ainsi que la perception de soi et de ce qui nous entoure.`,
            en: `ENDOPLANETO positions itself at the boundary between video games and interactive audio experience, drawing on the characteristics of both mediums and balancing them into an original experience.\n
            The project takes two forms, one static on phone and the other in free movement (6DOF). Both forms invite the player to reflect on their relationship with the living world by foregrounding listening as well as the perception of oneself and one's surroundings.`,
        },
        tech_description: {
            fr: `• Simulation de vie animale réagissant à son environnement en temps réel
            • Boids system en utilisant Unity Burst
            • Plugin Wwise
            • Système de bruit de pas
            • Système de météo, Cycle jour/nuit
            • CD/CI, build iOS et déploiement apple store
            • Mise en place d'un gitlab self-hosté via Scaleway`,
            en: `• Animal life simulation, reacting to is environment in real time
            • Boids system using Unity Burst
            • Wwise plugin
            • Footsep system
            • Weather system, night/day cycle
            • CD/CI, iOS build and apple store publishing
            • Self-hosted gitlab server using Scaleway`,
        },
    },
];

export const lastProject = projects[projects.length - 1];
