import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <Layout>
      <Header pageName="Contact Us" />
      {/* contact info */}
      <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-5">
        {/*  */}
        {/* card */}
        <div className="card max-w-sm bg-base-100 shadow-xl p-10">
          <div className="flex items-center gap-5">
            <BsTelephone className="text-4xl text-primary" />
            <div>
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p>(+0000)0000000</p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="card max-w-sm bg-base-100 shadow-xl p-10">
          <div className="flex items-center gap-5">
            <AiOutlineMail className="text-4xl text-primary" />
            <div>
              <h3 className="text-2xl font-semibold">Email</h3>
              <p>hemant76184@gmail.com</p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="card max-w-sm bg-base-100 shadow-xl p-10">
          <div className="flex items-center gap-5">
            <FiMapPin className="text-4xl text-primary" />
            <div>
              <h3 className="text-2xl font-semibold">Address</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* get in touch */}
      <div className="p-10 flex gap-10 flex-col lg:flex-row">
        <img
          src="https://truelysell-wp.dreamguystech.com/wp-content/uploads/2023/01/contact-us.png"
          alt=""
        />

        <div className="w-full">
          <h1 className="text-3xl font-semibold mb-5">Get In Touch</h1>
          <form className="flex flex-col gap-5">
            <div className="flex gap-5">
              {/* name */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full "
                />
              </div>

              {/* email */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full "
                />
              </div>
            </div>

            {/* phone number */}
            <div>
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full "
              />
            </div>

            {/* Message */}
            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                className="textarea  input-bordered input-primary w-full "
              />
            </div>
            <button className="btn  btn-primary max-w-xs">Button</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
