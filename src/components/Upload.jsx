import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import axios from "axios"

export default function UploadBox() {

  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const onDrop = useCallback((acceptedFiles) => {

    setFiles(acceptedFiles)

  }, [])

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
        "application/msword": [".doc"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
      }
    })

  const handleUpload = async () => {

    if (files.length === 0) return

    const formData = new FormData()

    formData.append("file", files[0])

    try {

      setUploading(true)

      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },

          onUploadProgress: (progressEvent) => {

            const percent = Math.round(
              (progressEvent.loaded * 100) /
              progressEvent.total
            )

            setProgress(percent)
          }
        }
      )

      console.log(res.data)

    } catch (err) {

      console.error(err)

    } finally {

      setUploading(false)
    }
  }

  return (

    <div className="max-w-xl mx-auto">

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-2xl p-10
          text-center cursor-pointer transition
          bg-base-200
          ${isDragActive ? "border-primary" : "border-base-content/20"}
        `}
      >

        <input {...getInputProps()} />

        {
          isDragActive
            ? (
              <p>Drop files here...</p>
            )
            : (
              <p>
                Drag & drop PDF/DOC files here
                <br />
                or click to browse
              </p>
            )
        }

      </div>

      {/* Selected Files */}
      {
        files.length > 0 && (

          <div className="mt-5 space-y-2">

            {
              files.map((file) => (

                <div
                  key={file.name}
                  className="p-3 rounded-lg bg-base-200"
                >
                  {file.name}
                </div>
              ))
            }

          </div>
        )
      }

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="btn btn-primary mt-5"
      >
        Upload
      </button>

      {/* Progress */}
      {
        uploading && (

          <progress
            className="progress progress-primary w-full mt-4"
            value={progress}
            max="100"
          >
          </progress>
        )
      }

    </div>
  )
}