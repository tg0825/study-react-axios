import React from 'react';
import {Comment} from '../';

import './CommentList.css';

const CommentList = ({comments}) => {
    const commentList = comments.map(
        ({email: name, body}, index) => (
            <Comment
                name={name.split('@')[0]}
                body={body}
                key={index}
            />
        )
    );

    return (
        <ul className="CommentList">
            {commentList}
        </ul>
    );
}
export default CommentList;
