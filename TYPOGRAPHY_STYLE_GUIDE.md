# Typography Style Guide

## Font Size Standards for Consistent UI

This guide ensures consistent typography across desktop and mobile devices using TailwindCSS font size classes.

### Hierarchy & Sizing

#### Headings
- **Hero Title (H1)**: `text-3xl md:text-4xl lg:text-5xl` (30px → 36px → 48px)
  - Use for: Main landing page hero, primary page headers
  - Example: "vibecoded apps from a burnt-out dev"

- **Page Title (H1)**: `text-3xl` (30px)
  - Use for: Page headers, main content titles
  - Example: "Timeline", "Projects"

- **Section Title (H2)**: `text-2xl` (24px)
  - Use for: Major section headers, secondary titles
  - Example: "Latest apps", "Project Details"

- **Subsection Title (H3)**: `text-lg` (18px)
  - Use for: Component headers, card titles, subsections
  - Example: "Tools & Technologies", "AI Models Used"

- **Small Heading (H4)**: `text-base` (16px)
  - Use for: Minor section labels, form labels
  - Example: Form labels, metadata labels

#### Body Text
- **Large Body**: `text-lg` (18px)
  - Use for: Hero descriptions, important introductory text
  - Example: Homepage intro paragraphs

- **Standard Body**: `text-base` (16px)
  - Use for: Default body text, descriptions, content
  - Example: Card descriptions, blog content

- **Small Body**: `text-sm` (14px)
  - Use for: Secondary information, metadata, buttons
  - Example: Timestamps, button text, navigation

- **Micro Text**: `text-xs` (12px)
  - Use for: Labels, tags, auxiliary information
  - Example: Tags, badges, helper text

### Responsive Scaling Guidelines

#### Desktop-First Approach
- Start with base size for mobile
- Add responsive prefixes for larger screens only when needed
- Example: `text-base md:text-lg` (16px → 18px)

#### Component-Specific Rules

**Cards (ArrowCard, Project Cards)**
- Title: `text-lg` 
- Description: `text-sm`
- Metadata: `text-xs`

**Navigation & UI**
- Header logo: `text-xl`
- Navigation links: `text-sm`
- Buttons: `text-sm`
- Search: `text-sm`

**Project Pages**
- Hero title: `text-3xl md:text-4xl` (individual project pages)
- Featured project title: `text-2xl md:text-3xl` (projects index page)
- Description: `text-lg` (individual pages), `text-base` (featured card)
- Section headers: `text-2xl`
- Metadata: `text-sm`

**Timeline/Blog**
- Page title: `text-3xl`
- Article titles: `text-lg`
- Body text: `text-sm`
- Timestamps: `text-xs`

### Mobile Considerations

- Avoid text smaller than `text-sm` (14px) on mobile
- Use responsive scaling sparingly - only for hero elements
- Ensure line-height scales appropriately with font size
- Test touch targets are at least 44px for interactive text

### Implementation Notes

1. **Consistency First**: Use the same font size for similar content types across pages
2. **Semantic Hierarchy**: Larger fonts should indicate more important content
3. **Readability**: Ensure adequate contrast and spacing for all font sizes
4. **Performance**: Avoid using too many different font sizes in a single view

### Font Weight Pairings

- `text-3xl+`: Use with `font-bold` or `font-semibold`
- `text-2xl`: Use with `font-bold` 
- `text-lg`: Use with `font-semibold` for headings, `font-medium` for emphasis
- `text-base`: Use with `font-normal` or `font-medium`
- `text-sm`: Use with `font-medium` for buttons/labels, `font-normal` for body
- `text-xs`: Use with `font-medium` for labels, `font-normal` for metadata 