"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { AlertTriangle, CheckCircle, Clock, DollarSign, Droplets, Leaf, Shield, Sparkles, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Contact",          id: "#contact"},
        {
          name: "Book Now",          id: "#book-appointment"},
      ]}
      brandName="Oscar's Trash Bin Cleaning"
      button={{
        text: "Call Now",        href: "tel:562-588-8422"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboard
      background={{
        variant: "plain"}}
      title="Keep Your Trash Bins Fresh & Clean"
      description="Say goodbye to foul odors, harmful bacteria, and pesky insects. Oscar’s Trash Bin Cleaning offers a deep clean that leaves your bins sparkling fresh."
      tag="Same Week Appointments Available"
      buttons={[
        {
          text: "Call or Text Now",          href: "tel:562-588-8422"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/children-collects-garbage-garbage-bags-park_1157-26987.jpg"
      imageAlt="Animated water splash cleaning a trash bin"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/male-surgeon-removing-surgical-gloves-operation-theater-hospital_657921-811.jpg",          alt: "Happy customer testimonial"},
        {
          src: "http://img.b2bpic.net/free-photo/disinfection-specialist-man-personal-protective-equipment-ppe-suit-gloves-mask-face-shield-cleaning-quarantine-area-with-bottle-pressurized-spray-disinfectant-remove-coronavirus_1150-48069.jpg",          alt: "Client satisfied with cleaning"},
        {
          src: "http://img.b2bpic.net/free-photo/still-life-cleaning-tools_23-2150552208.jpg",          alt: "Local resident enjoying clean bins"},
        {
          src: "http://img.b2bpic.net/free-photo/man-collecting-scattered-plastic-bottles-from-ground_1268-20035.jpg",          alt: "Homeowner with fresh bin"},
        {
          src: "http://img.b2bpic.net/free-photo/young-female-with-facemask-looking-mop-white-wall_114579-49496.jpg",          alt: "Community member happy with service"},
      ]}
      avatarText="Join 100+ happy homes!"
      marqueeItems={[
        {
          type: "text",          text: "Eliminate Odors"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/still-life-cleaning-tools_23-2150552222.jpg",          alt: "Still life of cleaning tools"},
        {
          type: "text",          text: "Sanitize & Disinfect"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/woman-gardener-home-apron-gloves-with-growing-plants-house-balcony-watering-using-spray_343596-7038.jpg",          alt: "Woman watering plants, symbolizing freshness"},
        {
          type: "text",          text: "Pest-Free Bins"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/gardening-home-with-plant_23-2149007981.jpg",          alt: "Green plant, symbolizing eco-friendly"},
        {
          type: "text",          text: "Eco-Friendly Cleaning"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/man-servant-doing-chores-around-house_23-2149508150.jpg",          alt: "Man performing household chores"},
        {
          type: "text",          text: "Sparkling Results"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/robot-with-trash_1048-3575.jpg",          alt: "Robot with trash, symbolizing efficiency"},
      ]}
      marqueeSpeed={30}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="About Oscar's"
      title="Affordable & Reliable Trash Bin Cleaning for Your Home"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Deep Scrubbing",          description: "Thorough manual scrubbing to remove stubborn grime and residue from every corner of your bin.",          icon: CheckCircle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-throwing-wasted-food-into-steel-bin_181624-39474.jpg",              imageAlt: "Deep scrubbing inside a trash bin"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/arrangement-compost-made-rotten-food_23-2149073787.jpg",              imageAlt: "Clean bin interior after scrubbing"},
          ]
        },
        {
          title: "Insect Control",          description: "Targeted treatment to deter and eliminate maggots, flies, and other pests attracted to waste.",          icon: AlertTriangle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-female-with-facemask-looking-mop-white-wall_114579-49498.jpg",              imageAlt: "Insect control spray being applied to a trash bin"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/researcher-protective-suit-working-burnt-field-taking-samples-flora_651396-2182.jpg",              imageAlt: "Trash bin free of insects"},
          ]
        },
        {
          title: "Fresh Scent Treatment",          description: "Application of a pleasant, long-lasting scent to neutralize odors and leave your bin smelling clean.",          icon: Droplets,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-adult-throwing-away-mask_23-2149439970.jpg",              imageAlt: "Applying fresh scent treatment to a clean trash bin"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-whipping-floor_23-2148514843.jpg",              imageAlt: "Bin smelling fresh"},
          ]
        },
        {
          title: "Power Washing",          description: "High-pressure washing to blast away dirt, grime, and caked-on debris, restoring your bin's appearance.",          icon: Waves,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/feeling-happy-excited-surprised_1194-404910.jpg",              imageAlt: "Power washing a dirty trash bin"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hands-protective-gloves-holding-cleaning-supply_114579-38478.jpg",              imageAlt: "Sparkling clean trash bin after power wash"},
          ]
        },
        {
          title: "Non-Harmful Chemicals",          description: "We prioritize safety by using only biodegradable, non-toxic chemicals that are safe for pets, kids, and the environment.",          icon: Leaf,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-vector/house-home-care-logo-business-card-branding-template-designs-inspiration-isolated-white-background_384344-1475.jpg",              imageAlt: "Eco-friendly cleaning chemicals bottle"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=p181g5",              imageAlt: "Leaf icon on cleaning product"},
          ]
        },
      ]}
      title="Our Premium Bin Cleaning Services"
      description="We offer a comprehensive range of services designed to eliminate odors, sanitize surfaces, and leave your bins impeccably clean."
      tag="What We Do"
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",          value: "$10",          title: "Affordable Pricing",          description: "High-quality cleaning doesn't have to break the bank. Our services are priced competitively.",          icon: DollarSign,
        },
        {
          id: "metric-2",          value: "100%",          title: "Odor Removal",          description: "We eliminate unpleasant smells, leaving your bins genuinely fresh and clean.",          icon: Droplets,
        },
        {
          id: "metric-3",          value: "99.9%",          title: "Germ & Pest Reduction",          description: "Our deep cleaning process significantly reduces bacteria and deters insects.",          icon: Shield,
        },
        {
          id: "metric-4",          value: "Fast",          title: "Fast & Reliable Service",          description: "We work efficiently to get your bins cleaned promptly and on schedule.",          icon: Clock,
        },
      ]}
      title="Why Choose Oscar's for Your Bin Cleaning?"
      description="We're dedicated to providing exceptional service that makes your life cleaner and healthier."
      tag="Our Advantage"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "plan-1",          tag: "Single Bin",          price: "$10",          period: "per cleaning",          description: "Perfect for single-bin households needing a deep clean.",          button: {
            text: "Book Now",            href: "#book-appointment"},
          featuresTitle: "Includes:",          features: [
            "Deep scrubbing",            "Insect control",            "Fresh scent treatment",            "Power washing"],
        },
        {
          id: "plan-2",          tag: "Three Bins",          tagIcon: Sparkles,
          price: "$25",          period: "per cleaning",          description: "Get all three of your bins thoroughly cleaned for a discounted rate.",          button: {
            text: "Book Now",            href: "#book-appointment"},
          featuresTitle: "Includes:",          features: [
            "Deep scrubbing",            "Insect control",            "Fresh scent treatment",            "Power washing"],
        },
      ]}
      title="Simple & Transparent Pricing"
      description="Choose the cleaning package that best fits your needs, with no hidden fees."
      tag="Our Pricing"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Happy Homes",        "Local Heroes",        "Clean Community",        "Trusted Families",        "Neighborhood Approved",        "Residential Pros",        "EcoClean Partners"]}
      title="Trusted by Homes Across the Community"
      description="Join countless satisfied homeowners who rely on Oscar's for impeccably clean and fresh trash bins."
      tag="Our Community"
      showCard={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get in Touch"
      title="Have Questions? Reach Out to Oscar's!"
      description="Whether you need a quick quote or just want to learn more about our services, we're here to help. Call or text us directly, or send us a message."
      buttons={[
        {
          text: "Call or Text: 562-588-8422",          href: "tel:562-588-8422"},
        {
          text: "DM Me for More Info",          href: "sms:562-588-8422"},
      ]}
    />
  </div>

  <div id="book-appointment" data-section="book-appointment">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Easy Booking"
      title="Schedule Your Cleaning Today"
      description="Quick and easy booking — choose your date and we’ll handle the dirty work. Our mobile-friendly booking form allows you to easily provide your name, phone, address, number of bins, preferred date & time, and any special notes. Expect a quick appointment confirmation and text reminders!"
      buttons={[
        {
          text: "Book an Appointment",          href: "#"},
        {
          text: "Request Recurring Cleaning",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="O.B"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
