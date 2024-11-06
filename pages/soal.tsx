import soalStyles from './soal.module.css'
// import '../styles/CommonStyles/Text.css'
// import '../styles/CommonStyles/Component.css'
// import '../styles/CommonStyles/Bigbox.css'
// import '../styles/CommonStyles/SideNav.css'
import NavBar from '../components/organisms/NavBar'
import Footer from '../components/organisms/Footer'
import soalTest from '../assets/soalTest.png'
import { useState } from 'react'
import { Tag } from '../components/organisms/SoalTop'
import SoalTop from '../components/organisms/SoalTop'

function Soal() {
    const [openSolutions1, setOpenSolutions1] = useState(false);
    const [openSolutions2, setOpenSolutions2] = useState(false);
    const [openSolutions3, setOpenSolutions3] = useState(false);

    return (
        <div className="MacroContainer">
            <NavBar />
                <div className="storage">
                    <div className="MainContainer">
                        <div className={soalStyles.SoalContent}> {/* Main content of soal */}
                            <SoalTop />
                            <div className={`${soalStyles.topInfo} ${soalStyles.disclaimer}`}>
                                <h2 className="text">Disclaimer</h2>
                                <hr className="greyLine"/>
                                <p className="text generalContentP">Soal ada berbagai cara alternatif untuk menyelesaikannya</p>
                            </div>
                            <div className={soalStyles.soalItem}>
                                <div className={soalStyles.soalHeader}> {/* header of soal */}
                                    <h2 className={`${soalStyles.soalTitle} text`}>1. Soal Nilai Mutlak</h2>
                                    <div className={soalStyles.soalTags}>
                                        <Tag text="Easy"/>
                                        <Tag text="Recommended"/>
                                    </div>
                                </div>
                                <hr className="greyLine"/>
                                <div className={soalStyles.soalQuestion}>
                                    <div className="imageContainer">
                                        <img src={soalTest.src} alt="/soal" />
                                    </div>
                                    <p className="text imageDetailBottom">Gambar 1. Venn bilangan real</p>
                                    <p className="text generalContentP">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                    </p>
                                </div>
                                <hr className="greyLine"/>
                                <div className={soalStyles.solution}>
                                    <div className={soalStyles.solutionHeader}>
                                        <div className={`${soalStyles.solutionText} text`}>Pembahasan</div>
                                        <button className="text" onClick={() => {setOpenSolutions1(!openSolutions1)}}>{openSolutions1 ? "Close" : "Open"}</button>
                                    </div>
                                    {openSolutions1 && <div className={soalStyles.solutionContent}>
                                        <hr className="greyLine"/>
                                        <p className="text generalContentP">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                        </p>
                                        <div className="imageContainer">
                                            <img src={soalTest.src} alt="" />
                                        </div>
                                        <p className="text imageDetailBottom">Gambar 1. venn bilangan real</p>
                                        <p className="text generalContentP">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                        </p>
                                    </div>
                                }
                                </div>
                            </div>
                            <div className={soalStyles.soalItem}>
                                <div className={soalStyles.soalHeader}> {/* header of soal */}
                                    <h2 className={`${soalStyles.soalTitle} text`}>2. Soal Fungsi dan Grafiknya</h2>
                                    <div className={soalStyles.soalTags}>
                                        <Tag text="Hard"/>
                                        <Tag text="Repitition"/>
                                    </div>
                                </div>
                                <hr className="greyLine"/>
                                <div className={soalStyles.soalQuestion}>
                                    <div className="imageContainer">
                                        <img src={soalTest.src} alt="" />
                                    </div>
                                    <p className="text imageDetailBottom">Gambar 1. Venn bilangan real</p>
                                    <p className="text generalContentP">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                    </p>
                                </div>
                                <hr className="greyLine"/>
                                <div className={soalStyles.solution}>
                                    <div className={soalStyles.solutionHeader}>
                                        <div className={`${soalStyles.solutionText} text`}>Pembahasan</div>
                                        <button className="text" onClick={() => {setOpenSolutions2(!openSolutions2)}}>{openSolutions2 ? "Close" : "Open"}</button>
                                    </div>
                                    {openSolutions2 && <div className={soalStyles.solutionContent}>
                                        <hr className="greyLine"/>
                                        <p className="text generalContentP">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                        </p>
                                        <div className="imageContainer">
                                            <img src={soalTest.src} alt="" />
                                        </div>
                                        <p className="text imageDetailBottom">Gambar 1. venn bilangan real</p>
                                        <p className="text generalContentP">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                        </p>
                                    </div>
                                }
                                </div>
                            </div>
                            <div className={soalStyles.soalItem}>
                                <div className={soalStyles.soalHeader}> {/* header of soal */}
                                    <h2 className={`${soalStyles.soalTitle} text`}>3. Soal Fungsi Trigonometri</h2>
                                    <div className={soalStyles.soalTags}>
                                        <Tag text="Extreme"/>
                                        <Tag text="Mixed"/>
                                    </div>
                                </div>
                                <hr className="greyLine"/>
                                <div className={soalStyles.soalQuestion}>
                                    <div className="imageContainer">
                                        <img src={soalTest.src} alt="" />
                                    </div>
                                    <p className="text imageDetailBottom">Gambar 1. Venn bilangan real</p>
                                    <p className="text generalContentP">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                    </p>
                                </div>
                                <hr className="greyLine"/>
                                <div className={soalStyles.solution}>
                                    <div className={soalStyles.solutionHeader}>
                                        <div className={`${soalStyles.solutionText} text`}>Pembahasan</div>
                                        <button className="text" onClick={() => {setOpenSolutions3(!openSolutions3)}}>{openSolutions3 ? "Close" : "Open"}</button>
                                    </div>
                                    {openSolutions3 && <div className={soalStyles.solutionContent}>
                                        <hr className="greyLine"/>
                                        <p className="text generalContentP">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                        </p>
                                        <div className="imageContainer">
                                            <img src='../assets/soalTest.png' alt="" />
                                        </div>
                                        <p className="text imageDetailBottom">Gambar 1. venn bilangan real</p>
                                        <p className="text generalContentP">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id laoreet enim. Ut consequat condimentum lacus eget placerat. Nulla id interdum ligula, eget ornare tortor. Quisque eget sem blandit, consectetur augue quis, gravida justo. Etiam et laoreet metus, quis rutrum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus faucibus sem sit amet urna venenatis, vitae tristique lorem elementum.
                                        </p>
                                    </div>
                                }
                                </div>
                            </div>

                        </div>
                        <div className="SidebarFixed"> {/* Sidebar of soal */}
                            <a href="/materi" className="optionBagian text">Materi</a>
                            <div className="SideNavContainer">
                                <h2 className="text sideTitle">Daftar Isi Soal</h2>
                                <div className={soalStyles.SideNavSoal}>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• Pendahuluan</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• Limit</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• Turunan</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• Aplikasi Turunan</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• Integral</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• Aplikasi Integral</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• Fungsi Transenden</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• KBF 1 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• KBF 2 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                        <div className={`${soalStyles.SNTextSoal} SNText`}>• UTS 2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Soal