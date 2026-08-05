// Single source of truth for project content — used by both
// Projects.jsx (teaser cards) and ProjectDetail.jsx (full case study).
// Add screenshots by dropping files in assets and setting `cover` / `gallery`.

const projects = [
  {
    slug: 'medizone',
    tag: 'Medical E-commerce',
    title: 'Medizone',
    description:
      'A full-stack medical e-commerce platform with a real product catalog, cart, and checkout flow — built to feel like a production store, not a demo.',
    points: [
      'Designed RESTful APIs, auth system & PostgreSQL models from scratch',
      'Built authentication, product management, cart & admin modules',
      'CI/CD pipeline for automated builds and deployments',
    ],
    stack: ['React', 'Django REST Framework', 'PostgreSQL', 'JWT Auth', 'CI/CD'],
    live: 'https://medizone-frontend-react.vercel.app',
    github: 'https://github.com/fynxn07',
    cover: null,
    gallery: [null, null, null],
    problem:
      'Medical retailers often rely on informal WhatsApp orders or generic templated storefronts that don\u2019t handle inventory, auth, or checkout reliably at scale.',
    approach:
      'Modeled products, orders, and users as a proper relational schema in PostgreSQL, exposed through a versioned Django REST Framework API, with JWT auth protecting cart and order endpoints. React consumes the API through a typed service layer so the frontend never talks to the database directly.',
    challenges:
      'Keeping cart state consistent between guest sessions and authenticated users was the trickiest part — solved by merging local cart state into the user\u2019s server-side cart on login rather than discarding one or the other.',
    learnings:
      'Got much more comfortable with DRF serializers and permission classes, and learned to set up a CI/CD pipeline so every push to main auto-deploys instead of manual redeploys.',
  },
  {
    slug: 'menusnap',
    tag: 'Restaurant SaaS',
    title: 'MenuSnap',
    description:
      'A SaaS-style digital menu platform — restaurants get a QR code, customers scan and browse a live, dynamic menu with zero app installs.',
    points: [
      '20+ REST API endpoints built on PostgreSQL',
      'QR-based menu access with restaurant management & auth',
      'Deployed production services on AWS EC2 with Nginx + Gunicorn',
    ],
    stack: ['React.js', 'Django REST Framework', 'PostgreSQL', 'AWS EC2', 'QR Access'],
    live: null,
    github: 'https://github.com/fynxn07',
    cover: null,
    gallery: [null, null, null],
    problem:
      'Small restaurants needed a way to update menus instantly (prices, availability, specials) without reprinting physical menus or paying for a bulky POS system.',
    approach:
      'Built a multi-tenant-style Django backend where each restaurant manages its own menu through an admin panel, and customers hit a public read-only endpoint via a QR-linked URL — no login required for diners.',
    challenges:
      'Deploying reliably on a single AWS EC2 instance meant configuring Nginx as a reverse proxy in front of Gunicorn correctly, including handling static file serving and process restarts without downtime.',
    learnings:
      'First real hands-on experience owning a Linux deployment end-to-end instead of relying on a PaaS — a big step toward understanding what happens after "it works on my machine."',
  },
  {
    slug: 'elderlycare-assist',
    tag: 'Mobile · Flutter',
    title: 'ElderlyCare Assist',
    description:
      'A mobile-first assistance app for elderly users, focused on safety — real-time alerts driven directly off device sensors.',
    points: [
      'Flutter-based cross-platform mobile application',
      'Real-time alerts using Firebase + on-device sensors',
      'Built for clarity and accessibility over visual flash',
    ],
    stack: ['Flutter', 'Firebase', 'Realtime Alerts', 'Sensors'],
    live: null,
    github: 'https://github.com/fynxn07',
    cover: null,
    gallery: [null, null, null],
    problem:
      'Elderly users needed a way to signal for help or be automatically flagged during a fall or irregular movement, without navigating a complex interface.',
    approach:
      'Used device sensors (accelerometer-based motion detection) to trigger alert events, pushed through Firebase in real time to a connected caregiver, with a deliberately minimal, high-contrast UI.',
    challenges:
      'Balancing sensor sensitivity — too strict and real falls get missed, too loose and normal movement triggers false alarms — required iterating on thresholds through manual testing.',
    learnings:
      'First mobile project outside the web stack; learned how Flutter\u2019s widget tree and state management differ from React\u2019s component model, and how to work with device-level APIs.',
  },
];

export default projects;