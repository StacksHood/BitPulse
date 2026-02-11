"use client";

import { ConnectWallet } from "./ConnectWallet";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <h1 className={styles.title}>BitPulse</h1>
          <p className={styles.tagline}>Milestone Surveillance Terminal</p>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>
            Dashboard
          </a>
          <a href="#" className={styles.link}>
            Projects
          </a>
          <a href="#" className={styles.link}>
            Milestones
          </a>
          <ConnectWallet />
        </nav>
      </div>
    </header>
  );
}
