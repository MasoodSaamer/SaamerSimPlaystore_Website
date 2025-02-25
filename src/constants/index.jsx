import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import { Link } from 'react-router-dom';

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Published Games", href: "/published-games" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact-us" },
];

export const testimonials = [
  {
    user: "Choudhary Muhammad anwar",
    company: "SmartDash XR: Future Interface: September 21, 2024",
    image: user1,
    text: "This game is so good I like it very much thanks",
  },
  {
    user: "Patty Panaligan-Ramirez",
    company: "SmartDash XR: Future Interface: August 31, 2022",
    image: user2,
    text: "It is a very good game",
  },
  {
    user: "Betty Nibot",
    company: "Toyota Drift Simulator 2021: April 10, 2024",
    image: user3,
    text: "Awesome 😎",
  },
  {
    user: "Ncamisile Mazibuko",
    company: "Toyota Drift Simulator 2021: July 27, 2024",
    image: user4,
    text: "This game is the cooler game in my life and I want to see all games in the play store",
  },
  {
    user: "Chandralekha Patil",
    company: "Toyota Drift Simulator 2021: March 10, 2024",
    image: user5,
    text: "BEST GAME EVER NOT GONNA LIE! PLAYING THIS FOR 2 YEARS STILL FUN!",
  },
  {
    user: "Raheel Ziauddin",
    company: "Pakistan Car Simulator Game: May 13, 2024",
    image: user6,
    text: "This is very good game because in this game the cars are free and colours of cars and wheels are also free.So i rate this 5/5",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Game Engine",
    description:
      "Unity 2021.3.21f1 LTS & Unity 2019.4.34f1 LTS",
  },
  {
    icon: <Fingerprint />,
    text: "Multiplayer",
    description:
      "Photon Cloud Network",
  },
  {
    icon: <ShieldHalf />,
    text: "Programming Languages",
    description:
      "C#, Java",
  },
  {
    icon: <BatteryCharging />,
    text: "3D Editing & Rendering software",
    description:
      "Blender",
  },
  {
    icon: <PlugZap />,
    text: "Photo Editing Software",
    description:
      "Adobe Photoshop, paint.net",
  },
  {
    icon: <GlobeLock />,
    text: "Ad networks",
    description:
      "Unity Ads SDK & Ironsource SDK",
  },
  {
    icon: <BotMessageSquare />,
    text: "Analytics",
    description:
      "Google Play console analytics, Unity analytics",
  },
  {
    icon: <Fingerprint />,
    text: "Sound and Video editing",
    description:
      "Wondershare filmora",
  },
  {
    icon: <ShieldHalf />,
    text: "Car Physics Package",
    description:
      "Realistic Car Controller 4.62",
  },
  {
    icon: <BatteryCharging />,
    text: "Publishing Store",
    description:
      "Google Play Store",
  },
  {
    icon: <PlugZap />,
    text: "Development Platform",
    description:
      "Android devices",
  },
  {
    icon: <GlobeLock />,
    text: "Social Media",
    description:
      "Youtube, Instagram",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Interactive dashboard view with UI/UX Touchscreen",
  },
  {
    title: "Review code without worry",
    description:
      "EV and ICE Vehicle Choice with differing stats",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Realistic Car physics with ADAS and Drive Mode selection",
  },
  {
    title: "Share work in minutes",
    description:
      "AI Traffic and Dynamic Weather mode to give a sense of realism",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  
];

export const resourcesLinks = [
  { href: "https://play.google.com/store/apps/dev?id=5128778655876625840", text: "Official Store Page" },
  { href: "https://www.saamermasood.org/", text: "About the Developer" },
  { href: "https://www.instagram.com/protocol_studioz/?igsh=MTBzYjhyanliMnR5Yw%3D%3D#", text: "Instagram" },
  
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
