import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const BUY_URL = "https://join.pump.fun/HSag/26jvgdy5";
const CA = "EnkxwckgYSFijSBCi9bgHPuwwKwYA3HnrgfbS5kspump";

const tokenomics = [
  { emoji: "🐸", label: "Total Supply", value: "1,000,000,000", sub: "1B $PEPE — for the pond", accent: "#7cff5b" },
  { emoji: "🫰", label: "Tax", value: "0% / 0%", sub: "Zero buy. Zero sell. Pure vibes.", accent: "#4fffb0" },
  { emoji: "🔥", label: "Liquidity", value: "Burned", sub: "LP locked & renounced forever", accent: "#a78bfa" },
  { emoji: "🚀", label: "Ownership", value: "Renounced", sub: "Dev builds, community owns. No token ownership for the dev.", accent: "#f0abfc" },
  { emoji: "👑", label: "Max Wallet", value: "No limits", sub: "Big buys welcome — no FUD here", accent: "#fde047" },
  { emoji: "🌝", label: "Mission", value: "To the moon", sub: "One hop at a time… millions of hops", accent: "#67e8f9" },
];

const roadmap = [
  { phase: "Phase 1", title: "The Frog Wakes Up 🐸", items: ["Site launch & branding", "Community seeded", "Contract deployed & verified"], done: true },
  { phase: "Phase 2", title: "The Pond Gets Loud 🎉", items: ["New DEX bonding curve", "Bonding curve fulfilled on pump.fun 🎯", "DEX listings & marketing push", "Official website goes live & community takeover 👑"], done: false },
  { phase: "Phase 3", title: "Liftoff 🚀", items: ["CEX applications", "Community rewards & giveaways", "$PEPE everywhere"], done: false },
  { phase: "Phase 4", title: "The Moon 🌕", items: ["Landing on the moon base", "Full community governance", "This is the way"], done: false },
];

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 inline-block rounded-full border border-frog/40 bg-frog/10 px-4 py-1 text-sm font-bold tracking-widest text-frog">
        {kicker}
      </p>
      <h2 className="font-display text-4xl font-extrabold sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 text-lg text-white/70">{sub}</p>}
    </div>
  );
}

function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2a1550_0%,#140b2e_45%,#0c0618_100%)]" />
        <div className="bg-stars absolute inset-0 opacity-70" />
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-frog/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-astro/25 blur-[120px]" />
      </div>

      {/* NAV */}
      <header className="flex items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-center gap-2.5">
          <img src="/moonpepe-logo.png" alt="MoonPepe" className="h-11 w-11 rounded-full object-cover ring-2 ring-frog/50" />
          <span className="font-display text-xl font-extrabold tracking-tight">
            Moon<span className="text-frog">Pepe</span>
          </span>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-bold text-white/70 sm:flex">
          <a href="#about" className="transition hover:text-frog">About</a>
          <a href="#tokenomics" className="transition hover:text-frog">Tokenomics</a>
          <a href="#roadmap" className="transition hover:text-frog">Roadmap</a>
          <a href="#community" className="transition hover:text-frog">Community</a>
        </nav>
        <a
          href="#community"
          className="btn-shine rounded-xl bg-frog px-4 py-2 text-sm font-extrabold text-[#0a1406] transition hover:brightness-110"
        >
          Join the Pond 🐸
        </a>
      </header>

      {/* PROMO BANNER — frog rocket to the moon */}
      <section className="mx-auto w-full max-w-5xl px-4 pt-4 sm:px-6">
        <div className="group relative overflow-hidden rounded-3xl border border-frog/40 shadow-2xl shadow-frog/20 transition hover:shadow-frog/40">
          <img
            src="/moonpepe-banner.webp"
            alt="MoonPepe frog riding a rocket to the moon"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0618]/95 via-[#0c0618]/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-5 pb-5 text-center sm:flex-row sm:justify-between sm:gap-4 sm:px-7 sm:text-left">
            <div>
              <span className="mb-1.5 inline-block rounded-full bg-frog px-3 py-0.5 font-display text-[11px] font-extrabold uppercase tracking-widest text-[#0a1406] shadow-lg shadow-frog/50">
                🌙 Live on pump.fun
              </span>
              <h2 className="font-display text-2xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-3xl">
                HOP ON — THE FROG IS GOING TO THE MOON 🐸🚀
              </h2>
              <p className="mt-1 text-sm font-bold text-frog sm:text-base">
                Bonding curve in progress — early hoppers get the greenest cheese 🌙
              </p>
            </div>
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine shrink-0 rounded-2xl bg-gradient-to-r from-frog to-[#4fffb0] px-7 py-3 font-extrabold text-[#0a1406] shadow-xl shadow-frog/40 transition hover:scale-105"
            >
              Buy $PEPE 🐸
            </a>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-10 text-center sm:pt-16">
        <div className="relative mb-8">
          <div className="animate-glowpulse absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-frog/30 blur-3xl" />
          <img
            src="/moonpepe-logo.png"
            alt="MoonPepe frog mascot riding to the moon"
            className="animate-floaty relative h-52 w-52 rounded-full object-cover shadow-2xl shadow-frog/30 ring-4 ring-white/10 sm:h-64 sm:w-64"
          />
          <span className="font-display absolute -right-2 -top-2 rotate-12 rounded-2xl bg-frog px-3 py-1 text-xs font-extrabold text-[#0a1406] shadow-lg shadow-frog/40">
            $PEPE 🚀
          </span>
        </div>

        <h1 className="font-display text-6xl font-extrabold leading-none sm:text-8xl">
          Moon<span className="text-gradient">Pepe</span>
        </h1>
        <p className="mt-3 font-display text-xl font-bold tracking-wide text-frog sm:text-2xl">
          Tick tock, Pepe’s on the clock 🔥
        </p>
        <p className="mt-4 max-w-xl text-lg text-white/75">
          The frog that’s going to the moon 🌙 100% community, 0% tax, 100% vibes.
          No roadmap drama — just a frog, a dream, and a whole lotta hops.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine rounded-2xl bg-gradient-to-r from-frog to-[#4fffb0] px-8 py-3.5 font-extrabold text-[#0a1406] shadow-xl shadow-frog/30 transition hover:scale-105"
          >
            Buy $PEPE 🐸
          </a>
        </div>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-white/60">
          <span className="text-white/45">CA:</span>
          <a
            href={`https://solscan.io/token/${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white/5 px-2 py-1 text-frog transition hover:bg-white/10"
          >
            {CA.slice(0, 8)}...{CA.slice(-6)}
          </a>
        </p>
      </section>

      {/* MARQUEE */}
      <div className="w-full overflow-hidden border-y border-white/10 bg-white/5 py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-extrabold tracking-wider">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-10">
              <span>$PEPE 🐸</span><span>TO THE MOON 🌙</span><span>0% TAX 🫰</span>
              <span>LP BURNED 🔥</span><span>COMMUNITY OWNED 👑</span><span>RENOUNCED 🚀</span>
              <span>WEN MOON? 🌝</span><span>HODL 🐸</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <SectionHead
          kicker="🍀 ABOUT"
          title="Why MoonPepe?"
          sub="Because every dog had its day — now it’s the frog’s turn."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { emoji: "💚", title: "A Frog With a Dream", body: "Pepe kept seeing all these rockets fly past. MoonPepe is one frog who decided to build his own." },
            { emoji: "👑", title: "Truly Community-Owned", body: "The dev builds the project but owns zero tokens. No team wallets. Once the bonding curve on pump.fun is fulfilled, the community takes over — it's your pond now." },
            { emoji: "∞", title: "Zero Friction Fun", body: "0% buy tax, 0% sell tax, liquidity burned. Pump the price or pump the memes — just have fun." },
          ].map((c, i) => (
            <div key={c.title} className="card-tilt animate-popin rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-frog/15 text-3xl">{c.emoji}</div>
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-white/70">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          kicker="📊 TOKENOMICS"
          title="The Numbers (They're Nice)"
          sub="Simple, transparent, and frog-approved. No weird unlocks, no shenanigans."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tokenomics.map((t, i) => (
            <div
              key={t.label}
              className="card-tilt animate-popin relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              style={{ animationDelay: `${i * 0.08}s`, boxShadow: `0 0 0 1px ${t.accent}22` }}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl" style={{ background: t.accent }} />
              <div className="mb-3 text-3xl">{t.emoji}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">{t.label}</p>
              <p className="font-display mt-1 text-3xl font-extrabold" style={{ color: t.accent }}>{t.value}</p>
              <p className="mt-1 text-sm text-white/70">{t.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-5xl px-6 py-24">
        <SectionHead
          kicker="🗺️ ROADMAP"
          title="The Journey to the Moon"
          sub="A simple, honest path. We’re not overpromising — just hopping forward."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {roadmap.map((r, i) => (
            <div key={r.phase} className="card-tilt animate-popin rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-xl bg-gradient-to-br from-frog to-astro px-3 py-1 font-display text-sm font-extrabold text-[#0a1406]">
                  {r.phase}
                </span>
                <h3 className="font-display text-xl font-bold">{r.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-white/75">
                    <span className="mt-0.5">{r.done ? "✅" : "🔜"}</span>
                    <span className={r.done ? "text-frog/80" : ""}>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY / CTA */}
      <section id="community" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="animate-popin relative overflow-hidden rounded-[2.5rem] border border-frog/30 bg-gradient-to-br from-[#1a1035] to-[#12351a] p-10 sm:p-14">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-frog/25 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-astro/25 blur-3xl" />
          <div className="relative">
            <span className="text-5xl">🚀</span>
            <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
              Ready to hop on board?
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Join the pond before liftoff. The memes are hot, the vibes are greener,
              and the moon is right there. 🐸🌙
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-shine rounded-2xl bg-gradient-to-r from-frog to-[#4fffb0] px-8 py-3.5 font-extrabold text-[#0a1406] shadow-xl shadow-frog/30 transition hover:scale-105">
                Buy $PEPE 🐸
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-xl transition hover:bg-white/10" title="Telegram">✈️</a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-xl transition hover:bg-white/10" title="X / Twitter">🐦</a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-xl transition hover:bg-white/10" title="DEX">🦎</a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-xl transition hover:bg-white/10" title="Contract">🔗</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src="/moonpepe-logo.png" alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-frog/40" />
            <span className="font-display font-extrabold">Moon<span className="text-frog">Pepe</span> <span className="text-frog">$PEPE</span></span>
          </div>
          <p className="text-sm text-white/50">
            🐸 Meme coin — for fun & community. Not financial advice. Always DYOR, don’t invest what you can’t lose.
          </p>
          <p className="font-mono text-xs text-white/40">© {new Date().getFullYear()} MoonPepe 🌙</p>
        </div>
      </footer>
    </div>
  );
}
