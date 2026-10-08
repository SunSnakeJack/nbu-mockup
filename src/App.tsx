import { useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import {
  BadgeDollarSign, BookOpen, Building2, ChevronDown, ChevronLeft, ChevronRight,
  CircleUserRound, ExternalLink, Globe2, GraduationCap, Landmark, Mail, Menu,
  MessageCircle, Monitor, Newspaper, Search, ShieldCheck, Trophy, UsersRound,
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

const highlightCards = [
  ['Campus development', 'พื้นที่การเรียนรู้และอาคารมหาวิทยาลัย'],
  ['Student success', 'กิจกรรมและความสำเร็จของนักศึกษา'],
  ['Career pathways', 'เตรียมความพร้อมสู่โลกการทำงาน'],
  ['Academic partnerships', 'ความร่วมมือและเครือข่ายทางวิชาการ'],
]

const newsCards = [
  ['ทุนกีฬา ปีการศึกษา 2570', 'Scholarship'],
  ['กำหนดการลงทะเบียน 1/2569', 'Registration'],
  ['ลงทะเบียนระดับบัณฑิตศึกษา', 'Graduate'],
  ['หลักสูตร TESOL', 'Programs'],
  ['ระบบบริการนักศึกษา', 'Services'],
  ['ข่าวประชาสัมพันธ์มหาวิทยาลัย', 'Campus'],
  ['กิจกรรมวิชาการและงานวิจัย', 'Research'],
  ['ประกาศสำหรับนักศึกษา', 'Notice'],
]

const affiliateNames = ['สมาคมศิษย์เก่า', 'สโมสรฟุตบอลมหาวิทยาลัย', 'SIAM EDUCATION', 'SBAC', 'NBU POLL', 'NBU SciTech']

function Disclosure() {
  return <div className="prototype-notice"><ShieldCheck size={13} /> ต้นแบบเว็บไซต์อย่างไม่เป็นทางการ — ไม่ใช่เว็บไซต์ของมหาวิทยาลัย <a href="https://northbkk.ac.th/" target="_blank" rel="noreferrer">ดูเว็บไซต์ทางการ <ExternalLink size={11} /></a></div>
}

function Wordmark() {
  return <Link className="wordmark" to="/" aria-label="หน้าแรกต้นแบบ NBU"><strong>NORTH</strong><span>BANGKOK</span><small>UNIVERSITY · UNOFFICIAL</small></Link>
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

function HeroArtwork({ slide }: { slide: number }) {
  return <div className={`hero-art slide-${slide}`}>
    <div className="stadium-lines" />
    <div className="hero-copy">
      <span>{slide === 0 ? 'NBU OPEN HOUSE' : slide === 1 ? 'READY FOR YOUR FUTURE' : 'LEARN WITHOUT LIMITS'}</span>
      <strong>{slide === 0 ? 'ค้นพบเส้นทางของคุณ' : slide === 1 ? 'เริ่มต้นอนาคตที่นี่' : 'มากกว่าการเรียนรู้'}</strong>
      <p>พื้นที่ต้นแบบกราฟิก CSS — ไม่มีภาพถ่าย โลโก้ หรือคิวอาร์โค้ดจากต้นฉบับ</p>
    </div>
    <div className="building-illustration" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
    <div className="hero-number">0{slide + 1}</div>
  </div>
}

function HeroCarousel() {
  const [slide, setSlide] = useState(0)
  const total = 3
  const move = (direction: number) => setSlide((current) => (current + direction + total) % total)
  return <section className="hero-stage" aria-label="ภาพประชาสัมพันธ์ต้นแบบ">
    <div className="architecture-lines" />
    <div className="carousel-frame">
      <button className="carousel-arrow prev" type="button" onClick={() => move(-1)} aria-label="Previous"><ChevronLeft /></button>
      <HeroArtwork slide={slide} />
      <button className="carousel-arrow next" type="button" onClick={() => move(1)} aria-label="Next"><ChevronRight /></button>
      <div className="carousel-dots">{Array.from({ length: total }, (_, index) => <button type="button" key={index} aria-label={`ไปสไลด์ ${index + 1}`} aria-current={slide === index} onClick={() => setSlide(index)} />)}</div>
    </div>
  </section>
}

function PathwaySection() {
  return <section className="pathway-section" aria-label="เส้นทางการศึกษา"><div className="pathway-grid">{pathways.map(({ label, to, icon: Icon }) => <Link to={to} key={label} className="pathway-card"><Icon size={42} strokeWidth={2.1} /><span>{label}</span></Link>)}</div></section>
}

function HighlightsSection() {
  return <section className="highlights-section"><div className="blueprint-lines" /><div className="content-width section-content"><h2>NBU Highlights</h2><div className="highlight-grid">{highlightCards.map(([title, body], index) => <article className="highlight-card" key={title}><div className={`highlight-graphic graphic-${index + 1}`}><span>{String(index + 1).padStart(2, '0')}</span><Building2 /></div><div><h3>{title}</h3><p>{body}</p><span className="content-label">เนื้อหาต้นแบบ</span></div></article>)}</div></div></section>
}

function NewsSection() {
  return <section className="news-section"><div className="content-width"><h2>ข่าวประชาสัมพันธ์</h2><p className="section-note">การ์ดต่อไปนี้เป็นข้อความต้นแบบเชิงโครงสร้าง โปรดตรวจสอบข่าวล่าสุดจากแหล่งทางการ</p><div className="news-grid">{newsCards.map(([title, category], index) => <article className="news-card" key={title}><div className={`news-poster poster-${(index % 4) + 1}`}><span>{category}</span>{index % 4 === 0 ? <Trophy /> : index % 4 === 1 ? <Newspaper /> : index % 4 === 2 ? <Monitor /> : <GraduationCap />}</div><div className="news-copy"><small>ข้อมูลต้นแบบ</small><h3>{title}</h3><p>ดูรายละเอียดและวันเวลาที่เว็บไซต์ทางการก่อนดำเนินการ</p></div></article>)}</div><Link className="all-news" to="/news">ดูข่าวทั้งหมด</Link></div></section>
}

function AffiliatesSection() {
  return <section className="affiliates-section"><div className="content-width"><h2>สมาคม สโมสร และสถาบันในเครือ</h2><p>ใช้ชื่อข้อความแทนเครื่องหมายการค้าที่ไม่อนุญาตให้นำมาใช้ซ้ำ</p><div className="affiliate-grid">{affiliateNames.map((name) => <div key={name}><Landmark /><strong>{name}</strong><small>TEXT SUBSTITUTE</small></div>)}</div></div></section>
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
