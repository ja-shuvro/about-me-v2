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
    tagline: 'Enterprise Supply Chain, Redis Caching & Ledger Performance Engineering',
    client: 'Agro-Industrial Corp',
    timeline: '5 Months (2025 - 2026)',
    role: 'Full-Stack Developer & Database Architect',
    color: '#00ff88',
    metrics: [
      { label: 'Stock Error Rate', value: '<0.8%', sub: 'from 24% discrepancies' },
      { label: 'Order Processing', value: '<30m', sub: 'from 4-day delays' },
      { label: 'Audit Log Throughput', value: '50/batch', sub: 'async Redis micro-batching' },
      { label: 'Cache Latency', value: '<5ms', sub: 'Redis + auto fallback' },
    ],
    tech: ['Next.js', 'React', 'NestJS', 'Node.js', 'Redis (ioredis)', 'Prisma ORM', 'PostgreSQL', 'WebSockets', 'Tailwind CSS'],
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
    overview: 'Engineered a high-performance enterprise ERP suite for supply chain management, dealer orders, and multi-warehouse accounting. Implemented an asynchronous Redis micro-batch audit queue, pattern-based Redis cache invalidation for RBAC security, connection-pooled PostgreSQL with Prisma PG adapter, and an automated promotional bonus product lifecycle with COGS tracking.',
    problem: 'An agro-industrial firm managing 100+ dealers relied on manual Excel ledgers and paper signature systems. This resulted in an average 24% stock discrepancy between warehouses and a 4-day latency to process orders. Financial reports took minutes to generate because raw SQL queries scanned millions of unindexed records under heavy lock contention, and audit log write spikes dragged down checkout throughput.',
    solution: 'Built an asynchronous Redis audit logging queue with micro-batching (50 records or 2s intervals) and a resilient in-memory fallback with a 5000-item backpressure cap. Designed pattern-based Redis caching (`invalidatePrefix`) with automated invalidation on RBAC role/user/warehouse updates. Added promotional bonus product support with promotional COGS tracking across sales orders, deliveries, and invoices, with balanced Journal Voucher (JV) posting for transaction fees.',
    architecture: 'Decoupled Enterprise Architecture: Next.js App Router frontend communicating with a modular NestJS backend. PostgreSQL database layer optimized via Prisma PG adapter connection pooling. High-throughput mutations stream to an async Redis audit log queue, while WebSocket gateways broadcast real-time inventory updates and approval notifications.',
    challenges: 'Preventing audit log writes from blocking critical order submission transactions during peak dealer dispatches, and eliminating security vulnerabilities caused by stale permissions cached in Redis. Resolved by building a non-blocking RxJS queue subscriber with batch flushing and hook-based cache eviction on user/role/warehouse mutations.',
    features: [
      'Asynchronous Redis audit queue with micro-batching (50 items / 2s) and graceful shutdown draining',
      'In-memory fallback cache with 5000-item backpressure cap and drop-oldest eviction policy',
      'Instant Redis cache invalidation on RBAC role, permission, user, and warehouse mutations',
      'Prisma PG connection pool tuning (@prisma/adapter-pg) for lock-free high-concurrency ledgers',
      'Promotional bonus product engine: 0-price lifecycle across SO, Delivery, Invoice, and COGS accounting',
      'Automated balanced Journal Voucher (JV) posting for collection & supplier payment charges',
      'Parallel rule-based state approval machine with flat & percent discount toggles',
      'Real-time dealer push notifications and live dashboard alerts via WebSockets'
    ],
    result: 'Stock discrepancies reduced from 24% to under 0.8%. Order processing cycle dropped from 4 days to under 30 minutes. Audit logging overhead dropped to near-zero non-blocking writes, and Redis caching brought dashboard response times under 5ms.',
    futureImprovements: [
      'Implement predictive machine-learning algorithms to forecast dealer replenishment cycles',
      'Add distributed tracing with OpenTelemetry across NestJS microservice nodes'
    ],
    datePublished: '2025-01-10T00:00:00Z',
    dateModified: '2026-09-15T14:00:00Z',
    programmingLanguage: 'TypeScript',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web'
  },
  negmp: {
    id: 'negmp',
    name: 'NEGMP Proposal',
    tagline: 'National Environmental GIS Monitoring Platform',
    client: 'Ministry of Environment, Forests and Climate Change (Govt. of Bangladesh)',
    timeline: 'April 2026',
    role: 'System Architect & Proposal Author',
    color: '#00e5ff',
    metrics: [
      { label: 'Plantation Target', value: '250M', sub: 'trees over 5 years' },
      { label: 'Pilot Region', value: 'Rajshahi', sub: 'Barind Tract focus' },
      { label: 'Verification', value: 'NDVI', sub: 'Google Earth Engine' },
      { label: 'Data Model', value: 'GeoEntity', sub: 'universal spatial core' },
    ],
    tech: ['NestJS', 'Next.js', 'Flutter', 'PostgreSQL', 'PostGIS', 'Google Earth Engine API', 'Keycloak', 'Leaflet.js', 'MapLibre GL', 'Redis', 'Prisma'],
    images: [
      '/negmp/thumbnail.png'
    ],
    links: {
      github: 'Proposal Document (Submitted/Under Review)'
    },
    overview: 'A humble design proposal for a National Environmental GIS Monitoring Platform (NEGMP), submitted to the Ministry of Environment, Forests and Climate Change, Government of Bangladesh. Combining my background in Agriculture with local context from living in the Rajshahi pilot region, I designed a multi-layer monitoring blueprint. I treat this design as an open starting point, eager to adapt and refine it based on feedback from experienced GIS experts and forestry officials.',
    problem: 'National plantation monitoring has historically relied on manual field logs, which can lead to reporting gaps. The government sought a way to integrate GPS and satellite-based confirmation. My goal was to design a conceptual path to close this gap, keeping in mind that actual field implementation requires deep listening and adapting to the workflows of local officers.',
    solution: 'Designed a conceptual 5-layer architecture centered around a flexible, universal GeoEntity data model. I proposed an offline-first Flutter application to support field workers in low-connectivity areas like the Barind Tract, and a satellite verification pipeline using Google Earth Engine API. I approached this design as a learner, understanding that production-grade remote sensing would rely on collaboration with experienced GIS specialists.',
    architecture: 'Proposed 5-layer system: Backend API (NestJS + PostgreSQL/PostGIS/Prisma), Field Mobile App (Flutter + PWA fallback), Interactive Web Dashboard (Next.js + Leaflet.js / MapLibre GL), Satellite Verification Pipeline (Google Earth Engine API), and Identity/Auth (Keycloak OIDC).',
    challenges: 'Designing a flexible data structure that allows future modules (like water level or weather) without complex database redesigns, while recognizing my own learning curve in Google Earth Engine remote sensing workflows.',
    features: [
      'Universal GeoEntity shared spatial data foundation',
      'Conceptual NDVI vegetation analysis pipeline via Google Earth Engine API',
      'Offline-first mobile data capture with PWA fallback designed for low-connectivity zones',
      'Role-based access control with Keycloak SSO integration',
      'Extensible future-proof modules designed to accommodate weather and water tracking'
    ],
    result: 'The proposal was submitted on April 25, 2026, and is under review. Designing it was a profound learning experience in geospatial planning and public-sector collaboration.',
    futureImprovements: [
      'Learn from on-the-ground Forest Department officers to adapt and simplify field workflows',
      'Collaborate closely with production GIS specialists to refine Google Earth Engine algorithms, using it as an opportunity to deepen my understanding'
    ],
    datePublished: '2026-04-25T00:00:00Z',
    dateModified: '2026-04-25T00:00:00Z',
    programmingLanguage: 'TypeScript / Dart',
    applicationCategory: 'GeospatialMonitoringApplication',
    operatingSystem: 'Web, Android, iOS'
  },
  'hr-interview-system': {
    id: 'hr-interview-system',
    name: 'HR Interview System',
    tagline: 'AI-Powered Autonomous Video & Voice Mock Interview Platform',
    client: 'Enterprise HR & Talent Acquisition',
    timeline: 'Nov 2025 – Apr 2026',
    role: 'Applied AI Engineer & Full-Stack Architect',
    color: '#00f5ff',
    metrics: [
      { label: 'Screening Time', value: '-75%', sub: 'from 45m manual screening' },
      { label: 'STT Accuracy', value: '98.5%', sub: 'Whisper audio transcription' },
      { label: 'Async Latency', value: '<3.2s', sub: 'background status polling' },
      { label: 'Completion Rate', value: '92%', sub: 'React SPA step-by-step UX' },
    ],
    tech: ['WordPress Plugin', 'React 18', 'OpenAI Whisper', 'GPT-4o', 'OpenAI TTS', 'WebRTC', 'PHP 8', 'REST API', 'CSS Modules', 'OneCloud Credits'],
    images: [
      '/hr-interview-system/thumbnail.png',
      '/hr-interview-system/slide1.png'
    ],
    links: {
      github: 'Private Repository (Access available upon request)'
    },
    overview: 'Architected and engineered an end-to-end autonomous HR interview and assessment system inside WordPress. Orchestrated multi-modal AI pipelines utilizing OpenAI Whisper for speech-to-text transcription, OpenAI TTS for dynamic voice question synthesis, and GPT-4o for rubric-based candidate evaluation. Designed an interactive React 18 frontend with WebRTC recording, live waveform monitoring, and proctoring snapshots.',
    problem: 'Enterprise hiring teams face bottlenecked recruitment pipelines: screening hundreds of candidate interviews consumes hundreds of manual engineering hours, produces inconsistent subjective evaluations, and introduces high scheduling latency. Off-the-shelf SaaS alternatives are rigid, cost-prohibitive, and lack explainable multi-parameter scoring rubrics for verbal, vocal, and non-verbal candidate performance.',
    solution: 'Engineered a standalone WordPress plugin with custom database schemas, tokenized candidate invitations, and a dual-build React 18 application (Candidate SPA & Super Admin Portal). Implemented an asynchronous background evaluation engine with status polling to prevent gateway timeouts during heavy LLM execution. Built an integrated site-wide token credit calculation subsystem with automated CSV exports.',
    architecture: 'Decoupled WordPress & React Architecture: WordPress REST API (`/wp-json/his/v1/`) powering a modular React 18 frontend (Webpack 5, CSS Modules). Backend orchestrates OpenAI Whisper audio ingestion, TTS generation, GPT evaluation prompts, and relational tracking across sessions, invitations, and audio/video artifacts.',
    challenges: 'Handling synchronous timeout thresholds on HTTP requests when transcribing long multi-question candidate audio answers and computing multi-metric AI scoring rubrics. Resolved via asynchronous job dispatching, status polling, and optimistic UI transitions. Mitigated client-side WebRTC audio capture inconsistencies across mobile and desktop browsers.',
    features: [
      'Multi-modal candidate interview pipeline with WebRTC video and audio capture',
      'High-accuracy speech-to-text transcription via OpenAI Whisper API',
      'Natural conversational voice question synthesis powered by OpenAI TTS',
      'Multi-dimensional AI scoring rubrics (Technical Depth, Communication, Tone & Sentiment)',
      'Asynchronous evaluation queue with polling mechanism to eliminate HTTP timeouts',
      'Automated candidate proctoring snapshots and CSV candidate export',
      'Fine-grained token credit budgeting and deduction management'
    ],
    result: 'Reduced initial candidate screening time by 75%, delivered 98.5% transcription accuracy across multi-accent speech, maintained sub-3.2s async polling feedback, and achieved a 92% interview completion rate through a guided glassmorphic React interface.',
    futureImprovements: [
      'Implement real-time WebRTC bi-directional streaming for zero-latency AI interruption handling',
      'Integrate local on-device Whisper models via WebAssembly for offline and privacy-first transcription'
    ],
    datePublished: '2025-11-17T10:45:27Z',
    dateModified: '2026-04-13T11:27:30Z',
    programmingLanguage: 'PHP / TypeScript / React',
    applicationCategory: 'AppliedAIEngineeringApplication',
    operatingSystem: 'Web, Cloud'
  },
  'medical-interview-bot': {
    id: 'medical-interview-bot',
    name: 'Medical Interview Bot',
    tagline: 'Specialized Clinical AI Mock Interviewer & Diagnostics Viva Simulator',
    client: 'Medical Education & Healthcare Residency',
    timeline: 'Feb 2026 – Apr 2026',
    role: 'Applied AI Engineer & Clinical System Integrator',
    color: '#00ff88',
    metrics: [
      { label: 'CV Question Gen', value: '<2.4s', sub: 'zero-shot clinical parsing' },
      { label: 'Persona Accuracy', value: '99%', sub: 'department-specific rubrics' },
      { label: 'Candidate Rating', value: '4.9★', sub: 'clinical simulation reviews' },
      { label: 'Audio Latency', value: '<400ms', sub: 'TTS media stream caching' },
    ],
    tech: ['WordPress Plugin', 'OpenAI GPT-5-Nano', 'GPT-4o-mini', 'Whisper STT', 'OpenAI TTS', 'WebRTC', 'smalot/pdf-parser', 'PhpWord', 'PhpSpreadsheet', 'CMB2'],
    images: [
      '/medical-interview-bot/thumbnail.png'
    ],
    links: {
      github: 'Private Repository (Access available upon request)'
    },
    overview: 'Engineered a specialized clinical mock interview and viva examination platform for medical doctors and residency candidates. Features multi-instance custom post type architecture allowing hospitals and institutions to deploy tailored AI examiners across clinical specialties (Surgery, Internal Medicine, Pediatrics), complete with automated CV document ingestion and tailored differential diagnosis questioning.',
    problem: 'Medical candidates require rigorous viva voce examination simulations before high-stakes board certifications and residency matching. Generic AI chatbots fail to assess clinical reasoning, cannot parse complex medical CVs or surgical logbooks, lack clinical safety boundaries, and cannot evaluate vocal bedside communication style or differential diagnostic precision under pressure.',
    solution: 'Developed a multi-instance WordPress platform with custom post types (`interview_bot`) and CMB2 administration. Integrated document parsing engines (`smalot/pdf-parser`, `phpoffice/phpword`, `phpspreadsheet`) to extract candidate clinical background and dynamically formulate case scenarios via GPT-5-Nano and GPT-4o-mini. Integrated real-time WebRTC audio recording, Whisper transcription, WordPress media library cached TTS, and physical/voice diagnostic analysis.',
    architecture: 'Custom WordPress CPT architecture with localized REST endpoints (`/wp-json/medbot/v1/`). Frontend WebRTC audio/video capture engine connects with modular PHP service layers that handle document parsing, OpenAI clinical persona prompt templates, credit metering per question, and diagnostic report generation.',
    challenges: 'Ensuring strict clinical realism and terminology consistency across varied medical specialties while eliminating hallucinated medical protocols. Handled by structured clinical prompt engineering, differential diagnosis rubrics, and fail-safe fallback question repositories from curated Excel datasets.',
    features: [
      'Multi-instance bot system: configure distinct medical specialty examiners with tailored personas',
      'Automated medical CV & document ingestion supporting PDF, DOCX, and Excel files',
      'Dynamic differential diagnosis question synthesis tailored to applicant specialty level',
      'Whisper audio transcription and low-latency OpenAI TTS voice question delivery',
      'Vocal and physical delivery analysis (cadence, hesitation, clinical bedside manner)',
      'Per-question AI credit deduction system and automated media library audio caching',
      'Comprehensive clinical candidate feedback with diagnostic accuracy scoring'
    ],
    result: 'Delivered instant CV-to-clinical question generation in under 2.4 seconds, maintained 99% persona fidelity across clinical domains, earned 4.9★ doctor review scores, and reduced audio playback overhead to sub-400ms via WordPress media stream integration.',
    futureImprovements: [
      'Integrate DICOM medical imaging viewer for radiology viva simulation',
      'Deploy localized fine-tuned BioGPT/Med-PaLM adapters for niche sub-specialty clinical examinations'
    ],
    datePublished: '2026-02-17T13:12:09Z',
    dateModified: '2026-04-04T22:23:02Z',
    programmingLanguage: 'PHP / JavaScript',
    applicationCategory: 'ClinicalAIEducationApplication',
    operatingSystem: 'Web'
  },
  'mentoro': {
    id: 'mentoro',
    name: 'Mentoro (Study Mentor)',
    tagline: 'Decoupled AI Study Mentor & Intelligent Learning Pack Generation Engine',
    client: 'EdTech Startup & University Learning',
    timeline: 'May 2026 – Jul 2026',
    role: 'Applied AI Engineer & Distributed Systems Architect',
    color: '#7c3aed',
    metrics: [
      { label: 'Study Pack Gen', value: '<8s', sub: 'from 60m manual drafting' },
      { label: 'Payload Capacity', value: '25MB', sub: 'heavy PDF & lecture decks' },
      { label: 'Rubric Precision', value: '96%', sub: 'human evaluator benchmark' },
      { label: 'Ingestion Formats', value: '4+ Types', sub: 'PDF, DOCX, Office, YouTube' },
    ],
    tech: ['NestJS', 'TypeScript', 'WordPress Plugin', 'React SPA', 'OpenAI GPT-4o', 'mammoth', 'officeparser', 'pdf-parse', 'youtube-transcript', 'Tailwind CSS', 'JWT Auth'],
    images: [
      '/mentoro/thumbnail.png'
    ],
    links: {
      github: 'Private Repository (Access available upon request)'
    },
    overview: 'Architected and built a decoupled AI educational mentoring ecosystem consisting of a high-concurrency NestJS AI backend and a WordPress React SPA workstation frontend. Ingests multi-format study material—including dense lecture PDFs, Word documents, PowerPoint slides, and YouTube lecture transcripts—to automatically generate comprehensive study packs (flashcards, quizzes, revision notes) and provide rubric-based automated grading for student answers.',
    problem: 'Students and educators spend hours distilling complex lecture slides, textbook PDFs, and video lectures into revision materials. Existing tools only offer fragmented features: simple flashcards without conceptual context, or generic multiple-choice quizzes with zero automated grading for open-ended comprehension answers (CQ) requiring mathematical formulas or diagrams.',
    solution: 'Designed a microservice architecture where a headless NestJS engine handles heavy document ingestion (`pdf-parse`, `mammoth`, `officeparser`, `youtube-transcript`) and structured prompt generation via GPT-4o. On the frontend, built a modern WordPress React SPA featuring a Question Player with an interactive HTML5 drawing canvas and LaTeX formula editor. Engineered an automated AI Evaluation engine with custom grading rubrics for student comprehension submissions.',
    architecture: 'Decoupled Microservice Architecture: NestJS backend API with JWT authentication, Swagger documentation, and TypeORM relational data stores; paired with a WordPress plugin client hosting a React SPA Question Player. High-payload pipeline supports up to 25MB uploads and asynchronous job tracking via `mentor_processing_jobs`.',
    challenges: 'Parsing heterogeneous file formats (Word, PDF, PowerPoint) without losing structural context, and extracting captions from YouTube videos with variable subtitle tracks. Solved by building a resilient multi-driver parser with fallback caption extractors, combined with structured JSON schema enforcement on OpenAI completions.',
    features: [
      'Multi-source ingestion pipeline: PDFs, DOCX, Office presentations, and YouTube lecture URLs',
      'Automated study pack generation: Smart flashcards, MCQs with distractor rationales, and summary notes',
      'AI Evaluation Engine: Automatic rubric-based scoring for open-ended comprehension answers (CQ)',
      'Interactive React Question Player with HTML5 drawing canvas and LaTeX formula editor',
      'Headless NestJS microservice backend with JWT authentication and Swagger API documentation',
      'Persistent job queue (`mentor_processing_jobs`) for background processing of 25MB payloads',
      'Student attempt tracking, historical analytics, and formative feedback generation'
    ],
    result: 'Reduced study pack generation time from 60 minutes of manual curation to under 8 seconds, supported up to 25MB document payloads, achieved 96% grading precision compared to human educator rubrics, and provided seamless cross-platform study workflows.',
    futureImprovements: [
      'Incorporate vector-based semantic retrieval (RAG) across multi-semester lecture archives',
      'Add multi-turn conversational AI tutor with voice synthesis for live student study sessions'
    ],
    datePublished: '2026-05-25T10:20:11Z',
    dateModified: '2026-07-06T22:50:45Z',
    programmingLanguage: 'TypeScript / PHP / React',
    applicationCategory: 'EducationalAIEngineeringApplication',
    operatingSystem: 'Web, Cloud'
  },
  'wp-ai-tools': {
    id: 'wp-ai-tools',
    name: 'WP AI Tools',
    tagline: 'Enterprise Multi-Model AI Productivity Suite & Vector Search RAG Hub',
    client: 'WordPress Enterprise Ecosystem',
    timeline: 'Feb 2026 – Apr 2026',
    role: 'Applied AI Engineer & Multi-Model Integrator',
    color: '#ffd700',
    metrics: [
      { label: 'Unified Tools', value: '6-in-1', sub: 'Text, Vision, Audio, RAG, Video' },
      { label: 'Token Cost Reduction', value: '-40%', sub: '3-tier credit & cache logic' },
      { label: 'Vector Query Time', value: '<1.2s', sub: 'Assistants API Vector Store' },
      { label: 'UI Response', value: '<150ms', sub: 'Mantine & React App Router' },
    ],
    tech: ['WordPress Plugin', 'React 18', 'Mantine UI', 'OpenAI Assistants API (Vector Stores)', 'GPT-4o', 'DALL-E 3', 'Whisper STT', 'OpenAI TTS', 'RunwayML Gen-3/4', 'PHP 8'],
    images: [
      '/wp-ai-tools/thumbnail.png',
      '/wp-ai-tools/img_gen_thumb_01.webp',
      '/wp-ai-tools/img_to_ads.jpg'
    ],
    links: {
      github: 'Private Repository (Access available upon request)'
    },
    overview: 'Engineered an all-in-one multi-model AI productivity suite plugin for WordPress. Integrates OpenAI Chat Completions, DALL-E 3 image generation, Whisper speech-to-text, OpenAI TTS, OpenAI Assistants API with Vector Stores for semantic document retrieval (RAG), and RunwayML video generation under a unified glassmorphic React interface with Mantine UI.',
    problem: 'WordPress site owners and agencies face tool fatigue and high subscription overhead by installing 5+ disparate plugins for text generation, AI image creation, audio transcription, and internal file search. These disparate tools lead to security vulnerabilities, plugin conflicts, inconsistent UX, and an inability to govern and budget API costs across organization members.',
    solution: 'Built a consolidated multi-tool AI suite plugin with a modern React 18 SPA frontend (Mantine UI, `@wordpress/scripts`). Devised a three-tier configuration architecture (Global Options → Custom Post Type Instance Overrides → User Meta Budgets). Integrated the OpenAI Assistants API with vector stores for fast RAG file queries, alongside standardized AJAX gateways for DALL-E, Whisper, TTS, and RunwayML video advertising synthesis.',
    architecture: 'Hybrid WordPress & React Architecture: WordPress backend with Custom Post Type (`wp_ai_tools`), custom tables (`wp_wat_img_to_ads`), and secure AJAX handlers (`includes/wat-ajax.php`). Modular React frontend with dedicated tool panels, streaming state updates, and real-time token credit gauges.',
    challenges: 'Designing a flexible configuration inheritance system where site administrators can set global API keys and model parameters while allowing individual page builders to override models per widget instance. Resolved by engineering a three-tier settings resolution hierarchy (`wat_setting_value`).',
    features: [
      'Comprehensive 6-in-1 AI tool suite: Text, Image Studio, Vector RAG Search, TTS, STT, and Video Ads',
      'OpenAI Assistants API integration with vector stores for semantic document search and citation',
      'DALL-E 3 image generation engine with curated style presets and gallery browsing',
      'Voice studio powered by OpenAI Whisper transcription and high-fidelity OpenAI TTS synthesis',
      'Three-tier settings resolution architecture (Global → Post Instance → User Meta)',
      'Fine-grained cost-based credit management engine to govern token and compute budgets',
      'Sleek React 18 SPA with Mantine UI, audio recording visualizers, and instant feedback'
    ],
    result: 'Unified 6 distinct AI capabilities into a single lightweight plugin, decreased organizational API costs by 40% through strict credit governance, achieved sub-1.2s vector search latency on internal documents, and maintained snappy 150ms UI transitions.',
    futureImprovements: [
      'Introduce hybrid search combining vector embeddings with BM25 keyword ranking',
      'Add multi-agent autonomous workflow chains for automated WordPress content publishing'
    ],
    datePublished: '2026-02-17T13:29:07Z',
    dateModified: '2026-04-07T16:47:17Z',
    programmingLanguage: 'PHP / JavaScript / React',
    applicationCategory: 'EnterpriseAIProductivityApplication',
    operatingSystem: 'Web'
  }
}


