
export default function FirstView() {
    return (
        <section
        className="hero-gradient min-h-screen flex items-center relative overflow-hidden p-3"
        aria-labelledby="hero-heading"
      >

        <div className="container-custom relative z-10 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 
                bg-blue-600/30 
                backdrop-blur-md 
                border border-white/20 
                px-4 py-2 
                rounded-full 
                text-sm font-medium 
                mb-8 
                fade-in-up">

              <span className="text-white font-bold">
                Powered by AI
              </span>

            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 fade-in-up fade-in-up-delay-1"
            >
              ScaleUp your business
              <br />
              <span className="text-secondary text-[#1D4ED8]">intelligently</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 fade-in-up fade-in-up-delay-2">
              Web development, digital marketing, and AI automation.

              We transform SMEs into industry leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up fade-in-up-delay-3">
              <a
                href="#contacto"
                className="w-full sm:w-auto bg-[#1D4ED8] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-lg flex items-center justify-center gap-2 hover:text-[#1D4ED8]"
              >
                Call us
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto border-2 border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-lg flex items-center justify-center gap-2 hover:text-[#0A2540]"
                aria-label="Ver nuestros servicios"
              >
                Learn more
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-primary-foreground/10">
              <p className="text-primary-foreground/50 text-sm mb-6">
                Companies that trust us
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {["50+", "200%", "24/7", "100%"].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                      {stat}
                    </p>
                    <p className="text-xs md:text-sm text-primary-foreground/60">
                      {
                        [
                          "Active Clients",
                          "Average ROI",
                          "Support Availability",
                          "Customer Satisfaction",
                        ][index]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>  );
}