import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

export const FirebaseReadExample = () => {
    const db = getDatabase();
    const [forms, setForms] = useState();

    useEffect(() => {
        onValue(ref(db, '/'), (snapshot) => {
            setForms(snapshot.val());
        }, { onlyOnce: true });
    }, [])

    return (
        <div style={{ textAlign: "left" }}>
            <pre>{JSON.stringify(forms, null, 2)}</pre>
        </div>
    )
}