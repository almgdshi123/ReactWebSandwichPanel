import React from 'react'
import Content from '../home/content/Content'
import { useParams } from 'react-router-dom';


export default function ProductPage() {
  const { href: herfName } = useParams();

  return (
    <div>

      <Content title={herfName}></Content>
    </div>
  )
}
