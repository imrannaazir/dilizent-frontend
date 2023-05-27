import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function SingleTestimonial({ i }) {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-10 mb-20`}
    >
      {/* avatar */}
      <div className="avatar">
        <div className="w-52 h-52 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKq21C7DsSxEUd8qXHZ7OaNYSeIgUjNky3oQ&usqp=CAU" />
        </div>
      </div>

      <div>
        {/* review */}
        <div className="relative">
          <p className="bg-transparent z-50 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quaerat ratione harum animi sint possimus delectus? Dolorem ad rerum
            maxime et rem autem officia ut quae delectus numquam quos obcaecati
            earum modi molestias non cupiditate asperiores quia, sit laboriosam
            eaque magni reprehenderit pariatur ipsa. Optio, corrupti doloremque
            quidem, laborum sed autem nam vel provident consequatur blanditiis
            deleniti quo quis atque laboriosam. Hic aliquid iste velit
            laudantium. Mollitia exercitationem quam quo cupiditate doloremque
            eius, provident dignissimos tempore? Voluptatem minima mollitia sed
            nulla aspernatur debitis dignissimos ipsam corrupti? Laborum,
            itaque! Delectus provident ratione quos qui aut eveniet quod quo
            eius accusamus harum.
          </p>
          <FaQuoteLeft className="absolute -top-5 -left-5 text-7xl text-primary/20" />
        </div>

        {/* about client */}
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-primary">John Doe</h3>
          <p className="italic">Manager, Google</p>
          {/* social media */}
          <div className="flex gap-2 mt-2">
            <BsLinkedin />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
