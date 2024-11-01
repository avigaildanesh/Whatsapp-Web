const ImageUpload = ({ selectedImage, handleImageUpload }) => {
    return (
      <div className="upload-box">
        <span className="box">
          <label htmlFor="file-upload">Picture:</label>
          <img src={selectedImage} alt="userImg" className="image-preview" />
        </span>
        <input
          required
          type="file"
          id="file-upload"
          name="file-upload"
          onChange={handleImageUpload}
        />
      </div>
    );
  };

  export default ImageUpload;