// src/components/VideoPortfolio.tsx

import React, { useState } from 'react';
import './main.css';
import V_Fashion_artist1 from './V_Fashion_artist1';
import V_Cinematic_artist1 from './V_Cinematic_artist1';
import V_Sketch_artist1 from './V_Sketch_artist1';
import V_Food_artist1 from './V_Food_artist1';
import V_Vlog_artist1 from './V_Vlog_artist1';
import V_Choreo_artist1 from './V_Choreo_artist1';
import V_Singact_artist1 from './V_Singact_artist1';

interface VideoProps {}

const Video: React.FC<VideoProps> = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<
        'fashion' | 'cinematic' | 'sketch' | 'food' | 'vlog' | 'choreo' | 'singact'
    >('fashion');

    return (
        <div>
            <div className="portfolio">
                <ul className="concept_of_video">
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
                    <li id="separator">|</li>
                    <li
                        id="cinematic_menu"
                        style={{
                            fontWeight: selectedCategory === 'cinematic' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'cinematic' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('cinematic')}
                    >
                        CINEMATIC
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="sketch_menu"
                        style={{
                            fontWeight: selectedCategory === 'sketch' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'sketch' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('sketch')}
                    >
                        SKETCH
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="food_menu"
                        style={{
                            fontWeight: selectedCategory === 'food' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'food' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('food')}
                    >
                        FOOD
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="vlog_menu"
                        style={{
                            fontWeight: selectedCategory === 'vlog' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'vlog' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('vlog')}
                    >
                        VLOG
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="choreo_menu"
                        style={{
                            fontWeight: selectedCategory === 'choreo' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'choreo' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('choreo')}
                    >
                        CHOREO
                    </li>
                    <li id="separator">|</li>
                    <li
                        id="singact_menu"
                        style={{
                            fontWeight: selectedCategory === 'singact' ? 'bold' : 'normal',
                            textDecoration: selectedCategory === 'singact' ? 'underline' : 'none',
                        }}
                        onClick={() => setSelectedCategory('singact')}
                    >
                        SING/ACT
                    </li>
                </ul>

                {/* 선택된 카테고리에 따라 해당하는 컴포넌트를 보여줌 */}
                {selectedCategory === 'fashion' && <V_Fashion_artist1 />}
                {selectedCategory === 'cinematic' && <V_Cinematic_artist1 />}
                {selectedCategory === 'sketch' && <V_Sketch_artist1 />}
                {selectedCategory === 'food' && <V_Food_artist1 />}
                {selectedCategory === 'vlog' && <V_Vlog_artist1 />}
                {selectedCategory === 'choreo' && <V_Choreo_artist1 />}
                {selectedCategory === 'singact' && <V_Singact_artist1 />}
            </div>
        </div>
    );
};

export default Video;