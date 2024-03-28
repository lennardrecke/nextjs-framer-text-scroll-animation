# Text Scroll Animation
## Description
This project showcases dynamic text display techniques using Next.js and Framer Motion. It features custom components to animate paragraphs, words, and characters based on the scroll position, offering a unique visual experience as the content interacts with user actions.

## Installation
To get started with this project, clone the repository and install the dependencies:

```bash
git clone github.com/lennardrecke/text-scroll-animation.git
cd text-scroll-animation
npm install
```

## Running the Project
After installing the dependencies, you can run the project locally:

```bash
npm run dev
```

Navigate to http://localhost:3000 to view the project.

## Components
### page.tsx
This is the main page component. It imports and uses the Paragraph, Word, and Character components to display a long paragraph in different animated formats, creating a visually engaging experience.

### Paragraph.tsx
Renders a paragraph where the opacity of the text dynamically changes based on the user's scroll position. It uses framer-motion for the scroll-based opacity animation, enhancing the visual interaction.

### Character.tsx
Displays text where each character's visibility is animated based on scroll position. This component breaks down the text into individual characters and applies a unique animation to each, creating a detailed and engaging effect.

### Word.tsx
Similar to Character.tsx, but animates each word's opacity as the user scrolls. This component focuses on animating words as a whole, offering a different visual approach compared to character-based animations.

### Technologies Used
- Next.js: A React framework for building single-page JavaScript applications.
- Framer Motion: A library for React that makes it easy to create animated and interactive UIs.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

## License
MIT