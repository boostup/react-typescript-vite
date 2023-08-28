import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";

export const FirebaseReadSampleUserExample = () => {
    const db = getDatabase();
    const [sampleUser, setSampleUser] = useState();
    const sampleUserLocation = 'users/some-user-id';

    useEffect(() => {
        return onValue(ref(db, sampleUserLocation), (snapshot) => {
            setSampleUser(snapshot.val());
        });
    }, [])

    function handleDelete() {
        remove(ref(db, sampleUserLocation));
    }

    return (
        <>
            <p>FirebaseReadSampleUserExample</p>
            <button onClick={handleDelete}>Delete Sample User</button>
            {sampleUser && (<div>
                <pre>{JSON.stringify(sampleUser, null, 2)}</pre>
            </div>)}
        </>
    )
}