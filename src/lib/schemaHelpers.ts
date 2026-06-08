/**
 * Reusable Schema.org Structured Data Helpers for AI crawlers and search engines.
 */
import { CaseStudy } from './projectData'

export const BASE_URL = 'https://www.jashuvro.com'

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Jonaed Ali Shuvro',
    'alternateName': [
      'J.A. Shuvro',
      'JA. Shuvro',
      'Shuvro',
      'Jonaed Ali',
      'Md. Jonaed Ali',
      'Md. Jonaed Ali Shuvro',
      'Jonaed Ali Shuvro'
    ],
    'url': BASE_URL,
    'image': 'https://avatars.githubusercontent.com/u/89667794?v=4',
    'jobTitle': 'Full Stack Engineer & Mobile Specialist',
    'description': 'Professional Full Stack Engineer and Flutter Mobile Specialist with over 3.5 years of experience building mobile applications (Android/iOS) and robust, scalable backend web systems.',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Freelance & Independent Developer'
    },
    'sameAs': [
      'https://github.com/ja-shuvro',
      'https://www.linkedin.com/in/ja-shuvro-13733b37b',
      'https://wa.me/01728723881',
      'https://x.com/shuvro_a'
    ],
    'knowsAbout': [
      'Flutter',
      'Dart',
      'Android Development',
      'iOS Development',
      'React.js',
      'Next.js',
      'Laravel',
      'PHP',
      'Node.js',
      'NestJS',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'WebSockets',
      'Systems Engineering'
    ]
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Jonaed Ali Shuvro Portfolio',
    'url': BASE_URL,
    'author': {
      '@type': 'Person',
      'name': 'Jonaed Ali Shuvro'
    }
  }
}

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'url': BASE_URL,
    'mainEntity': getPersonSchema()
  }
}

export function getBreadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${BASE_URL}${item.path}`
    }))
  }
}

export function getProjectSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Project',
    'name': project.name,
    'description': project.overview,
    'url': `${BASE_URL}/case-studies/${project.id}`,
    'creator': {
      '@type': 'Person',
      'name': 'Jonaed Ali Shuvro'
    }
  }
}

export function getSoftwareApplicationSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': project.name,
    'description': project.overview,
    'applicationCategory': project.applicationCategory || 'BusinessApplication',
    'operatingSystem': project.operatingSystem || 'Windows, macOS, Linux, iOS, Android',
    'softwareVersion': '1.0.0',
    'creator': {
      '@type': 'Person',
      'name': 'Jonaed Ali Shuvro'
    },
    'downloadUrl': project.links.demo || project.links.site || BASE_URL
  }
}

export function getSoftwareSourceCodeSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    'name': `${project.name} Source Code`,
    'codeRepository': project.links.github.includes('Private') ? 'Private Repository' : project.links.github,
    'programmingLanguage': project.programmingLanguage || 'TypeScript',
    'author': {
      '@type': 'Person',
      'name': 'Jonaed Ali Shuvro'
    }
  }
}

export function getTechArticleSchema(project: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': `${project.name} Case Study: ${project.tagline}`,
    'description': project.overview,
    'inLanguage': 'en-US',
    'datePublished': project.datePublished,
    'dateModified': project.dateModified,
    'author': {
      '@type': 'Person',
      'name': 'Jonaed Ali Shuvro'
    },
    'dependencies': project.tech.join(', ')
  }
}

export function getPortfolioSchema(projects: CaseStudy[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': "Jonaed Ali Shuvro's Software Portfolio",
    'description': 'A collection of software engineering projects, mobile apps, and web platforms developed by Jonaed Ali Shuvro.',
    'url': `${BASE_URL}/#work`,
    'about': getPersonSchema(),
    'hasPart': projects.map(p => ({
      '@type': 'CreativeWork',
      'name': p.name,
      'description': p.overview,
      'url': `${BASE_URL}/case-studies/${p.id}`
    }))
  }
}
