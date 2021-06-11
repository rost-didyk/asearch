import { useState } from "react";

import SearchStyled from './style';
import logo from '../../logo.png';
import useDebounce from '../../useDebounce';
import useSearch from '../../useSearch';

import Spinner from '../Spinner';


function Tags({ tags }) {
    const tagsColors = {
        'PEOPLE': 'color-1',
        'BRANDS': 'color-2',
        'KEYWORDS': 'color-3'
    };

    return (
        <div className="anyclip-search-suggest__video-tags">
            { tags.map(tag => (
                <a className={tagsColors[tag.category] || 'color-1'}>{tag.value}</a>
            )) }
        </div>
    )
}

function SuggestText({
    url,
    title,
    description,
    tags
}) {
    return (
        <a href={url} target="_blank" className="anyclip-search-suggest__text">
            <h2>{title}</h2>
            <a className="title">{url}</a>
            <p>{description}</p>
            <Tags tags={tags} />
        </a>
    )
}

function SuggestVideo({
    url,
    title,
    thumbnail,
    tags
}) {
    return (
        <a href={url} target="_blank" className="anyclip-search-suggest__video">
            <div className="anyclip-search-suggest__video-img">
                <img src={thumbnail} alt={title}/>
                <Tags tags={tags} />
            </div>
            <h3>{title}</h3>
        </a>
    )
}

export default function Search({searchApi}) {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 600);
    const { isFetching, data } = useSearch(debouncedSearchQuery, searchApi);

    const getTotal = (pages, videos) => {
        return pages.length + videos.length
    }

    console.log({
        isFetching,
        data
    })

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    };
    return (
        <SearchStyled>
            <div className="anyclip-search-wrapper">
                <img src={logo} alt=""/>
                <input type="text" placeholder="Search any content" onChange={handleOnChange}/>
                <div className="anyclip-search-wrapper__spinner">
                    { isFetching && <Spinner /> }
                </div>
            </div>
            { searchQuery && data && (
                <div className="anyclip-search-suggest">
                    <p className="searchresultsnumber">Found about {getTotal(data.pages, data.videos)} results </p>
                    <div className="anyclip-search-suggest__results">
                        <div className="anyclip-search-suggest__left">
                            {
                                data.pages.map(page => (
                                    <SuggestText
                                        url={page.url}
                                        title={page.title}
                                        description={page.body.slice(0, 500)}
                                        tags={page.keywords}
                                    />
                                ))
                            }
                        </div>
                        <div className="anyclip-search-suggest__right">
                            <div className="anyclip-search-suggest__videos">
                                <div className="anyclip-search-suggest__videos-category">
                                    <h3>Related video to content</h3>
                                </div>
                                <div className="anyclip-search-suggest__videos-list">
                                    { data.videos.map(video => (
                                        <SuggestVideo
                                            url={video.url}
                                            title={video.title.slice(0, 60) + '...'}
                                            thumbnail={video.thumbnailUrl}
                                            tags={video.keywords}
                                        />
                                    )) }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ) }
        </SearchStyled>
    )
}
