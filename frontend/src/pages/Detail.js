import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Comments from '../components/Comments';
import FormButton from '../components/FormButton';
import ImageDisplay from '../components/ImageDisplay';

import { detail, update } from '../services/imagesdata';

import './styles/Detail.scss';

const Detail = () => {

    const [item, setItem] = useState({});
    const [comments, setComments] = useState(0);
    const [commentsArray, setCommentArray] = useState({});
    const { id } = useParams();
    
    const addComment = () => {
        setComments(comments + 1)
    }

    const handleSubmit = () => {
        let result = update(
            JSON.stringify({'id': id, 'comments': commentsArray})
        )
        result.then(isOk => {
            
            Object.keys(commentsArray).map((key, index) => (
                item.comments.push(commentsArray[key])
            ));
            setComments(0)
        });
    }

    const inputHandler = (e) => {
        commentsArray[e.target.name] = e.target.value;
        setCommentArray(commentsArray);
    }

    useEffect(() => {
        detail(id).then(res => {
            setItem(res)
        })
    }, [id])

    return (
        <div className='detail'>
          <p className='mb-5'><span className='labeled'>Title:</span> {item.title}</p>
          
          <p className='mb-4'><span className='labeled'>Image:</span> </p>
            {item && item.file_name && 
                <ImageDisplay filename={item.file_name} />
            }
            
          
          <p className='mt-5'><span className='labeled'>Comments:</span> </p>
          
          <ul>
          {
              item.comments && item.comments.map(
                  (comment, key) => <li><p key={key}>{comment}</p></li>
              )
          }
          </ul>

          <Comments 
            clickHandler={addComment} 
            comments={comments}
            inputHandler={inputHandler}
          />


          {
            comments > 0 &&
            <FormButton
                handleSubmit={handleSubmit}
            />
          }
        </div>
    )
}

export default Detail;