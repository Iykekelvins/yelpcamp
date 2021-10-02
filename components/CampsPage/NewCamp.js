import { useState } from "react";
import { Button, Input } from "../index";
import { useGlobalContext } from "../../context/context";

const NewCamp = () => {
  const { setAddCamp, campList, setCampList } = useGlobalContext();
  const [img, setImg] = useState(null);
  const onChangeImg = (e) => {
    setImg(`/${e.target.files[0].name}`);
  };
  const [inputValue, setInputValue] = useState({
    title: "",
    full_info: "",
    price: "",
  });
  const { title, full_info, price } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addNewCampground = (e) => {
    e.preventDefault();
    const newCamp = { title, full_info, price, img, slug: null };
    setCampList([...campList, newCamp]);
    console.log(newCamp);
    setAddCamp(false);
  };

  return (
    <div className="container new-camp">
      <form className="form" onSubmit={addNewCampground}>
        <h2>Add New Campground</h2>
        <Input
          label="Campground Name"
          placeholder="Seven Sisters Waterfall"
          value={title}
          name="title"
          onChange={handleChange}
        />
        <Input
          label="Price"
          placeholder="$100"
          value={price}
          name="price"
          onChange={handleChange}
        />
        <Input
          label="Image"
          placeholder="www.randomimage.com"
          imgType="file"
          onChange={onChangeImg}
          name="file"
          accept="image/png, image/jpeg"
        />
        <Input
          label="Description"
          placeholder="Enter description here..."
          value={full_info}
          name="full_info"
          onChange={handleChange}
        />
        <Button title="Add Campground" />
      </form>
    </div>
  );
};

export default NewCamp;
