"use client";

export default function ServicesSection() {
  const services = [
    { title: "Quality Products", icon: "🛍️", description: "Only premium, tested items – designed to last and impress." },
    { title: "Fast Delivery", icon: "🚚", description: "Swift, reliable shipping – your order arrives on time, every time." },
    { title: "24/7 Support", icon: "📞", description: "Friendly support around the clock – your questions are always answered." }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Our services go beyond products – we provide convenience, reliability, and support at every step of your journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {services.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 text-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
