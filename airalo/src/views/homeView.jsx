import React from 'react'
import Navbar from '../components/navbar';
import HomeContent from '../components/homeMessage';
import CarouselSlider from '../components/carouselSlider';
import NavigationTab from '../components/NavigationTab';
import HowItWorks from '../components/howItWorks';
import WhyAiralo from '../components/whyAiralo';
import Testimonials from '../components/testimonials';
import ReadyToTry from '../components/readyToTry';
export default function HomeView() {
  return (
    <>
    <Navbar />
    <HomeContent/>
    <CarouselSlider/>
    <NavigationTab/>
    <HowItWorks/>
    <WhyAiralo/>
    <Testimonials/>
    <ReadyToTry/>
    </>
  )
}
