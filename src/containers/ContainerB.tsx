'use client'
import React, { useEffect, useState } from 'react'
import CustomCard from '@/components/CustomCard'
import { containerBService } from '@/services/containerB'
import { Comment } from '@/types/containerBtype';

function ContainerB() {
  console.log("ContainerB rendered");
  
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    containerBService.getAllComment()
      .then((response) => {
        setComments(response.data.slice(3, 6));
      })
      .catch((error) => {
        console.error('There was an error fetching the comments!', error);
      });
  }, []);

  return (
    <div className="border p-4 rounded-4 d-flex align-items-center justify-content-between mt-4">
      {comments.map((comment) => (
        <CustomCard commentHeader={comment.id} commentDesc={comment.body} key={comment.id} />
      ))}
    </div>
  )
}

export default ContainerB