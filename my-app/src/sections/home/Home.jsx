import React from 'react'
import './home.css'
import './responsive.css'

export const Home = () => {
  return (
    <section className="home">
        <section className="home__left">
            <h1 className="home__left--text">
                Hi !, I'm Thanyanit Poothong
            </h1>
            <h4 className="home__left--text">
                A Software Engineering student interested in Software Development in Bangkok, Thailand.
            </h4>
            <section className="home__left--button">
                <a href="https://github.com/wwwnsai" >
                    <img src="public/images/logo/github_logo.png" alt="GithubLogo" id="GithubLogo"></img>
                </a>
                <a href='https://www.linkedin.com/in/thanyanit-poothong-537520282/'>
                    <img src="public/images/logo/linkedin_logo.png" alt="LinkedinLogo" id="LinkedinLogo"></img>
                </a>
            </section>
        </section>
        <section className="home__right">
            <img src="images/me.jpg" alt="ThanyanitPoothong" className="home__right--image"></img>
        </section>
    </section>
  )
}

export default Home
