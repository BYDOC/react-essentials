import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';



function App() {
  const [selectedTopic, setSelectedTopic]=useState('Click a button')
  let tabContent = 'Click a button';

  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton qqq={() => handleSelect('components')}>Component</TabButton>
            <TabButton qqq={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton qqq={() => handleSelect('props')}>Props</TabButton>
            <TabButton qqq={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
