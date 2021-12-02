import React from 'react'
import Footer from '../../common/Footer'
import Headers from '../../common/Headers'
import PageHeader from '../../common/PageHeader'
import Sidebar from '../../common/Sidebar'
import './css/home.css'

function Home() {
    return (
        <>
            <div>
                <Headers />
            </div>
            <div className="d-flex">
                <Sidebar />
                <div className="d-flex flex-column">
                    {/* <PageHeader /> */}
                    <main className="mainContent d-flex flex-column">
                        <div>
                            <section id="box" class="d-flex flex-column justify-content-end align-items-center">
                                <div>
                                    <div class="box-item active">
                                        <div class="box-container">
                                            <h2 >Welcome to Notes Yard</h2>
                                            <p>Experience the beautifully simple note taking app on the web today.</p>
                                            <div className="d-flex">
                                                <a href="#" class="box-btn">Notebooks</a>
                                                <a href="#" class="box-btn">Notes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <svg class="box-waves" viewBox="0 24 150 28 " preserveAspectRatio="none">
                                    <defs><path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
                                    <g class="wave1"><use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" /></g>
                                    <g class="wave2"><use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" /></g>
                                    <g class="wave3"><use href="#wave-path" x="50" y="9" fill="#fff" /></g>
                                </svg>
                            </section>
                            <h1>content</h1>
                            <img style={{ width: "25vw" }} src="https://www.deldsim.com/img/homepage/deldsim-study-materials.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features-3.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features-2.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-1.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-2.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-3.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/eNno/assets/img/hero-img.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/Scaffold/assets/img/hero-bg.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/Scaffold/assets/img/hero-img.png" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/SoftLand/assets/img/undraw_svg_3.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/SoftLand/assets/img/undraw_svg_2.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/Rapid/assets/img/features-1.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/NewBiz/assets/img/hero-img.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/NewBiz/assets/img/hero-img.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/NewBiz/assets/img/about-extra-1.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://bootstrapmade.com/demo/templates/NewBiz/assets/img/about-img.svg" alt="" />
                            <img style={{ width: "25vw" }} src="https://www.deldsim.com/img/homepage/deldsim-circuit-tutorial-preview.svg" alt="" />
                            <img style={{ width: "25vw" }} src="" alt="" />
                            <img style={{ width: "25vw" }} src="" alt="" />
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home