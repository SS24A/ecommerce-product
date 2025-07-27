import closeIcon from '../assets/icon-close.svg'

export default function HeaderMenu({
    isMenuDropdownVisible,
    setIsMenuDropdownVisible,
}) {
    return (
        <span
            className={
                isMenuDropdownVisible
                    ? 'header-menu-dropdown'
                    : 'header-menu-wrapper'
            }
        >
            {isMenuDropdownVisible && (
                <img
                    alt="close-icon"
                    src={closeIcon}
                    className="close-icon"
                    onClick={() => setIsMenuDropdownVisible(false)}
                />
            )}
            <ul className="header-menu">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </span>
    )
}
