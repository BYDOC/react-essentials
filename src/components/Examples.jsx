import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('')
    let tabContent = 'Click a button';
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedButton)

    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </section>
    );
}