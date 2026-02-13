# Specification

## Summary
**Goal:** Replace the current INNO YOUTH site logo with the user-provided uploaded logo across the header and footer.

**Planned changes:**
- Add a new logo image file under `frontend/public/assets/generated/` based on the uploaded logo.
- Update `frontend/src/components/site/SiteHeader.tsx` to use the new logo asset path.
- Update `frontend/src/components/site/SiteFooter.tsx` to use the new logo asset path.
- Ensure the logo renders crisply and maintains aspect ratio on both mobile and desktop.

**User-visible outcome:** The site shows the new INNO YOUTH logo in the header and footer without stretching or distortion.
