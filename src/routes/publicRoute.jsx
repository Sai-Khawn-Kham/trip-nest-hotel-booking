import { lazy } from "react";

const HomePage = lazy(() => import("../features/public/pages/HomePage"))
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"))
const ContactUsPage = lazy(() => import("../features/public/pages/ContactUsPage"))
const PrivacyPolicy = lazy(() => import("../features/public/pages/PrivacyPolicyPage"))
const TermsConditions = lazy(() => import("../features/public/pages/TermsConditionsPage"))
const HotelsPage = lazy(() => import("../features/public/pages/HotelsPage"))
const CitiesPage = lazy(() => import("../features/public/pages/CitiesPage"))
const HotelDetailPage = lazy(() => import("../features/public/pages/HotelDetailPage"))
const RoomPage = lazy(() => import("../features/public/pages/RoomPage"))
const RoomDetailPage = lazy(() => import("../features/public/pages/RoomDetailPage"))
const BookingPage = lazy(() => import("../features/public/pages/BookingPage"))

const publicRoute = [
   {
      index: true,
      element: <HomePage />
   },
   {
      path: "about-us",
      element: <AboutUsPage />
   },
   {
      path: "contact-us",
      element: <ContactUsPage />
   },
   {
      path: "cities",
      element: <CitiesPage />
   },
   {
      path: "city/hotels",
      element: <HotelsPage />
   },
   {
      path: "city/hotel/hotel-details",
      element: <HotelDetailPage />
   },
   {
      path: "city/hotel/hotel-details/rooms",
      element: <RoomPage />
   },
   {
      path: "city/hotel/hotel-details/room/rooms-details",
      element: <RoomDetailPage />
   },
   {
      path: "city/hotel/hotel-details/rooms-details/room-booking",
      element: <BookingPage />
   },
   {
      path: "privacy-policy",
      element: <PrivacyPolicy />
   },
   {
      path: "terms-and-conditions",
      element: <TermsConditions />
   }
]

export default publicRoute