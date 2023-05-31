import {
  BsCalendarDay,
  BsCurrencyDollar,
  BsInfoCircle,
  BsInstagram,
  BsLinkedin,
  BsPersonGear,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { ImBriefcase } from "react-icons/im";
import { AiFillCheckCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";

export default function InterviewerCard() {
  return (
    <div className="shadow-xl rounded-lg">
      {/* photo  & pricing */}
      <div className="flex justify-between items-start px-10 ">
        {/* avatar and info */}
        <div className="flex gap-5">
          {/* avatar */}
          <div className="avatar shadow-xl">
            <div className="w-28  rounded">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" />
            </div>
          </div>

          {/* info */}
          <div>
            {/* Name */}
            <h3 className="text-xl text-primary font-semibold">John Doe</h3>
            {/* designation */}
            <p>Web Developer</p>

            {/* ratings */}
            <div className="rating rating-sm flex items-center">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              (36)
            </div>
            {/* exp */}
            <p className="flex items-center gap-2">
              <ImBriefcase /> <span>3+ Experience </span>
            </p>

            {/* social icons */}
            <div className="flex gap-2">
              <BsLinkedin />
              <BsTwitter />
              <BsInstagram />
              <BsWhatsapp />
            </div>
          </div>
        </div>

        {/* pricing */}
        <div className="flex items-center border-primary border rounded-lg px-6 py-2 gap-2">
          {" "}
          <AiOutlineDollarCircle /> Price: Starting at <BsCurrencyDollar /> 3000
        </div>
      </div>
      {/* description */}
      <div className="px-10 ">
        <h4 className="flex items-center text-lg font-semibold mt-5 gap-2 ">
          About John <BsInfoCircle />
        </h4>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea architecto
          odio nesciunt ut dolorum dignissimos, maxime deserunt dolor aliquam
          soluta, numquam adipisci. Nam rem natus velit dolores aspernatur
          praesentium voluptate odit magni, dignissimos culpa nostrum molestiae
          aut saepe placeat, laboriosam provident consectetur ullam. Assumenda
          placeat voluptate molestias itaque earum aperiam excepturi nulla
          dolorum, omnis est nemo deleniti at rerum asperiores similique, vel,
          ut nihil! Iusto velit quos praesentium soluta eveniet animi nihil
          blanditiis numquam, corporis, incidunt illo, modi esse delectus a
          ducimus fuga totam asperiores? Repellendus voluptatum consequuntur
          nihil eos quisquam velit error quod ipsum est animi, mollitia non
          quibusdam.
        </p>
      </div>
      {/* additional info */}
      <div className="mt-10 flex justify-between px-10 ">
        {/* skills */}
        <div className="flex items-start gap-5">
          <BsPersonGear className="text-4xl" />
          <div>
            <h1 className="font-semibold">Skills :</h1>
            <p className="flex  items-center gap-2">
              <AiFillCheckCircle /> <span>JavaScript</span>
            </p>
            <p className="flex  items-center gap-2">
              <AiFillCheckCircle /> <span>React JS</span>
            </p>
            <p className="flex  items-center gap-2">
              <AiFillCheckCircle /> <span>Express JS</span>
            </p>
          </div>
        </div>
        {/* available days */}
        <div className="flex items-start gap-5">
          <BsCalendarDay className="text-4xl" />
          <div>
            <h1 className="font-semibold">Available Days :</h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-sm"
                  disabled
                />
                <span>MON</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-sm"
                />
                <span>TU</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-sm"
                  disabled
                />
                <span>TH</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-sm"
                  disabled
                />
                <span>FR</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-sm"
                />
                <span>Mon</span>
              </div>
            </div>
          </div>
        </div>
        {/* slot */}
        <div className="flex items-start gap-5">
          <FaBusinessTime className="text-4xl" />
          <div>
            <h1 className="font-semibold">Slot:</h1>
            <p>17:41 to 18:41</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* CTO */}
      <div className="text-end  px-10 pb-5">
        <button className="btn btn-primary ">Get A Quote</button>
      </div>
    </div>
  );
}
