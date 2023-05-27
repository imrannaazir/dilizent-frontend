import SingleTestimonial from "../components/Testimonials/SingleTestimonial";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";

export default function Team() {
  const team = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <Layout>
      <Header pageName="Our Team" />
      <div className="p-10">
        {team?.map((testimonial, i) => (
          <SingleTestimonial key={testimonial?.id} i={i} />
        ))}
      </div>
    </Layout>
  );
}
