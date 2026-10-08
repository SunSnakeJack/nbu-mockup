export type Faculty = {
  slug: string
  name: string
  eyebrow: string
  description: string
  programs: string[]
  source: string
  accent: string
}

export type NewsItem = {
  title: string
  category: string
  dateLabel: string
  description: string
  source: string
  caution?: boolean
}

export const faculties: Faculty[] = [
  { slug: 'itdi', name: 'Information Technology & Digital Innovation', eyebrow: 'Digital futures', description: 'Explore technology, creative media, digital business, and safety-focused fields.', programs: ['Information Technology and Digital Innovation', 'Digital Innovation and Art Media', 'Digital Business Technology', 'Safety Engineering'], source: 'https://itdi.northbkk.ac.th/', accent: 'from-cyan-500 to-blue-600' },
  { slug: 'business', name: 'Business Administration', eyebrow: 'Enterprise & leadership', description: 'A broad business portfolio spanning accounting, management, marketing, and logistics.', programs: ['Accounting', 'Management', 'Digital Marketing', 'Logistics and Supply Chain'], source: 'https://ba.northbkk.ac.th/', accent: 'from-amber-400 to-orange-600' },
  { slug: 'liberal-arts', name: 'Liberal Arts', eyebrow: 'Language & experience', description: 'Fields connected to language, hospitality, tourism, aviation, culinary arts, and TESOL.', programs: ['Language fields', 'Hospitality and Tourism', 'Aviation fields', 'TESOL'], source: 'https://la.northbkk.ac.th/', accent: 'from-fuchsia-500 to-purple-700' },
  { slug: 'political-science', name: 'Political Science', eyebrow: 'Public life', description: 'Study pathways connected to administration, law, government, and management.', programs: ['Public Administration', 'Law', 'Politics and Government', 'Public and Private Management'], source: 'https://ps.northbkk.ac.th/', accent: 'from-rose-500 to-red-700' },
  { slug: 'communication-arts', name: 'Communication Arts', eyebrow: 'Stories & media', description: 'Creative fields focused on moving image, broadcasting, marketing, and digital content.', programs: ['Film and Digital Broadcasting', 'Marketing Communication and Digital Content'], source: 'https://ca.northbkk.ac.th/', accent: 'from-pink-500 to-rose-600' },
  { slug: 'education', name: 'Education', eyebrow: 'Learning & movement', description: 'Education pathways ranging from early childhood to sports and learning innovation.', programs: ['Early Childhood Education', 'Physical Education and Sports Science', 'Educational Technology and Innovation'], source: 'https://ed.northbkk.ac.th/', accent: 'from-lime-500 to-emerald-700' },
  { slug: 'nursing', name: 'Nursing', eyebrow: 'Care & wellbeing', description: 'The public faculty page presents a Bachelor of Nursing Science curriculum reference.', programs: ['Bachelor of Nursing Science — confirm current admissions status'], source: 'https://ns.northbkk.ac.th/', accent: 'from-sky-400 to-teal-600' },
  { slug: 'graduate-school', name: 'Graduate School', eyebrow: 'Advanced study', description: 'A gateway to doctoral, master’s, and graduate-certificate program pages.', programs: ['Doctoral programs', 'Master’s programs', 'Graduate certificates'], source: 'https://gs.northbkk.ac.th/', accent: 'from-indigo-500 to-violet-700' },
  { slug: 'international-college', name: 'International College', eyebrow: 'Global pathways', description: 'English-language program information across bachelor’s, master’s, and doctoral levels.', programs: ['BBA Management', 'BSc IT and Digital Innovation', 'BA TESOL', 'Educational Administration and Leadership'], source: 'https://ic.northbkk.ac.th/', accent: 'from-emerald-500 to-green-800' },
]

export const newsItems: NewsItem[] = [
  { title: 'Athlete scholarship selection — academic year 2570', category: 'Scholarships', dateLabel: 'Current official notice', description: 'The official homepage lists the first athlete-scholarship selection notice for academic year 2570.', source: 'https://northbkk.ac.th/content_detail.php?id=87', caution: true },
  { title: 'Undergraduate registration — semester 1/2569', category: 'Registration', dateLabel: 'Official listing', description: 'A registration notice visible on the official university homepage. Check the source for current instructions.', source: 'https://northbkk.ac.th/', caution: true },
  { title: 'Graduate admissions update', category: 'Graduate study', dateLabel: '23 December 2568', description: 'A graduate-admissions headline is listed by the Graduate School. Details remain on the official site.', source: 'https://gs.northbkk.ac.th/', caution: true },
]

export const serviceItems = [
  { name: 'Registrar', description: 'Educational services, announcements, and account-based academic tools.', href: 'https://reg.northbkk.ac.th/registrar/home.asp', icon: 'clipboard' },
  { name: 'E-learning', description: 'Course categories across faculties, lifelong learning, credit bank, and skills programs.', href: 'https://elearning.northbkk.ac.th/', icon: 'laptop' },
  { name: 'University email', description: 'A verified online-service label; access through the official university homepage.', href: 'https://northbkk.ac.th/', icon: 'mail' },
  { name: 'Research resources', description: 'Discover research databases, journals, e-books, and research-management links.', href: 'https://northbkk.ac.th/', icon: 'library' },
  { name: 'Teaching evaluation', description: 'A verified account-based service linked by the official university homepage.', href: 'https://northbkk.ac.th/', icon: 'chart' },
  { name: 'Online refund request', description: 'A verified service label; check the official homepage for current access.', href: 'https://northbkk.ac.th/', icon: 'wallet' },
]

export const officialProgramPages = {
  bachelors: 'https://northbkk.ac.th/bachelor.php',
  graduate: 'https://northbkk.ac.th/graduate.php',
  shortCourses: 'https://northbkk.ac.th/shortcourse.php',
}
