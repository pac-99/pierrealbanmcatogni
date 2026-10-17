# Architecture
- Password request UI is shared by both page gates; validate with a shared schema and submit through a dedicated server function to avoid divergent behavior.
- Password requests are server-insert-only Cloud records, inaccessible to anonymous readers; enforce throttling transactionally in the database to protect requester details.
- Owner notifications must use managed email after sender verification; never report a stored request as emailed without a successful send.