// Imports custom components from the components directory using absolute paths
import Character from '@/components/Character';
import Paragraph from '@/components/Paragraph';
import Word from '@/components/Word';

// Defines a long paragraph string to be used with the custom components
const paragraph =
  'This is a really long paragraph that I want to display on the screen, so I am going to write a lot of words to make sure that it is long enough to fill the screen.';

// Defines the main component for the home page
export default function Home() {
  return (
    <main>
      {/* Spacer div taking up the full height of the screen */}
      <div className='h-screen'></div>
      {/* Custom Paragraph component displaying the paragraph */}
      <Paragraph value={paragraph} />
      {/* Spacer div taking up the full height of the screen */}
      <div className='h-screen'></div>
      {/* Custom Word component displaying the paragraph */}
      <Word value={paragraph} />
      {/* Spacer div taking up the full height of the screen */}
      <div className='h-screen'></div>
      {/* Custom Character component displaying the paragraph */}
      <Character value={paragraph} />
      {/* Spacer div taking up the full height of the screen */}
      <div className='h-screen'></div>
    </main>
  );
}
