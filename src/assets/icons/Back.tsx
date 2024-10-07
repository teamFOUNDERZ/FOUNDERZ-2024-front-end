export const Back = ({size}: { size? : number}) => {
    return(
        <svg
            width={size || 40}
            height={size || 40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="11.5"
                stroke="#EEEEEE"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L19.4142 20L22.7071 23.2929C23.0976 23.6834 23.0976 24.3166 22.7071 24.7071C22.3166 25.0976 21.6834 25.0976 21.2929 24.7071L17.2929 20.7071C16.9024 20.3166 16.9024 19.6834 17.2929 19.2929L21.2929 15.2929C21.6834 14.9024 22.3166 14.9024 22.7071 15.2929Z"
                fill="black"
            />
        </svg>
    )
}