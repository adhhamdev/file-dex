"use client";
import { useState } from "react";
import { convertFile } from "@/lib/actions";

const FileConverter = () => {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log("changed")
  };

  convertFile.bind(null, file, setConvertedFile)

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={async () => convertFile()}>
        Convert
      </button>
      {convertedFile && (
        <a href={convertedFile} target="_blank" rel="noopener noreferrer">
          Download Converted File
        </a>
      )}
    </div>
  );
};

export default FileConverter;
