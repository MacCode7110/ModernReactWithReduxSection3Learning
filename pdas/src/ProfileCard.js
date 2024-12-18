function ProfileCard(props) {
    // Object destructuring:
    const { title , handle , image , description } = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <div className="title is-4">{title}</div>
                    <div className="subtitle is-6">{handle}</div>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>);
}

export default ProfileCard;