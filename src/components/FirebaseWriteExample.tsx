import { getDatabase, ref, set } from "firebase/database";

interface UserData {
    userId: string
    name: string
    email: string
    imageUrl: string
}

function writeUserData(data: UserData) {
    const db = getDatabase();
    set(ref(db, 'users/' + data.userId), {
        username: data.name,
        email: data.email,
        profile_picture: data.imageUrl
    });
}

const handleWriteUserData = () => {
    writeUserData({ userId: "some-user-id", name: "fred", email: "boostup@gmail.com", imageUrl: "" });
}

export const FirebaseWriteExample = () => {

    return (
        <>
            <p>FirebaseWriteExample</p>
            <button onClick={handleWriteUserData}>Write sample user data</button>
        </>
    )
}