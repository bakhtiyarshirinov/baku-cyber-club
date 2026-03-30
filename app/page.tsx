"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Gamepad2,
  Trophy,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Киберспортивные станции",
    description: "Высокопроизводительные ПК и консоли для турниров и постоянного гейминга.",
    icon: Cpu,
    gradient: "from-fuchsia-500 via-indigo-500 to-sky-500",
  },
  {
    title: "Регулярные турниры",
    description: "Dota 2, CS2, Valorant, FIFA и другие дисциплины с призовым фондом.",
    icon: Trophy,
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    title: "Тренировки и стримы",
    description: "Командное пространство и трансляции для развития киберспортивных проектов.",
    icon: Gamepad2,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Чилл-зона",
    description: "Комфорт, энергосбережение и зона отдыха после динамичных матчей.",
    icon: Sparkles,
    gradient: "from-rose-500 via-pink-500 to-violet-500",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,255,0.22),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(191,50,255,0.2),transparent_40%)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold">BC</span>
          <div>
            <p className="text-sm font-semibold tracking-wide text-cyan-300">Baku Cyber Club</p>
            <p className="text-xs text-slate-300">центр утреннего и ночного игрового драйва</p>
          </div>
        </div>
        <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-wider md:flex">
          <a href="#about" className="transition hover:text-cyan-300">О нас</a>
          <a href="#services" className="transition hover:text-cyan-300">Услуги</a>
          <a href="#events" className="transition hover:text-cyan-300">Турниры</a>
          <a href="#location" className="transition hover:text-cyan-300">Контакты</a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:py-24 md:px-12">
        <section className="mb-16 flex flex-col gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_15px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-100">
              <MapPin className="h-3.5 w-3.5" /> Баку
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Baku Cyber Club: гейминг нового уровня
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-300">
              Мы объединяем профессиональный киберспорт, турниры и дружескую атмосферу в одном месте. В клубе есть PC-арена, консольная зона и корзина зимних кафе.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400">
                Узнать больше
              </a>
              <a href="#events" className="rounded-full border border-cyan-400/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300">
                Календарь турниров
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex min-h-[320px] w-full items-end justify-center overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#012541_0%,#051334_100%)] p-6 shadow-lg md:w-[520px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,255,252,0.35),transparent_45%)]" />
            <div className="relative z-10 h-full w-full rounded-xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-base font-medium text-cyan-100">Текущий онлайн</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-4xl font-extrabold text-white">76</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-slate-200">игроков сейчас</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">Скоро стартует турнир по Valorant: регистрируйтесь!</p>
            </div>
          </motion.div>
        </section>

        <section id="services" className="mb-14" aria-label="Услуги клуба">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Наши возможности
          </motion.h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/40 backdrop-blur-xl"
                >
                  <span className={`absolute -left-6 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-30`}></span>
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-slate-800/80 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="events" className="mb-14 rounded-2xl border border-white/10 bg-slate-900/60 p-7 shadow-lg shadow-black/35 backdrop-blur-xl">
          <motion.h2 initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-6 text-3xl font-bold text-white">
            Календарь ближайших турниров
          </motion.h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { game: "CS2", date: "2 апреля", prize: "500 AZN" },
              { game: "Dota 2", date: "9 апреля", prize: "650 AZN" },
              { game: "Valorant", date: "16 апреля", prize: "700 AZN" },
            ].map((item, idx) => (
              <motion.div
                key={item.game}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * idx, duration: 0.5 }}
                className="rounded-xl border border-white/15 bg-slate-800/70 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{item.game}</p>
                <p className="mt-2 text-lg font-bold text-white">{item.date}</p>
                <p className="mt-1 text-sm text-slate-300">Призовой фонд: {item.prize}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="location" className="rounded-2xl border border-white/10 bg-slate-900/60 p-7 text-slate-100 shadow-[0_0_65px_rgba(5,147,255,0.22)] backdrop-blur-xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex flex-wrap justify-between gap-5 md:items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-300">Контакты</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Приходи в клуб</h3>
              </div>
              <a
                href="https://maps.app.goo.gl/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                Проложить маршрут
              </a>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li className="flex items-center gap-2 rounded-lg border border-white/15 bg-slate-800/65 p-3">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Баку, улица Низами, 84
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/15 bg-slate-800/65 p-3">
                <CalendarDays className="h-4 w-4 text-cyan-300" />
                Ежедневно 10:00 — 02:00
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/15 bg-slate-800/65 p-3">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                Профессиональная киберспортивная безопасность
              </li>
            </ul>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/70 px-6 py-6 text-center text-sm text-slate-400 md:px-12">
        <p>
          © {new Date().getFullYear()} Baku Cyber Club — киберпространство в сердце города. Все права защищены.
        </p>
      </footer>
    </div>
  );
}
