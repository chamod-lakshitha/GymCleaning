import HeroImage from '../../static/hero.png';

export default function Hero() {
  return (
    <div className="relative">
      <img
        src={HeroImage}
        alt="Gym Banner"
        className="w-full h-[75vh] object-cover"
        style={{ objectPosition: '0% 20%' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-4xl">
          Top-Quality Gym Cleaning Services
        </h1>
        <p
          style={{ lineHeight: '2rem' }}
          className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-200"
        >
          Keep your gym spotless, safe, and welcoming. Our expert team ensures
          every corner from equipment to locker rooms is clean and hygienic, so
          your members stay healthy and happy.
        </p>
        <button className="mt-6 sm:mt-9 px-6 sm:px-7 py-2 bg-white text-green-700 hover:bg-green-600 hover:text-white font-bold rounded">
          Join Now
        </button>
      </div>
    </div>
  );
}
