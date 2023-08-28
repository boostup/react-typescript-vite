import { getDatabase, ref, set } from "firebase/database";

interface UserData {
    userId: string
    name: string
    email: string
    imageUrl: string
}

async function writeUserData(data: UserData) {
    const db = getDatabase();
    return set(ref(db, 'users/' + data.userId), {
        username: data.name,
        email: data.email,
        profile_picture: data.imageUrl
    });
}

export const FirebaseWriteExample = () => {

    const handleWriteUserData = async () => {
        try {
            await writeUserData({ userId: "some-user-id", name: "fred", email: "boostup@gmail.com", imageUrl: "" });
        } catch (error: any) {
            console.log(error.toString())
        }

    }

    return (
        <>
            <p>FirebaseWriteExample</p>
            <button onClick={handleWriteUserData}>Write sample user data</button>
        </>
    )
}