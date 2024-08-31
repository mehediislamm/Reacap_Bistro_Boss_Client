import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
                subHeading={"check it out"}
                heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex items-center justify-center
            bg-slate-500 bg-opacity-40 py-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur praesentium expedita ratione, quod dicta amet quae repudiandae fugiat rem alias culpa reiciendis a! Non nostrum explicabo libero incidunt exercitationem nam temporibus dignissimos tempora dolorum praesentium ea repellat dolores dicta reprehenderit aperiam cupiditate, earum iste tenetur, voluptate sed natus officia debitis.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;