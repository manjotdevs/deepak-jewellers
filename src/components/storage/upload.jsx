import React, { useState } from "react";
import { storage } from "../../appwrite/config";
import conf from "../../appwrite/env";
import { ID } from "appwrite";
import Dialog from "../ui/dialog";
import Input from "../ui/input";
import Button from "../ui/button";

const Upload = () => {
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);
  const [price, setPrice] = useState(null);
  const [material, setMaterial] = useState("gold");
  const [dialog, setDialog] = useState(false);

  const createFile = async (e) => {
    e.preventDefault();

    try {
      if (image) {
        const response = await storage.createFile(
          conf.appwriteBucketId,
          ID.unique(),
          image
        );

        await storage.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          ID.unique(),
          {
            title,
            content,
            price,
            material,
            imageId: response.$id,
          }
        );
        alert("File and document created successfully!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <Button
        style="primary"
        onClick={() => {
          setDialog(true);
        }}
      >
        Upload Item
      </Button>
      <Dialog
        isOpen={dialog}
        children={
          <div className="bg-gray-950 w-[100%] h-[90%] items-center justify-center shadow-lg rounded-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Jewelry Details
            </h2>
              <div>
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-300"
                >
                  Title
                </label>
                <Input
                  type="text"
                  style="secondary"
                  roundness="40%"
                  className="w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="text-sm font-medium text-gray-300"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="6"
                  className="bg-gray-800 text-slate-100 p-4 outline-none rounded-lg w-full"
                  placeholder="Enter content"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-slate-100"
                >
                  Image
                </label>
                <Input
                  type="file"
                  className="w-full"
                  style="secondary"
                  roundness="40%"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <Input
                  type="number"
                  style="secondary"
                  className="w-full"
                  roundness="40%"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label
                  htmlFor="material"
                  className="text-sm font-medium text-gray-700"
                >
                  Material
                </label>
                <select
                  id="material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border-none bg-gray-800 text-slate-100 rounded-lg shadow-sm"
                >
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                </select>
              </div>
              <div className="pt-4">
                <Button type="submit" style="primary">
                  Submit
                </Button>
                <Button
                  style="destroy"
                  onClick={() => {
                    setDialog(false);
                  }}
                >
                  Cancle
                </Button>
              </div>
          </div>
        }
      />
    </>
  );
};

export default Upload;
