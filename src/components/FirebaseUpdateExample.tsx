import { getDatabase, ref, update } from "firebase/database";

interface UserData {
    userId: string
    name: string
    email: string
    imageUrl: string
}

async function updateUserData(data: UserData) {
    const db = getDatabase();
    return update(ref(db, 'users/' + data.userId), {
        username: `${data.name}-${Date.now().toString()}`,
        email: data.email,
        profile_picture: data.imageUrl
    });
}

export const FirebaseUpdateExample = () => {

    const handleUpdateUserData = async () => {
        try {
            await updateUserData({ userId: "some-user-id", name: "fred", email: "boostup@gmail.com", imageUrl: "" });
        } catch (error: any) {
            console.log(error.toString())
        }

    }

    return (
        <>
            <p>FirebaseUpdateExample</p>
            <button onClick={handleUpdateUserData}>Update sample user data</button>
        </>
    )
}