import FiltersInterviewers from "../components/Interviewers/FiltersInterviewers";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import InterviewerCard from "../components/Interviewers/InterviewerCard";

export default function Interviewers() {
  return (
    <Layout>
      <Header pageName="Interviewers" />
      <section className="p-10">
        <FiltersInterviewers />

        {/* interviewers */}
        <div className="grid lg:grid-cols-1 mt-5 gap-20">
          <InterviewerCard />
          <InterviewerCard />
          <InterviewerCard />
          <InterviewerCard />
        </div>
      </section>
    </Layout>
  );
}
