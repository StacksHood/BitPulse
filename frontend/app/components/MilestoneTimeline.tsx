"use client";

import styles from "./MilestoneTimeline.module.css";

interface Milestone {
  id: number;
  title: string;
  status: "pending" | "submitted" | "verified" | "released";
  percentage: number;
  dueDate: string;
  description: string;
}

const SAMPLE_MILESTONES: Milestone[] = [
  {
    id: 1,
    title: "Project Setup",
    status: "released",
    percentage: 100,
    dueDate: "2024-01-15",
    description: "Initial project infrastructure setup",
  },
  {
    id: 2,
    title: "Design Phase",
    status: "verified",
    percentage: 100,
    dueDate: "2024-02-15",
    description: "Complete UI/UX design mockups",
  },
  {
    id: 3,
    title: "Development Sprint 1",
    status: "submitted",
    percentage: 85,
    dueDate: "2024-03-15",
    description: "Core features implementation",
  },
  {
    id: 4,
    title: "Testing & QA",
    status: "pending",
    percentage: 0,
    dueDate: "2024-04-15",
    description: "Comprehensive testing and bug fixes",
  },
];

export function MilestoneTimeline() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Project Milestones</h2>
        <p className={styles.subtitle}>Timeline Surveillance</p>
      </div>

      <div className={styles.timeline}>
        {SAMPLE_MILESTONES.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`${styles.milestone} ${styles[milestone.status]}`}
          >
            <div className={styles.connector}>
              <div className={styles.dot} />
              {index < SAMPLE_MILESTONES.length - 1 && (
                <div className={styles.line} />
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.header_mini}>
                <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                <span className={styles.status}>{milestone.status}</span>
              </div>

              <p className={styles.description}>{milestone.description}</p>

              <div className={styles.progressSection}>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${milestone.percentage}%` }}
                  />
                </div>
                <span className={styles.percentage}>{milestone.percentage}%</span>
              </div>

              <p className={styles.dueDate}>Due: {milestone.dueDate}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Completed</span>
          <span className={styles.statValue}>2/4</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>In Progress</span>
          <span className={styles.statValue}>1/4</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Pending</span>
          <span className={styles.statValue}>1/4</span>
        </div>
      </div>
    </div>
  );
}
