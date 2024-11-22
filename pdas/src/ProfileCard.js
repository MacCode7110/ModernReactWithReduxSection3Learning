function ProfileCard(props) {
    // const title = props.title;
    // const handle = props.handle;
    // Object destructuring:
    const { title , handle } = props;
    return <div>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
    </div>
}

export default ProfileCard;