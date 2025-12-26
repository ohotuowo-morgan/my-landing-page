import "./ContactCard.css";

interface ContactCardProps {
    icon : React.ReactNode;
    title: string;
    info: string;
}

function ContactCard({icon, title, info}: ContactCardProps)  {
    return (
        <div className="contact-card">
            <div className="icon-wrapper">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
}

export default ContactCard