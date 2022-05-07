import React, { useEffect, useState } from 'react';
import Comments from '../components/Comments';
import FormButton from '../components/FormButton';
import { detail, update } from '../services/imagesdata';
import { useParams } from "react-router-dom";
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
            setItem(res);

        })
    }, [id])

    return (
        <div className='detail'>
          <p><span className='labeled'>Title:</span> {item.title}</p>
          <br></br>
          <p><span className='labeled'>Image:</span> </p>
          { item.file &&
            <img src={`data:image/jpeg;base64,${item.file}`} width='400px' alt="" />
          }
          <br></br>
          <p><span className='labeled'>Comments:</span> </p>

          {
              item.comments && item.comments.map(
                  (comment, key) => <p key={key}>{comment}</p>
              )
          }


          
          <br></br>
          <br></br>
          <div className='form-group'>
            <Comments 
                clickHandler={addComment} 
                comments={comments}
                inputHandler={inputHandler}
                />
          </div>
          <br></br><br></br>
          <FormButton
            handleSubmit={handleSubmit}
          />
        </div>
    )
}

export default Detail;