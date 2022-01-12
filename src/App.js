import { useEffect, useState, useRef} from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Header from './Header'
import { PlayIcon, ArrowDownIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'


function App() {

 const [file, setFile] = useState(null)
 const [images, setImage] = useState(null)
 const [crop, setCrop] = useState()
 const [result, setResult] = useState(null)

 const [coordinate, setCoordinate] = useState(null)

 const filePickerRef = useRef(null)

 const handleFileChange = e => {
   setFile(URL.createObjectURL(e.target.files[0]))
 }


 function getCroppedImg(){

  // get coordinates
  setCoordinate(crop)
  console.log(coordinate)

  // cropped image
  const canvas = document.createElement("canvas");
  const scaleX = images.naturalWidth / images.width;
  const scaleY = images.naturalHeight / images.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");

   ctx.drawImage(
    images,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
  const base64Image = canvas.toDataURL("images/jpeg");
   setResult(base64Image)
 }

  return (
    <div className="bg-blue-300 w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-screen h-screen m-0 bg-gradient-to-tr from-purple-800 to-blue-300 flex flex-col">
        <Header />
        <motion.div initial="hidden" animate="visible" variants={{
                        hidden:{
                            scale: .8,
                            opacity: 0
                        },
                        visible:{
                            scale: 1,
                            opacity: 1,
                            transition:{
                                delay: .4
                            }
                        }
                    }}>
        <div className="max-w-6xl xl:mx-auto mx-5 pt-3 md:p-0 flex-grow flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl xl:text-6xl lg:text-5xl md:text-4xl mt-10 font-semibold text-white">Free online photo editor for everyone</h1>
          <PlayIcon className="w-8 md:w-12 text-white hover:animate-bounce mt-2 lg:mt-5" />
          <p className="text-md text-center font-semibold md:text-xl md:max-w-2xl my-3 text-white">Free to edit photos with IMAGE CROPPER photo editor in just a few clicks. It covers all online photo editing tools, so you can crop images.</p>
          <input ref={filePickerRef} hidden type='file' accept='images/*' onChange={handleFileChange} />

          <button className="btns hover:text-purple-700 hover:shadow-lg active:shadow-sm" onClick={() => filePickerRef.current.click()}>Upload</button>
        </div>
        </motion.div>
      </div>

      <div className="max-w-6xl xl:mx-auto mx-5 pt-3 md:p-0 relative">
        <div className="absolute -top-40 flex flex-col rounded-lg shadow-md bg-white bg-opacity-25  p-3 mb-10">
          {file && (
            <div className="flex justify-between items-center space-x-7">
              <ReactCrop src={file} onImageLoaded={setImage} crop={crop} onChange={setCrop} />
              <button className="btns text-white hover:text-purple-700 w-20 h-20 text-center text-sm lg:text-lg" onClick={getCroppedImg}>Crop Image</button>
            </div>
          )}

          {result && (
            <div className="my-7 p-4 rounded-lg shadow-lg flex flex-col items-center space-x-3 bg-blue-500 bg-opacity-25">
              <img src={result} alt="images" className="shadow-md p-1 border-2 bg-white border-white rounded-sm"/>
              <div className="text-white flex flex-col space-y-2 mt-4 bg-blue-300 p-3 rounded-lg hover:shadow-md cursor-pointer">
                <p><span className="text-gray-200 text-lg font-bold">x coordinates of an image:</span> {coordinate.x.toFixed(2)}</p>
                <p><span className="text-gray-200 text-lg font-bold">y coordinates of an image:</span> {coordinate.y.toFixed(2)}</p>
                <p><span className="text-gray-200 text-lg font-bold">width of an image:</span> {coordinate.width.toFixed(2)}</p>
                <p><span className="text-gray-200 text-lg font-bold">height of an image:</span> {coordinate.height.toFixed(2)}</p>
              </div>
              
            </div>
          )}
        </div>
      </div>  
    
          
      
    </div>
  );
}

export default App;
