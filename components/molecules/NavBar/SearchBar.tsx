import SearchIcon from "../../../assets/SearchIcon2.svg"
import searchStyles from "./SearchBar.module.css"
// import '../../../styles/CommonStyles/Text.css'
import { getKeywords } from "../../../backend/Search"
import { useEffect, useState, useRef } from "react"

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [showResults, setShowResults] = useState(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowResults(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setShowResults(true); // Show results when input changes
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            // You can handle submission if needed, or just ignore
        }
    };

    return (
        <div className={searchStyles.searchContainer}>
            <div className={searchStyles.searchMainBody}>
                <div className={searchStyles["icon-wrap"]}>
                    <img className='icon' src={SearchIcon.src} alt="Search Icon" />
                </div>
                <input 
                    className={`${searchStyles.searchBarInput} searchText`} 
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    type="text" 
                    placeholder="Search..."
                />
            </div>
            {showResults && inputValue.length > 0 && (
                <div className={searchStyles.searchResultBox} ref={searchContainerRef}>
                    <ul className={searchStyles.searchResultList}>
                        {inputValue.length === 0 ? (
                            <li className={`${searchStyles.searchResultItem} text`}>Please enter a search term.</li>
                        ) : (
                            <li className={`${searchStyles.searchResultItem} text`}>
                                {`Search term `}<strong>{inputValue}</strong>{` not found`}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;