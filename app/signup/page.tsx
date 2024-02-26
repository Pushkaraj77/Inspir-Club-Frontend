import Navbar from "@/components/Shared/Navbar";
import InfluencerSignupForm from "@/components/SignupPage/InfluencerSignupForm";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="py-14 px-4 lg:px-14">
        <div className="text-center">
          <h1 className="text-2xl xs:text-3xl lg:text-5xl font-bold lg:leading-[60px]">
            Create your page
          </h1>
          <p className="text-lightGray md:max-w-[60vw] mx-auto mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply
            dummy.
          </p>
        </div>
        <InfluencerSignupForm />
      </main>
    </>
  );
}
