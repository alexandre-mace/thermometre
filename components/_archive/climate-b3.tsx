import { cn } from "@/lib/utils"

function Cell({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-r border-b border-[#e5e5e5]",
        className
      )}
    >
      {children}
    </div>
  )
}

function Label({
  children,
  className,
  position = "top-left",
}: {
  children: React.ReactNode
  className?: string
  position?: "top-left" | "bottom-left" | "top-right" | "bottom-right"
}) {
  const positionClasses = {
    "top-left": "top-3 left-3",
    "bottom-left": "bottom-3 left-3",
    "top-right": "top-3 right-3",
    "bottom-right": "bottom-3 right-3",
  }

  return (
    <span
      className={cn(
        "absolute z-10 max-w-[70%] font-mono uppercase tracking-[0.15em]",
        "text-[10px] leading-tight",
        positionClasses[position],
        className
      )}
    >
      {children}
    </span>
  )
}

function BigNumber({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "block font-black leading-[0.8] tracking-[-0.04em] select-none",
        className
      )}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

export function ClimateB3() {
  return (
    <section className="w-full bg-[#fafafa]">
      {/* ── Grid ── */}
      <div
        className="grid w-full border-t border-l border-[#e5e5e5]"
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "auto",
          gap: 0,
        }}
      >
        {/* ───────────────────────────────────────────────
            ROW 1 — Header hero cell + intro
        ─────────────────────────────────────────────── */}

        {/* A1: Hero "+4,4°C" — spans 4 cols, tall */}
        <Cell className="col-span-6 md:col-span-4 h-[28rem] md:h-[36rem] bg-black text-white flex items-end">
          <Label position="top-left" className="text-white/60">
            Trajectoire SSP5-8.5
          </Label>
          <BigNumber className="absolute -top-16 -left-6 text-[16rem] md:text-[22rem] text-white/[0.08]">
            +4,4
          </BigNumber>
          <div className="relative z-10 p-6 md:p-10">
            <BigNumber className="text-[8rem] md:text-[14rem] lg:text-[18rem] text-white">
              +4,4
            </BigNumber>
            <span className="block text-[2rem] md:text-[3.5rem] font-black tracking-tight text-white/50 -mt-4 md:-mt-8">
              °C
            </span>
          </div>
        </Cell>

        {/* A2: Description — spans 2 cols */}
        <Cell className="col-span-6 md:col-span-2 h-auto md:h-[36rem] bg-white flex flex-col justify-between p-6 md:p-8">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-6">
              GIEC AR6 &mdash; Scénario haute émission
            </p>
            <h1 className="text-[1.4rem] md:text-[1.6rem] font-black leading-[1.15] tracking-tight text-black">
              Projections climatiques
              <br />
              à horizon 2100
            </h1>
          </div>
          <div className="mt-8">
            <p className="text-[11px] leading-relaxed text-black/50 max-w-[28ch]">
              Données consolidées du sixième rapport d'évaluation du GIEC.
              Scénario SSP5-8.5, réchauffement médian de +4,4°C par rapport aux
              niveaux préindustriels.
            </p>
          </div>
        </Cell>

        {/* ───────────────────────────────────────────────
            ROW 2 — Chaleur extrême
        ─────────────────────────────────────────────── */}

        {/* B1: 80% — mégapoles */}
        <Cell className="col-span-3 md:col-span-2 h-[20rem] md:h-[24rem] bg-white">
          <Label position="top-left" className="text-black/40">
            Mégapoles en
            <br />
            chaleur extrême
          </Label>
          <div className="absolute bottom-0 left-2 md:left-4">
            <BigNumber className="text-[8rem] md:text-[12rem] text-black">
              80
            </BigNumber>
          </div>
          <span className="absolute bottom-6 right-4 text-[2.5rem] md:text-[3.5rem] font-black text-black/15">
            %
          </span>
        </Cell>

        {/* B2: 365 j/an stress bétail */}
        <Cell className="col-span-3 md:col-span-2 h-[20rem] md:h-[24rem] bg-[#f0eeeb]">
          <Label position="top-left" className="text-black/40">
            Jours/an de stress
            <br />
            thermique du bétail
          </Label>
          <div className="absolute -bottom-6 -right-4">
            <BigNumber className="text-[9rem] md:text-[13rem] text-black/90">
              365
            </BigNumber>
          </div>
        </Cell>

        {/* B3: Sea level +0.63–1.01m */}
        <Cell className="col-span-6 md:col-span-2 h-[20rem] md:h-[24rem] bg-black text-white">
          <Label position="top-left" className="text-white/50">
            Montée des mers
            <br />
            d'ici 2100 (mètres)
          </Label>
          <div className="absolute bottom-2 left-3 md:left-5 flex items-baseline gap-1">
            <BigNumber className="text-[6rem] md:text-[8rem] text-white/30">
              +
            </BigNumber>
            <BigNumber className="text-[6rem] md:text-[9rem] text-white">
              1,01
            </BigNumber>
          </div>
          <span className="absolute top-20 right-4 text-[10px] font-mono text-white/30 tracking-widest">
            0,63 — 1,01 m
          </span>
        </Cell>

        {/* ───────────────────────────────────────────────
            ROW 3 — Sea level 2300 / Eau / Agriculture
        ─────────────────────────────────────────────── */}

        {/* C1: 16m — sea level 2300 */}
        <Cell className="col-span-3 md:col-span-1 h-[18rem] md:h-[22rem] bg-white">
          <Label position="top-left" className="text-black/40">
            Mers 2300
            <br />
            (mètres)
          </Label>
          <div className="absolute -bottom-4 -left-2">
            <BigNumber className="text-[10rem] md:text-[14rem] text-black">
              16
            </BigNumber>
          </div>
        </Cell>

        {/* C2: ~4 milliards — pénurie d'eau */}
        <Cell className="col-span-3 md:col-span-3 h-[18rem] md:h-[22rem] bg-white">
          <Label position="top-left" className="text-black/40">
            Personnes en pénurie
            <br />
            d'eau (milliards)
          </Label>
          <div className="absolute -bottom-8 -left-3 md:-left-6 flex items-baseline">
            <BigNumber className="text-[3rem] md:text-[5rem] text-black/20 mr-1">
              ~
            </BigNumber>
            <BigNumber className="text-[10rem] md:text-[16rem] text-black">
              4
            </BigNumber>
          </div>
          <span className="absolute bottom-5 right-5 text-[10px] font-mono text-black/25 tracking-widest uppercase">
            Mds
          </span>
        </Cell>

        {/* C3: -23% à -46% rendements */}
        <Cell className="col-span-6 md:col-span-2 h-[18rem] md:h-[22rem] bg-white">
          <Label position="top-left" className="text-black/40">
            Rendements agricoles
            <br />
            (baisse en %)
          </Label>
          <div className="absolute -bottom-4 right-2 md:right-4 text-right">
            <BigNumber className="text-[5rem] md:text-[7rem] text-black/15">
              -23
            </BigNumber>
            <BigNumber className="text-[6rem] md:text-[9rem] text-black -mt-6 md:-mt-10">
              -46
            </BigNumber>
          </div>
          <span className="absolute bottom-4 left-4 text-[10px] font-mono text-black/25 tracking-widest">
            %
          </span>
        </Cell>

        {/* ───────────────────────────────────────────────
            ROW 4 — Agriculture / Biodiversité
        ─────────────────────────────────────────────── */}

        {/* D1: >40% pâturages dégradés */}
        <Cell className="col-span-3 md:col-span-2 h-[18rem] md:h-[22rem] bg-black text-white">
          <Label position="top-left" className="text-white/50">
            Pâturages dégradés
          </Label>
          <div className="absolute -bottom-6 -left-4">
            <BigNumber className="text-[10rem] md:text-[14rem] text-white">
              40
            </BigNumber>
          </div>
          <span className="absolute top-16 right-4 text-[3rem] md:text-[4rem] font-black text-white/20">
            &gt;%
          </span>
        </Cell>

        {/* D2: 13–39% espèces extinction */}
        <Cell className="col-span-3 md:col-span-2 h-[18rem] md:h-[22rem] bg-white">
          <Label position="top-left" className="text-black/40">
            Espèces menacées
            <br />
            d'extinction
          </Label>
          <div className="absolute -bottom-2 left-2">
            <BigNumber className="text-[4.5rem] md:text-[6rem] text-black/20">
              13
            </BigNumber>
          </div>
          <div className="absolute -bottom-6 right-0 md:right-2">
            <BigNumber className="text-[8rem] md:text-[12rem] text-black">
              39
            </BigNumber>
          </div>
          <span className="absolute top-[45%] left-1/2 -translate-x-1/2 text-[10px] font-mono text-black/20 tracking-[0.3em]">
            — %
          </span>
        </Cell>

        {/* D3: 35% biomes transformés */}
        <Cell className="col-span-3 md:col-span-1 h-[18rem] md:h-[22rem] bg-[#f0eeeb]">
          <Label position="bottom-left" className="text-black/40">
            Biomes
            <br />
            transformés
          </Label>
          <div className="absolute -top-4 -right-4">
            <BigNumber className="text-[9rem] md:text-[12rem] text-black/80">
              35
            </BigNumber>
          </div>
          <span className="absolute top-4 right-4 text-[10px] font-mono text-black/25">
            %
          </span>
        </Cell>

        {/* D4: ~99% récifs coralliens */}
        <Cell className="col-span-3 md:col-span-1 h-[18rem] md:h-[22rem] bg-white">
          <Label position="top-left" className="text-black/40">
            Récifs coralliens
            <br />
            détruits
          </Label>
          <div className="absolute -bottom-8 -right-6">
            <BigNumber className="text-[10rem] md:text-[14rem] text-black">
              99
            </BigNumber>
          </div>
          <span className="absolute top-20 left-4 text-[2rem] font-black text-black/10">
            ~%
          </span>
        </Cell>

        {/* ───────────────────────────────────────────────
            ROW 5 — Summary strip
        ─────────────────────────────────────────────── */}

        <Cell className="col-span-6 bg-white py-6 px-6 md:px-10 border-b-0">
          <p className="text-[11px] md:text-xs leading-relaxed text-black/50 max-w-[90ch]">
            Chaque fraction de degré supplémentaire accroît les risques de
            manière non linéaire. Les projections SSP5-8.5 représentent un
            scénario sans inflexion majeure des politiques d'émission actuelles.
            Les impacts listés sont interdépendants : la dégradation des
            écosystèmes amplifie l'insécurité alimentaire et hydrique, qui
            aggrave les pressions migratoires et sanitaires.
          </p>
        </Cell>
      </div>

      {/* ── Footer metadata ── */}
      <div className="w-full px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
        <span className="text-[9px] font-mono tracking-[0.15em] text-black/[0.2] uppercase">
          Source : GIEC AR6 WGI / WGII / WGIII — 2021-2022
        </span>
        <span className="text-[9px] font-mono tracking-[0.15em] text-black/[0.2] uppercase">
          Scénario SSP5-8.5 &middot; Réchauffement médian +4,4 °C à 2100
        </span>
        <span className="text-[9px] font-mono tracking-[0.15em] text-black/[0.2] uppercase">
          Données brutes &middot; Aucune interprétation éditoriale
        </span>
      </div>
    </section>
  )
}
