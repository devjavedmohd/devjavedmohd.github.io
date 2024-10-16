import Hero from './home/hero/hero.component';
import WhatIDo from './home/whatido/whatido.component';
import Stack from './home/stack/stack.component';
import LatestWork from './home/work/work.component';
import Recommendation from './home/recommendations/recommendations.component';

const HomeComponent = () => {
    return (
        <>
            <Hero />
            <WhatIDo />
            <Stack />
            <LatestWork />
            <Recommendation />
        </>
    )
}

export default HomeComponent;