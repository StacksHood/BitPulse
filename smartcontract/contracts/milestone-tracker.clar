;; BitPulse - Milestone Tracker
;; Performance-based fund release system

;; --- Data Maps and Vars ---

(define-map milestones
  { campaign-id: uint, milestone-id: uint }
  {
    description: (string-ascii 128),
    target-amount: uint,
    status: (string-ascii 12), ;; "PENDING", "SUBMITTED", "APPROVED"
    completed: bool
  }
)

(define-constant contract-owner tx-sender)
(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-MILESTONE-NOT-FOUND (err u101))

;; --- Public Functions ---

(define-public (add-milestone (campaign-id uint) (milestone-id uint) (description (string-ascii 128)) (target-amount uint))
  (begin
    (asserts! (is-eq tx-sender contract-owner) ERR-NOT-AUTHORIZED)
    (ok (map-set milestones { campaign-id: campaign-id, milestone-id: milestone-id } 
      { 
        description: description, 
        target-amount: target-amount,
        status: "PENDING",
        completed: false 
      }))
  )
)
