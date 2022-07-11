import { useState } from "react";
import { Form, Button } from "../atoms";
import { InputContainer } from "../molecules";
import { db } from '../resources/firebase/config';
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";


export default function StatusForm(){
    const [status, setStatus] = useState('');
    const [caption, setCaption] = useState('');
    const [episodeNumber, setEpisodeNumber] = useState('');

    const archiveCaption = () => {
        const archiveRef = collection(db, "archive")
        return addDoc(archiveRef, {
                'created': Date.now(),
                'caption': caption,
                'episode': episodeNumber
            });
    };

    const setNewDisplayContent = () => {
        const displayRef = collection(db, "display")
        return addDoc(displayRef, {
                'created': Date.now(),
                'caption': caption,
                'status': status,
                'episode': episodeNumber
            });
    }

    const buttonAction = (e) => {
        e.preventDefault();
        archiveCaption();
        setNewDisplayContent();
    }

    return (
        <Form
            setStatus={setStatus}
            setCaption={setCaption}
        >
            <input
                type="radio"
                value="alive"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                /> Alive :(
            <input
                type="radio"
                value="dead"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                /> Dead :)
            <label
                htmlFor="status">
                Is Danny Alive?
            </label>
            <InputContainer
                inputName="caption"
                value={caption}
                inputAction={(e) => setCaption(e.target.value)}
                labelName="caption"
                type="caption"
            />
            <InputContainer
                inputName="episodeNumber"
                value={episodeNumber}
                inputAction={(e) => setEpisodeNumber(e.target.value)}
                labelName="episodeNumber"
                type="episodeNumber"
            />
            <Button
                buttonAction={buttonAction}
                label="Submit"
            />
        </Form>
    );
}