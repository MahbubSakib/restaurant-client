import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item relative text-white bg-fixed pt-5 mb-5">
            <div className="relative z-10"> {/* Ensure content is above the overlay */}
                <SectionTitle
                    heading={"From Our Menu"}
                    subHeading={"Check it out"}
                />
                <div className="md:flex justify-center items-center gap-5 py-20 px-40">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div>
                        <p>30 Nov, 2025</p>
                        <h4 className="uppercase text-lg">where can i get some?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui beatae error exercitationem illo fuga. Quae fugit culpa eius repellat atque minima dicta obcaecati, vel, quidem placeat impedit modi nisi!
                        </p>
                        <button className="btn text-white btn-outline mt-2 border-0 border-b-4">Order Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Featured;