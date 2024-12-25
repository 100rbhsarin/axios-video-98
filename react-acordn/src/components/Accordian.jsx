import { useEffect, useState } from "react";
import qqq from '../api/api.json'; // Importing data from a local JSON file
import { Faq } from "./layout/Faq"; // Importing the Faq component

export const Accordian = () => {
    const [data, setData] = useState([]); // `data` stores the list of FAQs, initially an empty array
    const [activeId, setActiveId] = useState(false); // `activeId` tracks the currently active FAQ by its `id`

    // Load data from the JSON file when the component mounts
    useEffect(() => {
        setData(qqq); // Sets the `data` state to the JSON content (array of FAQ objects)
    }, []);

    console.log(data); // Logs the loaded FAQ data for debugging purposes

    // Toggles the active FAQ based on its `id`
    const handleToggle = (id) => {
        // Updates `activeId` to either:
        // - `false` if the clicked item's `id` is already active (collapses it)
        // - The `id` of the clicked item (activates it)
        setActiveId((prevId) => (prevId === id ? false : id));
    };

    return (
        <>
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {/* Iterates over the FAQ data and renders each FAQ item */}
                {data &&
                    data.map((curElem) => {
                        const { id } = curElem; // Destructures `id` from the current FAQ object
                        return (
                            <Faq
                                key={id} // Unique key for React rendering optimization
                                curData={curElem} // Passes the current FAQ data to the `Faq` component
                                isActive={activeId === id} // Checks if this FAQ is active
                                onToggle={() => handleToggle(id)} // Toggles this FAQ when clicked
                            />
                        );
                    })}
            </ul>
        </>
    );
};
