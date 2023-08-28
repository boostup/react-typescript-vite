import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from "react";

export const FirebaseReadExample = () => {
    const db = getDatabase();
    const [forms, setForms] = useState();

    const handleClick = () => {
        onValue(ref(db, '/'), (snapshot) => {
            setForms(snapshot.val());
        }, { onlyOnce: true });
    }

    return (
        <>
            <p>FirebaseReadExample</p>
            <button onClick={handleClick}>Read Forms object</button>
            {forms && (<div style={{ textAlign: "left" }}>
                <pre>{JSON.stringify(forms, null, 2)}</pre>
            </div>)}
        </>
    )
}