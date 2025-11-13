"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-md fixed w-full top-0 z-50">
        <div className="flex items-center gap-2 text-2xl font-semibold text-purple-700">
          Ogera
        </div>
        <nav className="space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-purple-600 transition">About</a>
          <a href="#product" className="hover:text-purple-600 transition">Product</a>
          <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          <button className="ml-4 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6 bg-gradient-to-br from-purple-800 to-purple-600 text-white">
        <h1 className="text-5xl font-extrabold mb-4 max-w-3xl leading-tight">
          Empowering Businesses with Smart Digital Solutions
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl">
          Ogera helps organizations streamline their operations, enhance productivity, 
          and achieve their goals through powerful, easy-to-use digital tools.
        </p>
        <button className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition">
          Learn More
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          At <span className="font-semibold text-purple-700">Ogera</span>, we believe in simplifying 
          complex workflows and empowering organizations with intuitive software solutions. 
          Our mission is to bridge the gap between technology and people by providing 
          reliable and innovative digital platforms that drive measurable impact.
        </p>
      </section>

      {/* Product Section */}
      <section id="product" className="bg-gray-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Our Product</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">All-in-One Platform</h3>
            <p className="text-gray-600">
              Manage your business, employees, and operations from one unified dashboard. 
              Simplify your daily tasks and make informed decisions faster.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Scalable for Every Team</h3>
            <p className="text-gray-600">
              Whether you’re a startup or an enterprise, our platform scales effortlessly to meet your needs. 
              Add users, features, and integrations as your organization grows.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Seamless Collaboration</h3>
            <p className="text-gray-600">
              Connect teams and projects across departments, enabling transparent communication 
              and real-time updates that boost overall productivity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Data-Driven Insights</h3>
            <p className="text-gray-600">
              Access intelligent reports and analytics that provide actionable insights 
              into performance, workflow efficiency, and key metrics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Ogera?</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with us today and see how our platform can help your business thrive.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ogera. All rights reserved.
      </footer>
    </div>
  );
}
