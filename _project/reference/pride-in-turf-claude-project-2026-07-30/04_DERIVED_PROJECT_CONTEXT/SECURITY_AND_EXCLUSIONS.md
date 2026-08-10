# Security and Exclusions

> **Status:** DERIVED operational note.

This package intentionally excludes:

- Hosting usernames/passwords
- WordPress administrator credentials
- CRM credentials
- Email credentials
- API keys and form secrets
- Private customer data
- Personal access tokens

Do not add secrets to Claude Project Knowledge, repository documentation, ACF exports, design-system files, or generated handoff packages.

Use an approved password manager and environment-specific secret storage. Documentation may identify the system that owns a secret, but not the secret value.
