'use client'

import Image from 'next/image'

const testimonial = {
  company: 'wenn',
  quote: 'We are so happy to work with one of the top data analytics companies in Australia - VeracityAI. The subject has high competence in machine learning and data Vision. With their expertise, they provide a commercialization strategy framework Australia for global businesses. The team is self-propelled and solution-oriented, and together with the management, they appear very professional. Communication between us is good and contributes to good interaction between our organizations - at all levels.',
  author: 'ROLF ATLE SELOTER',
  role: 'CEO',
  company_name: 'WENN',
  image: '/testo/rolf-wenn.jpeg',
}

const TestimonialsMono = () => {

  return (
    <section className="py-24 bg-gray-950 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with VeracityAI
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Image Side - Takes up 3/5 */}
            <div className="lg:col-span-2 relative h-96 lg:h-auto min-h-[450px]">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Side - Takes up 2/5 */}
            <div className="lg:col-span-3 flex flex-col justify-center p-12 lg:p-16">
              <div className="mb-8">
                <Image
                  src="/testo/wenn.png"
                  alt="wenn logo"
                  width={200}
                  height={60}
                  className="h-8 w-auto"
                />
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              <div className="text-sm text-gray-400 uppercase tracking-wider">
                <div className="font-semibold text-gray-500 mb-1">{testimonial.author}</div>
                <div className="text-gray-400">{testimonial.role}| {testimonial.company_name}</div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMono

