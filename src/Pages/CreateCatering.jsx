import { Alert, Button, FileInput, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { HiInformationCircle } from "react-icons/hi";

const CreateCatering = () => {
  const [file, setFile] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  //imageupload
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageFileUploadError("Please select an image");
        return;
      }
      setImageFileUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageFileUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageFileUploadError("Image upload failed");
          setImageFileUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageFileUploadProgress(null);
            setImageFileUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageFileUploadError("Image upload failed");
      setImageFileUploadProgress(null);
      console.log(error);
    }
  };

  //create post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //to convert html to content
      // const strippedContent = formData.content.replace(/<[^>]+>/g,'');
      const response = await fetch(
        "https://weddingwisemanagement-backend.onrender.com/api/catering/createcatering",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:localStorage.getItem('Token')
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        setPublishError(data.message);
        return;
      } else {
        setPublishError(null);
        navigate("/catering");
      }
    } catch (error) {
      console.log(error);
      setPublishError("Something Went Wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Catering</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* cateringname */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Enter the cateringname"
            required
            id="cateringname"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, cateringname: e.target.value })
            }
          />
        </div>
        {/* cateringlocation */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Enter the cateringLocation"
            required
            id="cateringLocation"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, cateringLocation: e.target.value })
            }
          />
        </div>
        {/* cateringpricerange */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Enter the cateringPriceRange "
            required
            id="cateringPriceRange"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, cateringPriceRange: e.target.value })
            }
          />
        </div>
          {/* cateringdescription */}
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Enter the cateringDescription"
            required
            id="cateringDescription"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, cateringDescription: e.target.value })
            }
          />
        </div>
        {/* image */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToPink"
            size="sm"
            onClick={handleUploadImage}
            disabled={imageFileUploadProgress}
          >
            {imageFileUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageFileUploadProgress}
                  text={`${imageFileUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {imageFileUploadError && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">🥴OOPS!</span>
            {imageFileUploadError}
          </Alert>
        )}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
        {publishError && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">🥴OOPS!</span>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default CreateCatering;
