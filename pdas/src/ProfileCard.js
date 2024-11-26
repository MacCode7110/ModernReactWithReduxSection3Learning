function ProfileCard(props) {
    // const title = props.title;
    // const handle = props.handle;
    // Object destructuring:
    const { title , handle , image } = props;
    return <div>
        <img src={image} alt="pda logo" ></img>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
    </div>
}

export default ProfileCard;