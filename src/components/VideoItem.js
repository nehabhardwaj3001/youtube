import React from 'react';

const VideoItem = ({video}) => {
	console.log(video)
	return (
		<div> {video.snippet.title} 
		{video.snippet.title}</div>
	)
}

export default VideoItem;