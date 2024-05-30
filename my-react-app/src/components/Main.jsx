import image from "../assets/heroImage.jpg";
export default function Main() {
  return (
    <>
      <img src={image} alt="" />
      <Article />
      <OtherParagraphs />
    </>
  );
}

function Article() {
  return (
    <div className="article">
      <h1>Think Health. Think Massage.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit incidunt rerum
        maiores atque, iure voluptatem laudantium? Modi!
      </p>
      <div className=" ">
        <button>LEARN MORE ABOUT USE</button>
        <button>CONTACT US TODAY</button>
      </div>
    </div>
  );
}

function OtherParagraphs() {
  return (
    <div className="paras">
      <p className="activePara">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque fugiat
        veritatis harum. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Itaque fugiat veritatis harum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, non
        reprehenderit numquam, Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Itaque fugiat veritatis harum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero
        doloribus magni Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Itaque fugiat veritatis harum.
      </p>
      <hr />
      <div>
        <h2>Family Wellness Massage Therapy</h2>
        <p>9876 Main Strret, Suite 123, Mainland, ML12345</p>
        <p>Phone:987,654,3210</p>
      </div>
    </div>
  );
}
