"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-emerald-400">HR.dev</span>
          <div className="flex items-center gap-6">
            {["Accueil", "Projets", "À propos", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                <span className="text-xs text-emerald-400">Disponible pour des projets</span>
              </div>
              
              <h1 className="text-4xl font-bold">
                Développeur Full Stack
                <span className="block text-emerald-400 mt-2">Harilala RAKOTOMARO</span>
              </h1>
              
              <p className="text-zinc-400 leading-relaxed">
                Spécialisé dans la création d'applications web modernes et performantes.
                Je transforme vos idées en solutions digitales.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projets"
                  className="px-6 py-3 bg-emerald-500 text-black font-medium rounded-lg hover:bg-emerald-400 transition-colors"
                >
                  Voir mes projets
                </a>
                <a 
                  href="/cv.pdf"
                  className="px-6 py-3 border border-zinc-800 rounded-lg hover:border-emerald-400 transition-colors"
                >
                  Télécharger CV
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-800">
                  <Image
                    src="/01.jpg"
                    alt="Harilala RAKOTOMARO"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sections d'informations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
            <div className="p-6 rounded-xl border border-zinc-800 hover:border-emerald-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-400/10">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expérience</h3>
                  <p className="text-sm text-zinc-400">4+ années en développement web</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 hover:border-emerald-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-400/10">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Technologies</h3>
                  <p className="text-sm text-zinc-400">React, Next.js, Node.js, et plus</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 hover:border-emerald-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-400/10">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Contact</h3>
                  <a href="#contact" className="text-sm text-emerald-400 hover:underline">
                    Discuter d'un projet →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
