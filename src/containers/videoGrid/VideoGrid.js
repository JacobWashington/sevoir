import React from 'react';
import Video from "../../components/video/Video";


const VideoGrid = (props) => {
    let mappedFeed = props.feeds.map((feed, index) => {
        return (
            <Video />
        )
    })

    return (
        <div id="video-grid">
            {mappedFeed ? mappedFeed : null}
        </div>
    );
};

export default VideoGrid;
