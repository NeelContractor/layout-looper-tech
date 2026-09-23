// import { cn } from "@/lib/utils";

// export type ProductPreviewProps = {
//   className?: string;

//   /* =========================
//      WEBSITE BRAND
//   ========================== */
//   brandName?: string;
//   navItems?: string[];

//   /* =========================
//      HERO CONTENT
//   ========================== */
//   heroTitle?: string;
//   heroText?: string;
//   heroButton?: string;

//   /* =========================
//      PROFILE
//   ========================== */
//   profileImage?: string;
//   profileImageAlt?: string;
//   astrologerName?: string;
//   astrologerRole?: string;

//   /* =========================
//      SERVICES
//   ========================== */
//   services?: {
//     title: string;
//     description: string;
//   }[];
// };

// export function ProductPreview({
//   className,

//   /* =========================
//      WEBSITE BRAND
//   ========================== */
//   brandName = "AstroVeda",
//   navItems = ["Home", "About", "Services", "Contact"],

//   /* =========================
//      HERO CONTENT
//   ========================== */
//   heroTitle = "Guidance for a Brighter Future",
//   heroText =
//     "Discover personalized astrology guidance and meaningful insights.",
//   heroButton = "Book Consultation",

//   /* =========================
//      PROFILE
//   ========================== */
//   profileImage = "/images/astrology_02.png",
//   profileImageAlt = "Astrologer profile",
//   astrologerName = "Your Astrologer",
//   astrologerRole = "Vedic Astrology Consultant",

//   /* =========================
//      SERVICES
//   ========================== */
//   services = [
//     {
//       title: "Birth Chart",
//       description: "Personalized birth chart reading.",
//     },
//     {
//       title: "Career",
//       description: "Career and professional guidance.",
//     },
//     {
//       title: "Marriage",
//       description: "Relationship and marriage guidance.",
//     },
//   ],
// }: ProductPreviewProps) {
//   return (
//     <div
//       className={cn(
//         // NOTE: added `overflow-x-hidden` on mobile only so the absolutely
//         // positioned phone can never trigger horizontal page scroll, while
//         // sm:/lg: behavior is untouched.
//         "relative flex w-full items-end justify-center gap-4 overflow-x-hidden sm:overflow-visible",
//         className
//       )}
//     >
//       {/* =====================================================
//           LAPTOP (unchanged)
//       ====================================================== */}

//       <div className="relative w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[800px]">
//         {/* Laptop Screen */}
//         <div className="rounded-t-[10px] border-[3px] border-brand-ink bg-brand-ink shadow-2xl sm:rounded-t-[18px] sm:border-[7px]">
//           <div className="overflow-hidden rounded-t-[7px] bg-white sm:rounded-t-[10px]">
            
//             {/* Browser Bar */}
//             <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-gray-100 px-3">
//               <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
//               <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
//               <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

//               <div className="ml-3 flex h-5 flex-1 items-center rounded bg-white px-3">
//                 <span className="text-[7px] text-gray-400">
//                   www.yourastrologywebsite.com
//                 </span>
//               </div>
//             </div>

//             {/* Website Header */}
//             <div className="flex items-center justify-between px-5 py-3">
//               <div className="text-sm font-bold text-brand-ink">
//                 {brandName}
//               </div>

//               <div className="hidden items-center gap-4 sm:flex">
//                 {navItems.map((item) => (
//                   <span
//                     key={item}
//                     className="text-[8px] text-gray-600"
//                   >
//                     {item}
//                   </span>
//                 ))}

//                 <span className="rounded bg-brand-yellow px-3 py-1 text-[8px] font-medium text-brand-ink">
//                   Book Now
//                 </span>
//               </div>
//             </div>

//             {/* Website Hero */}
//             <div className="grid grid-cols-2 gap-3 px-5 pb-3 pt-3 sm:pb-5 sm:pt-4">
              
//               {/* Hero Content */}
//               <div className="flex flex-col justify-center">
//                 <span className="mb-2 text-[8px] font-medium uppercase tracking-wider text-brand-yellow">
//                   Vedic Astrology
//                 </span>

//                 <h3 className="max-w-[230px] text-xl font-semibold leading-tight text-brand-ink sm:text-2xl">
//                   {heroTitle}
//                 </h3>

//                 <p className="mt-2 max-w-[230px] text-[8px] leading-relaxed text-gray-600 sm:text-[9px]">
//                   {heroText}
//                 </p>

//                 <button className="mt-4 w-fit rounded bg-brand-ink px-3 py-2 text-[8px] text-white">
//                   {heroButton}
//                 </button>
//               </div>

//               {/* Astrologer Visual */}
//               <div className="flex items-center justify-center">
//                 <div className="flex h-[110px] w-[100px] flex-col items-center justify-center rounded-xl bg-brand-yellow/20 sm:h-[175px] sm:w-[150px]">
                  
//                   <img
//                     src={profileImage}
//                     alt={profileImageAlt}
//                     className="h-10 w-10 rounded-full border-2 border-brand-yellow object-cover sm:h-16 sm:w-16"
//                   />

//                   <span className="mt-3 text-[9px] font-semibold text-brand-ink">
//                     {astrologerName}
//                   </span>

//                   <span className="mt-1 text-center text-[7px] text-gray-500">
//                     {astrologerRole}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Services */}
//             <div className="border-t border-black/10 px-5 py-3 sm:py-4">
//               <div className="mb-3 text-[10px] font-semibold text-brand-ink">
//                 Our Services
//               </div>

//               <div className="grid grid-cols-3 gap-2">
//                 {services.slice(0, 3).map((service) => (
//                   <div
//                     key={service.title}
//                     className="rounded-lg border border-black/10 p-2"
//                   >
//                     <div className="mb-1 text-[9px] font-semibold text-brand-ink">
//                       {service.title}
//                     </div>

//                     <div className="text-[6px] leading-relaxed text-gray-500">
//                       {service.description}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Laptop Base */}
//         <div className="relative mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-gray-300 shadow-lg">
//           <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b bg-gray-400" />
//         </div>
//       </div>

//       {/* =====================================================
//           MOBILE PHONE
//           Only the base (mobile, no-prefix) values below were
//           changed: right-[-10px] -> right-0, w-[145px] -> w-[110px],
//           plus bottom nudged so it doesn't overlap the laptop base.
//           sm: and lg: values are untouched.
//       ====================================================== */}

//       <div
//   className="
//     absolute
//     bottom-0
//     right-10
//     w-[110px]

//     sm:right-[-10px]
//     sm:bottom-0
//     sm:w-[165px]

//     lg:right-[-120px]
//     lg:w-[165px]
//   "
// >
        
//         {/* Phone Outer Frame */}
//         <div className="relative rounded-[20px] border-[3px] border-brand-ink bg-brand-ink p-[2px] shadow-2xl sm:rounded-[28px] sm:border-[6px]">
          
//           {/* Phone Screen */}
//           <div className="relative aspect-[9/19.5] overflow-hidden rounded-[16px] bg-white sm:rounded-[22px]">
            
//             {/* Dynamic Island */}
//             <div className="relative h-7 bg-white">
//               <div className="absolute left-1/2 top-1.5 flex h-3 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-ink sm:h-4 sm:w-16">
//                 <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
//               </div>
//             </div>

//             {/* Mobile Header */}
//             <div className="flex items-center justify-between border-b border-black/10 px-3 py-2">
//               <span className="text-[8px] font-bold text-brand-ink">
//                 {brandName}
//               </span>

//               <span className="text-[11px] text-brand-ink">
//                 ☰
//               </span>
//             </div>

//             {/* Mobile Hero */}
//             <div className="px-3 py-4">
//               <span className="text-[6px] uppercase tracking-wider text-brand-yellow">
//                 Astrology
//               </span>

//               <div className="mt-2 text-[13px] font-semibold leading-tight text-brand-ink">
//                 {heroTitle}
//               </div>

//               <p className="mt-2 text-[6px] leading-relaxed text-gray-500">
//                 {heroText}
//               </p>

//               <button className="mt-3 w-full rounded bg-brand-ink py-2 text-[6px] text-white">
//                 {heroButton}
//               </button>
//             </div>

//             {/* Mobile Profile */}
//             <div className="mx-3 rounded-lg bg-brand-yellow/20 p-3 text-center">
              
//               <img
//                 src={profileImage}
//                 alt={profileImageAlt}
//                 className="mx-auto h-10 w-10 rounded-full border-2 border-brand-yellow object-cover"
//               />

//               <div className="mt-2 text-[7px] font-semibold text-brand-ink">
//                 {astrologerName}
//               </div>

//               <div className="mt-1 text-[5px] text-gray-500">
//                 {astrologerRole}
//               </div>
//             </div>

//             {/* Mobile Services */}
//             <div className="px-3 py-3">
//               <div className="mb-2 text-[7px] font-semibold text-brand-ink">
//                 Services
//               </div>

//               <div className="space-y-1.5">
//                 {services.map((service) => (
//                   <div
//                     key={service.title}
//                     className="rounded border border-black/10 px-2 py-2"
//                   >
//                     <div className="text-[6px] font-semibold text-brand-ink">
//                       {service.title}
//                     </div>

//                     <div className="mt-0.5 text-[5px] text-gray-500">
//                       {service.description}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile Bottom Navigation */}
//             <div className="mt-1 flex justify-around border-t border-black/10 px-2 py-2">
//               <span className="text-[5px] text-gray-500">
//                 Home
//               </span>

//               <span className="text-[5px] text-gray-500">
//                 Services
//               </span>

//               <span className="text-[5px] text-gray-500">
//                 Book
//               </span>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { cn } from "@/lib/utils";

export type ProductPreviewProps = {
  className?: string;

  /* =========================
     WEBSITE BRAND
  ========================== */
  brandName?: string;
  navItems?: string[];

  /* =========================
     HERO CONTENT
  ========================== */
  heroTitle?: string;
  heroText?: string;
  heroButton?: string;

  /* =========================
     PROFILE
  ========================== */
  profileImage?: string;
  profileImageAlt?: string;
  astrologerName?: string;
  astrologerRole?: string;

  /* =========================
     SERVICES
  ========================== */
  services?: {
    title: string;
    description: string;
  }[];
};

export function ProductPreview({
  className,

  /* =========================
     WEBSITE BRAND
  ========================== */
  brandName = "Grahaura",
  navItems = ["Home", "About", "Services", "Contact"],

  /* =========================
     HERO CONTENT
  ========================== */
  heroTitle = "Guidance for a Brighter Future",
  heroText =
    "Discover personalized astrology guidance and meaningful insights.",
  heroButton = "Book Consultation",

  /* =========================
     PROFILE
  ========================== */
  profileImage = "/images/astrology_02.png",
  profileImageAlt = "Astrologer profile",
  astrologerName = "Your Astrologer",
  astrologerRole = "Vedic Astrology Consultant",

  /* =========================
     SERVICES
  ========================== */
  services = [
    {
      title: "Birth Chart",
      description: "Personalized birth chart reading.",
    },
    {
      title: "Career",
      description: "Career and professional guidance.",
    },
    {
      title: "Marriage",
      description: "Relationship and marriage guidance.",
    },
  ],
}: ProductPreviewProps) {
  return (
    <div
      className={cn(
        // MOBILE (default): stack laptop + phone vertically, centered,
        // so the phone never has to overlap the laptop in a cramped way.
        // sm/lg: back to the original side-by-side, overlapping layout.
        "relative flex w-full flex-col items-center justify-center gap-8 overflow-x-hidden sm:flex-row sm:items-end sm:justify-center sm:gap-4 sm:overflow-visible",
        className
      )}
    >
      {/* =====================================================
          LAPTOP (unchanged)
      ====================================================== */}

      <div className="relative w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[800px]">
        {/* Laptop Screen */}
        <div className="rounded-t-[10px] border-[3px] border-brand-ink bg-brand-ink shadow-2xl sm:rounded-t-[18px] sm:border-[7px]">
          <div className="overflow-hidden rounded-t-[7px] bg-white sm:rounded-t-[10px]">
            
            {/* Browser Bar */}
            <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-gray-100 px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <div className="ml-3 flex h-5 flex-1 items-center rounded bg-white px-3">
                <span className="text-[7px] text-gray-400">
                  www.yourastrologywebsite.com
                </span>
              </div>
            </div>

            {/* Website Header */}
            <div className="flex items-center justify-between px-5 py-3">
              <div className="text-sm font-bold text-brand-ink">
                {brandName}
              </div>

              <div className="hidden items-center gap-4 sm:flex">
                {navItems.map((item) => (
                  <span
                    key={item}
                    className="text-[8px] text-gray-600"
                  >
                    {item}
                  </span>
                ))}

                <span className="rounded bg-brand-yellow px-3 py-1 text-[8px] font-medium text-brand-ink">
                  Book Now
                </span>
              </div>
            </div>

            {/* Website Hero */}
            <div className="grid grid-cols-2 gap-3 px-5 pb-3 pt-3 sm:pb-5 sm:pt-4">
              
              {/* Hero Content */}
              <div className="flex flex-col justify-center">
                <span className="mb-2 text-[8px] font-medium uppercase tracking-wider text-brand-yellow">
                  Vedic Astrology
                </span>

                <h3 className="max-w-[230px] text-xl font-semibold leading-tight text-brand-ink sm:text-2xl">
                  {heroTitle}
                </h3>

                <p className="mt-2 max-w-[230px] text-[8px] leading-relaxed text-gray-600 sm:text-[9px]">
                  {heroText}
                </p>

                <button className="mt-4 w-fit rounded bg-brand-ink px-3 py-2 text-[8px] text-white">
                  {heroButton}
                </button>
              </div>

              {/* Astrologer Visual */}
              <div className="flex items-center justify-center">
                <div className="flex h-[110px] w-[100px] flex-col items-center justify-center rounded-xl bg-brand-yellow/20 sm:h-[175px] sm:w-[150px]">
                  
                  <img
                    src={profileImage}
                    alt={profileImageAlt}
                    className="h-10 w-10 rounded-full border-2 border-brand-yellow object-cover sm:h-16 sm:w-16"
                  />

                  <span className="mt-3 text-[9px] font-semibold text-brand-ink">
                    {astrologerName}
                  </span>

                  <span className="mt-1 text-center text-[7px] text-gray-500">
                    {astrologerRole}
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="border-t border-black/10 px-5 py-3 sm:py-4">
              <div className="mb-3 text-[10px] font-semibold text-brand-ink">
                Our Services
              </div>

              <div className="grid grid-cols-3 gap-2">
                {services.slice(0, 3).map((service) => (
                  <div
                    key={service.title}
                    className="rounded-lg border border-black/10 p-2"
                  >
                    <div className="mb-1 text-[9px] font-semibold text-brand-ink">
                      {service.title}
                    </div>

                    <div className="text-[6px] leading-relaxed text-gray-500">
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-gray-300 shadow-lg">
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b bg-gray-400" />
        </div>
      </div>

      {/* =====================================================
          MOBILE PHONE
          FIX: on mobile (default, no-prefix classes) the phone
          used to be `absolute bottom-0 right-10 w-[110px]`,
          overlapping the laptop's base at a very cramped size.
          Now on mobile it sits in normal flow below the laptop,
          centered and sized to be legible (w-[190px]).
          sm: and lg: are untouched — same overlapping layout as
          before at those breakpoints.
      ====================================================== */}

      <div
        className="
    relative
    mx-auto
    w-[190px]

    sm:absolute
    sm:bottom-0
    sm:right-[-10px]
    sm:w-[165px]

    lg:right-[-120px]
    lg:w-[165px]
  "
      >
        
        {/* Phone Outer Frame */}
        <div className="relative rounded-[20px] border-[3px] border-brand-ink bg-brand-ink p-[2px] shadow-2xl sm:rounded-[28px] sm:border-[6px]">
          
          {/* Phone Screen */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[16px] bg-white sm:rounded-[22px]">
            
            {/* Dynamic Island */}
            <div className="relative h-7 bg-white">
              <div className="absolute left-1/2 top-1.5 flex h-3 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-ink sm:h-4 sm:w-16">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
              </div>
            </div>

            {/* Mobile Header */}
            <div className="flex items-center justify-between border-b border-black/10 px-3 py-2">
              <span className="text-[8px] font-bold text-brand-ink">
                {brandName}
              </span>

              <span className="text-[11px] text-brand-ink">
                ☰
              </span>
            </div>

            {/* Mobile Hero */}
            <div className="px-3 py-4">
              <span className="text-[6px] uppercase tracking-wider text-brand-yellow">
                Astrology
              </span>

              <div className="mt-2 text-[13px] font-semibold leading-tight text-brand-ink">
                {heroTitle}
              </div>

              <p className="mt-2 text-[6px] leading-relaxed text-gray-500">
                {heroText}
              </p>

              <button className="mt-3 w-full rounded bg-brand-ink py-2 text-[6px] text-white">
                {heroButton}
              </button>
            </div>

            {/* Mobile Profile */}
            <div className="mx-3 rounded-lg bg-brand-yellow/20 p-3 text-center">
              
              <img
                src={profileImage}
                alt={profileImageAlt}
                className="mx-auto h-10 w-10 rounded-full border-2 border-brand-yellow object-cover"
              />

              <div className="mt-2 text-[7px] font-semibold text-brand-ink">
                {astrologerName}
              </div>

              <div className="mt-1 text-[5px] text-gray-500">
                {astrologerRole}
              </div>
            </div>

            {/* Mobile Services */}
            <div className="px-3 py-3">
              <div className="mb-2 text-[7px] font-semibold text-brand-ink">
                Services
              </div>

              <div className="space-y-1.5">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded border border-black/10 px-2 py-2"
                  >
                    <div className="text-[6px] font-semibold text-brand-ink">
                      {service.title}
                    </div>

                    <div className="mt-0.5 text-[5px] text-gray-500">
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="mt-1 flex justify-around border-t border-black/10 px-2 py-2">
              <span className="text-[5px] text-gray-500">
                Home
              </span>

              <span className="text-[5px] text-gray-500">
                Services
              </span>

              <span className="text-[5px] text-gray-500">
                Book
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}