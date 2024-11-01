import React from 'react';
import './skills.css';
import './responsive.css';
// import reactLogo from './../../../public/images/logo/react_logo.png';

const Skills = () => {
    
  return (

    <section className="skills" id="skills">
        <section className="skills__header">
            <h2> Skills </h2>
        </section>
        <section className="skills__body">
            <section className='gradient-container'>
                <section className='--blue-gradient'></section>
                <section className='--red-gradient'></section>
                <section className='--peach-gradient'></section>
                <section className='--purple-gradient'></section>
                <section className='--yellow-gradient'></section>
            </section>
            <section className='skills__body--programming'>
                <section className='programming__header'>
                    <h3> Programming Languages </h3>
                </section>
                <section className='programming__body'>
                    <section className='programming__body--item'>
                        <img src='images/logo/python_logo.png' alt='python_logo' className='programming__body--img'/>
                        <h4> Python </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/c_logo.png' alt='c_logo' className='programming__body--img'/>
                        <h4> C </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/cpp_logo.png' alt='cpp_logo' className='programming__body--img'/>
                        <h4> C++ </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/java_logo.png' alt='java_logo' className='programming__body--img'/>
                        <h4> Java </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/js_logo.png' alt='js_logo' className='programming__body--img'/>
                        <h4> Javascript </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/html_logo.png' alt='html_logo' className='programming__body--img'/>
                        <h4> HTML </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/css_logo.png' alt='css_logo' className='programming__body--img'/>
                        <h4> CSS </h4>
                    </section>
                    <section className='programming__body--item' id='asm'>
                        <img src='images/logo/asm_logo.png' alt='asm_logo' className='programming__body--img' />
                        <h4> Assembly </h4>
                    </section>
                    <section className='programming__body--item' style={{margin: '2rem auto'}}>
                        <img src='images/logo/php_logo.png' alt='php_logo' className='programming__body--img'/>
                        <h4> PHP </h4>
                    </section>
                </section>
                <section className='programming__header'>
                    <h3> Frameworks </h3>
                </section>
                <section className='programming__body'>
                    <section className='programming__body--item' style={{margin: '2rem auto'}}>
                        <img src='images/logo/react_logo.png' alt='react_logo' className='programming__body--img'/>
                        <h4> React </h4>
                    </section>
                    <section className='programming__body--item' style={{margin: '2rem auto'}}>
                        <img src='images/logo/laravel_logo.png' alt='laravel_logo' className='programming__body--img'/>
                        <h4> Laravel </h4>
                    </section>
                </section>
                <section className='programming__header'>
                    <h3> Other Skills </h3>
                </section>
                <section className='programming__body'>
                    <section className='programming__body--item'>
                        <img src='images/logo/ielts_logo.png' alt='ielts_logo' className='programming__body--img' style={{width: '7rem', height: 'auto', padding: '1rem 0 1rem 0'}}/>
                        <h4> IELTS 7.5 </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/excel_logo.png' alt='excel_logo' className='programming__body--img'/>
                        <h4> Excel </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/ai_logo.png' alt='ai_logo' className='programming__body--img'/>
                        <h4> Illustrator </h4>
                    </section>
                    <section className='programming__body--item'>
                        <img src='images/logo/ps_logo.png' alt='ps_logo' className='programming__body--img'/>
                        <h4> Photoshop </h4>
                    </section>
                    <section className='programming__body--item' style={{margin: '2rem auto'}}>
                        <img src='images/logo/docker_logo.png' alt='docker_logo' className='programming__body--img'/>
                        <h4> Docker </h4>
                    </section>
                    <section className='programming__body--item' style={{margin: '2rem auto'}}>
                        <img src='images/logo/k8s_logo.png' alt='k8s_logo' className='programming__body--img'/>
                        <h4> K8s </h4>
                    </section>
                </section>
            </section>
        </section>

    </section>
  );

}

export default Skills;