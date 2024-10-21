import { SideBarContext } from "../utils/SearchAndSidebarContext";
import { useContext } from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateChannel() {
    const { isSidebarOpen } = useContext(SideBarContext);
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState("/user.png")
    const [name, setName] = useState("");
    const [handle, setHandle] = useState("");

    const Token = JSON.parse(localStorage.getItem("accessToken"));
    const navigate = useNavigate();

    //setImage to url of uploaded image
    function handleImageChange(e) {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
            setImage(imageUrl)
        }

    };

    //Api for add channel
    async function handleSubmit(e) {
        e.preventDefault();
        const token = Token.token;
        console.log("submitted");

        try {

            const response = await fetch("http://localhost:5500/addchannel", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                     authorization: `JWT ${token}`
                },
                body: JSON.stringify({
                    image,
                    name,
                    handle
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            const data = await response.json();
            console.log(data);
            alert('Channel created');
            navigate("/myaccount")
        }
        catch (error) {
            console.log(error);
            alert(error.message);
        }
    }

    function handleCancel(e) {
        e.preventDefault();

        setImage("/user.png");
        setName("");
        setHandle("");
    }

    return (
        <>
            <div className={isSidebarOpen ? "flex" : undefined}>
                <div className="mr-56">
                    {isSidebarOpen && <Sidebar />}
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="mt-10 mb-16 text-3xl font-semibold">Your Account</h1>
                    <form className="flex flex-col items-center" enctype="multipart/form-data">
                        <img src={previewImage} className="rounded-full w-36 h-36"></img>
                        <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="mb-5" required ></input>
                        <input type="text" value={name} placeholder="Your Name" className="border border-black p-2 m-2 w-72 h-10 rounded-md" onChange={(e) => setName(e.target.value)} required ></input>
                        <input type="text" value={handle} placeholder="Handle Name" className="border border-black p-2 m-2 w-72 h-10 rounded-md" onChange={(e) => setHandle(e.target.value)} required ></input>
                        <div className="flex m-5">
                            <button className="border border-black px-3 py-2 rounded-md text-xl mr-6" onClick={(e) => handleSubmit(e)}>Create Channel</button>
                            <button className="border border-black px-3 py-2 rounded-md text-xl" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateChannel;