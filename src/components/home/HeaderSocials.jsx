import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials" >
        <a href="https://www.linkedin.com/" className="home__social-link" target="__blank" >
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/" className="home__social-link" target="__blank" >
            <i class="fa-brands fa-square-instagram"></i>
        </a>

        <a href="https://www.facebook.com/" className="home__social-link" target="__blank" >
            <i class="fa-brands fa-square-facebook"></i>
        </a>

        <a href="https://www.twitter.com/" className="home__social-link" target="__blank" >
            <i class="fa-brands fa-square-twitter"></i>
        </a>
    </div>
  )
}

export default HeaderSocials