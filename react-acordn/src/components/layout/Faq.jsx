export const Faq = ({ curData, onToggle, isActive }) => {
  // Destructuring props:
  // - `curData` contains the FAQ data (e.g., question and answer).
  // - `onToggle` is a function to handle toggling the active state of the FAQ.
  // - `isActive` is a boolean indicating whether this FAQ is active or not.

  const { question, answer } = curData; // Extract `question` and `answer` from the current FAQ data.

  return (
    <>
      <li>
        {/* Wrapper for each FAQ item */}
        <div className="accordion-grid">
          {/* Display the FAQ question */}
          <p className="accordion-question">{question}</p>
          
          {/* Button to toggle the FAQ state */}
          <button
            onClick={onToggle} // Calls `onToggle` when clicked to toggle active state
            className={isActive ? "active-btn" : ""} // Adds "active-btn" class if this FAQ is active
          >
            {isActive ? "close" : "show"}{" "} 
            {/* Button label: Shows "close" if active, otherwise "show" */}
          </button>
        </div>
        
        {/* Conditionally render the answer: Only displayed if `isActive` is true */}
        {isActive && <p>{answer}</p>}
      </li>
    </>
  );
};
