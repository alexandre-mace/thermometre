import { cn } from "@/lib/utils"

function AlertMarquee() {
  return (
    <div className="flex items-center gap-2 overflow-hidden border-b-4 border-black bg-red-600 px-4 py-1.5">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="shrink-0 text-xs font-black tracking-widest text-black uppercase"
        >
          ALERTE CLIMAT
        </span>
      ))}
    </div>
  )
}

function BrutalCard({
  children,
  className,
  critical = false,
}: {
  children: React.ReactNode
  className?: string
  critical?: boolean
}) {
  return (
    <div
      className={cn(
        "relative border-4 border-black bg-white p-4 rounded-none",
        critical && "border-red-600",
        className
      )}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="bg-black px-2 py-0.5 text-[10px] font-black tracking-[0.2em] text-white uppercase">
        {children}
      </span>
    </div>
  )
}

function SubLine({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 border-t-2 border-black pt-2 text-[10px] font-bold uppercase leading-tight tracking-wider text-black/60">
      {children}
    </p>
  )
}

export function ClimateV3() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top alert marquee */}
      <AlertMarquee />

      {/* HEADER */}
      <header className="border-b-4 border-black border-t-8 border-t-red-600">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="bg-red-600 px-3 py-1 text-xs font-black tracking-[0.3em] text-white uppercase">
                  SSP5-8.5
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black/40">
                  GIEC AR6 / PIRE SCENARIO
                </span>
              </div>
              <h1 className="font-mono text-7xl font-black uppercase leading-none tracking-tighter sm:text-8xl lg:text-9xl">
                <span className="text-red-600">+4,4</span>
                <span className="text-black/20">°C</span>
              </h1>
              <p className="mt-1 text-lg font-black uppercase tracking-[0.3em] text-black/50 sm:text-xl">
                D&apos;ICI 2100
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black/30">
                RECHAUFFEMENT MOYEN 2081-2100
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black/30">
                PLAGE 3,3 A 5,7°C
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black/30">
                REFERENCE 1995-2014
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* GRID */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1 - CHALEUR EXTREME */}
          <BrutalCard critical className="sm:col-span-2 lg:col-span-2">
            <SectionLabel>CHALEUR EXTREME</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="-my-2 font-mono text-8xl font-black leading-none tracking-tighter text-red-600 sm:text-9xl">
                    80
                  </span>
                  <span className="text-2xl font-black text-red-600">%</span>
                </div>
                <p className="mt-2 text-xs font-black uppercase leading-tight tracking-wider">
                  DES MEGAPOLES AVEC AU MOINS 1 JOUR/AN
                  <br />
                  A HEAT INDEX &gt; 40,6°C
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-7xl font-black leading-none tracking-tighter text-black sm:text-8xl">
                    365
                  </span>
                  <span className="text-lg font-black uppercase text-black/40">
                    J/AN
                  </span>
                </div>
                <p className="mt-2 text-xs font-black uppercase leading-tight tracking-wider">
                  STRESS THERMIQUE SEVERE POUR LE BETAIL
                  <br />
                  EN ZONES TROPICALES — QUASI PERMANENT
                </p>
              </div>
            </div>
            <SubLine>
              MORTALITE ET MORBIDITE LIEES A LA CHALEUR EN HAUSSE CONTINUE —
              DEPASSEMENTS DES SEUILS DE CHALEUR MORTELLE POSSIBLES TOUTE
              L&apos;ANNEE D&apos;ICI 2100
            </SubLine>
          </BrutalCard>

          {/* 2 - MONTEE DES MERS */}
          <BrutalCard>
            <SectionLabel>MONTEE DES MERS</SectionLabel>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-mono text-6xl font-black leading-none tracking-tighter text-black sm:text-7xl">
                    +1,01
                  </span>
                  <span className="text-lg font-black uppercase text-black/40">
                    M
                  </span>
                </div>
                <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-black/60">
                  HAUSSE MAX PROBABLE DU NIVEAU MOYEN DES MERS D&apos;ICI 2100
                  (FOURCHETTE +0,63 A 1,01 M)
                </p>
              </div>
              <div className="border-t-2 border-black pt-3">
                <div className="relative overflow-visible">
                  <span className="-ml-1 font-mono text-8xl font-black leading-none tracking-tighter text-red-600 sm:-ml-2 sm:text-9xl">
                    16
                  </span>
                  <span className="ml-1 text-xl font-black uppercase text-black/40">
                    M
                  </span>
                </div>
                <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-black/60">
                  HAUSSE POTENTIELLE D&apos;ICI 2300
                  <br />
                  AVEC INSTABILITE DES CALOTTES
                </p>
              </div>
            </div>
          </BrutalCard>

          {/* 3 - EAU */}
          <BrutalCard critical>
            <SectionLabel>STRESS HYDRIQUE</SectionLabel>
            <div className="relative -mb-2 overflow-visible">
              <span className="font-mono text-[10rem] font-black leading-[0.8] tracking-tighter text-black sm:text-[12rem]">
                4
              </span>
            </div>
            <p className="text-sm font-black uppercase tracking-wider text-black">
              MILLIARDS
            </p>
            <p className="mt-1 text-xs font-black uppercase leading-tight tracking-wider text-black/60">
              DE PERSONNES EXPOSEES
              <br />A UNE PENURIE D&apos;EAU
            </p>
            <SubLine>
              PENURIE CHRONIQUE AGGRAVEE PAR LES SECHERESSES — AUGMENTATION
              PAR RAPPORT AU SCENARIO +2°C
            </SubLine>
          </BrutalCard>

          {/* 4 - AGRICULTURE */}
          <BrutalCard>
            <SectionLabel>AGRICULTURE</SectionLabel>
            <div className="flex gap-4">
              <div className="flex-1 border-r-2 border-black pr-4">
                <span className="font-mono text-6xl font-black leading-none tracking-tighter text-red-600 sm:text-7xl">
                  -46
                </span>
                <span className="text-xl font-black text-red-600">%</span>
                <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-black/60">
                  RENDEMENTS AFRIQUE
                  <br />
                  RIZ, MAIS, BLE
                  <br />
                  PIRE CAS
                </p>
              </div>
              <div className="flex-1">
                <span className="font-mono text-6xl font-black leading-none tracking-tighter text-black sm:text-7xl">
                  -23
                </span>
                <span className="text-xl font-black text-black/40">%</span>
                <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-black/60">
                  RENDEMENTS AFRIQUE
                  <br />
                  AVEC ADAPTATION
                </p>
              </div>
            </div>
            <div className="mt-3 border-t-2 border-black pt-3">
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-5xl font-black leading-none tracking-tighter text-black">
                  &gt;40
                </span>
                <span className="text-xl font-black text-black/40">%</span>
              </div>
              <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-black/60">
                PERTES DE PRODUCTIVITE DES PATURAGES
              </p>
            </div>
            <SubLine>
              RISQUE DE DEFAILLANCES SIMULTANEES DANS PLUSIEURS GRENIERS A BLE
              MONDIAUX
            </SubLine>
          </BrutalCard>

          {/* 5 - BIODIVERSITE */}
          <BrutalCard className="sm:col-span-2 lg:col-span-2">
            <SectionLabel>BIODIVERSITE</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <span className="font-mono text-5xl font-black leading-none tracking-tighter text-black sm:text-6xl">
                  13-39
                </span>
                <span className="text-xl font-black text-black/40">%</span>
                <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-black/60">
                  DES ESPECES A HAUT
                  <br />
                  RISQUE D&apos;EXTINCTION
                </p>
              </div>
              <div>
                <span className="font-mono text-5xl font-black leading-none tracking-tighter text-black sm:text-6xl">
                  35
                </span>
                <span className="text-xl font-black text-black/40">%</span>
                <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-black/60">
                  DES TERRES EMERGEES AVEC
                  <br />
                  DEPLACEMENT DE BIOMES
                </p>
              </div>
              <div className="border-4 border-red-600 bg-red-600 p-3">
                <span className="font-mono text-6xl font-black leading-none tracking-tighter text-white sm:text-7xl">
                  ~99
                </span>
                <span className="text-xl font-black text-white/60">%</span>
                <p className="mt-1 text-[10px] font-black uppercase leading-tight tracking-wider text-white/80">
                  DES RECIFS CORALLIENS
                  <br />
                  TROPICAUX PERDUS
                </p>
              </div>
            </div>
            <SubLine>
              EFFONDREMENT QUASI TOTAL DES RECIFS DES +2°C — A +4-5°C,
              CONSEQUENCES MAJEURES SUR PECHES, PROTECTION COTIERE, TOURISME
            </SubLine>
          </BrutalCard>
        </div>
      </div>

      {/* BOTTOM SUMMARY */}
      <div className="border-t-4 border-black bg-red-600">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-sm font-black uppercase leading-relaxed tracking-wider text-black sm:text-base">
            UN MONDE A +4-5°C, CE N&apos;EST PAS &laquo; UN PEU PLUS CHAUD
            &raquo;. C&apos;EST UN MONDE OU LA CHALEUR DANGEREUSE DEVIENT
            NORMALE, OU LA MER MONTE PROBABLEMENT DE ~1 M D&apos;ICI 2100 (ET
            PLUSIEURS METRES ENSUITE), OU ~4 MILLIARDS DE PERSONNES SONT EN
            PENURIE D&apos;EAU, ET OU LE RISQUE D&apos;EXTINCTION ET DE
            BASCULEMENT D&apos;ECOSYSTEMES GRIMPE FORTEMENT.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t-4 border-black">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <p className="text-[9px] font-black tracking-[0.3em] uppercase text-black/30">
            DONNEES : GIEC AR6 — SCENARIO SSP5-8.5 — RECHAUFFEMENT MOYEN
            +4,4°C (PLAGE 3,3-5,7°C) — REFERENCE 1995-2014
          </p>
        </div>
      </div>

      {/* Bottom alert marquee */}
      <AlertMarquee />
    </div>
  )
}
