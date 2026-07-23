# Contributing to Voya

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/voya.git`
3. Install dependencies: `npm install --legacy-peer-deps`
4. Start the dev server: `npm run dev`

## Branch Naming

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/description` | `feat/ride-search-filters` |
| Bug fix | `fix/description` | `fix/booking-cancel-error` |
| Chore | `chore/description` | `chore/update-dependencies` |
| Docs | `docs/description` | `docs/api-reference` |

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add price range filter to search
fix: correct earnings calculation on dashboard
chore: update tailwind to v4.1
docs: add setup instructions to README
refactor: extract ride card into reusable component
```

## Code Style

- Use TypeScript for all new files
- Prefer named exports over default exports for components
- Keep components small and focused — split if over ~150 lines
- Use Tailwind utility classes, avoid inline styles
- All form inputs must have associated `<label>` elements

## Pull Request Checklist

- [ ] Code builds without errors (`npm run build`)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] New components have proper TypeScript types
- [ ] No hardcoded strings that should be constants
