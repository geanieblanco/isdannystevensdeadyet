import { useState } from "react";
import { db } from "../resources/firebase/config";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect } from "react";

export default function Landing() {
  const [status, setStatus] = useState('');
  const [caption, setCaption] = useState('');

  const getCurrentContent = async () => {
    const displayRef = collection(db, "display");
    const allDocs = await getDocs(displayRef);
    return allDocs;
  }

  const setCurrentContent = (content) => {
    setStatus(content.status);
    setCaption(content.caption);
  }

  const displayAnswer = () => {
    if (status === 'dead') {
      return (
        <h1>Yes :)</h1>
      )
    } else {
      return (
        <h1>No :(</h1>
      )
    }
  }

  useEffect(() => {
    getCurrentContent()
      .then(allDocs => {
        let content = [];
        allDocs.forEach((doc) => {
          content.push(doc.data());
        });

        const currentContent = content.reverse(content.episode)[0];
        setCurrentContent(currentContent)
      })
  }, [])


  return(
    <main>
        <h3>Is Danny Stevens Dead Yet?</h3>
        {displayAnswer()}
        <h2>{caption}</h2>
    </main>
  );
}