import React, { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';

import './styles.css';

function InstaPost(props) {
	const [likeCount, setLikeCount] = useState(0);

	function incrementLikeCount() {
		setLikeCount(likeCount + 1);
	}

	return (
		<div className="post">
    	<div className="account-line">
    		<strong>{props.accountName}</strong>
    	</div>
    	<img
    		className="post-img" 
    		src={props.image}
    		alt="user_photo"
    		onClick={incrementLikeCount}
    	/>
    	<div className="post-info">
    		<div className="icon">
    			<BsHeart
    			 className="icon heart"
    			 onClick={incrementLikeCount}
    			  />
    			<BiComment className="icon" />
    			<FiSend className="icon" />
    		</div>
    		<div>
    			<strong> {likeCount} likes </strong>
    		</div>
    		<div>
    			<strong>{props.accountName}</strong> {props.caption}
    		</div>
    	</div>
    </div>
	)
}

export default InstaPost;