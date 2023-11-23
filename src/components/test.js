import { useState } from "react";

function Test() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: 0,
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const uploadedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setFormData({
      ...formData,
      images: uploadedImages,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    console.log(formData);
  };

  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                <p className="m-0px font-w-600">Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                <p className="m-0px font-w-600">Project Completed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                <p className="m-0px font-w-600">Photo Capture</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                <p className="m-0px font-w-600">Telephonic Talk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
