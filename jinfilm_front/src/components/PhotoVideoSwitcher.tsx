// src/components/PhotoVideoSwitcher.tsx

import React from 'react';

interface PhotoVideoSwitcherProps {
    onPhotoClick: () => void;
    onVideoClick: () => void;
    selectedType: 'photo' | 'video';
}

const PhotoVideoSwitcher: React.FC<PhotoVideoSwitcherProps> = ({ onPhotoClick, onVideoClick, selectedType }) => {
    return (
        <div>
        <ul className="photo_or_video">
            <li id="photo" style={{ fontWeight: selectedType === 'photo' ? 'bold' : 'normal', textDecoration: selectedType === 'photo' ? 'underline' : 'none' }} onClick={onPhotoClick}>
            PHOTOGRAPHY
            </li>
            <li id="separator">|</li>
            <li id="video" style={{ fontWeight: selectedType === 'video' ? 'bold' : 'normal', textDecoration: selectedType === 'video' ? 'underline' : 'none' }} onClick={onVideoClick}>
            VIDEOGRAPHY
            </li>
        </ul>
        </div>
    );
}

export default PhotoVideoSwitcher;
