import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>BITPULSE</h1>
          <p className={styles.subtitle}>
            &gt; Milestone-Based Fund Release System
          </p>
        </header>

        <section className={styles.hero}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalControl}>●</span>
              <span className={styles.terminalControl}>●</span>
              <span className={styles.terminalControl}>●</span>
            </div>
            <div className={styles.terminalContent}>
              <p>$ bitpulse --init</p>
              <p className={styles.accent}>
                &gt; Initializing Surveillance Terminal v1.0
              </p>
              <p>$ ls projects/</p>
              <p className={styles.accent}>
                &gt; [LOADING] Project Dashboard...
              </p>
              <p>
                Connecting to Stacks blockchain...
                <span className={styles.blink}>_</span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h3>📊 Dashboard</h3>
            <p>Real-time project milestone tracking</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🔐 Wallet</h3>
            <p>Secure Stacks Connect integration</p>
          </div>
          <div className={styles.featureCard}>
            <h3>⏱️ Timeline</h3>
            <p>Interactive milestone visualization</p>
          </div>
          <div className={styles.featureCard}>
            <h3>✅ Verification</h3>
            <p>Multi-sig approval interface</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>BitPulse &copy; 2024 | Powered by Stacks</p>
        </footer>
      </div>
    </main>
  );
}
