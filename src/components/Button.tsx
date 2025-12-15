import './Button.css';

interface ButtonProps {
    title: string;
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    className?: string;
}

function Button( { title, variant = 'primary', onClick, className = '' }: ButtonProps) {

    const finalClass = `btn ${variant} ${className}`;

    return (

        <button className={finalClass} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;