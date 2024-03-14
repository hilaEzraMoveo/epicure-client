import './Hero.scss'
import React, { useState } from 'react';
import SearchLogo from '../../assets/images/searchLogoHeader.svg'

const Hero: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");

   const handleSearch = () => {

    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        throw new Error('Function not implemented.');
    }

  return (
    <div className="hero">
      <div className="hero-content">
        <div className='hero-content-container'>
        <div className='hero-text'>Epicure works with the top chef restaurants in Tel Aviv</div>
            <div className='search-bar'>
                <button onClick={handleSearch}>
                    <img src={SearchLogo} alt='search'></img>
                </button>
                <input type="text" 
                    placeholder="Search for restaurant cuisine, chef" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;