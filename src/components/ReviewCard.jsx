import PropTypes from "prop-types";

const ReviewCard = ({ content, name, imgSrc, company }) => {
    return (
        <div className="bg-zinc-800 border border-transparent p-5 rounded-xl min-w-[320px] flex flex-col justify-between lg:min-w-[420px]  transition-all duration-300 hover:border-sky-400">
            
            {/* Name and Company aligned to the left */}
            <div className="mb-4 text-left">
                <p className="text-white font-semibold">{name}</p>
                <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
            </div>

            {/* Content aligned to the left */}
            <p className="text-zinc-400 text-left mb-8">
                {content}
            </p>

            {/* Icon Link aligned to the left, positioned 10px from the bottom */}
            <div className="flex justify-start mt-auto mb-[10px]">
                <a href={imgSrc} className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span className="material-symbols-rounded" aria-hidden="true">
                        arrow_outward
                    </span>
                </a>
            </div>
        </div>
    );
}

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}

export default ReviewCard;
