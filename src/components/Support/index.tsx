import Image from "next/image";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import FadeSection from "@/components/Common/FadeSection";
import { buttonClasses } from "@/libs/buttonClasses";
import SectionTitle from "../Common/SectionTitle";

const fieldClasses =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.05] py-3.5 pl-12 pr-4 text-white outline-hidden transition-colors duration-300 placeholder:text-white/40 focus-visible:border-blue-400 focus-visible:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-blue-400/50";

const Support = () => {
  return (
    <FadeSection>
      <section id="support" className="scroll-mt-17">
        <div className="mx-auto max-w-[1104px] px-5 sm:px-8 xl:px-0">
          <div className="relative z-999 overflow-hidden rounded-[30px] bg-dark px-5 pt-12.5 sm:px-20 lg:px-27.5 lg:pt-16">
            {/* <!-- grid row --> */}
            <div className="absolute -top-[16%] left-1/2 -z-1 flex w-full max-w-[690px] -translate-x-1/2 justify-center gap-7.5 opacity-40">
              <div className="pricing-grid pricing-grid-border relative bottom-12 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-7 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-3 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-2 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-5 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-8 h-[250px] w-full max-w-[50px]"></div>
            </div>

            {/* <!-- stars --> */}
            <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
              <div className="stars"></div>
              <div className="stars2"></div>
            </div>

            {/* <!-- bg shapes --> */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <span className="absolute left-1/2 top-0 -z-1 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-19.svg)] bg-cover bg-center bg-no-repeat"></span>

              <span className="absolute left-1/2 top-0 -z-1 aspect-1170/592 w-full -translate-x-1/2">
                <Image
                  src="/images/blur/blur-20.svg"
                  alt=""
                  fill
                  className="max-w-none"
                />
              </span>
              <span className="absolute left-1/2 top-0 -z-1 mx-auto aspect-530/254 w-full max-w-[530px] -translate-x-1/2">
                <Image
                  src="/images/blur/blur-21.svg"
                  alt=""
                  fill
                  className="max-w-none"
                />
              </span>
            </div>

            <SectionTitle
              subTitle="Get In Touch"
              title="Let's Work Together"
              paragraph="Have a project in mind or just want to say hi? Send a message and I'll get back to you."
            />

            {/* <!-- support form --> */}
            <div className="glass-card glass-card-hover relative overflow-hidden rounded-[25px] p-6 sm:p-8 lg:p-12 xl:p-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-0 -z-1 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
              />

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
                className="relative z-10"
              >
                <div className="-mx-4 flex flex-wrap xl:-mx-5">
                  <div className="w-full px-4 md:w-1/2 xl:px-5">
                    <div className="mb-9.5 lg:mb-12">
                      <label
                        htmlFor="name"
                        className="mb-2.5 block font-medium text-white"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <User
                          aria-hidden="true"
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40"
                        />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          required
                          className={fieldClasses}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 xl:px-5">
                    <div className="mb-9.5 lg:mb-12">
                      <label
                        htmlFor="email"
                        className="mb-2.5 block font-medium text-white"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <Mail
                          aria-hidden="true"
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40"
                        />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          required
                          className={fieldClasses}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 xl:px-5">
                    <div className="mb-10 lg:mb-14">
                      <label
                        htmlFor="message"
                        className="mb-2.5 block font-medium text-white"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare
                          aria-hidden="true"
                          className="pointer-events-none absolute left-4 top-5 h-5 w-5 text-white/40"
                        />
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Type your message"
                          rows={6}
                          required
                          className={`${fieldClasses} resize-none py-4`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 xl:px-5">
                    <div className="text-center">
                      <button
                        type="submit"
                        className={buttonClasses({ fullWidthOnMobile: true })}
                      >
                        Send Message
                        <Send aria-hidden="true" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default Support;
