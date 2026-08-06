import Image from "next/image";
import ButtonLink from "@/components/Common/ButtonLink";
import FadeSection from "@/components/Common/FadeSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";
import { getInitials } from "@/libs/getInitials";

const AboutSection = () => {
  return (
    <FadeSection>
      <section className="overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-32 xl:px-0">
          <Card className="gap-0 rounded-3xl border border-white/10 bg-white/[0.04] py-0 shadow-glass ring-0 backdrop-blur-xl transition-all duration-300 ease-portfolio hover:border-blue-400/30 sm:rounded-[2rem]">
            <CardContent className="flex flex-col items-center gap-10 px-6 py-12 text-center sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:gap-14 lg:px-16 lg:py-16 lg:text-left">
              {/* Photo */}
              <div className="relative shrink-0">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-400/10 to-transparent blur-2xl"
                />
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/10 shadow-glass ring-1 ring-blue-400/20 sm:h-44 sm:w-44 lg:h-56 lg:w-56">
                  {profile.avatarUrl ? (
                    <Image
                      src={profile.avatarUrl}
                      alt={profile.name}
                      fill
                      priority
                      sizes="(min-width: 1024px) 224px, (min-width: 640px) 176px, 144px"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-charcoal-900 text-3xl font-bold text-white/70"
                    >
                      {getInitials(profile.name)}
                    </div>
                  )}
                </div>
              </div>

              <Separator
                orientation="vertical"
                className="hidden self-stretch bg-white/10 lg:block"
              />

              {/* Content */}
              <div className="flex flex-col items-center lg:items-start">
                <Badge
                  variant="outline"
                  className="mb-5 border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase lg:mb-6"
                >
                  About Me
                </Badge>

                <h2 className="mb-5 text-2xl font-extrabold text-white sm:text-4xl lg:mb-6 lg:text-5xl xl:text-heading-2">
                  {profile.name}
                  <span className="block text-blue-400">{profile.title}</span>
                </h2>

                <p className="mx-auto mb-9 max-w-2xl font-medium leading-relaxed text-white/70 lg:mx-0 lg:mb-10 lg:text-lg">
                  {profile.introduction}
                </p>

                <ButtonLink href="/projects">View My Work</ButtonLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </FadeSection>
  );
};

export default AboutSection;
