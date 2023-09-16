'use client'

interface InteractiveCardProps {
    children: React.ReactNode;
}

const InteractiveCard = ({ children }: InteractiveCardProps) => {
    const onMouseAction = (e: React.SyntheticEvent) => {
        if (e.type === 'mouseover') {
            e.currentTarget.classList.remove('bg-white');
            e.currentTarget.classList.add('bg-neutral-200');

            e.currentTarget.classList.remove('shadow-lg');
            e.currentTarget.classList.add('shadow-2xl');
        } else {
            e.currentTarget.classList.remove('bg-neutral-200');
            e.currentTarget.classList.add('bg-white');

            e.currentTarget.classList.remove('shadow-2xl');
            e.currentTarget.classList.add('shadow-lg');
        }
    }
    return (
        <div
            className="w-full h-[300px] shadow-lg bg-white"
            onMouseOver={(e) => onMouseAction(e)}
            onMouseOut={(e) => onMouseAction(e)}
        >
            {children}
        </div>
    )
}
export default InteractiveCard;