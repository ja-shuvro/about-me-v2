export interface CaseStudy {
  id: string
  name: string
  tagline: string
  client: string
  timeline: string
  role: string
  color: string
  metrics: { label: string; value: string; sub: string }[]
  tech: string[]
  images: string[]
  links: {
    site?: string
    demo?: string
    playStore?: string
    appStore?: string
    video?: string
    github: string
  }
  overview: string
  problem: string
  solution: string
  architecture: string
  challenges: string
  features: string[]
  result: string
  futureImprovements: string[]
  datePublished: string
  dateModified: string
  programmingLanguage: string
  applicationCategory: string
  operatingSystem?: string
}

export const CASE_STUDIES_DATA: Record<string, CaseStudy> = {
  flirtmetrics: {
    id: 'flirtmetrics',
    name: 'Flirtmetrics',
    tagline: 'Event-Driven Real-Time Matchmaking & Chat Optimization',
    client: 'Dating Startup',
    timeline: '3 Months (2024)',
    role: 'Mobile Specialist & Flutter Developer',
    color: '#ff3366',
    metrics: [
      { label: 'Chat Latency', value: '<200ms', sub: 'from 8.2s delay' },
      { label: 'UI Frame Rate', value: '60 FPS', sub: 'stable swiping' },
      { label: 'User Retention', value: '+32%', sub: 'post-release analytics' },
      { label: 'App Rating', value: '4.8★', sub: 'iOS & Play Store' },
    ],
    tech: ['Flutter', 'Riverpod', 'WebSockets', 'SQLite', 'Firebase', 'REST API'],
    images: [
      '/flirtmetrics/thumbnail.png',
      '/flirtmetrics/slide1.png',
      '/flirtmetrics/slide2.png',
      '/flirtmetrics/slide3.png',
      '/flirtmetrics/slide4.png',
      '/flirtmetrics/slide5.png'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.flirtmetrics.app',
      appStore: 'https://apps.apple.com/pk/app/flirtmetrics-cold-approach/id6755988541',
      site: 'https://flirtmetrics.com/',
      github: 'Private Repository (Access available upon request)'
    },
    overview: 'Optimized a dating app matchmaking page and real-time chat infrastructure. Resolved critical UI thread blockages causing MATCH cards to freeze on swipe, and reduced chat delivery latency from 8 seconds to under 200ms by replacing HTTP short-polling with WebSockets.',
    problem: 'Flirtmetrics experienced severe user churn because matchmaking screens froze for up to 1.5 seconds during card swipes (due to synchronous Riverpod state rebuilds of the entire card deck). Additionally, chat delivery suffered from an 8-second delay because the client relied on high-frequency HTTP short-polling, overwhelming network threads and triggering API rate limits.',
    solution: 'Designed and deployed a custom WebSocket connection manager in Flutter with heartbeat pinging and auto-reconnect logic. Implemented a local SQLite sync cache, allowing messages to render instantly offline while background threads sync remote state. Rewrote the card swiping widget using isolated state listeners to isolate builds to the swiped card only.',
    architecture: 'Clean architecture implementation using Flutter Presentation layer (Riverpod states), Domain repositories, and Data sources (WebSocket stream client + SQLite offline DB cache). Back-end WebSockets route messages through a lightweight gateway.',
    challenges: 'Overcoming CPU thread lockups on low-end mobile devices during card deck recalculations. Bridging dynamic UI transitions with concurrent local SQLite writing and WebSocket message streaming.',
    features: [
      'Isolated Riverpod state deck listeners',
      'Bidirectional WebSocket message streaming client',
      'Local SQLite chat cache with compound indexing',
      'Heartbeat connection manager with retry back-off',
      'Fluid gesture swiping at constant 60 FPS'
    ],
    result: 'Chat delivery latency plummeted from 8s to under 200ms. Swipe interfaces stabilized at 60 FPS, boosting the application rating to 4.8★ and increasing retention by 32%.',
    futureImprovements: [
      'Transition chat caching to a reactive NoSQL store like Isar for faster object queries',
      'Integrate WebRTC channel layers for high-performance direct voice matchmaking'
    ],
    datePublished: '2024-03-01T00:00:00Z',
    dateModified: '2024-06-01T00:00:00Z',
    programmingLanguage: 'Dart',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'iOS, Android'
  },
  erp: {
    id: 'erp',
    name: 'ERP Platform',
    tagline: 'Enterprise Supply Chain & Ledger Performance Engineering',
    client: 'Agro-Industrial Corp',
    timeline: '5 Months (2025)',
    role: 'Full-Stack Developer & Database Architect',
    color: '#00ff88',
    metrics: [
      { label: 'Stock Error Rate', value: '<0.8%', sub: 'from 24% discrepancies' },
      { label: 'Order Processing', value: '<30m', sub: 'from 4-day delays' },
      { label: 'Approval Speed', value: 'Instant', sub: 'automated workflows' },
      { label: 'Sales Velocity', value: '+18%', sub: 'dealer hub metrics' },
    ],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    images: [
      '/erp/dashboard.png',
      '/erp/login.png',
      '/erp/report.png',
      '/erp/stock-level.png',
      '/erp/notification.png'
    ],
    links: {
      demo: 'https://erp-client-six.vercel.app/',
      github: 'Private Repository (Access available upon request)'
    },
    overview: 'Engineered a highly responsive enterprise resource planning system for stock allocation, accounting audits, and auto-dispatched dealer approvals. Cut down inventory sync errors to near-zero and automated orders workflow.',
    problem: 'An agro-industrial firm managing 100+ dealers relied on manual Excel ledgers and paper signature systems. This resulted in an average 24% stock discrepancy between warehouses and a 4-day latency to process orders. Financial reports took minutes to generate because raw SQL queries scanned millions of unindexed records under heavy lock contention.',
    solution: 'Built a rule-based state machine in Node.js that routes approval notifications in parallel based on transaction sizes. Implemented compound B-tree indexing in PostgreSQL and partitioned transaction tables by financial quarters. Developed a fast, glassmorphic Next.js dashboard featuring offline service worker synchronization.',
    architecture: 'Next.js App Router for frontend UI, Node.js microservices for state-routing engine, and partitioned PostgreSQL database layer. Push alerts are broadcasted via real-time WebSocket connections.',
    challenges: 'Resolving database lock contentions on transaction ledger tables during peak order dispatch periods. Optimizing Next.js client-side memory footprint for dashboards displaying real-time data feeds.',
    features: [
      'Parallel rule-based state approval machine',
      'Quarterly database partitioning on PostgreSQL transaction logs',
      'Aggregated ledger views and compound B-tree database indexing',
      'Real-time dealer push notifications (via WebSockets)',
      'Service worker-driven offline dashboard sync'
    ],
    result: 'Stock discrepancies reduced from 24% to under 0.8%. Order processing cycle dropped from 4 days to under 30 minutes. Sales velocity increased by 18% through the streamlined dealer portal.',
    futureImprovements: [
      'Implement Redis caching layer for quick access to aggregated financial reports',
      'Add machine-learning predictive algorithms to automatically forecast dealer stock replenishment cycles'
    ],
    datePublished: '2025-01-10T00:00:00Z',
    dateModified: '2025-05-15T00:00:00Z',
    programmingLanguage: 'TypeScript',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web'
  }
}
