"use client";

import Image from "next/image";
import { ConfigProvider, Button, Tag, Divider, Collapse } from "antd";
import {
  ThunderboltOutlined,
  FireOutlined,
  StarOutlined,
  StarFilled,
  SafetyCertificateOutlined,
  HeartOutlined,
  SmileOutlined,
  CheckCircleFilled,
  PhoneOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined,
  AuditOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";

const antTheme = {
  token: {
    colorPrimary: "#b45309",
    colorSuccess: "#15803d",
    fontFamily: "inherit",
    borderRadius: 8,
  },
};

const benefits = [
  {
    icon: <ThunderboltOutlined className="text-3xl text-amber-600" />,
    title: "Supports Strength & Stamina",
    desc: "Enhances physical endurance and power.",
  },
  {
    icon: <FireOutlined className="text-3xl text-amber-600" />,
    title: "Boosts Energy & Vitality",
    desc: "Sustains high daily energy levels.",
  },
  {
    icon: <StarOutlined className="text-3xl text-amber-600" />,
    title: "Improves Men's Performance",
    desc: "Promotes optimal male performance.",
  },
  {
    icon: <HeartOutlined className="text-3xl text-amber-600" />,
    title: "Helps in Hormonal Balance",
    desc: "Supports natural hormone regulation.",
  },
  {
    icon: <SmileOutlined className="text-3xl text-amber-600" />,
    title: "Reduces Stress & Fatigue",
    desc: "Minimizes daily stress and tiredness.",
  },
  {
    icon: <SafetyCertificateOutlined className="text-3xl text-amber-600" />,
    title: "Enhances Overall Well-being",
    desc: "Promotes holistic health and wellness.",
  },
];

const ingredients = [
  { name: "Ashwagandha", emoji: "🌿" },
  { name: "Shilajit", emoji: "⛰️" },
  { name: "Safed Musli", emoji: "🌱" },
  { name: "Kaunch Beej", emoji: "🫘" },
  { name: "Gokshura", emoji: "🌾" },
  { name: "Jaiphal & More", emoji: "✨" },
];

const trustBadges = [
  { label: "Clinically Trusted", icon: <SafetyCertificateOutlined /> },
  { label: "Safe & Natural", icon: <CheckCircleFilled /> },
  { label: "Trusted by Thousands", icon: <StarOutlined /> },
];

const qualityPoints = [
  { title: "100% Ayurvedic", desc: "Made with pure herbs" },
  { title: "Safe Formula", desc: "No harmful chemicals" },
  { title: "Side-Effect Free", desc: "No side effects" },
];

const certifications = [
  {
    badge: "AYUSH",
    title: "AYUSH Approved",
    desc: "Certified by Ministry of AYUSH, Government of India",
    icon: <MedicineBoxOutlined className="text-3xl text-green-600" />,
    color: "green",
  },
  {
    badge: "ISO",
    title: "ISO 9001:2015",
    desc: "Internationally certified quality management system",
    icon: <AuditOutlined className="text-3xl text-blue-600" />,
    color: "blue",
  },
  {
    badge: "GMP",
    title: "GMP Certified",
    desc: "Good Manufacturing Practices compliant facility",
    icon: <ExperimentOutlined className="text-3xl text-amber-600" />,
    color: "amber",
  },
  {
    badge: "100%",
    title: "Natural Herbs",
    desc: "No artificial additives, preservatives or chemicals",
    icon: <EnvironmentOutlined className="text-3xl text-emerald-600" />,
    color: "emerald",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    review:
      "After using Purush Shakti for 2 months, I feel like a completely new person. My energy levels have doubled and my stamina has improved tremendously. Highly recommend!",
    tag: "Verified Buyer",
  },
  {
    name: "Suresh Patel",
    location: "Gujarat",
    rating: 5,
    review:
      "I was skeptical at first but this product really works. My stress levels are down and I feel much more active throughout the day. Great Ayurvedic product!",
    tag: "Verified Buyer",
  },
  {
    name: "Anil Sharma",
    location: "Mumbai",
    rating: 5,
    review:
      "Excellent product! The results are visible within 3-4 weeks. My overall health has improved and I feel more energetic. BK Arogyam has truly delivered a quality product.",
    tag: "Verified Buyer",
  },
  {
    name: "Vikram Singh",
    location: "Rajasthan",
    rating: 4,
    review:
      "Good product with natural ingredients. Noticed improvement in strength and stamina. Customer support is also very helpful. Will definitely order again.",
    tag: "Verified Buyer",
  },
  {
    name: "Mohan Yadav",
    location: "Uttar Pradesh",
    rating: 5,
    review:
      "Pure Ayurvedic formula with no side effects. I have tried many products but this is the best one. My family noticed the positive change in me within a month!",
    tag: "Verified Buyer",
  },
  {
    name: "Deepak Mishra",
    location: "Madhya Pradesh",
    rating: 5,
    review:
      "Outstanding results! Purush Shakti has helped me regain my confidence and vitality. The herbal ingredients are top quality and the packaging is very professional.",
    tag: "Verified Buyer",
  },
];

const faqs = [
  {
    key: "1",
    label: "What is PURUSH Shakti Power Package?",
    children:
      "PURUSH Shakti is a complete Ayurvedic wellness kit for men, formulated with powerful natural herbs like Ashwagandha, Shilajit, Safed Musli, and more. It is designed to boost strength, stamina, energy, and overall vitality.",
  },
  {
    key: "2",
    label: "How long does it take to see results?",
    children:
      "Most customers start noticing positive changes within 3–4 weeks of regular use. For best results, a consistent 2–3 month course is recommended. Results may vary depending on individual health conditions.",
  },
  {
    key: "3",
    label: "Are there any side effects?",
    children:
      "PURUSH Shakti is made with 100% natural Ayurvedic herbs and contains no harmful chemicals or artificial additives. It is safe for regular use with no known side effects. However, if you have any pre-existing medical condition, consult your doctor before use.",
  },
  {
    key: "4",
    label: "How should I use this product?",
    children:
      "Follow the usage instructions included in the kit. Generally, the recommended course involves taking the supplements with warm milk or water after meals. For personalised guidance, you can reach our team via WhatsApp or phone.",
  },
  {
    key: "5",
    label: "Do you offer Cash on Delivery (COD)?",
    children:
      "Yes! We offer Cash on Delivery across India. You can place your order via WhatsApp or phone and pay at the time of delivery. We deliver pan India.",
  },
  {
    key: "6",
    label: "Is this product AYUSH approved?",
    children:
      "Yes, PURUSH Shakti is manufactured in an AYUSH-approved, GMP-certified facility following strict quality standards. Each batch is tested for purity and potency before dispatch.",
  },
  {
    key: "7",
    label: "Can I take this with other medications?",
    children:
      "PURUSH Shakti is an Ayurvedic supplement. If you are currently on prescription medications, we recommend consulting your doctor or Ayurvedic practitioner before starting any new supplement.",
  },
  {
    key: "8",
    label: "How do I place an order?",
    children:
      "You can place your order directly via WhatsApp or by calling us. Our team will assist you with the order, confirm delivery details, and dispatch within 24–48 hours.",
  },
];

export default function PurushShaktiPage() {
  return (
    <ConfigProvider theme={antTheme}>
      <main className="min-h-screen bg-[#fffbf5]">
        {/* ─── NAVBAR ─── */}
        <nav className="sticky top-0 z-50 bg-[#1a0a00]/95 backdrop-blur-sm shadow-lg border-b border-amber-800/40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="https://bkarogyam.com/favicon.ico"
                alt="BK Arogyam Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <div>
                <p className="text-amber-400 font-bold text-lg leading-tight tracking-wide">
                  BK AROGYAM
                </p>
                <p className="text-amber-200/70 text-[10px] leading-tight">
                  Ayurvedic Wellness for a Better Life
                </p>
              </div>
            </div>
            <Button
              type="primary"
              size="small"
              href="#order"
              className="shimmer-btn border-0 font-semibold text-white hidden sm:flex"
              style={{ background: "#d97706", borderColor: "#d97706" }}
            >
              Order Now
            </Button>
          </div>
        </nav>

        {/* ─── HERO SECTION ─── */}
        <section className="hero-bg text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full bg-amber-600/10 pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full bg-amber-800/15 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* LEFT TEXT */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 pulse-glow">
                  <span>🌿</span> 100% Ayurvedic &amp; Natural
                </span>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
                  <span className="text-amber-400">PURUSH</span>{" "}
                  <span className="text-white">Shakti</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-amber-200 mb-2">
                  Power Package (Kit)
                </p>
                <p className="text-lg md:text-xl text-amber-100/80 font-medium mb-4">
                  A Complete Ayurvedic Formula for Men's Health &amp; Vitality
                </p>
                <p className="text-base text-amber-100/70 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Our Ayurvedic Package boosts strength, enhances stamina, and
                  supports overall energy and vitality for a healthier, active
                  life.
                </p>

                {/* Slogan */}
                <p className="text-sm text-amber-300/80 italic mb-6">
                  "A Step Towards Healthy &amp; Happy Life"
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#order">
                    <Button
                      size="large"
                      className="shimmer-btn border-0 text-white font-bold px-8 py-3 h-auto text-lg rounded-xl shadow-lg shadow-amber-900/40"
                      style={{ background: "#d97706", borderColor: "#d97706", color: "#fff" }}
                    >
                      🛒 Order Now – ₹2800/-
                    </Button>
                  </a>
                  <a href="#benefits">
                    <Button
                      size="large"
                      ghost
                      className="border-amber-400/60 text-amber-300 hover:border-amber-400 px-8 h-auto text-base rounded-xl"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>

              {/* RIGHT – PRODUCT VISUAL */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="relative w-72 md:w-96">
                  <Image
                    src="/images/purush-shakti-images.png"
                    alt="PURUSH Shakti Power Package"
                    width={400}
                    height={400}
                    className="rounded-2xl drop-shadow-2xl"
                    priority
                  />
                  {/* Floating tags */}
                  <span className="absolute top-3 right-3 bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    NATURAL
                  </span>
                  <span className="absolute bottom-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    AYURVEDIC
                  </span>
                </div>

                {/* Price tag */}
                <div className="bg-amber-500/20 border border-amber-400/50 rounded-2xl px-6 py-4 text-center">
                  <p className="text-amber-200 text-sm mb-1">Special Price</p>
                  <p className="text-amber-400 text-4xl font-extrabold">₹2800</p>
                  <p className="text-amber-200/70 text-sm">Power Package (Kit)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST BADGES BAR ─── */}
        <section className="bg-amber-700 py-4">
          <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-white">
                <span className="text-amber-200 text-lg">{b.icon}</span>
                <span className="font-semibold text-sm md:text-base">{b.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── KEY BENEFITS ─── */}
        <section id="benefits" className="py-16 md:py-24 bg-[#fffbf5]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Tag color="orange" className="mb-3 text-xs font-semibold px-3 py-1">
                WHY CHOOSE US
              </Tag>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1008] mb-3">
                Key <span className="text-amber-600">Benefits</span>
              </h2>
              <p className="text-[#1c1008]/60 max-w-xl mx-auto text-base">
                Experience the power of ancient Ayurvedic wisdom combined with modern wellness science.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="ingredient-card bg-white rounded-2xl p-6 border border-amber-100 shadow-sm transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-[#1c1008] text-base mb-2">{b.title}</h3>
                  <p className="text-[#1c1008]/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INGREDIENTS ─── */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#3b1c08] to-[#1a0a00] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Tag color="gold" className="mb-3 text-xs font-semibold px-3 py-1">
                WHAT'S INSIDE
              </Tag>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Key <span className="text-amber-400">Ingredients</span>
              </h2>
              <p className="text-amber-200/70 max-w-xl mx-auto text-base">
                Carefully selected from nature's finest, each ingredient is chosen for its potency and purity.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {ingredients.map((ing, i) => (
                <div
                  key={i}
                  className="ingredient-card bg-white/8 border border-amber-600/30 rounded-2xl p-5 text-center transition-all duration-300 cursor-default hover:bg-white/12 hover:border-amber-400/60"
                >
                  <div className="text-4xl mb-3">{ing.emoji}</div>
                  <p className="text-amber-200 font-semibold text-sm leading-tight">
                    {ing.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PURITY & QUALITY ─── */}
        <section className="py-16 md:py-24 bg-[#fffbf5]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Tag color="green" className="mb-3 text-xs font-semibold px-3 py-1">
                PURITY PROMISE
              </Tag>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1008] mb-3">
                Quality <span className="text-green-700">Assurance</span>
              </h2>
              <p className="text-[#1c1008]/60 max-w-xl mx-auto text-base">
                Every batch is made with the highest quality standards to ensure your safety and best results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {qualityPoints.map((q, i) => (
                <div
                  key={i}
                  className="ingredient-card bg-white rounded-2xl p-8 border border-green-100 shadow-sm text-center transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircleFilled className="text-2xl text-green-600" />
                  </div>
                  <h3 className="font-bold text-[#1c1008] text-lg mb-2">{q.title}</h3>
                  <p className="text-[#1c1008]/60 text-sm">{q.desc}</p>
                </div>
              ))}
            </div>

            {/* Certifications Row */}
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 font-semibold text-sm px-5 py-2.5 rounded-full"
                >
                  <span className="text-amber-600">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CERTIFICATIONS ─── */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#f0fdf4] to-[#fffbf5]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Tag color="green" className="mb-3 text-xs font-semibold px-3 py-1">
                CERTIFIED & TRUSTED
              </Tag>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1008] mb-3">
                Our <span className="text-green-700">Certifications</span>
              </h2>
              <p className="text-[#1c1008]/60 max-w-xl mx-auto text-base">
                Manufactured under the highest regulatory standards to guarantee safety, purity, and efficacy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm text-center hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-0.5 rounded-full mb-2 tracking-widest">
                    {cert.badge}
                  </span>
                  <h3 className="font-bold text-[#1c1008] text-sm mb-1">{cert.title}</h3>
                  <p className="text-[#1c1008]/50 text-xs leading-snug">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-16 md:py-24 bg-[#1a0a00]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Tag color="gold" className="mb-3 text-xs font-semibold px-3 py-1">
                REAL RESULTS
              </Tag>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                What Our <span className="text-amber-400">Customers Say</span>
              </h2>
              <p className="text-amber-200/60 max-w-xl mx-auto text-base">
                Thousands of men across India have transformed their health with PURUSH Shakti.
              </p>

              {/* Rating Summary */}
              <div className="inline-flex items-center gap-3 bg-amber-500/15 border border-amber-500/30 rounded-2xl px-6 py-3 mt-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarFilled key={i} className="text-amber-400 text-lg" />
                  ))}
                </div>
                <span className="text-white font-extrabold text-xl">4.9</span>
                <span className="text-amber-200/70 text-sm">/ 5 · 500+ Reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white/6 border border-amber-700/30 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, s) => (
                      <StarFilled key={s} className="text-amber-400 text-sm" />
                    ))}
                    {[...Array(5 - t.rating)].map((_, s) => (
                      <StarOutlined key={s} className="text-amber-700 text-sm" />
                    ))}
                  </div>

                  <p className="text-amber-100/80 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.review}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-amber-300/60 text-xs">{t.location}</p>
                    </div>
                    <span className="bg-green-700/40 text-green-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {t.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-16 md:py-24 bg-[#fffbf5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <Tag color="orange" className="mb-3 text-xs font-semibold px-3 py-1">
                GOT QUESTIONS?
              </Tag>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1008] mb-3">
                Frequently Asked <span className="text-amber-600">Questions</span>
              </h2>
              <p className="text-[#1c1008]/60 max-w-xl mx-auto text-base">
                Everything you need to know about PURUSH Shakti.
              </p>
            </div>

            <Collapse
              accordion
              items={faqs}
              expandIcon={({ isActive }) => (
                <QuestionCircleOutlined
                  className="text-amber-600 text-base"
                  rotate={isActive ? 90 : 0}
                />
              )}
              className="faq-collapse"
              style={{ background: "transparent", border: "none" }}
              size="large"
            />

            <div className="mt-10 text-center bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-[#1c1008]/70 text-sm mb-3">
                Still have questions? Our team is happy to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  icon={<WhatsAppOutlined />}
                  style={{ background: "#22c55e", borderColor: "#22c55e", color: "#fff" }}
                  className="font-semibold rounded-xl"
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  icon={<PhoneOutlined />}
                  style={{ borderColor: "#d97706", color: "#b45309" }}
                  className="font-semibold rounded-xl"
                >
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRICING & ORDER CTA ─── */}
        <section
          id="order"
          className="py-16 md:py-24 bg-gradient-to-br from-[#92400e] via-[#b45309] to-[#d97706] text-white"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="inline-block bg-white/15 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Limited Offer
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Order Now &amp; Take the First Step
              <br />
              <span className="text-amber-200">Towards a Stronger You!</span>
            </h2>

            <p className="text-amber-100/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Join thousands of men who have already transformed their health with
              PURUSH Shakti Power Package.
            </p>

            {/* Price Display */}
            <div className="inline-block bg-white/15 border-2 border-white/30 rounded-3xl px-12 py-8 mb-10 backdrop-blur-sm">
              <p className="text-amber-200 text-sm font-semibold uppercase tracking-widest mb-2">
                Special Price
              </p>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-3xl font-bold text-white/80 self-start mt-3">₹</span>
                <span className="text-7xl font-extrabold text-white leading-none">2800</span>
              </div>
              <p className="text-amber-200/80 text-sm">PURUSH Shakti Power Package</p>
            </div>

            {/* Online Payment */}
            <div className="mb-6">
              <a
                href="https://payments.cashfree.com/forms/purushshakti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="large"
                  className="border-2 border-white/60 text-white font-bold px-10 h-14 text-lg rounded-2xl shadow-xl transition-all hover:bg-white/10"
                  style={{ background: "transparent", borderColor: "rgba(255,255,255,0.6)", color: "#fff", height: "56px" }}
                >
                  💳 Pay Online (Card / UPI / Net Banking)
                </Button>
              </a>
            </div>

            <p className="text-amber-200/70 text-sm">
              Free consultation available · Cash on Delivery · Pan India Delivery
            </p>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="bg-[#1a0a00] text-amber-200/70 py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image
                src="https://bkarogyam.com/favicon.ico"
                alt="BK Arogyam Logo"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span className="text-amber-400 font-bold text-xl">BK AROGYAM</span>
            </div>
            <p className="text-sm italic mb-2">Ayurvedic Wellness for a Better Life</p>
            <p className="text-xs text-amber-200/50 mb-4">
              "A Step Towards Healthy &amp; Happy Life"
            </p>
            <div className="divider-leaf w-48 mx-auto mb-4" />
            <p className="text-xs text-amber-200/40">
              © {new Date().getFullYear()} BK AROGYAM. All rights reserved.
            </p>
            <p className="text-[10px] text-amber-200/30 mt-2 max-w-lg mx-auto">
              These statements have not been evaluated by any regulatory authority.
              This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </footer>
      </main>
    </ConfigProvider>
  );
}
