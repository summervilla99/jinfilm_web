// src/components/Photo.tsx

import React, { useState } from 'react';
import './main.css';
import P_Profile_artist1 from './P_Profile_artist1';
import P_Snap_artist1 from './P_Snap_artist1';
import P_Advertising_artist1 from './P_Advertising_artist1';
import P_Fashion_artist1 from './P_Fashion_artist1';

interface PhotoProps {}

const Photo: React.FC<PhotoProps> = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<'profile' | 'snap' | 'advertising' | 'fashion'>('profile');

    return (
        <div className="portfolio">
            <div>
                <ul className="concept_of_photo">
                    <li
                        id="profile_menu"
                        style={{
                            fontWeight: selectedCategory === 'profile' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'profile' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('profile')}
                    >
                        PROFILE
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="snap_menu"
                        style={{
                            fontWeight: selectedCategory === 'snap' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'snap' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('snap')}
                    >
                        SNAP
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="ad_menu"
                        style={{
                            fontWeight: selectedCategory === 'advertising' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'advertising' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('advertising')}
                    >
                        ADVERTISING
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="fashion_menu"
                        style={{
                            fontWeight: selectedCategory === 'fashion' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'fashion' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('fashion')}
                    >
                        FASHION
                    </li>
                </ul>
            </div>

            {/* 선택된 카테고리에 따라 해당하는 컴포넌트를 보여줌 */}
            {selectedCategory === 'profile' && <P_Profile_artist1 />}
            {selectedCategory === 'snap' && <P_Snap_artist1 />}
            {selectedCategory === 'advertising' && <P_Advertising_artist1 />}
            {selectedCategory === 'fashion' && <P_Fashion_artist1 />}
        </div>
    );
};

export default Photo;