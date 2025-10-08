import "./styles.css";

/**
 * Each section has:
 * - id, title, emoji
 * - groups: blocks with a title and list of items
 * - every item can be a plain string OR an object { text, links: [{label, href}] }
 * Links are rendered under the bullet as small clickable refs.
 */

const sections = [
  {
    id: "fundamentals",
    title: "I. Fundamentals",
    emoji: "⚡️",
    groups: [
      {
        title: "What is bioelectricity?",
        items: [
          "Ion gradients (Na⁺, K⁺, Cl⁻, Ca²⁺) and ΔVmem",
          "Channels & pumps (Kir, V-ATPase, Na⁺/K⁺-ATPase)",
        ],
      },
      {
        title: "Bioelectric structures & scales",
        items: [
          "Cell level: membrane potential, signaling",
          "Tissue level: fields & gap junction networks (Connexins/Innexins)",
          "Organism level: global electric patterns",
          {
            text: "Key overviews on endogenous bioelectric networks",
            links: [
              {
                label: "Levin 2014 (Persp. Biol.)",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5477612/",
              },
              {
                label: "Tseng & Levin 2013 (CIB)",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3614717/",
              },
            ],
          },
        ],
      },
      {
        title: "Read & write tools",
        items: [
          "Voltage-sensitive dyes & Vmem mapping",
          "Patch/voltage clamp; multielectrode recordings",
          "Opto/chemogenetics; exogenous electric fields",
        ],
      },
    ],
  },

  {
    id: "systemic",
    title: "II. Bioelectricity in Systems Biology",
    emoji: "🧠",
    groups: [
      {
        title: "Morphogenesis & pattern formation",
        items: [
          "Planaria, Xenopus, axolotl: axes & symmetry control by fields",
          {
            text: "Gap-junction blockade induces head identity edits in planaria",
            links: [
              {
                label: "Emmons-Bell et al. 2015",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4661923/",
              },
            ],
          },
          "Hypothesis: a ‘bioelectric code’ of stable ΔVmem patterns",
        ],
      },
      {
        title: "Cell fate & reprogramming",
        items: [
          "ΔVmem biases differentiation & transcription",
          {
            text: "Tumor suppression via hyperpolarization; Vmem as a master regulator",
            links: [
              {
                label: "Chernet & Levin 2013 (Oncotarget)",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3753036/",
              },
            ],
          },
          {
            text: "Electro-epigenetic coupling (e.g., HDAC, SLC5A8, H3K27ac links)",
            links: [
              {
                label: "Tseng & Levin 2013 (CIB review)",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3614717/",
              },
            ],
          },
        ],
      },
      {
        title: "Bioelectric communication",
        items: [
          "Gap junctions as long-range morphogenetic networks",
          "Tissue-level electrical memory & integration with biochemical cascades",
        ],
      },
    ],
  },

  {
    id: "pathology",
    title: "III. Pathology & Electrical Failure",
    emoji: "🚨",
    groups: [
      {
        title: "Oncogenesis & depolarization",
        items: [
          "Loss of gradients → tissue disorganization",
          {
            text: "Hyperpolarization (Kir2.1, ivermectin-GlyR) suppresses tumor-like states",
            links: [
              {
                label: "Chernet & Levin 2013",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3753036/",
              },
            ],
          },
        ],
      },
      {
        title: "Neurodegeneration & ionic imbalance",
        items: [
          "Mitochondrial potential & Ca²⁺ dysregulation",
          "Synaptogenesis/microglia under bioelectric control (emerging)",
        ],
      },
      {
        title: "Aging & loss of bioelectric plasticity",
        items: [
          "Decline of polarity; weakened gap-junction connectivity",
          "Loss of ‘regenerative electrical memory’",
        ],
      },
    ],
  },

  {
    id: "applications",
    title: "IV. Applications",
    emoji: "🧪",
    groups: [
      {
        title: "Regenerative medicine",
        items: [
          "Exogenous stimulation to guide growth",
          "Axis control in regeneration (axolotl, Xenopus)",
          "Conductive biomaterials & electroactive hydrogels",
        ],
      },
      {
        title: "Antioncogenic strategies",
        items: [
          "Therapeutic hyperpolarization",
          "Combining with epigenetic agents (HDAC inhibitors, SCFAs)",
        ],
      },
      {
        title: "Organoids & synthetic morphogenesis",
        items: [
          "Electrical fields to steer self-organization",
          "Field-driven growth programs",
        ],
      },
      {
        title: "Bioelectronic interfaces",
        items: [
          "Electro-cellular interfaces & biosensors",
          "Energy harvesting from biopotentials",
        ],
      },
    ],
  },

  {
    id: "future",
    title: "V. Future & Synthesis",
    emoji: "🔮",
    groups: [
      {
        title: "Information biology",
        items: [
          "ΔVmem as information & memory carrier",
          "Analogies to computing networks; topological/quantum-like models",
          {
            text: "Foundational perspectives on the ‘bioelectric code’",
            links: [
              {
                label: "Levin 2014/2017 overviews",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5477612/",
              },
            ],
          },
        ],
      },
      {
        title: "Bioelectricity & longevity",
        items: [
          "Maintaining tissue integrity via electrical connectivity",
          "Impact on metabolism & aging signals",
          "Prospects for ‘electrical rejuvenation’",
        ],
      },
      {
        title: "Ethics & philosophy",
        items: [
          "Electricity as a unifying regulator beyond genes & biochemistry",
          "Shifting notions of body boundaries & life",
          "Bio-art and the aesthetics of electric life",
        ],
      },
    ],
  },

  {
    id: "models",
    title: "VI. Key Models & Players",
    emoji: "🧬",
    groups: [
      {
        title: "Models",
        items: [
          " Planaria — emblem of bioelectric morphogenesis",
          " Xenopus — versatile regeneration model",
          " Axolotl — limb regeneration master",
          " Mitochondria — inner electrical generator",
          " Neurons — ancient bioelectric network",
        ],
      },
      {
        title: "References (selected)",
        items: [
          {
            text: "Planaria head identity re-writes via gap junctions",
            links: [
              {
                label: "Emmons-Bell et al., 2015",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4661923/",
              },
            ],
          },
          {
            text: "Vmem as a regulator of tumorigenesis (Xenopus)",
            links: [
              {
                label: "Chernet & Levin, 2013",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3753036/",
              },
            ],
          },
          {
            text: "Cracking/reading the bioelectric code (reviews)",
            links: [
              {
                label: "Tseng & Levin, 2013",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3614717/",
              },
              {
                label: "Levin, 2017 (overview)",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5477612/",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "toolkit",
    title: "VII. Toolkit",
    emoji: "🧰",
    groups: [
      {
        title: "Measure & manipulate",
        items: [
          "Vmem imaging (DiBAC, CC2-DMPE, ANNINE-6+)",
          "Gap-junction tracers (Neurobiotin, Lucifer Yellow)",
          "Patch-/voltage-clamp; multichannel electrodes",
          "Opto/chemogenetic & pharmacologic actuators",
          "Electrophysiology-aware 3D simulations",
        ],
      },
    ],
  },
];

export default function App() {
  return (
    <div className="wrap">
      <section className="hero" id="top">
        <div className="glow" aria-hidden />
        <div className="kicker">Bioelectricity roadmap</div>
        <h1 className="h1">Bioelectricity Roadmap</h1>
        <p className="sub">“Vmem → Chromatin → Transcriptome → Phenotype”</p>

        <nav className="nav" aria-label="Section navigation">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="grid">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="card">
            <div className="badge" title={s.title}>
              {s.emoji}
            </div>
            <h2 className="h2">{s.title}</h2>

            {s.groups.map((g) => (
              <div key={g.title} style={{ marginBottom: 10 }}>
                <div className="group-title">{g.title}</div>
                <ul className="ul">
                  {g.items.map((it, idx) => {
                    const item = typeof it === "string" ? { text: it } : it;
                    return (
                      <li className="li" key={idx}>
                        • {item.text || it}
                        {item.links && item.links.length > 0 && (
                          <div className="links">
                            {item.links.map((l) => (
                              <a
                                key={l.href}
                                className="link"
                                href={l.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>

      <p className="footer">Bioelectricity = the language of life</p>

      <button
        className="toTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Top
      </button>
    </div>
  );
}
