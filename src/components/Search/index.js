import { useState } from "react";

import SearchStyled from './style';
import logo from '../../logo.png';

export default function Search() {
    const [isShowSuggest, setIsShowSuggest] = useState(false);
    const handleOnChange = (e) => {
        setIsShowSuggest(e.target.value);
    };
    return (
        <SearchStyled>
            <div className="anyclip-search-wrapper">
                <img src={logo} alt=""/>
                <input type="text" placeholder="Search any content" onChange={handleOnChange}/>
            </div>
            { isShowSuggest && (
                <div className="anyclip-search-suggest">
                    <p className="searchresultsnumber">About 155,000 results (0.56 seconds) </p>
                    <div className="anyclip-search-suggest__results">
                        <div className="anyclip-search-suggest__left">
                            <a href="#" className="anyclip-search-suggest__text">
                                <h2>Lock (computer science) - Wikipedia</h2>
                                <a>https://en.wikipedia.org/wiki/Lock_(computer_science)</a>
                                <p>In computer science, a lock or mutex (from mutual exclusion) is a synchronization mechanism for enforcing limits on access to a resource in an</p>
                            </a>
                            <a href="#" className="anyclip-search-suggest__text">
                                <h2>Lock (computer science) - Wikipedia</h2>
                                <a>https://en.wikipedia.org/wiki/Lock_(computer_science)</a>
                                <p>In computer science, a lock or mutex (from mutual exclusion) is a synchronization mechanism for enforcing limits on access to a resource in an</p>
                            </a>
                            <a href="#" className="anyclip-search-suggest__text">
                                <h2>Lock (computer science) - Wikipedia</h2>
                                <a>https://en.wikipedia.org/wiki/Lock_(computer_science)</a>
                                <p>In computer science, a lock or mutex (from mutual exclusion) is a synchronization mechanism for enforcing limits on access to a resource in an</p>
                            </a>
                            <a href="#" className="anyclip-search-suggest__text">
                                <h2>Lock (computer science) - Wikipedia</h2>
                                <a>https://en.wikipedia.org/wiki/Lock_(computer_science)</a>
                                <p>In computer science, a lock or mutex (from mutual exclusion) is a synchronization mechanism for enforcing limits on access to a resource in an</p>
                            </a>
                            <a href="#" className="anyclip-search-suggest__text">
                                <h2>Lock (computer science) - Wikipedia</h2>
                                <a>https://en.wikipedia.org/wiki/Lock_(computer_science)</a>
                                <p>In computer science, a lock or mutex (from mutual exclusion) is a synchronization mechanism for enforcing limits on access to a resource in an</p>
                            </a>
                            <a href="#" className="anyclip-search-suggest__text">
                                <h2>Lock (computer science) - Wikipedia</h2>
                                <a>https://en.wikipedia.org/wiki/Lock_(computer_science)</a>
                                <p>In computer science, a lock or mutex (from mutual exclusion) is a synchronization mechanism for enforcing limits on access to a resource in an</p>
                            </a>
                        </div>
                        <div className="anyclip-search-suggest__right">
                            <div className="anyclip-search-suggest__videos">
                                <div className="anyclip-search-suggest__videos-category">
                                    <h3>Show new video</h3>
                                </div>
                                <div className="anyclip-search-suggest__videos-list">
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                            <div className="anyclip-search-suggest__video-tags">
                                                <a href="#" className="color-1">People</a>
                                                <a href="#" className="color-2">Future</a>
                                                <a href="#" className="color-3">Style</a>
                                                <a href="#" className="color-2">Intelect</a>
                                                <a href="#" className="color-1">Money</a>
                                            </div>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                            <div className="anyclip-search-suggest__video-tags">
                                                <a href="#" className="color-1">People</a>
                                                <a href="#" className="color-2">Future</a>
                                                <a href="#" className="color-3">Style</a>
                                                <a href="#" className="color-2">Intelect</a>
                                                <a href="#" className="color-1">Money</a>
                                            </div>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="anyclip-search-suggest__videos">
                                <div className="anyclip-search-suggest__videos-category">
                                    <h3>Related category video</h3>
                                </div>
                                <div className="anyclip-search-suggest__videos-list">
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                            <div className="anyclip-search-suggest__video-tags">
                                                <a href="#" className="color-1">People</a>
                                                <a href="#" className="color-2">Future</a>
                                                <a href="#" className="color-3">Style</a>
                                                <a href="#" className="color-2">Intelect</a>
                                                <a href="#" className="color-1">Money</a>
                                            </div>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="anyclip-search-suggest__videos">
                                <div className="anyclip-search-suggest__videos-category">
                                    <h3>Related video</h3>
                                </div>
                                <div className="anyclip-search-suggest__videos-list">
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                    <div className="anyclip-search-suggest__video">
                                        <div className="anyclip-search-suggest__video-img">
                                            <img src="https://cdn3.anyclip.com/AXSVqyZRfrdJai27G9Yd/1600238860216_426x240_thumbnail.jpg?wid=LWPlayerForDevelopers" alt=""/>
                                        </div>
                                        <h3>1 Futurama - The End of the Universe</h3>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            ) }
        </SearchStyled>
    )
}
