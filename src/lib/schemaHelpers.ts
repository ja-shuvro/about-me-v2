/**
 * Reusable Schema.org Structured Data Helpers for AI crawlers and search engines.
 */
import { CaseStudy } from './projectData'

export const BASE_URL = 'https://www.jashuvro.com'

export function getGraphSchema(nodes: any[]) {
  // Strip '@context' from nodes to keep the graph payload clean
  const cleanedNodes = nodes.map(node => {
    const { '@context': _, ...rest } = node
    return rest
  })
  return {
    '@context': 'https://schema.org',
    '@graph': cleanedNodes
  }
}

export function getPersonSchema() {
  return {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    'name': 'JA Shuvro',
    'givenName': 'Jonaed Ali',
    'familyName': 'Shuvro',
    'additionalName': 'Md.',
    'alternateName': [
      'MD. Jonaed Ali Shuvro',
      'Jonaed Ali Shuvro',
      'Md. Jonaed Ali',
      'J.A. Shuvro'
    ],
    'url': BASE_URL,
    'image': 'https://avatars.githubusercontent.com/u/89667794?v=4',
    'jobTitle': 'Flutter Specialist & Full-Stack Developer',
    'description': 'Flutter Specialist & Full-Stack Developer specializing in real-time systems and AI-optimized web experiences.',
    'nationality': {
      '@type': 'Country',
      'name': 'Bangladesh'
    },
    'homeLocation': {
      '@type': 'Place',
      'name': 'Rajshahi, Bangladesh'
    },
    'email': 'mailto:dev.jsahuvro@gmail.com',
    'publishingPrinciples': `${BASE_URL}/about-ai`,
    'worksFor': {
      '@id': `${BASE_URL}/#organization`
    },
    'sameAs': [
      'https://github.com/ja-shuvro',
      'https://www.linkedin.com/in/ja-shuvro-13733b37b',
      'https://gravatar.com/jashuvro',
      'https://x.com/shuvro_a',
      'https://www.twine.net/jashuvro'
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
    'subjectOf': [
      {
        '@id': `${BASE_URL}/case-studies/flirtmetrics#article`
      },
      {
        '@id': `${BASE_URL}/case-studies/erp#article`
      }
    ],
    'inLanguage': 'en'
  }
}

export function getOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    'name': 'Immigrant Times',
    'sameAs': 'https://www.linkedin.com/company/immigranttimes/',
    'inLanguage': 'en'
  }
}

export function getWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    'name': 'JA Shuvro Portfolio',
    'url': BASE_URL,
    'publisher': {
      '@id': `${BASE_URL}/#person`
    },
    'author': {
      '@id': `${BASE_URL}/#person`
    },
    'inLanguage': 'en'
  }
}

export function getWebPageSchema(url: string, name: string, description: string) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    'url': url,
    'name': name,
    'description': description,
    'about': {
      '@id': `${BASE_URL}/#person`
    },
    'inLanguage': 'en'
  }
}

export function getProfilePageSchema() {
  return {
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/about-ai#profile`,
    'url': `${BASE_URL}/about-ai`,
    'mainEntity': {
      '@id': `${BASE_URL}/#person`
    },
    'inLanguage': 'en'
  }
}

export function getBreadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}${items[items.length - 1]?.path || ''}#breadcrumb`,
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.path.startsWith('http') ? item.path : `${BASE_URL}${item.path}`
    })),
    'inLanguage': 'en'
  }
}

export function getProjectSchema(project: CaseStudy) {
  return {
    '@type': 'CreativeWork',
    '@id': `${BASE_URL}/case-studies/${project.id}#project`,
    'name': project.name,
    'description': project.overview,
    'url': `${BASE_URL}/case-studies/${project.id}`,
    'creator': {
      '@id': `${BASE_URL}/#person`
    },
    'inLanguage': 'en'
  }
}

export function getSoftwareApplicationSchema(project: CaseStudy) {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${BASE_URL}/case-studies/${project.id}#software`,
    'name': project.name,
    'description': project.overview,
    'dateCreated': project.datePublished.split('T')[0],
    'dateModified': project.dateModified.split('T')[0],
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
    },
    'inLanguage': 'en'
  }
}

export function getSoftwareSourceCodeSchema(project: CaseStudy) {
  const isPrivate = project.links.github.includes('Private')
  return {
    '@type': 'SoftwareSourceCode',
    '@id': `${BASE_URL}/case-studies/${project.id}#sourcecode`,
    'name': `${project.name} Source Code`,
    ...(isPrivate ? {} : { 'codeRepository': project.links.github }),
    'programmingLanguage': project.programmingLanguage || 'TypeScript',
    'author': {
      '@id': `${BASE_URL}/#person`
    },
    'targetProduct': {
      '@id': `${BASE_URL}/case-studies/${project.id}#software`
    },
    'inLanguage': 'en'
  }
}

export function getTechArticleSchema(project: CaseStudy) {
  return {
    '@type': 'TechArticle',
    '@id': `${BASE_URL}/case-studies/${project.id}#article`,
    'headline': `${project.name} Case Study: ${project.tagline}`,
    'description': project.overview,
    'inLanguage': 'en',
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
    'isPartOf': {
      '@id': `${BASE_URL}/#portfolio`
    },
    'dependencies': project.tech.join(', '),
    'keywords': project.tech
  }
}

export function getPortfolioSchema(projects: CaseStudy[]) {
  return {
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/#portfolio`,
    'name': "JA Shuvro's Software Portfolio",
    'description': 'A collection of software engineering projects, mobile apps, and web platforms developed by JA Shuvro.',
    'url': BASE_URL,
    'about': {
      '@id': `${BASE_URL}/#person`
    },
    'author': {
      '@id': `${BASE_URL}/#person`
    },
    'publisher': {
      '@id': `${BASE_URL}/#person`
    },
    'mainEntity': {
      '@id': `${BASE_URL}/#person`
    },
    'hasPart': projects.map(p => ({
      '@type': 'CreativeWork',
      'name': p.name,
      'description': p.overview,
      'url': `${BASE_URL}/case-studies/${p.id}`
    })),
    'inLanguage': 'en'
  }
}


