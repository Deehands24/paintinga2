import Link from 'next/link';
import BusinessCard from '@/components/BusinessCard';
import { businesses } from '@/data/businesses';
import type { Metadata } from 'next';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: "Spotlight on Ann Arbor's Best Painting Professionals | PaintingA2",
  description:
    'Discover Ann Arbor\'s top-rated painting contractors. Read reviews, compare services, and find the perfect professional painter for your project.',
};

export default function SpotlightArticle() {
  const featuredPainters = businesses.filter((b) => b.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo height={50} width={150} />
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/articles" className="text-gray-700 hover:text-blue-600">
                Articles
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/articles" className="hover:text-blue-600">
                Articles
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Spotlight</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Spotlight on Ann Arbor&apos;s Best Painting Professionals
        </h1>

        <div className="text-lg text-gray-600 mb-8">
          A Guide to Top-Rated Services
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">
            When it comes to transforming your home or business, the quality of
            your painter makes all the difference. A professional paint job can
            enhance curb appeal, increase property value, and create an
            environment that reflects your style. In a community as vibrant as
            Ann Arbor, there is no shortage of skilled professionals. But how do
            you choose the best one for your project?
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            To help you make an informed decision, we&apos;ve compiled a spotlight
            on some of Ann Arbor&apos;s most highly-rated and reputable painting
            companies. These professionals are recognized for their commitment to
            quality, customer service, and exceptional craftsmanship, as
            evidenced by their strong online presence and customer testimonials.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Tribble Painting Company
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With over 30 years of experience serving the Ann Arbor area, Tribble
            Painting has built a formidable reputation for excellence.
            Consistently earning 5-star reviews, their clients frequently praise
            the team&apos;s professionalism, communication, and meticulous
            attention to detail. Tribble Painting offers a comprehensive suite of
            services, including interior, exterior, commercial, and specialized
            kitchen cabinet painting. Testimonials often highlight the crew&apos;s
            punctuality, thorough prep work, and clean job sites, making them a
            top choice for homeowners who value a seamless and high-quality
            experience. Their commitment extends beyond painting, with active
            support for community organizations like the Ronald McDonald House,
            reflecting a deep investment in the Ann Arbor community.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Mussio Painting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mussio Painting is another standout in the Ann Arbor market,
            celebrated for its strong attention to detail and ability to deliver
            a flawless finish. With a crew that has worked together for over
            sixteen years, they bring a level of cohesion and expertise that
            clients notice. Customer reviews consistently emphasize the team&apos;s
            professionalism, courtesy, and the impeccable quality of their work,
            often exceeding expectations. Mussio Painting is particularly noted
            for its skill in handling necessary carpentry repairs alongside
            painting, providing a more holistic solution for homes that need
            extra care. Their promise of 100% customer satisfaction is backed by
            numerous testimonials praising their ability to transform a &quot;tired
            house&quot; into a &quot;showplace.&quot;
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Wolverine Custom Painting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For projects that extend beyond a simple coat of paint, Wolverine
            Custom Painting is a frequently recommended choice. Their portfolio
            includes not just painting but also complete renovations, cabinet
            installation, and even electrical work, making them a versatile
            contractor for more complex home improvement projects. With over two
            decades of experience, they are known for their high-quality
            craftsmanship and integrity. Clients appreciate their transparent
            &quot;cost-plus&quot; contracting process, which can save money on
            large-scale projects, and their flexibility in accommodating changes
            to the original scope. Reviews often commend the team&apos;s
            trustworthiness, responsiveness, and respect for the client&apos;s home,
            positioning them as a reliable partner for significant investments.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Lang&apos;s Painting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A fixture in Ann Arbor since 1990, Lang&apos;s Painting has over three
            decades of experience beautifying homes and offices. They offer a
            wide range of services, including interior and exterior painting,
            wallpaper installation, and color consultation. Customer testimonials
            frequently mention the company&apos;s fast response times, helpful advice
            on color selection, and fair pricing. Repeat customers value their
            professionalism, clear communication, and ability to provide
            eco-friendly paint options, demonstrating a commitment to both
            quality and sustainability.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Aaron Babycz Painting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Specializing in both residential and commercial projects, Aaron
            Babycz Painting is known for delivering &quot;perfection in painting&quot;
            across Washtenaw County. Their services are comprehensive, covering
            everything from color consulting and drywall repairs to power washing
            and wallpaper removal. Client testimonials highlight the team&apos;s
            conscientiousness, thoroughness, and ability to complete projects in
            a timely manner. They are praised for leaving job sites exceptionally
            clean, ensuring a hassle-free experience for the homeowner. Their
            offer of a free consultation and quote makes them an accessible
            option for those planning their next project.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
            <p className="text-lg text-gray-900">
              To explore more of Ann Arbor&apos;s top painting professionals, compare
              services, and read verified reviews, browse the complete directory
              on PaintingA2.com.
            </p>
          </div>
        </div>

        {/* CTA to browse directory */}
        <div className="mt-12 text-center">
          <Link
            href="/listings"
            className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse All Painters
          </Link>
        </div>
      </article>

      {/* Featured Painters Grid */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Painting Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPainters.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
