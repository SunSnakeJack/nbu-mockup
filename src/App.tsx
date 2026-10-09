import { useEffect, useRef, useState, type ComponentType } from 'react'
import { BadgeDollarSign, BookOpen, ChevronDown, ChevronLeft, ChevronRight, Globe2, GraduationCap, Mail, Menu, MessageCircle, ShieldCheck, Video, X } from 'lucide-react'
import { faculties } from './data'

type NavItem = { label: string; children?: string[] }

const navItems: NavItem[] = [
  { label: 'หน้าแรก' },
  { label: 'เกี่ยวกับเรา', children: ['แนะนำมหาวิทยาลัย', 'กรรมการสภามหาวิทยาลัย', 'ทีมบริหาร', 'ข้อมูลสาธารณะ'] },
  { label: 'คณะ / วิทยาลัย', children: ['คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล', 'คณะบริหารธุรกิจ', 'คณะศิลปศาสตร์', 'คณะรัฐศาสตร์', 'คณะนิเทศศาสตร์', 'คณะศึกษาศาสตร์', 'คณะพยาบาลศาสตร์', 'บัณฑิตวิทยาลัย', 'International College'] },
  { label: 'ศูนย์วิจัย/งานวิจัย', children: ['นอร์ทแบงค็อกโพล', 'ฐานข้อมูลงานวิจัย', 'ฐานข้อมูลงานวิจัยทางการศึกษา (ThaiEDResearch)', 'จริยธรรมการวิจัยในมนุษย์', 'PROQuest', 'Thai Digital Collection (ThaiLIS)', 'CINAHL Complete', 'Nursing Reference Center Plus', 'วารสารวิชาการ', 'วารสารการวิจัยประยุกต์', 'หนังสืออิเล็กทรอนิกส์ภาษาไทย', 'หนังสืออิเล็กทรอนิกส์ภาษาอังกฤษ'] },
  { label: 'ห้องสมุดออนไลน์' },
  { label: 'บริการออนไลน์', children: ['ทะเบียนออนไลน์', 'อีเมล', 'อีเลิร์นนิ่ง', 'ประเมินการสอน', 'ประชุมวิชาการ NBU', 'หอสมุดแห่งชาติ ห้องสมุดดิจิทัล E-Book', 'ระบบสารสนเทศการบริหารงานวิจัย', 'ขอคืนเงินผ่านระบบออนไลน์', 'ระบบจองห้องและเบิก-คืนกุญแจ'] },
  { label: 'ติดต่อเรา' },
]

const utilityLinks = ['ลงทะเบียนสนใจสมัครเรียน', 'ทุนการศึกษา', 'E-Staff', 'นักศึกษา', 'International College']
const pathways: Array<{ label: string; icon: ComponentType<{ size?: number; strokeWidth?: number }> }> = [
  { label: 'ปริญญาตรี', icon: GraduationCap }, { label: 'ปริญญาโท - เอก', icon: GraduationCap },
  { label: 'หลักสูตรระยะสั้น', icon: BookOpen }, { label: 'กองทุนกู้ยืม กยศ.', icon: BadgeDollarSign },
  { label: 'ทุนการศึกษา', icon: BadgeDollarSign },
]
const bannerSlides = [
  ['/assets/banners/business-online.jpg', 'หลักสูตรบริหารธุรกิจบัณฑิต รูปแบบออนไลน์'], ['/assets/banners/public-health.jpg', 'หลักสูตรสาธารณสุขศาสตร์'],
  ['/assets/banners/banner-aw-01.jpg', 'ประชาสัมพันธ์หลักสูตรมหาวิทยาลัย'], ['/assets/banners/banner-aw-02.jpg', 'ประชาสัมพันธ์การศึกษา'],
  ['/assets/banners/fry-to-fry.jpg', 'ข่าวประชาสัมพันธ์มหาวิทยาลัย'], ['/assets/banners/edpex.jpg', 'ข่าวกิจกรรมมหาวิทยาลัย'],
  ['/assets/banners/sport-portfolio.jpg', 'การรับสมัครนักศึกษาด้านกีฬา'],
]
const highlightCards = [
  ['/assets/nbu-highlights/highlight-02.jpg', 'มหาวิทยาลัยนอร์ทกรุงเทพ เตรียมเปิดโครงการ NorthMed Hospital & Healthcare Center โรงพยาบาลและศูนย์ดูแลผู้สูงอายุระดับพรีเมียม'],
  ['/assets/nbu-highlights/highlight-04.jpg', 'ทีมนักกีฬามหาวิทยาลัยนอร์ทกรุงเทพคว้ารางวัลชนะเลิศ การแข่งขันกีฬาฟุตบอลชิงชนะเลิศแห่งมหาวิทยาลัย'],
  ['/assets/nbu-highlights/highlight-01.png', 'ฝึกงาน หางานง่ายๆ กับ JOBTOPGUN: คู่มือหางานสำหรับนักศึกษาฝึกงานและจบใหม่มหาวิทยาลัยนอร์ทกรุงเทพ'],
  ['/assets/nbu-highlights/highlight-03.jpg', 'มหาวิทยาลัยนอร์ทกรุงเทพจับมือสภาทนายความในพระบรมราชูปถัมภ์ เสริมสร้างองค์ความรู้ทางการศึกษา'],
]
const newsCards = [
  ['/assets/news/sport-scholarship.png', 'เปิดคัดเลือกนักกีฬาครั้งที่ 1 ประจำปีการศึกษา 2570'], ['/assets/news/news-01.jpg', 'การจองคิวนำส่งเอกสารการกู้ยืมประจำภาคเรียนที่ 1/2569'],
  ['/assets/news/bachelor-registration.jpg', 'ลงทะเบียนภาคเรียนที่ 1/2569 ระดับปริญญาตรี'], ['/assets/news/tesol-registration.png', 'ลงทะเบียนภาคเรียนที่ 1/2569 ระดับปริญญาตรี (TESOL)'],
  ['/assets/news/news-02.jpg', 'ลงทะเบียนภาคการศึกษาที่ 1/2569 ระดับบัณฑิตศึกษา'], ['/assets/news/master-registration.png', 'ลงทะเบียนภาคเรียนที่ 3/2568 ระดับบัณฑิตศึกษา'],
  ['/assets/news/safety-training.jpg', 'การบริหารจัดการอัคคีภัยในภาคอุตสาหกรรม ภายใต้บริบทความเสี่ยงที่ซับซ้อน'], ['/assets/news/student-loan.png', 'กำหนดการรับบัตรประจำตัวนักศึกษา'],
]
const affiliateLogos = [
  ['/assets/affiliates/alumni.png', 'สมาคมศิษย์เก่า'], ['/assets/affiliates/nbu-football.png', 'สโมสรฟุตบอลมหาวิทยาลัย'],
  ['/assets/affiliates/siamcom.png', 'Siam Computer and Language School'], ['/assets/affiliates/sbac.png', 'SBAC'],
  ['/assets/affiliates/nbu-poll.png', 'นอร์ทแบงค็อกโพล'], ['/assets/affiliates/scitech.png', 'SCiTech'],
]

function Disclosure() { return <div className="prototype-notice"><ShieldCheck size={13} /> ต้นแบบเว็บไซต์อย่างไม่เป็นทางการ — ไม่ใช่เว็บไซต์ของมหาวิทยาลัย <a href="https://northbkk.ac.th/" target="_blank" rel="noreferrer">ดูเว็บไซต์ทางการ</a></div> }
function Wordmark() { return <div className="wordmark" aria-label="มหาวิทยาลัยนอร์ทกรุงเทพ"><span>NORTH</span><strong>BANGKOK</strong><small>UNIVERSITY · มหาวิทยาลัยนอร์ทกรุงเทพ</small></div> }

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!headerRef.current?.contains(event.target as Node)) setDropdown(null) }
    document.addEventListener('mousedown', close); return () => document.removeEventListener('mousedown', close)
  }, [])
  const toggle = (label: string) => setDropdown((current) => current === label ? null : label)
  return <header ref={headerRef}><Disclosure /><div className="utility-shell"><div className="header-inner utility-inner"><Wordmark /><div className="utility-actions">{utilityLinks.map((label) => <button key={label} type="button">{label}</button>)}</div><button className="language-button" type="button"><span>G</span> เลือกภาษา <ChevronDown size={13} /></button></div></div>
    <div className="primary-shell"><div className="header-inner nav-row"><button className="hamburger" type="button" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen}>{mobileOpen ? <X /> : <Menu />}</button><nav className="desktop-nav" aria-label="เมนูหลัก">{navItems.map((item) => <div className="nav-group" key={item.label} onMouseEnter={() => item.children && setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}><button className="nav-trigger" type="button" onClick={() => item.children && toggle(item.label)} aria-expanded={item.children ? dropdown === item.label : undefined}>{item.label}{item.children && <ChevronDown size={14} />}</button>{item.children && dropdown === item.label && <div className="dropdown-panel">{item.children.map((child) => <button key={child} type="button">{child}</button>)}</div>}</div>)}</nav></div>
      {mobileOpen && <nav className="mobile-nav" aria-label="เมนูหลักบนมือถือ">{navItems.map((item) => <div key={item.label} className="mobile-nav-item"><button type="button" onClick={() => item.children && toggle(item.label)}>{item.label}</button>{item.children && dropdown === item.label && <div className="mobile-subnav">{item.children.map((child) => <button key={child} type="button">{child}</button>)}</div>}</div>)}</nav>}
    </div></header>
}

function HeroCarousel() {
  const [slide, setSlide] = useState(0), total = bannerSlides.length
  const move = (direction: number) => setSlide((current) => (current + direction + total) % total)
  useEffect(() => { const timer = window.setInterval(() => setSlide((current) => (current + 1) % total), 6500); return () => window.clearInterval(timer) }, [total])
  return <section className="hero-stage"><div className="architecture-lines" /><div className="carousel-frame"><button className="carousel-arrow prev" type="button" onClick={() => move(-1)}><ChevronLeft /></button>{bannerSlides.map(([src, alt], index) => <img className="hero-slide" key={src} src={src} alt={alt} aria-hidden={slide !== index} data-active={slide === index} />)}<button className="carousel-arrow next" type="button" onClick={() => move(1)}><ChevronRight /></button><div className="carousel-dots">{bannerSlides.map(([src], index) => <button type="button" key={src} aria-current={slide === index} onClick={() => setSlide(index)} />)}</div></div></section>
}
function PathwaySection() { return <section className="pathway-section"><div className="pathway-grid">{pathways.map(({ label, icon: Icon }) => <button type="button" key={label} className="pathway-card"><Icon size={42} strokeWidth={2.1} /><span>{label}</span></button>)}</div></section> }
function HighlightsSection() { return <section className="highlights-section"><div className="highlight-shade" /><div className="highlights-content"><h2>NBU Highlights</h2><div className="highlight-viewport"><div className="highlight-track">{[...highlightCards, ...highlightCards].map(([image, title], index) => <article className="highlight-card" key={`${image}-${index}`} aria-hidden={index >= highlightCards.length}><img src={image} alt="" /><h3>{title}</h3></article>)}</div></div></div></section> }
function NewsSection() { return <section className="news-section"><div className="content-width"><h2>ข่าวประชาสัมพันธ์</h2><div className="news-grid">{newsCards.map(([image, title]) => <article className="news-card" key={title}><img src={image} alt="" /><h3>{title}</h3></article>)}</div><button className="all-news" type="button">อ่านข่าวทั้งหมด</button></div></section> }
function AffiliatesSection() { return <section className="affiliates-section"><div className="content-width"><h2>สมาคม สโมสร และสถาบันในเครือ</h2><div className="affiliate-grid">{affiliateLogos.map(([image, alt]) => <div key={image}><img src={image} alt={alt} /></div>)}</div></div></section> }
function Footer() { return <footer className="site-footer"><div className="content-width footer-grid"><div><h2>คณะ</h2><ul>{faculties.map((item) => <li key={item.slug}>{item.name}</li>)}</ul></div><div><h2>บุคลากร</h2><p>• E-Staff</p><h2>ติดต่อเรา</h2><p>• LINE : @northbkk</p><p>• โทรศัพท์</p><ul className="phone-list"><li>วิทยาเขตสะพานใหม่ : 0-2972-7200</li><li>วิทยาเขตรังสิต : 0-2533-1000</li><li>ศูนย์การศึกษานนทบุรี : 0-2589-1133 ต่อ 534</li></ul></div></div><div className="content-width footer-bottom"><p>Copyright © 2026 North Bangkok University (mockup)</p><div><Globe2 /><MessageCircle /><Video /><Mail /></div></div></footer> }

export default function App() { return <div className="app-shell"><Header /><main><HeroCarousel /><PathwaySection /><HighlightsSection /><NewsSection /><AffiliatesSection /></main><Footer /></div> }
