import { useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import {
  BadgeDollarSign, BookOpen, ChevronDown, ChevronLeft, ChevronRight,
  CircleUserRound, ExternalLink, Globe2, GraduationCap, Mail, Menu,
  MessageCircle, Monitor, Newspaper, Search, ShieldCheck, UsersRound,
  Video, X,
} from 'lucide-react'
import { faculties, newsItems, officialProgramPages, serviceItems } from './data'

const navItems = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'เกี่ยวกับเรา', to: '/about', children: ['ประวัติมหาวิทยาลัย', 'สภามหาวิทยาลัย', 'ผู้บริหาร', 'ข้อมูลสาธารณะ'] },
  { label: 'คณะ / วิทยาลัย', to: '/faculties', children: faculties.slice(0, 6).map((item) => item.name) },
  { label: 'ศูนย์วิจัย/งานวิจัย', to: '/research', children: ['NBU Poll', 'ฐานข้อมูลงานวิจัย', 'วารสารวิชาการ', 'จริยธรรมการวิจัย'] },
  { label: 'ห้องสมุดออนไลน์', to: '/student-services' },
  { label: 'บริการออนไลน์', to: '/student-services', children: ['ระบบทะเบียน', 'E-learning', 'อีเมล', 'ประเมินการสอน'] },
  { label: 'ติดต่อเรา', to: '/contact' },
]

const utilityLinks = [
  ['ลงทะเบียนสนใจสมัครเรียน', '/admissions'], ['ทุนการศึกษา', '/admissions'],
  ['E-Staff', '/student-services'], ['นักศึกษา', '/student-services'], ['International College', '/faculties'],
] as const

const pathways: Array<{ label: string; to: string; icon: ComponentType<{ size?: number; strokeWidth?: number }> }> = [
  { label: 'ปริญญาตรี', to: '/programs', icon: GraduationCap },
  { label: 'ปริญญาโท - เอก', to: '/programs?level=graduate', icon: GraduationCap },
  { label: 'หลักสูตรระยะสั้น', to: '/programs?level=short', icon: BookOpen },
  { label: 'กองทุนกู้ยืม กยศ.', to: '/admissions', icon: BadgeDollarSign },
  { label: 'ทุนการศึกษา', to: '/admissions', icon: BadgeDollarSign },
]

const bannerSlides = [
  { src: '/assets/banners/business-online.jpg', alt: 'หลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาบริหารธุรกิจ รูปแบบออนไลน์' },
  { src: '/assets/banners/public-health.jpg', alt: 'หลักสูตรสาธารณสุขศาสตร์ ระดับปริญญาตรี' },
  { src: '/assets/banners/banner-aw-01.jpg', alt: 'ประชาสัมพันธ์หลักสูตรมหาวิทยาลัยนอร์ทกรุงเทพ' },
  { src: '/assets/banners/banner-aw-02.jpg', alt: 'ประชาสัมพันธ์การศึกษามหาวิทยาลัยนอร์ทกรุงเทพ' },
  { src: '/assets/banners/fry-to-fry.jpg', alt: 'ข่าวประชาสัมพันธ์มหาวิทยาลัยนอร์ทกรุงเทพ' },
  { src: '/assets/banners/edpex.jpg', alt: 'ข่าวกิจกรรมมหาวิทยาลัยนอร์ทกรุงเทพ' },
  { src: '/assets/banners/sport-portfolio.jpg', alt: 'การรับสมัครนักศึกษาด้านกีฬา' },
]

const highlightCards = [
  { image: '/assets/nbu-highlights/highlight-02.jpg', title: 'มหาวิทยาลัยนอร์ทกรุงเทพ เตรียมเปิดโครงการ NorthMed Hospital & Healthcare Center' },
  { image: '/assets/nbu-highlights/highlight-04.jpg', title: 'ทีมนักกีฬามหาวิทยาลัยนอร์ทกรุงเทพสร้างชื่อในการแข่งขันระดับประเทศ' },
  { image: '/assets/nbu-highlights/highlight-01.png', title: 'เตรียมตัวฝึกงาน หางานง่าย ๆ กับ JOBTOPGUN สำหรับนักศึกษามหาวิทยาลัยนอร์ทกรุงเทพ' },
  { image: '/assets/nbu-highlights/highlight-03.jpg', title: 'มหาวิทยาลัยนอร์ทกรุงเทพจับมือเครือข่าย เสริมสร้างองค์ความรู้ทางวิชาการ' },
]

const newsCards = [
  { image: '/assets/news/sport-scholarship.png', title: 'เปิดคัดเลือกนักกีฬาครั้งที่ 1 ประจำปีการศึกษา 2570' },
  { image: '/assets/news/news-01.jpg', title: 'การจองคิวนำส่งเอกสารการกู้ยืมประจำภาคเรียนที่ 1/2569' },
  { image: '/assets/news/bachelor-registration.jpg', title: 'ลงทะเบียนภาคเรียนที่ 1/2569 ระดับปริญญาตรี' },
  { image: '/assets/news/tesol-registration.png', title: 'ลงทะเบียนภาคเรียนที่ 1/2569 ระดับปริญญาตรี (TESOL)' },
  { image: '/assets/news/news-02.jpg', title: 'ลงทะเบียนภาคการศึกษาที่ 1/2569 ระดับบัณฑิตศึกษา' },
  { image: '/assets/news/master-registration.png', title: 'ลงทะเบียนภาคเรียนที่ 3/2568 ระดับบัณฑิตศึกษา' },
  { image: '/assets/news/safety-training.jpg', title: 'การบริหารจัดการอัคคีภัยในภาคอุตสาหกรรม ภายใต้บริบทความเสี่ยงที่ซับซ้อน' },
  { image: '/assets/news/student-loan.png', title: 'กำหนดการรับบัตรประจำตัวนักศึกษา' },
]

const affiliateLogos = [
  { image: '/assets/affiliates/alumni.png', alt: 'สมาคมศิษย์เก่า มหาวิทยาลัยนอร์ทกรุงเทพ' },
  { image: '/assets/affiliates/nbu-football.png', alt: 'สโมสรฟุตบอลมหาวิทยาลัยนอร์ทกรุงเทพ' },
  { image: '/assets/affiliates/siamcom.png', alt: 'Siam Computer and Language School' },
  { image: '/assets/affiliates/sbac.png', alt: 'วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ SBAC' },
  { image: '/assets/affiliates/nbu-poll.png', alt: 'นอร์ทแบงค็อกโพล' },
  { image: '/assets/affiliates/scitech.png', alt: 'มหาวิทยาลัยนอร์ทกรุงเทพ และ SCiTech' },
]

function Disclosure() {
  return <div className="prototype-notice"><ShieldCheck size={13} /> ต้นแบบเว็บไซต์อย่างไม่เป็นทางการ — ไม่ใช่เว็บไซต์ของมหาวิทยาลัย <a href="https://northbkk.ac.th/" target="_blank" rel="noreferrer">ดูเว็บไซต์ทางการ <ExternalLink size={11} /></a></div>
}

function Wordmark() {
  return <Link className="wordmark" to="/" aria-label="หน้าแรกต้นแบบ NBU"><span>NORTH</span><strong>BANGKOK</strong><small>UNIVERSITY · มหาวิทยาลัยนอร์ทกรุงเทพ</small></Link>
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!headerRef.current?.contains(event.target as Node)) setDropdown(null) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return <header ref={headerRef}>
    <Disclosure />
    <div className="utility-shell">
      <div className="header-inner utility-inner">
        <Wordmark />
        <div className="utility-actions">{utilityLinks.map(([label, to]) => <Link key={label} to={to}>{label}</Link>)}</div>
        <button className="language-button" type="button" aria-label="เลือกภาษา"><span>G</span> เลือกภาษา <ChevronDown size={13} /></button>
      </div>
    </div>
    <div className="primary-shell">
      <div className="header-inner nav-row">
        <button className="hamburger" type="button" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
        <nav className="desktop-nav" aria-label="เมนูหลัก">{navItems.map((item) => <div className="nav-group" key={item.label} onMouseEnter={() => item.children && setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}><div className="nav-trigger-row"><Link to={item.to}>{item.label}</Link>{item.children && <button type="button" onClick={() => setDropdown(dropdown === item.label ? null : item.label)} aria-expanded={dropdown === item.label} aria-label={`เปิดเมนู ${item.label}`}><ChevronDown size={14} /></button>}</div>{item.children && dropdown === item.label && <div className="dropdown-panel">{item.children.map((child) => <Link key={child} to={item.to}>{child}</Link>)}</div>}</div>)}</nav>
      </div>
      {mobileOpen && <nav className="mobile-nav" aria-label="เมนูหลักบนมือถือ">{navItems.map((item) => <div key={item.label} className="mobile-nav-item"><Link to={item.to} onClick={() => setMobileOpen(false)}>{item.label}</Link>{item.children && <button type="button" onClick={() => setDropdown(dropdown === item.label ? null : item.label)} aria-label={`เปิดเมนู ${item.label}`} aria-expanded={dropdown === item.label}><ChevronDown size={16} /></button>}{item.children && dropdown === item.label && <div className="mobile-subnav">{item.children.map((child) => <Link key={child} to={item.to} onClick={() => setMobileOpen(false)}>{child}</Link>)}</div>}</div>)}</nav>}
    </div>
  </header>
}

function HeroCarousel() {
  const [slide, setSlide] = useState(0)
  const total = bannerSlides.length
  const move = (direction: number) => setSlide((current) => (current + direction + total) % total)
  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % total), 6500)
    return () => window.clearInterval(timer)
  }, [total])
  return <section className="hero-stage" aria-label="ภาพประชาสัมพันธ์ต้นแบบ">
    <div className="architecture-lines" />
    <div className="carousel-frame">
      <button className="carousel-arrow prev" type="button" onClick={() => move(-1)} aria-label="ภาพก่อนหน้า"><ChevronLeft /></button>
      {bannerSlides.map((item, index) => <img className="hero-slide" key={item.src} src={item.src} alt={item.alt} aria-hidden={slide !== index} data-active={slide === index} />)}
      <button className="carousel-arrow next" type="button" onClick={() => move(1)} aria-label="ภาพถัดไป"><ChevronRight /></button>
      <div className="carousel-dots">{Array.from({ length: total }, (_, index) => <button type="button" key={index} aria-label={`ไปสไลด์ ${index + 1}`} aria-current={slide === index} onClick={() => setSlide(index)} />)}</div>
    </div>
  </section>
}

function PathwaySection() {
  return <section className="pathway-section" aria-label="เส้นทางการศึกษา"><div className="pathway-grid">{pathways.map(({ label, to, icon: Icon }) => <Link to={to} key={label} className="pathway-card"><Icon size={42} strokeWidth={2.1} /><span>{label}</span></Link>)}</div></section>
}

function HighlightsSection() {
  return <section className="highlights-section"><div className="blueprint-lines" /><div className="content-width section-content"><h2>NBU Highlights</h2><div className="highlight-grid">{highlightCards.map((item) => <article className="highlight-card" key={item.title}><img src={item.image} alt="" /><h3>{item.title}</h3></article>)}</div></div></section>
}

function NewsSection() {
  return <section className="news-section"><div className="content-width"><h2>ข่าวประชาสัมพันธ์</h2><div className="news-grid">{newsCards.map((item) => <article className="news-card" key={item.title}><img src={item.image} alt="" /><h3>{item.title}</h3></article>)}</div><Link className="all-news" to="/news">อ่านข่าวทั้งหมด</Link></div></section>
}

function AffiliatesSection() {
  return <section className="affiliates-section"><div className="content-width"><h2>สมาคม สโมสร และสถาบันในเครือ</h2><div className="affiliate-grid">{affiliateLogos.map((item) => <div key={item.image}><img src={item.image} alt={item.alt} /></div>)}</div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="content-width footer-grid"><div><h2>คณะ</h2><ul>{faculties.map((item) => <li key={item.slug}><a href={item.source} target="_blank" rel="noreferrer">{item.name}</a></li>)}</ul></div><div><h2>บุคลากร</h2><p>› E-Staff</p><h2>ติดต่อเรา</h2><p>› LINE: @northbkk</p><p>› โทรศัพท์</p><ul className="phone-list"><li>วิทยาเขตสะพานใหม่ 0-2972-7200</li><li>วิทยาเขตรังสิต 0-2533-1000</li><li>ศูนย์การศึกษานนทบุรี 0-2589-1133 ต่อ 534</li></ul></div></div><div className="content-width footer-bottom"><p>Copyright © 2026 Unofficial NBU Prototype</p><div><Globe2 /><MessageCircle /><Video /><Mail /></div></div></footer>
}

function HomePage() {
  return <main><HeroCarousel /><PathwaySection /><HighlightsSection /><NewsSection /><AffiliatesSection /></main>
}

function BachelorHero() {
  return <section className="bachelor-hero"><div className="portrait-substitute left"><CircleUserRound /></div><div className="degree-panel"><h1><span>มากกว่า</span>ความสำเร็จ <span>มากกว่า</span>การเรียนรู้</h1><div className="degree-columns"><div><small>ปริญญาตรี</small><strong>ภาคปกติ</strong><p>เรียนวันจันทร์ - ศุกร์</p><p>หลักสูตร 4 ปี และเทียบโอน</p></div><i /><div><small>ปริญญาตรี</small><strong>ภาคสมทบ</strong><p>เรียนเฉพาะวันอาทิตย์</p><p>หลักสูตร 4 ปี และเทียบโอน</p></div></div><p className="safe-note">ภาพบุคคลและตราสัญลักษณ์ถูกแทนด้วยกราฟิกต้นฉบับที่ปลอดภัย</p></div><div className="portrait-substitute right"><CircleUserRound /></div></section>
}

function ProgramsPage() {
  return <main><BachelorHero /><section className="faculty-tile-section"><div className="faculty-tiles">{faculties.map((faculty) => <a href={faculty.source} target="_blank" rel="noreferrer" key={faculty.slug}><span>{faculty.name}</span><ExternalLink size={15} /></a>)}</div><div className="program-level-links"><a href={officialProgramPages.bachelors} target="_blank" rel="noreferrer">หลักสูตรปริญญาตรี <ExternalLink /></a><a href={officialProgramPages.graduate} target="_blank" rel="noreferrer">หลักสูตรบัณฑิตศึกษา <ExternalLink /></a><a href={officialProgramPages.shortCourses} target="_blank" rel="noreferrer">หลักสูตรระยะสั้น <ExternalLink /></a></div></section></main>
}

function StandardPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <main><section className="inner-page-hero"><span>UNOFFICIAL PROTOTYPE</span><h1>{title}</h1><p>{intro}</p></section><section className="standard-content content-width">{children}</section></main>
}

function FacultiesPage() { return <StandardPage title="คณะ / วิทยาลัย" intro="รายชื่อปลายทางที่ตรวจสอบจากหน้าเว็บสาธารณะของมหาวิทยาลัย"><div className="directory-grid">{faculties.map((faculty) => <article key={faculty.slug}><GraduationCap /><div><h2>{faculty.name}</h2><p>{faculty.description}</p><a href={faculty.source} target="_blank" rel="noreferrer">เว็บไซต์คณะ <ExternalLink size={14} /></a></div></article>)}</div></StandardPage> }
function NewsPage() { return <StandardPage title="ข่าวประชาสัมพันธ์" intro="สรุปเชิงต้นแบบ — ข้อมูลวันที่และการดำเนินการต้องตรวจสอบกับแหล่งทางการ"><div className="directory-grid news-directory">{newsItems.map((item) => <article key={item.title}><Newspaper /><div><small>{item.category} · {item.dateLabel}</small><h2>{item.title}</h2><p>{item.description}</p><a href={item.source} target="_blank" rel="noreferrer">ตรวจสอบแหล่งทางการ <ExternalLink size={14} /></a></div></article>)}</div></StandardPage> }
function AdmissionsPage() { return <StandardPage title="การสมัครและทุนการศึกษา" intro="จุดเริ่มต้นสำหรับสำรวจหลักสูตร ทุน และเส้นทางสมัคร โดยไม่สร้างกำหนดการหรือเงื่อนไขขึ้นเอง"><div className="info-columns"><article><Search /><h2>สำรวจหลักสูตร</h2><p>เริ่มจากระดับการศึกษาและคณะที่สนใจ</p><Link to="/programs">ดูหลักสูตร</Link></article><article><BadgeDollarSign /><h2>ทุนการศึกษา</h2><p>หน้าแรกทางการเปิดเผยลิงก์ทุน โปรดตรวจสอบเงื่อนไขล่าสุด</p><a href="https://northbkk.ac.th/" target="_blank" rel="noreferrer">เว็บไซต์ทางการ</a></article><article><UsersRound /><h2>ลงทะเบียนสนใจ</h2><p>ใช้จุดเชื่อมต่อจากหน้าแรกทางการเพื่อหลีกเลี่ยงลิงก์ที่อาจเปลี่ยนแปลง</p><a href="https://northbkk.ac.th/" target="_blank" rel="noreferrer">เริ่มที่หน้าแรก</a></article></div></StandardPage> }
function ServicesPage() { return <StandardPage title="บริการออนไลน์" intro="บริการภายนอกที่ตรวจสอบได้; ระบบที่ต้องเข้าสู่ระบบไม่ได้จำลองในต้นแบบนี้"><div className="access-warning"><ShieldCheck /><p><strong>ข้อจำกัดที่ตรวจสอบแล้ว:</strong> หน้า <code>student.php</code> ตอบกลับ HTTP 403 ต่อเครื่องมือสาธารณะ จึงไม่มีการอนุมานหรือสร้างแดชบอร์ดนักศึกษา</p></div><div className="directory-grid">{serviceItems.map((service) => <article key={service.name}><Monitor /><div><h2>{service.name}</h2><p>{service.description}</p><a href={service.href} target="_blank" rel="noreferrer">เปิดบริการภายนอก <ExternalLink size={14} /></a></div></article>)}</div></StandardPage> }

function PlaceholderPage() { return <StandardPage title="หน้าข้อมูล" intro="โครงสร้างเส้นทางภายในสำหรับต้นแบบอย่างไม่เป็นทางการ"><p>เนื้อหานี้เป็นพื้นที่ต้นแบบเท่านั้น โปรดใช้เว็บไซต์ทางการสำหรับข้อมูลปัจจุบัน</p></StandardPage> }

function AppShell({ children }: { children: ReactNode }) { return <div className="app-shell"><Header />{children}<Footer /></div> }

export default function App() {
  return <AppShell><Routes><Route path="/" element={<HomePage />} /><Route path="/programs" element={<ProgramsPage />} /><Route path="/bachelor" element={<ProgramsPage />} /><Route path="/faculties" element={<FacultiesPage />} /><Route path="/news" element={<NewsPage />} /><Route path="/admissions" element={<AdmissionsPage />} /><Route path="/student-services" element={<ServicesPage />} /><Route path="/about" element={<PlaceholderPage />} /><Route path="/research" element={<PlaceholderPage />} /><Route path="/contact" element={<PlaceholderPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></AppShell>
}
