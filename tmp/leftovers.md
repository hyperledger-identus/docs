# Leftover Items from Issue #235

## Learn Section

### 1. Missing: Links from component explainers to tutorials
**Requirement:** From each of the component explainer in Learn, please link to the appropriate tutorials from 'Develop' or 'Reference'.

**Status:** Not implemented

**Files to update:**
- `/documentation/learn/advanced-explainers/did-prism/README.md` - Add links to DID management tutorials
- `/documentation/learn/advanced-explainers/cloud-agent/README.md` - Add links to Cloud Agent tutorials
- `/documentation/learn/advanced-explainers/prism-node/README.md` - Add links to Prism Node tutorials
- `/documentation/learn/advanced-explainers/neoprism/README.md` - Add links to NeoPRISM tutorials
- `/documentation/learn/advanced-explainers/mediator.md` - Add links to Mediator tutorials

### 2. Missing: Case studies section
**Requirement:** Add a section 'Case studies' in the Learn section. Reference copy available at: https://docs.google.com/document/d/1Ae2_27qnJZdI_vcZO1eHn56TEez-uIpTcA9YbBY4VeI/edit?tab=t.0#heading=h.w3fbxqcf4msp

**Status:** Not implemented

**Action needed:**
- Create `/documentation/learn/case-studies.md` file
- Add case studies section to `/documentation/learn/sidebar.ts`

## Developers Section

### 3. Missing: Remove intro from quick-start guide
**Requirement:** Remove the intro from the quick start guide, since it will be included in the 'Learn' section. So, the quick start guide can then start with the prerequisites.

**Current state:** The quick-start guide still has an intro section before "Pre-Requisites"

**File to update:** `/documentation/developers/quick-start.md`

**Action needed:**
- Remove any intro content that appears before "## Pre-Requisites" (line 10)
- Ensure the guide starts directly with "## Pre-Requisites"

---

## Summary

Total items remaining: 3

| # | Item | Section | Priority |
|---|------|---------|----------|
| 1 | Links from component explainers to tutorials | Learn | Medium |
| 2 | Case studies section | Learn | High |
| 3 | Remove intro from quick-start | Developers | Low |
