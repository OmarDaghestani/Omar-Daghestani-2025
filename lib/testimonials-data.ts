export const UPWORK_PROFILE_URL = "https://www.upwork.com/freelancers/~01b5b5182c49414eb6";
export const FREELANCER_PROFILE_URL = "https://www.freelancer.com/u/omard211";

export interface Testimonial {
  quote: string;
  client: string;
  project: string;
  platform: "Upwork" | "Freelancer.com";
  rating: number;
  url: string;
}

// Verbatim (or trimmed) client reviews from Omar's freelance profiles.
export const testimonials: Testimonial[] = [
  {
    quote: "Omar knows what he is doing!",
    client: "Upwork client",
    project: "AI Automation Analyst/Engineer",
    platform: "Upwork",
    rating: 5,
    url: UPWORK_PROFILE_URL,
  },
  {
    quote:
      "Thank you for the fast, responsible, and flexible approach to your work! Omar was easy to communicate with, understood the requirements clearly, and delivered everything on time. I would definitely recommend working with him.",
    client: "S.",
    project: "Subscription service & static page",
    platform: "Freelancer.com",
    rating: 5,
    url: FREELANCER_PROFILE_URL,
  },
  {
    quote:
      "Omar has been excellent to work with, and I will certainly work with him in the future.",
    client: "David",
    project: "Claude coaching",
    platform: "Freelancer.com",
    rating: 5,
    url: FREELANCER_PROFILE_URL,
  },
];

export const platformStats = [
  {
    platform: "Upwork",
    url: UPWORK_PROFILE_URL,
    headline: "Rising Talent",
    details: ["5.0★ client rating", "$1K+ earned", "Endorsed for AI integration & automation"],
  },
  {
    platform: "Freelancer.com",
    url: FREELANCER_PROFILE_URL,
    headline: "5.0★ from 3 reviews",
    details: ["100% on time", "100% on budget"],
  },
];
