
import "./TwitterFollowCard.css"
import { useState } from "react";

export function TwitterFollowCard ({children, formatName, username, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const image = "https://unavatar.io/twitter/" + username;

    var followText = isFollowing ? 'Siguiendo' : 'Seguir';
    const followStyle = isFollowing ? 'tw-followCard-followbutton is-following' : 'tw-followCard-followbutton';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    var formatName = (username) => `@`+username


    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-img" src={image} alt="Imagen de perfil" srcset="" />
            <div className="tw-followCard-name">
                {children}
                <span className="tw-followCard-username">{formatName(username)}</span>
            </div>
        </header>
        <aside>
            <button className={followStyle} onClick={handleClick}>
                <span className="tw-followCard-followbutton-text">{followText}</span>
                <span className="tw-followCard-followbutton-stop-following">Dejar de Seguir</span>
            </button>
        </aside>
    </article>
    )
}