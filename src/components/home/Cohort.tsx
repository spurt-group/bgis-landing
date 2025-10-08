import cohort1 from "../../assets/images/cohort1.svg";
import cohort2 from "../../assets/images/cohort2.svg";
import cohort3 from "../../assets/images/cohort3.svg";
import cohort4 from "../../assets/images/cohort4.svg";
import cohort5 from "../../assets/images/cohort5.svg";
import cohort6 from "../../assets/images/cohort6.svg";
import cohort7 from "../../assets/images/cohort7.svg";
import cohort8 from "../../assets/images/cohort8.svg";
import cohort9 from "../../assets/images/cohort9.svg";
import cohort10 from "../../assets/images/cohort10.svg";
import cohort11 from "../../assets/images/cohort11.svg";
import cohort12 from "../../assets/images/cohort12.svg";
import cohort13 from "../../assets/images/cohort13.svg";
import cohort14 from "../../assets/images/cohort14.svg";
import cohort15 from "../../assets/images/cohort15.svg";
import pattern from "../../assets/images/Pattern.svg";
import short1 from "../../assets/images/short1.svg";
import short2 from "../../assets/images/short2.svg";
import short3 from "../../assets/images/short3.svg";
import short4 from "../../assets/images/short4.svg";
import short5 from "../../assets/images/short5.svg";

const speakerDetails = [
  {
    company: "PharmaRun",
    desc: "Millions struggle to access quality medication on time. Pharmarun is solving this with a B2C and B2B platform that connects users to trusted pharmacies and delivers essential meds faster and smarter.",
    image: cohort1,
  },
  {
    company: "BeyondFitness",
    desc: "Nigerians see fitness as intimidating or inaccessible. Beyond is a leading boutique fitness brand designed to help high-performing leaders build discipline, resilience, cultivate joy and wellbeing through immersive, community-driven workouts",
    image: cohort2,
  },
  {
    company: "MaterialsPro",
    desc: "Construction firms waste time and money sourcing quality materials. MaterialsPro is a B2B digital marketplace that simplifies procurement, ensuring access to trusted suppliers and transparent pricing.",
    image: cohort3,
  },
  {
    company: "Lingawa",
    desc: "Diaspora families fear losing connection to their language and culture. Lingawa is preserving heritage by offering AI-powered African language learning with native tutors and immersive tools.",
    image: cohort4,
  },
  {
    company: "PocketLawyer",
    desc: "Access to legal support is out of reach for many Nigerians. PocketLawyer is changing this with a virtual law firm that uses AI to provide affordable, on-demand legal services.",
    image: cohort5,
  },
  {
    company: "IM FLOW",
    desc: "Social-emotional learning is often left out of African school systems. IM Flow is equipping children with digital tools and content that nurture life skills, empathy, and self-awareness.",
    image: cohort6,
  },
  {
    company: "PocketFood",
    desc: "Busy individuals and businesses struggle to plan and access nutritious meals. PocketFood offers AI-driven meal planning, subscriptions, and personalized delivery that fit users' dietary needs and schedules.",
    image: cohort7,
  },
  {
    company: "TownTalk",
    desc: "African businesses and governments lack access to real-time, localised risk intelligence. TownTalk is bridging that gap with AI-powered risk management tools available via APIs, platforms, and mobile.",
    image: cohort8,
  },
  {
    company: "Regxta",
    desc: "Millions of Nigerians remain unbanked and financially excluded. Regxta is changing this with a mobile-first solution that offers digital savings, micro-loans, and financial access to rural communities.",
    image: cohort9,
  },
  {
    company: "MyFoodAngels",
    desc: "Access to fresh, affordable food in urban Nigeria is unreliable. MyFoodAngels delivers farm produce and groceries to your doorstep within hours via a seamless web platform.",
    image: cohort10,
  },
  {
    company: "Ploutos Page",
    desc: "Access to fresh, affordable food in urban Nigeria is unreliable. MyFoodAngels delivers farm produce and groceries to your doorstep within hours via a seamless web platform.",
    image: cohort11,
  },
  {
    company: "Mariam Grey",
    desc: "Getting lab tests and medication is still a logistical headache in many Nigerian cities. Mariam Grey offers a tech-enabled health platform for online pharmacy, at-home diagnostics, and virtual consultations.",
    image: cohort12,
  },
  {
    company: "Iyewo",
    desc: "Primary healthcare in Nigeria is expensive and inaccessible for many. Iyewo delivers affordable care through telemedicine, mobile clinics, and a health wallet system that works for underserved populations.",
    image: cohort13,
  },
  {
    company: "GuestNHosts",
    desc: "Event planning across Africa is fragmented, manual, and inefficient. GuestsnHosts is a cloud-based platform helping users manage event invites, rentals, tickets, and more all in one place.",
    image: cohort14,
  },
  {
    company: "Alajo",
    desc: "For many without smartphones or internet, saving money securely is impossible. Alajo enables financial inclusion through a USSD and SMS-based digital savings and microcredit system.",
    image: cohort15,
  },
];

const Cohort = () => {
  return (
    <section className="py-16 bg-[#F6F9FF] relative overflow-hidden">
      <img
        src={pattern}
        alt="background pattern"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative container z-10 max-w-6xl mx-auto px-4">
        <div className="relative w-full flex justify-center">
          <h2 className="bg-gradient-to-r from-[#143C64] to-[#C70C2C] bg-clip-text text-center mx-auto font-bold text-3xl md:text-4xl text-transparent inline-block mb-12">
            BGIS 2025 Cohort
          </h2>
          <img src={short1} alt="short1" className="absolute -top-9  left-93" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 relative px-8 gap-3">
          {speakerDetails.slice(0, 12).map((item, index) => (
            <div key={index} className="relative">
              <div className="relative">
                <img src={item.image} alt={item.company} className="w-full" />
                <div className="absolute bg-gradient-to-r from-[#143C64] to-[#C70C2C] text-white italic rounded-[10px] text-center text-[14px] bottom-0 py-2.5 lg:py-1.5 xl:py-2 lg:w-26 right-16 lg:right-0 xl:right-0.5 w-31 xl:w-30 font-semibold">
                  {item.company}
                </div>
              </div>

              <div className="bg-white p-3 min-h-[165px] rounded-b-lg">
                <p className="text-sm text-gray-700 font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="md:col-span-4 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
              {speakerDetails.slice(12, 15).map((item, index) => (
                <div key={index + 12} className="relative">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.company}
                      className="w-full"
                    />
                    <div className="absolute bg-gradient-to-r from-[#143C64] to-[#C70C2C] text-white italic rounded-[10px] text-center text-[14px] bottom-0 py-2.5 lg:py-2 lg:w-29 right-16 lg:right-0 xl:right-0.5 w-31 xl:w-29 font-semibold">
                      {item.company}
                    </div>
                  </div>

                  <div className="bg-white p-3 min-h-[170px] rounded-b-lg">
                    <p className="text-sm text-gray-700 font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={short2}
            alt="short2"
            className="absolute -top-10 -left-3 hidden md:block"
          />
          <img
            src={short3}
            alt="short2"
            className="absolute top-[30%] -right-20 hidden md:block"
          />
          <img
            src={short4}
            alt="short2"
            className="absolute top-[55%] -left-16 hidden md:block"
          />
          <img
            src={short5}
            alt="short2"
            className="absolute bottom-0 right-12 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Cohort;
