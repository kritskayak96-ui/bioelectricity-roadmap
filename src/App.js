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
    id: "experiments",
    title: "IV. Experimental & Translational Projects",
    emoji: "🧬",
    groups: [
      {
        title: "Experimental directions",
        items: [
          "Morphogenesis control: studying the role of membrane potential and electric fields in the regeneration of lost body parts.",
          "Wound healing: visualization of endogenous electric currents during regeneration and their spatiotemporal dynamics.",
          "Oncogenic transformation: testing the hypothesis of 'bioelectric cancer attractors' — disrupted intercellular electrical communication during tumor progression.",
          "Pharmacological modulation: application of ion channel modulators, gap-junction regulators, and external fields to control morphogenesis.",
          "Cosmetoelectric studies: exploring how local bioelectric modulation affects skin regeneration, pigmentation, and collagen remodeling — foundation for next-gen aesthetic biotechnologies.",
        ],
      },
      {
        title: "Expected results",
        items: [
          "Generation of Vmem regeneration maps — spatial-temporal patterns of electrical activity during tissue repair.",
          "Identification of critical bioelectric states necessary for maintaining morphogenetic stability.",
          "Construction of bioelectric attractor models explaining transitions from normal to pathological morphologies.",
          "Development of experimental interfaces for precise bioelectric control of tissue growth and healing (soft bioelectrodes, microcurrent fields).",
          "Experimental validation of bioelectricity as a systems-level regulator of gene expression and cell identity.",
        ],
      },
    ],
  },

  {
    id: "applications",
    title: "V. Applied Bioelectricity",
    emoji: "🧪",
    groups: [
      {
        title: "Regenerative & aesthetic medicine",
        items: [
          "Guided tissue growth via exogenous stimulation",
          "Bioelectric wound healing & scar modulation",
          "Cosmetoelectric rejuvenation: microcurrents for collagen induction",
        ],
      },
      {
        title: "Antioncogenic & metabolic control",
        items: [
          "Therapeutic hyperpolarization approaches",
          "Combining with epigenetic and metabolic modulators",
        ],
      },
      {
        title: "Synthetic morphogenesis & organoids",
        items: [
          "Electric fields steering organoid self-organization",
          "Field-driven growth and developmental programs",
        ],
      },
      {
        title: "Bioelectronic interfaces",
        items: [
          "Electro-cellular and neuro-bio interfaces",
          "Energy harvesting and sensory feedback loops",
        ],
      },
    ],
  },

  {
    id: "companies",
    title: "VI. Proto-Companies & Translational Vectors",
    emoji: "💼",
    groups: [
      {
        title: "BioElectric Therapeutics",
        items: [
          "Platform for controlled tissue regeneration via electric fields and ionic currents.",
          "Focus: wound healing, post-surgical recovery, trophic ulcers.",
        ],
      },
      {
        title: "MorphogenX",
        items: [
          "Bioelectrical morphogenesis engineering.",
          "Focus: restoring organ shape, preventing fibrosis, and reshaping developmental fields through endogenous voltage patterns.",
        ],
      },
      {
        title: "OncoField Analytics",
        items: [
          "Diagnostics and therapy of oncogenic states via restoration of bioelectric homeostasis.",
          "Focus: mapping electric anomalies and correcting them using ion channel modulators, peptides, and field therapy.",
        ],
      },
      {
        title: "NeuroForm Biointerfaces",
        items: [
          "Bioelectronic interfaces and implants based on endogenous signaling principles.",
          "Focus: neuroregeneration, brain-computer interfaces, cognitive enhancement, and longevity medicine.",
        ],
      },
      {
        title: "ElectraDerma Biotech",
        items: [
          "Bioelectric aesthetics and skin rejuvenation.",
          "Focus: soft wearable microcurrent systems to restore dermal symmetry, stimulate collagen synthesis, and accelerate scar healing.",
          "Vision: merging beauty and bioelectric medicine into a unified regenerative platform.",
        ],
      },
    ],
  },

  {
    id: "future",
    title: "VII. Future & Synthesis",
    emoji: "🔮",
    groups: [
      {
        title: "Information biology",
        items: [
          "ΔVmem as information & memory carrier",
          "Analogies to computing networks; topological/quantum-like models",
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
];

export default function App() {
  return (
    <div className="wrap">
      <section className="hero" id="top">
        <div className="glow" aria-hidden />
        <div className="kicker">Bioelectricity roadmap</div>
<h1 className="h1">Bioelectricity Can Shape Life</h1>
<p className="sub">
  Aging may be a loss of electrical coherence — a fading signal in the body’s
  living circuits.  
  We explore how bioelectricity controls regeneration, morphogenesis, and
  cellular communication.
  Our mission as an international research collective is to uncover the rules
  of biological electricity and apply them to healing, longevity, and the
  reprogramming of life itself.
</p>

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
