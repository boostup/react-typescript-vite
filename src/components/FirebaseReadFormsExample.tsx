import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from "react";

export const FirebaseReadFormsExample = () => {
    const db = getDatabase();
    const [forms, setForms] = useState();

    const handleClick = () => {
        onValue(ref(db, '/forms'), (snapshot) => {
            setForms(snapshot.val());
        }, { onlyOnce: true });
    }

    return (
        <>
            <p>FirebaseReadFormsExample</p>
            <button onClick={handleClick}>Read Forms object</button>
            {forms && (<div>
                <pre>{JSON.stringify(forms, null, 2)}</pre>
            </div>)}
        </>
    )
}