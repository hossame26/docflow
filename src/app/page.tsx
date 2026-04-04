"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

import {
  Zap,
  Play,
  Check,
  X,
  AlertTriangle,
  ClipboardList,
  Smartphone,
  ScanSearch,
  MessageSquare,
  PenTool,
  BarChart3,
  Phone,
  Gift,
  Settings,
  Menu,
  XIcon,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";

/* ─── Animation wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionMap[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section tag ─── */
function SectionTag({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary">
      <Icon className="h-4 w-4" />
      {label}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════ */
function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl"
    >
      <div className="glass-nav rounded-2xl px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
              D
            </div>
            <span className="text-lg font-bold text-text">DocFlow</span>
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#comment-ca-marche"
              className="cursor-pointer text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              Comment ca marche
            </a>
            <a
              href="#fonctionnalites"
              className="cursor-pointer text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              Fonctionnalites
            </a>
            <a
              href="#tarifs"
              className="cursor-pointer text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              Tarifs
            </a>
          </div>

          {/* CTA */}
          <a
            href="#pilote"
            className="hidden cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover md:inline-block"
          >
            Acces pilote gratuit
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden text-text"
            aria-label="Menu"
          >
            {open ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 flex flex-col gap-4 pb-4 md:hidden"
          >
            <a
              href="#comment-ca-marche"
              onClick={() => setOpen(false)}
              className="cursor-pointer text-sm font-medium text-text-muted"
            >
              Comment ca marche
            </a>
            <a
              href="#fonctionnalites"
              onClick={() => setOpen(false)}
              className="cursor-pointer text-sm font-medium text-text-muted"
            >
              Fonctionnalites
            </a>
            <a
              href="#tarifs"
              onClick={() => setOpen(false)}
              className="cursor-pointer text-sm font-medium text-text-muted"
            >
              Tarifs
            </a>
            <a
              href="#pilote"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Acces pilote gratuit
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-light/30 to-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Full grid lines */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F28C38 1px, transparent 1px), linear-gradient(to bottom, #F28C38 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Secondary finer grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F28C38 1px, transparent 1px), linear-gradient(to bottom, #F28C38 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Radial fade so grid fades at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,white_75%)]" />
        {/* Floating document shapes */}
        <motion.div
          className="absolute top-20 right-[15%] h-16 w-12 rounded-lg border border-primary/10 bg-white/60 shadow-sm rotate-12"
          animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-[10%] h-12 w-10 rounded-lg border border-primary/10 bg-white/60 shadow-sm -rotate-6"
          animate={{ y: [0, 15, 0], rotate: [-6, -12, -6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-[20%] h-14 w-11 rounded-lg border border-primary/10 bg-white/60 shadow-sm rotate-6"
          animate={{ y: [0, -12, 0], rotate: [6, 10, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-[25%] h-10 w-8 rounded-md border border-primary/10 bg-white/60 shadow-sm -rotate-12"
          animate={{ y: [0, 10, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
        {/* Accent dots */}
        <div className="absolute top-32 right-[40%] h-2 w-2 rounded-full bg-primary/20" />
        <div className="absolute top-60 left-[30%] h-3 w-3 rounded-full bg-primary/15" />
        <div className="absolute bottom-40 right-[35%] h-2 w-2 rounded-full bg-primary/25" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-8">
          {/* Left — Text */}
          <div>
            <FadeIn delay={0.1}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-primary-light px-4 py-2 text-sm font-medium text-text">
                <Zap className="h-4 w-4 text-primary" />
                R&eacute;forme facturation &eacute;lectronique 2026
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text md:text-5xl lg:text-6xl md:leading-tight">
                Fini les relances.{" "}
                <span className="text-primary">Vos clients envoient,</span>{" "}
                vous traitez.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
                DocFlow centralise la collecte de documents, automatise les
                relances SMS et garde tout l&apos;historique dans le bon dossier.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-row items-center gap-4">
                <a
                  href="#pilote"
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 whitespace-nowrap"
                >
                  Essayer gratuitement 3 mois
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#comment-ca-marche"
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-gray-50 whitespace-nowrap"
                >
                  <Play className="h-4 w-4" />
                  Voir comment &ccedil;a marche
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green" />
                  Sans engagement
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green" />
                  Onboarding en 10 min
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green" />
                  Conforme RGPD
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right — 3D Robot */}
          <FadeIn delay={0.3} direction="right">
            <div className="relative flex items-center justify-center">
              <div className="relative h-[400px] w-full md:h-[500px] lg:h-[550px] flex items-center justify-center">
                {/* Glow background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
                </div>
                {/* 3D animated robot placeholder */}
                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Antenna */}
                    <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-primary to-primary/60 mb-1" />
                    <div className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50 mb-1" />
                    {/* Head */}
                    <motion.div
                      className="relative w-32 h-28 rounded-3xl bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-2xl flex items-center justify-center overflow-hidden"
                      whileHover={{ rotateY: 15, rotateX: -10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      style={{ transformStyle: "preserve-3d", perspective: 800 }}
                    >
                      {/* Face screen */}
                      <div className="w-24 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center gap-4 shadow-inner">
                        {/* Eyes */}
                        <motion.div
                          className="h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/60"
                          animate={{ scaleY: [1, 0.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />
                        <motion.div
                          className="h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/60"
                          animate={{ scaleY: [1, 0.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </div>
                      {/* Shine effect */}
                      <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/30 blur-sm" />
                    </motion.div>
                    {/* Neck */}
                    <div className="h-3 w-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded-sm" />
                    {/* Body */}
                    <motion.div
                      className="relative w-40 h-44 rounded-3xl bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
                      whileHover={{ rotateY: -10, rotateX: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      style={{ transformStyle: "preserve-3d", perspective: 800 }}
                    >
                      {/* Chest light */}
                      <motion.div
                        className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 to-primary shadow-lg shadow-primary/40"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Belly panel */}
                      <div className="mt-4 w-20 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 shadow shadow-green-400/50" />
                        <div className="w-2 h-2 rounded-full bg-primary shadow shadow-primary/50" />
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      </div>
                      {/* Shine */}
                      <div className="absolute top-3 left-3 w-12 h-12 rounded-full bg-white/20 blur-sm" />
                    </motion.div>
                    {/* Arms */}
                    <motion.div
                      className="absolute left-[-28px] top-[160px] w-7 h-28 rounded-full bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-200 shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute right-[-28px] top-[160px] w-7 h-28 rounded-full bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-200 shadow-lg"
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                  </div>
                </motion.div>
                {/* Shadow */}
                <motion.div
                  className="absolute bottom-8 h-6 w-32 rounded-full bg-black/10 blur-xl"
                  animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.2, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PROBLEM
   ═══════════════════════════════════════════════ */
function Problem() {
  const cards = [
    {
      stat: "6h",
      label: "perdues en relances chaque mois",
      accent: "#EF4444",
    },
    {
      stat: "4 outils",
      label: "utilises en parallele",
      accent: "#F28C38",
    },
    {
      stat: "-23%",
      label: "de temps facturable",
      accent: "#3B82F6",
    },
  ];

  return (
    <section className="bg-soft-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionTag icon={AlertTriangle} label="LE PROBLEME" />
            <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
              Chaque mois, les memes frictions
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass cursor-default rounded-2xl p-8 shadow-lg"
                style={{ borderTopColor: card.accent, borderTopWidth: 4 }}
              >
                <div
                  className="text-4xl font-extrabold md:text-5xl"
                  style={{ color: card.accent }}
                >
                  {card.stat}
                </div>
                <p className="mt-3 text-base text-text-muted">{card.label}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SOLUTION / COMMENT CA MARCHE
   ═══════════════════════════════════════════════ */
function Solution() {
  const steps = [
    {
      num: "1",
      title: "Creez un dossier en 30 secondes",
      desc: "Nommez le client, choisissez les documents requis et c'est parti.",
    },
    {
      num: "2",
      title: "Votre client recoit un lien",
      desc: "Par SMS ou par e-mail. Aucun compte a creer, aucune application a installer.",
    },
    {
      num: "3",
      title: "Il uploade ses documents",
      desc: "Depuis son telephone ou son ordinateur, en quelques clics seulement.",
    },
    {
      num: "4",
      title: "Vous traitez — sans chasser personne",
      desc: "Tout est classe, nomme et pret. Les relances sont automatiques.",
    },
  ];

  return (
    <section id="comment-ca-marche" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionTag icon={Zap} label="LA SOLUTION" />
            <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
              Simple pour vous. Encore plus simple pour vos clients.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.12} direction="left">
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text">{step.title}</h3>
                    <p className="mt-1 text-text-muted">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mockup placeholders */}
          <FadeIn delay={0.2} direction="right">
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 shadow-lg">
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary-light to-primary/10 flex items-center justify-center">
                  <ClipboardList className="h-16 w-16 text-primary/30" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-3/4 rounded bg-gray-100" />
                  <div className="h-3 w-1/2 rounded bg-gray-100" />
                </div>
              </div>
              <div className="glass rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="h-3 w-2/3 rounded bg-gray-100" />
                    <div className="h-2.5 w-1/3 rounded bg-gray-100" />
                  </div>
                  <div className="h-8 w-20 rounded-lg bg-green/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-green">Envoye</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FEATURES
   ═══════════════════════════════════════════════ */
function Features() {
  const features = [
    {
      icon: ClipboardList,
      title: "Checklist dynamique",
      desc: "Definissez les pieces requises par type de dossier. Vos clients voient exactement ce qu'il manque.",
    },
    {
      icon: Smartphone,
      title: "Relances SMS automatiques",
      desc: "Plus besoin de courir apres vos clients. DocFlow envoie les rappels au bon moment.",
    },
    {
      icon: ScanSearch,
      title: "OCR et nommage automatique",
      desc: "Les documents sont lus, classes et renommes automatiquement selon vos regles.",
    },
    {
      icon: MessageSquare,
      title: "Messagerie contextuelle",
      desc: "Echangez directement sur un document sans quitter le dossier. Fini les e-mails perdus.",
    },
    {
      icon: PenTool,
      title: "E-signature integree",
      desc: "Faites signer les mandats, lettres de mission et documents directement dans DocFlow.",
    },
    {
      icon: BarChart3,
      title: "Dashboard cabinet",
      desc: "Visualisez l'avancement de chaque dossier, les taux de reponse et les blocages en un coup d'oeil.",
    },
  ];

  return (
    <section id="fonctionnalites" className="bg-soft-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionTag icon={Zap} label="FONCTIONNALITES" />
            <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
              Tout ce dont votre cabinet a besoin
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass cursor-default rounded-2xl p-7 shadow-lg h-full"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-text">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {f.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   COMPARATIF
   ═══════════════════════════════════════════════ */
function Comparatif() {
  const tools = ["Email + Drive", "Pennylane", "Welyb", "DocFlow"];
  const features = [
    { name: "Checklist personnalisable", vals: [false, false, true, true] },
    { name: "Relances SMS automatiques", vals: [false, false, false, true] },
    { name: "Messagerie contextuelle", vals: [false, true, true, true] },
    {
      name: "Acces client sans inscription",
      vals: [false, false, false, true],
    },
    { name: "OCR et nommage auto", vals: [false, true, false, true] },
    { name: "Prix", vals: ["Gratuit", "A partir de 49 EUR", "39 EUR/mois", "49,99 EUR/mois"] },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionTag icon={BarChart3} label="COMPARATIF" />
            <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
              Pourquoi DocFlow plutot qu&apos;un autre outil ?
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr>
                  <th className="pb-4 pr-4 text-sm font-semibold text-text-muted" />
                  {tools.map((t, i) => (
                    <th
                      key={i}
                      className={`pb-4 px-4 text-center text-sm font-bold ${
                        i === 3
                          ? "text-primary"
                          : "text-text"
                      }`}
                    >
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f, fi) => (
                  <tr
                    key={fi}
                    className="border-t border-border"
                  >
                    <td className="py-4 pr-4 text-sm font-medium text-text">
                      {f.name}
                    </td>
                    {f.vals.map((v, vi) => (
                      <td
                        key={vi}
                        className={`py-4 px-4 text-center ${
                          vi === 3 ? "bg-primary/5" : ""
                        }`}
                      >
                        {typeof v === "boolean" ? (
                          v ? (
                            <Check className="mx-auto h-5 w-5 text-green" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-gray-300" />
                          )
                        ) : (
                          <span
                            className={`text-sm font-medium ${
                              vi === 3 ? "text-primary font-bold" : "text-text-muted"
                            }`}
                          >
                            {v}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PRICING
   ═══════════════════════════════════════════════ */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49,99",
      period: "/mois",
      desc: "Pour les cabinets en demarrage",
      clients: "20 clients",
      popular: false,
      features: [
        "Checklist personnalisable",
        "Relances SMS (100/mois)",
        "Messagerie contextuelle",
        "Support par e-mail",
      ],
    },
    {
      name: "Pro",
      price: "89,99",
      period: "/mois",
      desc: "Pour les cabinets en croissance",
      clients: "100 clients",
      popular: true,
      features: [
        "Tout Starter, plus :",
        "Relances SMS illimitees",
        "OCR et nommage auto",
        "E-signature integree",
        "Dashboard cabinet",
        "Support prioritaire",
      ],
    },
    {
      name: "Cabinet",
      price: "199,99",
      period: "/mois",
      desc: "Pour les grands cabinets",
      clients: "Clients illimites",
      popular: false,
      features: [
        "Tout Pro, plus :",
        "Multi-collaborateurs",
        "API et integrations",
        "Marque blanche",
        "Gestionnaire de compte dedie",
        "SLA 99,9%",
      ],
    },
  ];

  return (
    <section id="tarifs" className="bg-soft-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <SectionTag icon={Zap} label="TARIFS" />
            <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
              Simple, sans surprise
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative cursor-default rounded-2xl p-8 shadow-lg h-full flex flex-col ${
                  plan.popular
                    ? "border-2 border-primary bg-white"
                    : "glass"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    Le plus populaire
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-text">{plan.name}</h3>
                  <p className="mt-1 text-sm text-text-muted">{plan.desc}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-text">
                      {plan.price}
                    </span>
                    <span className="text-lg text-text-muted">EUR</span>
                    <span className="text-text-muted">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {plan.clients}
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#pilote"
                  className={`mt-8 block cursor-pointer rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-hover"
                      : "border border-border text-text hover:bg-gray-50"
                  }`}
                >
                  Commencer maintenant
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CTA / PILOTE
   ═══════════════════════════════════════════════ */
function Pilot() {
  const perks = [
    {
      icon: Phone,
      title: "Appel de 20 min",
      desc: "On decouvre vos besoins et on configure votre espace ensemble.",
    },
    {
      icon: Gift,
      title: "Plan Pro offert 3 mois",
      desc: "Testez toutes les fonctionnalites sans sortir la carte bleue.",
    },
    {
      icon: Settings,
      title: "On s'adapte a vous",
      desc: "Checklists, relances, integrations : tout est personnalise pour votre cabinet.",
    },
  ];

  return (
    <section id="pilote" className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            Rejoignez les premiers cabinets pilotes
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Perks */}
          <div className="space-y-5">
            {perks.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="glass-dark rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                      <p.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Form */}
          <FadeIn delay={0.2} direction="right">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-dark rounded-2xl p-8"
            >
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">
                    E-mail professionnel
                  </label>
                  <input
                    type="email"
                    placeholder="jean@cabinet-dupont.fr"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-xl bg-primary py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Demander un acces pilote
                </button>
                <p className="text-center text-xs text-gray-500">
                  Aucun engagement. On vous recontacte sous 24h.
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-footer py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
              D
            </div>
            <span className="text-lg font-bold text-white">DocFlow</span>
          </div>
          <p className="text-sm text-gray-500">
            La collecte de documents repensee pour les experts-comptables.
          </p>
          <p className="text-xs text-gray-600">
            2026 DocFlow. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Comparatif />
      <Pricing />
      <Pilot />
      <Footer />
    </>
  );
}
