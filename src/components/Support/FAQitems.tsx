import { use, useState } from "react";
import "./ContactCard.css"

interface FAQitemsProps {
    question: string;
    answer: string;
}


function FAQitems({ question, answer }: FAQitemsProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <span>{question}</span>
                {/* Simple Arrow Icon that rotates */}
                <span className="arrow-icon">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 1L6 6L11 1" />
                    </svg>
                </span>
            </div>

            {/* Only show answer if isOpen is true */}
            {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
        </div>
    );
}

export default FAQitems