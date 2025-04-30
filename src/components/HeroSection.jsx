// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="text-blue-600">Premium</span> Cloud Business <br />
            Email Hosting <span className="text-yellow-500">Indian</span>{" "}
            Company
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Save time and grow your business with our world-class, faster cloud
            email services.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
            Start Now
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <img
            src="/hero-image.png"
            alt="Hero"
            className="w-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
