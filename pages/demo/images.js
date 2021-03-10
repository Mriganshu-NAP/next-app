import React from 'react'
import Image from 'next/image'

function images() {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        Default Image Tag
        <img src="/assets/slider.jpg" width='100%' alt="banner-slider" />
        <br/>
        Next Image Tag
        <Image src="/assets/slider.jpg" width={1858} height={727} layout="responsive" alt="banner-slider" />
      </div>
      <div style={{textAlign: 'center'}}>
        Default Image Tag
        <img src="/assets/design.jpg" width='100%' alt="banner-slider" />
        <br/>
        Next Image Tag
        <Image src="/assets/design.jpg" width={4102} height={2724} layout="responsive" alt="banner-slider" />
      </div>
    </div>
  )
}

export default images
