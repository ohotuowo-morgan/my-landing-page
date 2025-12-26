import './Support.css';
import ContactCard from './components/Support/ContactCard';
import FAQItem from './components/Support/FAQitems';

function Support() {
    
    // SVG Icons for the cards (You can replace these with your <img> tags if you prefer)
    const PhoneIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
    const MailIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    const PinIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

    return (
        <div className="support-page">
            <div className="support-container">
                
                {/* HEADER */}
                <div className="support-header">
                    <h1>Hello, How can we help you?</h1>
                </div>

                {/* CONTACT GRID */}
                <div className="contact-grid">
                    <ContactCard icon={PhoneIcon} title="Call Us" info="+234 9074881650" />
                    <ContactCard icon={MailIcon} title="Email Us" info="125chotumorgan@gmail.com" />
                    <ContactCard icon={PinIcon} title="Visit Us" info="ZeRo Space" />
                </div>

                {/* FAQ SECTION */}
                <div className="faq-section">
                    <h2>FAQs</h2>
                    <div className="faq-list">
                        <FAQItem 
                            question="Is there a free trial available?" 
                            answer="Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible." 
                        />
                         <FAQItem 
                            question="Can I change my plan later?" 
                            answer="Absolutely! You can upgrade or downgrade your plan at any time from your account settings." 
                        />
                         <FAQItem 
                            question="What is your cancellation policy?" 
                            answer="We offer a 30-day money-back guarantee if you are not satisfied with our products." 
                        />
                         <FAQItem 
                            question="How do I contact support?" 
                            answer="You can use the email form above or call our dedicated support line 24/7." 
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Support;