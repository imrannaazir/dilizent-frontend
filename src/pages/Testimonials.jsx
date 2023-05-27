import SingleTestimonial from "../components/Testimonials/SingleTestimonial";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
export default function Testimonials() {
  const testimonials = [
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
      <Header pageName="Clients & Testimonials" />

      <div className="p-10">
        {testimonials?.map((testimonial, i) => (
          <SingleTestimonial key={testimonial?.id} i={i} />
        ))}
      </div>
    </Layout>
  );
}
