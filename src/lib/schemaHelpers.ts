/**
 * Reusable Schema.org Structured Data Helpers for AI crawlers and search engines.
 */
import { CaseStudy } from './projectData'

export const BASE_URL = 'https://www.jashuvro.com'

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    'name': 'MD. Jonaed Ali Shuvro',
    'givenName': 'Jonaed Ali',
    'familyName': 'Shuvro',
    'additionalName': 'Md.',
    'alternateName': [
      'Jonaed Ali Shuvro',
      'JA Shuvro',
      'J.A. Shuvro',
      'Md. Jonaed Ali',
      'MD. Jonaed Ali Shuvro'
    ],
    'url': BASE_URL,
    'image': 'https://avatars.githubusercontent.com/u/89667794?v=4',
    'jobTitle': 'Flutter Specialist & Full-Stack Developer',
    'description': 'Flutter Specialist & Full-Stack Developer with 3.5+ years of active system development. Specializing in high-performance mobile apps and robust enterprise web architectures.',
    'nationality': {
      '@type': 'Country',
      'name': 'Bangladesh'
    },
    'homeLocation': {
      '@type': 'Place',
      'name': 'Rajshahi, Bangladesh'
    },
    'email': 'dev.jsahuvro@gmail.com',
    'publishingPrinciples': `${BASE_URL}/about-ai`,
    'worksFor': {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      'name': 'Immigrant Times',
      'sameAs': 'https://www.linkedin.com/company/immigranttimes/posts/?feedView=all'
    },
    'sameAs': [
      'https://github.com/ja-shuvro',
      'https://www.linkedin.com/in/ja-shuvro-13733b37b',
      'https://x.com/shuvro_a',
      'https://wa.me/01728723881'
    ],
    'knowsAbout': [
      'Flutter',
      'Dart',
      'NestJS',
      'Next.js',
      'Laravel',
      'Node.js',
      'React',
      'React Three Fiber',
      'Three.js',
      'TypeScript',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'WebSockets',
      'System Architecture',
      'Real-time Applications',
      'Full Stack Development',
      'Mobile Development',
      'Enterprise Software'
    ],
    'created': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/case-studies/flirtmetrics#software`
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/case-studies/erp#software`
      }
    ]
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    'name': 'MD. Jonaed Ali Shuvro Portfolio',
    'url': BASE_URL,
    'publisher': {
      '@id': `${BASE_URL}/#person`
    },
    'author': {
      '@id': `${BASE_URL}/#person`
    }
  }
}

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/about-ai#profile`,
    'url': `${BASE_URL}/about-ai`,
    'mainEntity': {
      '@id': `${BASE_URL}/#person`
    }
  }
}

export function getBreadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}${items[items.length - 1]?.path || ''}#breadcrumb`,
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.path.startsWith('http') ? item.path : `${BASE_URL}${item.path}`
    }))
  }
}

export function getProjectSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Project',
    '@id': `${BASE_URL}/case-studies/${project.id}#project`,
    'name': project.name,
    'description': project.overview,
    'url': `${BASE_URL}/case-studies/${project.id}`,
    'creator': {
      '@id': `${BASE_URL}/#person`
    }
  }
}

export function getSoftwareApplicationSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${BASE_URL}/case-studies/${project.id}#software`,
    'name': project.name,
    'description': project.overview,
    'applicationCategory': project.applicationCategory || 'BusinessApplication',
    'operatingSystem': project.operatingSystem || 'Windows, macOS, Linux, iOS, Android',
    'softwareVersion': '1.0.0',
    'creator': {
      '@id': `${BASE_URL}/#person`
    },
    'author': {
      '@id': `${BASE_URL}/#person`
    },
    'publisher': {
      '@id': `${BASE_URL}/#person`
    },
    'downloadUrl': project.links.demo || project.links.site || BASE_URL,
    'subjectOf': {
      '@id': `${BASE_URL}/case-studies/${project.id}#article`
    }
  }
}

export function getSoftwareSourceCodeSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': `${BASE_URL}/case-studies/${project.id}#sourcecode`,
    'name': `${project.name} Source Code`,
    'codeRepository': project.links.github.includes('Private') ? 'Private Repository' : project.links.github,
    'programmingLanguage': project.programmingLanguage || 'TypeScript',
    'author': {
      '@id': `${BASE_URL}/#person`
    },
    'targetProduct': {
      '@id': `${BASE_URL}/case-studies/${project.id}#software`
    }
  }
}

export function getTechArticleSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${BASE_URL}/case-studies/${project.id}#article`,
    'headline': `${project.name} Case Study: ${project.tagline}`,
    'description': project.overview,
    'inLanguage': 'en-US',
    'datePublished': project.datePublished,
    'dateModified': project.dateModified,
    'author': {
      '@id': `${BASE_URL}/#person`
    },
    'publisher': {
      '@id': `${BASE_URL}/#person`
    },
    'about': {
      '@id': `${BASE_URL}/case-studies/${project.id}#software`
    },
    'dependencies': project.tech.join(', ')
  }
}

export function getPortfolioSchema(projects: CaseStudy[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/#portfolio`,
    'name': "MD. Jonaed Ali Shuvro's Software Portfolio",
    'description': 'A collection of software engineering projects, mobile apps, and web platforms developed by MD. Jonaed Ali Shuvro.',
    'url': `${BASE_URL}/#work`,
    'about': {
      '@id': `${BASE_URL}/#person`
    },
    'author': {
      '@id': `${BASE_URL}/#person`
    },
    'publisher': {
      '@id': `${BASE_URL}/#person`
    },
    'hasPart': projects.map(p => ({
      '@type': 'CreativeWork',
      'name': p.name,
      'description': p.overview,
      'url': `${BASE_URL}/case-studies/${p.id}`
    }))
  }
}

