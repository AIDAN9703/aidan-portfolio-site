import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-pixelify shadow-accent">
            LET&apos;S CONNECT
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Building a product, API, or full-stack experience? Let&apos;s talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-start">
          <aside className="lg:col-span-2 liquid-glass p-6 md:p-7">
            <h3 className="text-xl font-bold text-[var(--pop-tan)] mb-5 font-pixelify">Contact</h3>

            <div className="space-y-4 text-[var(--text-secondary)]">
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-light)] mb-1">Email</p>
                <a className="text-white hover:text-[var(--pop-tan)]" href="mailto:aidanalexander97@gmail.com">
                  aidanalexander97@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-light)] mb-1">GitHub</p>
                <a className="text-white hover:text-[var(--pop-tan)]" href="https://github.com/AIDAN9703" target="_blank">
                  github.com/AIDAN9703
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-light)] mb-1">LinkedIn</p>
                <a className="text-white hover:text-[var(--pop-tan)]" href="https://www.linkedin.com" target="_blank">
                  linkedin.com
                </a>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3 liquid-glass p-6 md:p-7">
            <h3 className="text-xl font-bold text-[var(--pop-tan)] mb-5 font-pixelify">Send a Message</h3>

            <form className="grid gap-4 md:gap-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[var(--text-light)] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-[rgba(0,0,0,0.35)] border border-[var(--glass-border)] text-white placeholder:text-[var(--text-light)] focus:outline-none focus:border-[var(--pop-tan)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[var(--text-light)] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-[rgba(0,0,0,0.35)] border border-[var(--glass-border)] text-white placeholder:text-[var(--text-light)] focus:outline-none focus:border-[var(--pop-tan)]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-[var(--text-light)] mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(0,0,0,0.35)] border border-[var(--glass-border)] text-white placeholder:text-[var(--text-light)] focus:outline-none focus:border-[var(--pop-tan)] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold bg-[var(--pop-tan)] text-black hover:opacity-90 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
