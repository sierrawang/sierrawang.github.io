
export const Face = ({ imageUrl = "profile_pic.jpeg", toggleIsVisible=()=>{}}) => {


    return (
        <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg" onClick={toggleIsVisible}>
            <circle cx="110" cy="110" r="100" stroke="gray" strokeWidth="3" fill="none" />
            <clipPath id="circleView">
                <circle cx="110" cy="110" r="90" />
            </clipPath>
            <g clipPath="url(#circleView)">
                <image href={imageUrl} width="200" height="200" x="10" y="10"  />
            </g>
        </svg>
    );
};
