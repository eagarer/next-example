'use client'
import React, { useEffect, useState } from 'react'
import CustomCard from '@/components/CustomCard'
import { containerAService } from '@/services/containerA'
import { Comment } from '@/types/containerAtype';

function ContainerA() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    containerAService.getAllComment()
      .then((response) => {
        setComments(response.data.Response.Data.slice(0, 3));
      })
      .catch((error) => {
        console.error('There was an error fetching the comments!', error);
      });
  }, []);

  return (
    <div className="border p-4 rounded-4 d-flex align-items-center justify-content-between">
      {comments.map((comment) => (
        <CustomCard commentHeader={comment.comment_id} commentDesc={comment.comment_desc} key={comment.comment_id}/>
      ))}
    </div>
  )
}

export default ContainerA