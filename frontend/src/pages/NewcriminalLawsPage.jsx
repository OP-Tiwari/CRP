import React, { useState } from "react";
import "./NewcriminalLawsPage.css";

function NewcriminalLawsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const laws = [
    {
      icon: "⚖️",
      title: "Bharatiya Nyaya Sanhita (BNS), 2023",
      summary: "Replaces the Indian Penal Code (IPC) of 1860.",
      details: `The BNS modernizes definitions of crime, introduces stricter punishments for crimes like mob lynching and sexual offenses,
      and emphasizes community service as a form of punishment. It redefines sedition laws and includes cybercrime more comprehensively.`,
    },
    {
      icon: "📜",
      title: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
      summary: "Replaces the Code of Criminal Procedure (CrPC) of 1973.",
      details: `BNSS introduces faster trial procedures, digital FIR filing, video recording of statements, and zero FIRs (allowing filing at any police station).
      It focuses on victim-friendly procedures and introduces timelines for investigation and trial completion.`,
    },
    {
      icon: "📁",
      title: "Bharatiya Sakshya Adhiniyam (BSA), 2023",
      summary: "Replaces the Indian Evidence Act of 1872.",
      details: `BSA includes digital records and electronic evidence (emails, social media) as primary admissible evidence.
      It aims to ensure transparency, clarity in admissibility, and reduces ambiguity around secondary evidence.`,
    },
    {
      icon: "🚨",
      title: "Mob Lynching Penalization",
      summary: "Introduced under BNS, 2023 as a specific crime.",
      details: `Mob lynching is now clearly defined and punishable by life imprisonment or death.
      This provision addresses rising concerns over communal or hate-driven mob attacks.`,
    },
    {
      icon: "🧹",
      title: "Community Service as Punishment",
      summary: "New alternative punishment in BNS, 2023.",
      details: `Judges can assign community service for minor offenses to promote reform and reduce prison overcrowding.`,
    },
    {
      icon: "📝",
      title: "Zero FIR and e-FIR Integration",
      summary: "Improves justice accessibility in BNSS.",
      details: `Allows FIR filing at any police station regardless of jurisdiction. e-FIRs can be filed online for non-serious offenses.`,
    },
    {
      icon: "🛡️",
      title: "Victim Protection and Rights",
      summary: "Stronger rights and witness protection in BNSS.",
      details: `Victims get updates on case progress. Measures like anonymous testimony and protected identities are enforced.`,
    },
    {
      icon: "💻",
      title: "Digital Evidence Acceptance",
      summary: "Expanded under BSA, 2023.",
      details: `Screenshots, social media content, and cloud files are now fully admissible. Metadata and timestamps are legally valid.`,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="laws-page-full">
      <h1>🧾 New Criminal Laws of India </h1>
      <div className="accordion">
        {laws.map((law, index) => (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "active" : ""}`}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-icon">{law.icon}</div>
              <div className="accordion-text">
                <h2>{`${index + 1}. ${law.title}`}</h2>
                <p>{law.summary}</p>
              </div>
              <span className="accordion-toggle">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="accordion-content"
              style={{
                maxHeight: openIndex === index ? "500px" : "0px",
              }}
            >
              <p>{law.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewcriminalLawsPage;
