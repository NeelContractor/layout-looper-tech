"use client";

import { useEffect } from "react";

type AstrologerDemoModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AstrologerDemoModal({
  open,
  onClose,
}: AstrologerDemoModalProps) {
  /*
   * Lock the main website behind the modal.
   * Only the mobile demo itself will scroll.
   */
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close demo"
        className="absolute right-5 top-5 z-[120] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-black shadow-lg transition hover:scale-105"
      >
        ×
      </button>

      {/* MOBILE WEBSITE FRAME */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          h-[88vh]
          max-h-[820px]
          w-[390px]
          max-w-[94vw]
          overflow-hidden
          rounded-[42px]
          border-[3px]
          border-black/70
          bg-[#fffaf5]
          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        "
      >
        {/* Small playful left decoration */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-[3px] top-[180px] z-[60] h-14 w-[3px] rounded-full bg-brand-pink"
        />

        {/* Small playful right decoration */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-[3px] top-[300px] z-[60] h-20 w-[3px] rounded-full bg-brand-yellow"
        />

        {/* PHONE NOTCH */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            z-[100]
            h-7
            w-32
            -translate-x-1/2
            rounded-b-[18px]
            bg-black/90
          "
        />

        {/* =====================================================
            ONLY THIS CONTAINER SCROLLS
        ====================================================== */}
        <div className="h-full overflow-y-auto overscroll-contain">
          {/* =====================================================
              WEBSITE HEADER
          ====================================================== */}
          <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffaf5]/95 px-5 pb-3 pt-10 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h1 className="truncate text-[16px] font-bold leading-tight">
                  ✦ Cosmic Guidance
                </h1>

                <p className="mt-1 text-[10px] text-black/50">
                  Astrology • Tarot • Numerology
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 rounded-full bg-black px-4 py-2 text-[11px] font-semibold text-white"
              >
                Book Now
              </button>
            </div>
          </header>

          {/* =====================================================
              MAIN WEBSITE CONTENT
          ====================================================== */}
          <main className="px-5 pb-14">
            {/* =================================================
                HERO
            ================================================== */}
            <section className="mt-7 rounded-[28px] bg-brand-pink-soft px-5 py-6">
              <div className="mb-4 flex gap-2 text-sm">
                <span>☽</span>
                <span>✦</span>
                <span>♈</span>
                <span>✧</span>
                <span>✦</span>
              </div>

              <h2 className="max-w-[290px] text-[27px] font-bold leading-[1.08]">
                Guidance for a Brighter Tomorrow
              </h2>

              <p className="mt-4 text-[14px] leading-6 text-black/65">
                Discover clarity, direction and deeper understanding through
                astrology.
              </p>

              <button
                type="button"
                className="mt-6 rounded-full bg-black px-5 py-3 text-[12px] font-semibold text-white"
              >
                Book a Consultation →
              </button>
            </section>

            {/* =================================================
                ASTROLOGER PROFILE
            ================================================== */}
            <section className="mt-8">
              <div className="flex items-center gap-4">
                {/* REAL PROFILE IMAGE */}
                <div className="h-[82px] w-[82px] shrink-0 overflow-hidden rounded-full border-4 border-white bg-brand-green-soft shadow-md">
                  <img
                    src="/images/astrology_02.png"
                    alt="Priya Sharma, Vedic Astrologer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[19px] font-bold">
                    Acharya Dev
                  </h3>

                  <p className="mt-1 text-[12px] text-black/55">
                    Vedic Astrologer & Tarot Reader
                  </p>

                  <p className="mt-1 text-[12px]">
                    ⭐ 4.9{" "}
                    <span className="text-black/55">
                      (120+ consultations)
                    </span>
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[14px] leading-6 text-black/70">
                With over 8 years of experience in Vedic astrology and tarot
                reading, I help people find clarity, balance and direction in
                their lives.
              </p>
            </section>

            {/* =================================================
                STATS
            ================================================== */}
            <section className="mt-7 grid grid-cols-3 gap-2">
              <Stat value="8+" label="Years Experience" />
              <Stat value="500+" label="Happy Clients" />
              <Stat value="1200+" label="Consultations" />
            </section>

            {/* =================================================
                ABOUT
            ================================================== */}
            <section className="mt-10">
              <SectionTitle>About Me</SectionTitle>

              <p className="mt-3 text-[13px] leading-6 text-black/65">
                I combine traditional Vedic astrology with practical guidance
                to help you understand your life patterns, opportunities and
                challenges.
              </p>
            </section>

            {/* =================================================
                SERVICES
            ================================================== */}
            <section className="mt-10">
              <SectionTitle>My Services</SectionTitle>

              <div className="mt-4 space-y-3">
                <ServiceCard
                  title="Birth Chart Reading"
                  description="Detailed analysis of your birth chart, planets and life patterns."
                  price="₹999"
                  duration="45 min"
                />

                <ServiceCard
                  title="Career & Finance"
                  description="Understand career opportunities, timing and financial patterns."
                  price="₹1,499"
                  duration="60 min"
                />

                <ServiceCard
                  title="Love & Relationship"
                  description="Compatibility, relationship patterns and guidance."
                  price="₹1,299"
                  duration="45 min"
                />

                <ServiceCard
                  title="Tarot Reading"
                  description="Personal tarot guidance for your current questions."
                  price="₹799"
                  duration="30 min"
                />
              </div>
            </section>

            {/* =================================================
                WHY CONSULT
            ================================================== */}
            <section className="mt-10">
              <SectionTitle>Why Consult With Me?</SectionTitle>

              <div className="mt-4 space-y-3">
                <Benefit text="Personalised one-on-one guidance" />
                <Benefit text="8+ years of astrology experience" />
                <Benefit text="Clear and practical explanations" />
                <Benefit text="Confidential consultations" />
              </div>
            </section>

            {/* =================================================
                APPOINTMENT BOOKING SYSTEM
            ================================================== */}
            <section className="mt-10">
              <div className="rounded-[28px] bg-brand-pink-soft p-5">
                {/* Booking heading */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/45">
                    Easy Online Booking
                  </p>

                  <h3 className="mt-2 text-[22px] font-bold leading-tight">
                    Book Your Consultation
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-black/60">
                    Choose your preferred date and available time slot.
                  </p>
                </div>

                {/* ---------------------------------------------
                    SELECTED SERVICE
                ---------------------------------------------- */}
                <div className="mt-5 rounded-[18px] bg-white p-4">
                  <p className="text-[10px] text-black/40">
                    Selected Consultation
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold">
                        Birth Chart Reading
                      </p>

                      <p className="mt-1 text-[10px] text-black/45">
                        45 minute consultation
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-brand-yellow-soft px-3 py-1.5 text-[11px] font-bold">
                      ₹999
                    </span>
                  </div>
                </div>

                {/* ---------------------------------------------
                    CALENDAR
                ---------------------------------------------- */}
                <div className="mt-5 rounded-[20px] bg-white p-4">
                  {/* Calendar header */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      aria-label="Previous month"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-xs transition hover:bg-black/5"
                    >
                      ←
                    </button>

                    <p className="text-[12px] font-bold">
                      September 2026
                    </p>

                    <button
                      type="button"
                      aria-label="Next month"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-xs transition hover:bg-black/5"
                    >
                      →
                    </button>
                  </div>

                  {/* Week days */}
                  <div className="mt-5 grid grid-cols-7 text-center">
                    {["M", "T", "W", "T", "F", "S", "S"].map(
                      (day, index) => (
                        <span
                          key={`${day}-${index}`}
                          className="text-[9px] font-semibold text-black/35"
                        >
                          {day}
                        </span>
                      ),
                    )}
                  </div>

                  {/* Calendar dates */}
                  <div className="mt-2 grid grid-cols-7 gap-y-2 text-center">
                    {[
                      "",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                      "26",
                      "27",
                      "28",
                      "29",
                      "30",
                    ].map((date, index) => {
                      const selected = date === "18";

                      return (
                        <button
                          key={`${date}-${index}`}
                          type="button"
                          disabled={!date}
                          className={`
                            mx-auto flex h-8 w-8 items-center justify-center
                            rounded-full text-[10px] transition
                            ${
                              selected
                                ? "bg-black font-bold text-white"
                                : date
                                  ? "hover:bg-black/5"
                                  : "cursor-default"
                            }
                          `}
                        >
                          {date}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ---------------------------------------------
                    AVAILABLE TIME
                ---------------------------------------------- */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-bold">
                      Available Time
                    </p>

                    <span className="text-[9px] text-black/40">
                      18 Sep
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      "10:00 AM",
                      "11:30 AM",
                      "2:00 PM",
                      "4:30 PM",
                      "6:00 PM",
                      "7:30 PM",
                    ].map((time) => {
                      const selected = time === "4:30 PM";

                      return (
                        <button
                          key={time}
                          type="button"
                          className={`
                            rounded-[14px]
                            border
                            py-3
                            text-[11px]
                            font-medium
                            transition
                            ${
                              selected
                                ? "border-black bg-black text-white"
                                : "border-black/10 bg-white hover:border-black/30"
                            }
                          `}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ---------------------------------------------
                    APPOINTMENT SUMMARY
                ---------------------------------------------- */}
                <div className="mt-5 rounded-[18px] border border-black/10 bg-white/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[9px] text-black/40">
                        Your Appointment
                      </p>

                      <p className="mt-1 text-[12px] font-bold">
                        18 September • 4:30 PM
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] text-black/40">
                        Total
                      </p>

                      <p className="mt-1 text-[13px] font-bold">
                        ₹999
                      </p>
                    </div>
                  </div>
                </div>

                {/* ---------------------------------------------
                    CONFIRM BUTTON
                ---------------------------------------------- */}
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-[12px] font-semibold text-white transition hover:scale-[1.01]"
                >
                  Confirm Appointment
                  <span>→</span>
                </button>

                <p className="mt-3 text-center text-[9px] text-black/40">
                  Select your preferred date & time and confirm your
                  consultation.
                </p>
              </div>
            </section>

            {/* =================================================
                CONTACT
            ================================================== */}
            <section className="mt-10">
              <SectionTitle>Get In Touch</SectionTitle>

              <div className="mt-4 space-y-3 text-[13px]">
                <p>📱 +91 98765 43210</p>
                <p>💬 WhatsApp Consultation</p>
                <p>📍 Ahmedabad, India</p>
              </div>
            </section>

            {/* =================================================
                FOOTER
            ================================================== */}
            <footer className="mt-12 border-t border-black/10 pt-6 text-center">
              <p className="text-[12px] font-semibold">
                ✦ Cosmic Guidance
              </p>

              <p className="mt-2 text-[10px] text-black/40">
                Astrology • Tarot • Numerology
              </p>

              <p className="mt-4 text-[9px] text-black/30">
                © 2026 Cosmic Guidance
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   STAT COMPONENT
============================================================= */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-2 py-4 text-center">
      <p className="text-[18px] font-bold">
        {value}
      </p>

      <p className="mt-1 text-[9px] leading-3 text-black/45">
        {label}
      </p>
    </div>
  );
}

/* =============================================================
   SECTION TITLE
============================================================= */

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-[20px] font-bold">
      {children}
    </h3>
  );
}

/* =============================================================
   SERVICE CARD
============================================================= */

function ServiceCard({
  title,
  description,
  price,
  duration,
}: {
  title: string;
  description: string;
  price: string;
  duration: string;
}) {
  return (
    <div className="rounded-[20px] border border-black/10 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-[14px] font-bold">
            {title}
          </h4>

          <p className="mt-2 text-[11px] leading-5 text-black/55">
            {description}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-brand-yellow-soft px-3 py-1 text-[10px] font-bold">
          {price}
        </span>
      </div>

      <div className="mt-3 text-[10px] text-black/45">
        ⏱ {duration}
      </div>
    </div>
  );
}

/* =============================================================
   BENEFIT
============================================================= */

function Benefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-black/[0.035] px-4 py-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-pink-soft text-[12px]">
        ✦
      </span>

      <span className="text-[12px] font-medium">
        {text}
      </span>
    </div>
  );
}