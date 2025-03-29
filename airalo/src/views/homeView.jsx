import React from 'react'
import Navbar from '../components/navbar';
import HomeContent from '../components/homeMessage';
import CarouselSlider from '../components/carouselSlider';
import NavigationTab from '../components/NavigationTab';
export default function HomeView() {
  return (
    <>
    <Navbar />
    <HomeContent/>
    <CarouselSlider/>
    <NavigationTab/>
    </>
  )
}
