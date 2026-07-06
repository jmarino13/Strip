export default function TechnologyPage() {
  return (
    <main>
      <section className="techHero">
        <p className="eyebrow">STRIP TECHNOLOGY</p>
        <h1>Designed for sublingual peptide delivery.</h1>
        <p>
          STRIP uses dissolvable oral strip technology to deliver peptide-based
          wellness formulas under the tongue, offering a premium alternative to
          traditional capsules and injections.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">WHY ORAL STRIPS</p>
        <h2>A smarter delivery experience.</h2>

        <div className="featureGrid">
          <div className="card glass">
            <h3>Needle-Free</h3>
            <p>No injections, sharps, or complicated supplies.</p>
          </div>

          <div className="card glass">
            <h3>Sublingual Delivery</h3>
            <p>Designed to dissolve under the tongue through oral mucosa.</p>
          </div>

          <div className="card glass">
            <h3>Convenient</h3>
            <p>Simple, discreet, and easy to integrate into daily routines.</p>
          </div>

          <div className="card glass">
            <h3>Premium Format</h3>
            <p>Modern delivery technology for modern peptide wellness.</p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <p className="eyebrow">THE PROCESS</p>
        <h2>Place. Dissolve. Deliver.</h2>

        <div className="steps">
          <div>
            <span>01</span>
            <h3>Place</h3>
            <p>Place the strip under the tongue as directed.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Dissolve</h3>
            <p>The strip dissolves through oral strip technology.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Deliver</h3>
            <p>Formulated for sublingual delivery through oral mucosa.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">COMPARISON</p>
        <h2>STRIP vs capsules vs injections.</h2>

        <div className="comparisonTable">
          <div className="row header">
            <div>Feature</div>
            <div>STRIP</div>
            <div>Capsules</div>
            <div>Injections</div>
          </div>

          <div className="row">
            <div>Needle-free</div>
            <div>Yes</div>
            <div>Yes</div>
            <div>No</div>
          </div>

          <div className="row">
            <div>Bypasses stomach acid</div>
            <div>Designed to</div>
            <div>No</div>
            <div>Yes</div>
          </div>

          <div className="row">
            <div>Convenient daily use</div>
            <div>High</div>
            <div>High</div>
            <div>Lower</div>
          </div>

          <div className="row">
            <div>Premium patient experience</div>
            <div>High</div>
            <div>Standard</div>
            <div>Clinical</div>
          </div>
        </div>
      </section>
    </main>
  );
}